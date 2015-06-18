// for simplicity's sake, this is attached to the window
// instead of being loaded as a .json file through ajax
window.config = {
	"initial": {
		"preset": "Build Your Own",
		"size": "Large",
		"crust": "Hand Tossed",
		"sauce": "Sauce",
		"cheese": "Cheese"
	},
	"presets": {
		"Meat Lovers": {
			"sauce": "Sauce",
			"toppings": ["Italian Sausage", "Sausage", "Ham", "Pepperoni"]
		},
		"Veggie Lovers": {
			"sauce": "Sauce",
			"toppings": ["Green Peppers", "Olives", "Onions", "Tomatoes"]
		},
		"Deluxe": {
			"sauce": "Sauce",
			"toppings": ["Sausage", "Green Peppers", "Olives", "Onions", "Pepperoni"]
		}
	},
	"options": {
			"crusts": ["Hand Tossed", "Thin Crust"],
			"sizes": ["Medium", "Large"],
			"presets": ["Build Your Own", "Meat Lovers", "Veggie Lovers", "Deluxe"],
			"sauces": ["Sauce", "BBQ Sauce"],
			"cheeses": ["Wimpy Cheese", "Cheese", "Mega Cheese"],
			"toppings": ["Pepperoni", "Sausage", "Italian Sausage", "Ham", "Green Peppers", "Olives", 
				"Mushrooms", "Tomatoes", "Onions", "Anchovies", "Pineapple"]
	}
};