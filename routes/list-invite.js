var mongoose = require('mongoose');
var nodemailer = require("nodemailer");
var sparkpost = require("sparkpost");

var authJwt = require('../auth/jwt.js');

var List = require('../models/list');
var ListInvite = require('../models/list-invite');

var listInviteHelper = require('../helpers/list-invite');
var auth0Helper = require('../helpers/auth0');

module.exports = function(apiRoutes){

    // get all lists
    apiRoutes.post('/list-invite', authJwt.jwtCheck, function(req, res) {

        let listid = req.body.listid;
        let email = req.body.email;
        let userid = req.user.sub;

        if (!listid ||
            !email){
            
            res.status(500).send({ error: 'Missing fields' });

        }
        else {

            
            List.findById(listid, (err, list) => {

                if (err){
                    console.log(err);
                }

                if (list.ownerid !== userid){
                    res.status(500).send({ error: 'Permission denied' });
                }
                else{

                    ListInvite.find((err, listInvites) => {

                        let existingListInvite = listInvites.find(invite => invite.listid === listid &&
                                                                            invite.email === email);

                        //Add to invites if one doesn't already exist for this email
                        if (!existingListInvite){

                            ListInvite.create({
                                userid: userid,
                                listid: listid,
                                email: email,
                                date: new Date()
                            }, (err, listInvite) => {
                                if (err)
                                    res.send(err);
                                
                                emailInvite(req.body.email, listInvite._id, () => {
                                    res.json({ success: true });
                                });

                            });

                        }
                        else{
                            emailInvite(existingListInvite.email, existingListInvite._id, () => {
                                res.json({ success: true });
                            });
                        }

                    });
                }

            });

        }

    });

    apiRoutes.post('/list-invite/accept', authJwt.jwtCheck, auth0Helper.getAccessToken, function(req, res){

        let inviteid = req.body.inviteid;
        let userid = req.user.sub;

        var AuthenticationClient = require('auth0').AuthenticationClient;

        var auth0 = new AuthenticationClient({
            domain: process.env.auth0Domain,
            clientId: process.env.auth0ClientId,
            clientSecret: process.env.auth0ClientSecret
        });
                
        auth0Helper.getUser(req.auth0AccessToken, userid).then(data => {

            if (!data){
                res.status(500).send({ code: 99, error: ''});
                return;
            }


            let auth0data = JSON.parse(data);

            let auth0User = {
                email: auth0data.email
            };

            ListInvite.findById(inviteid, function(err, listInvite){
                if (err)
                    res.send(err);
    
                if (listInviteHelper.validListInviteEmail(listInvite, auth0User.email)){
    
                    List.findById(listInvite.listid, (err, list) => {
    
                        if (list.ownerid !== userid){
        
                            addUserToListMembers(list, userid);
                            removeUserInvite(list, auth0User.email);
                            list.save();
                            res.json({
                                listid: list._id
                            });
                            
                        }
    
                    });
    
                }
                else{
                    res.status(500).send({ code: 1, error: 'Invalid List Invite'});
                }
                
            });


        });

    });


    let emailInvite = (email, inviteid, cb) => {

        const client = new sparkpost(process.env.sparkpostAPI);

        client.transmissions.send({
            content: {
                from: process.env.noreplyemail,
                subject: 'Invite from Trollii',
                html: emailHtml(process.env.webAppUrl, inviteid)
            },
            recipients: [{
                address: email
            }]
        })
        .then(data => {
            console.log(`Email sent to ${email}`);
            console.log(data);
            cb();
        })
        .catch(err => {
            console.log('Email could not be sent to ${email}');
            console.log(err)
        });

    }

    let emailHtml = (webAppUrl, inviteid) => {
        return `<a href='${webAppUrl}/list/invite/entry/${inviteid}'>Accept Invite</a>`;
    }

    let addUserToListMembers = (list, userid) => {
        list.members.push({
            userid: userid
        });
    }

    let removeUserInvite = (inviteId) => {
        ListInvite.remove({
            _id: inviteId
        });
    }
};