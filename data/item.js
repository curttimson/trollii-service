let items = [
    { name: 'Apples', emoji: '🍎' },
    { name: 'Avocado', emoji: '🥑' },
    { name: 'Baby Formula', emoji: '🍼' },
    { name: 'Baby Potatoes', emoji: '🥔' },
    { name: 'Baguette', emoji: '🥖' },
    { name: 'Bacon', emoji: '🥓' },
    { name: 'Beans', emoji: '🥫' },
    { name: 'Beef', emoji: '🐄' },
    { name: 'Beer', emoji: '🍺' },
    { name: 'Bread', emoji: '🍞' },
    { name: 'Bananas', emoji: '🍌' },
    { name: 'Batteries', emoji: '🔋' },
    { name: 'Bin Bags', emoji: '🗑' },
    { name: 'Birthday Cake', emoji: '🎂' },
    { name: 'Bleach', emoji: '☢️' },
    { name: 'Broccoli', emoji: '🥦' },
    { name: 'Bubble Bath', emoji: '🛁' },
    { name: 'Burgers', emoji: '🍔' },
    { name: 'Burritos', emoji: '🌯' },
    { name: 'Biscuits', emoji: '🍪' },
    { name: 'Cake', emoji: '🍰' },
    { name: 'Candles', emoji: '🕯' },
    { name: 'Candy', emoji: '🍬' },
    { name: 'Carrots', emoji: '🥕' },
    { name: 'Cat food', emoji: '🐱' },
    { name: 'Cat Litter', emoji: '🐈' },
    { name: 'Cereal', emoji: '🥣' },
    { name: 'Champagne', emoji: '🍾' },
    { name: 'Cheese', emoji: '🧀' },
    { name: 'Cherries', emoji: '🍒' },
    { name: 'Chicken', emoji: '🍗' },
    { name: 'Chicken Nuggets', emoji: '🐓' },
    { name: 'Chili Peppers', emoji: '🌶' },
    { name: 'Chips', emoji: '🍟' },
    { name: 'Chocolate', emoji: '🍫' },
    { name: 'Chopped Tomatoes', emoji: '🍅' },
    { name: 'Cigarettes', emoji: '🚬' },
    { name: 'Coconut', emoji: '🥥' },
    { name: 'Coconut Milk', emoji: '🥥' },
    { name: 'Coffee', emoji: '☕️' },
    { name: 'Cola', emoji: '🥤' },
    { name: 'Conditioner', emoji: '🛀' },
    { name: 'Contact Lens Solution', emoji: '🤓' },
    { name: 'Cookies', emoji: '🍪' },
    { name: 'Croissant', emoji: '🥐' },
    { name: 'Cucumber', emoji: '🥒' },
    { name: 'Curry', emoji: '🍛' },
    { name: 'Dishwasher Detergent', emoji: '🍽' },
    { name: 'Dishwasher Salt', emoji: '🍽' },
    { name: 'Dishwasher Tablets', emoji: '🍽' },
    { name: 'Dog food', emoji: '🐶' },
    { name: 'Doughnut', emoji: '🍩' },
    { name: 'Duck', emoji: '🦆' },
    { name: 'Eggplant', emoji: '🍆' },
    { name: 'Eggs', emoji: '🥚' },
    { name: 'Envelopes', emoji: '✉️' },
    { name: 'Face Wash', emoji: '☺️' },
    { name: 'Fish', emoji: '🐟' },
    { name: 'Flour', emoji: '🌾' },
    { name: 'Flowers', emoji: '💐' },
    { name: 'Fries', emoji: '🍟' },
    { name: 'Gherkins', emoji: '🥒' },
    { name: 'Gin', emoji: '🍸' },
    { name: 'Grapes', emoji: '🍇' },
    { name: 'Hairspray', emoji: '💇‍♀️' },
    { name: 'Hand Soap', emoji: '🤲' },
    { name: 'Hazelnut Spread', emoji: '🌰' },
    { name: 'Honey', emoji: '🍯' },
    { name: 'Hotdogs', emoji: '🌭' },
    { name: 'Ibuprofen', emoji: '💊' },
    { name: 'Ice Cream', emoji: '🍨' },
    { name: 'Ice Cream Cones', emoji: '🍦' },
    { name: 'Kiwis', emoji: '🥝' },
    { name: 'Lamb', emoji: '🐑' },
    { name: 'Lemon', emoji: '🍋' },
    { name: 'Lemonade', emoji: '🥤' },
    { name: 'Lettuce', emoji: '🥗' },
    { name: 'Lightbulbs', emoji: '💡' },
    { name: 'Lipstick', emoji: '💄' },
    { name: 'Makeup', emoji: '💄' },
    { name: 'Melon', emoji: '🍈' },
    { name: 'Milk', emoji: '🥛' },
    { name: 'Mushrooms', emoji: '🍄' },
    { name: 'Nappies', emoji: '👶' },
    { name: 'Newspaper', emoji: '🗞' },
    { name: 'Noodles', emoji: '🍜' },
    { name: 'Nuts', emoji: '🥜' },
    { name: 'Oil', emoji: '🛢' },
    { name: 'Oranges', emoji: '🍊' },
    { name: 'Paella', emoji: '🥘' },
    { name: 'Pain Au Chocolat', emoji: '🥐' },
    { name: 'Paracetamol', emoji: '💊' },
    { name: 'Pancakes', emoji: '🥞' },
    { name: 'Pasta', emoji: '🍝' },
    { name: 'Peaches', emoji: '🍑' },
    { name: 'Peanuts', emoji: '🥜' },
    { name: 'Pears', emoji: '🍐' },
    { name: 'Pickles', emoji: '🥒' },
    { name: 'Pie', emoji: '🥧' },
    { name: 'Pineapple', emoji: '🍍' },
    { name: 'Pittas', emoji: '🥙' },
    { name: 'Pizza', emoji: '🍕' },
    { name: 'Pop', emoji: '🥤' },
    { name: 'Popcorn', emoji: '🍿' },
    { name: 'Pork', emoji: '🐖' },
    { name: 'Potatoes', emoji: '🥔' },
    { name: 'Pretzel', emoji: '🥨' },
    { name: 'Prawn', emoji: '🦐' },
    { name: 'Razors', emoji: '🧔' },
    { name: 'Rice', emoji: '🍚' },
    { name: 'Rinse Aid', emoji: '🍽' },
    { name: 'Rum', emoji: '🥃' },
    { name: 'Salad', emoji: '🥗' },
    { name: 'Sausages', emoji: '🐖' },
    { name: 'Shampoo', emoji: '🛀' },
    { name: 'Shower Gel', emoji: '🚿' },
    { name: 'Shrimp', emoji: '🦐' },
    { name: 'Soda', emoji: '🥤' },
    { name: 'Soup', emoji: '🍜' },
    { name: 'Spaghetti', emoji: '🍝' },
    { name: 'Strawberries', emoji: '🍓' },
    { name: 'Steak', emoji: '🥩' },
    { name: 'Sunflower Oil', emoji: '🌻' },
    { name: 'Sushi', emoji: '🍣' },
    { name: 'Sweetcorn', emoji: '🌽' },
    { name: 'Sweet Potato', emoji: '🍠' },
    { name: 'Sweets', emoji: '🍬' },
    { name: 'Tablets', emoji: '💊' },
    { name: 'Tacos', emoji: '🌮' },
    { name: 'Tangerines', emoji: '🍊' },
    { name: 'Tea Bags', emoji: '☕️' },
    { name: 'Tequila', emoji: '🍹' },
    { name: 'Tissues', emoji: '🤧' },
    { name: 'Toilet Paper', emoji: '🚽' },
    { name: 'Tomatoes', emoji: '🍅' },
    { name: 'Toothpaste', emoji: '😁' },
    { name: 'Tuna', emoji: '🐟' },
    { name: 'Turkey', emoji: '🦃' },
    { name: 'Vodka', emoji: '🍸' },
    { name: 'Water', emoji: '💧' },
    { name: 'Watermelon', emoji: '🍉' },
    { name: 'Wine', emoji: '🍷' },
    { name: 'Whiskey', emoji: '🥃' },
    { name: 'Wraps', emoji: '🌯' }
    
    
];

module.exports = {
    items
}