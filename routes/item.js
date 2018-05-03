var mongoose = require('mongoose'); 

var List = require('../models/list');

var authJwt = require('../auth/jwt.js');

var auth0Helper = require('../helpers/auth0');
var listHelper = require('../helpers/list');

module.exports = function(apiRoutes){

    apiRoutes.post('/item', authJwt.jwtCheck, function(req, res) {

        let userid = req.user.sub;

        if (!req.body.listid || !req.body.name){
            res.status(500).send({ code: 1, error: 'listid and name cannot be blank' });
        }
        else{

            checkUserHasListAccess(req.body.listid, userid, function(err, hasAccess){

                if (err)
                    res.send(err)

                if (!hasAccess){
                    res.status(500).send({ code: 2, error: 'Access Denied'});
                }
                else {

                    auth0Helper.getAccessToken().then(auth0AccessToken => {

                        List.findById(req.body.listid, function(err, list){

                            if (err){
                                res.status(500).send({ code: 999, message: 'Generic error'});
                            }
                            else if (list.items.find(item => item.name === req.body.name)) {
                                res.status(500).send({ code: 3, message: 'Item already exists'});
                            }                  
                            else{

                                list.items.push({
                                    name: req.body.name,
                                    userid: userid,
                                    date: new Date()
                                });
                                list.save();
        
                                listHelper.listModel(auth0AccessToken, [list]).then(model => res.json(model[0]));
                            }      

                        });

                    });

                }

            });

        }

    });

    apiRoutes.delete('/item/:listid/:itemid', authJwt.jwtCheck, function(req, res) {
       
        checkUserHasListAccess(req.params.listid, req.user.sub, function(err, hasAccess){

            if (err)
                res.send(err)

            if (!hasAccess){
                res.status(500).send({ error: 'Access Denied'});
            }
            else {

                auth0Helper.getAccessToken().then(auth0AccessToken => {

                    List.findById(req.params.listid, function(err, list){
                        list.items.remove({_id: req.params.itemid});
                        list.save();
                        listHelper.listModel(auth0AccessToken, [list]).then(model => res.json(model[0]));
                    });

                });

            }

        });

    });

}

let checkUserHasListAccess = function(listid, userid, callback){
    List.findById(listid, function(err, list){
        var hasAccess = listHelper.hasUserListAccess(list, userid);
        callback(err, hasAccess);
    });
}