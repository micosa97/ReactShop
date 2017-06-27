/**
 * nazywajmy pliki tak samo jak exporty w nich zawarte. Jeżeli DataUtil to tutaj też tak powinno być
 */
var FakeData = {

	/**
     * clean code, piszmy nazwy metod tak aby pokazywały czym się dokładnie zajmują. W tym przypadku lepiej cały obiekt
     * nazwać jako MockDataFactory a tą metodę generateMockProducts
	 */
	generateFakeItems: function (count) {
        var items = [];
        for (var i = 1; i <= count; i++) {
            items.push({
                    description: "Some Item " + i,
                    isFavourite: Math.random() >= 0.5,
                    stars: Math.floor(Math.random() * 6),       //mógłbyś sobie zrobić dedytkowaną metodę do losowania intaZPrzedziału. Teraz jest nieczytelnie
                    size: (Math.floor(Math.random() * 18) * 5 + 10).toString() + "*" + (Math.floor(Math.random() * 18) * 5 + 10).toString() + "mm",
                }
            )
        }
        return items;
    },

	/**
     * ? jeżeli coś to metoda zwracająca taki obiekt albo pole. Teraz jest zawieszone w próżni
	 */
	"industry": [
        {"name": "All", "amount": 840},
        {"name": "Automotive", "amount": 112},
        {"name": "Fashion", "amount": 83},
        {"name": "Law", "amount": 230},
        {"name": "IT", "amount": 18},
        {"name": "Sport", "amount": 66},
        {"name": "Art", "amount": 20}
    ],

    "style": [
        {"name": "All", "amount": 208},
        {"name": "Abstraction", "amount": 12},
        {"name": "Geometry", "amount": 7},
        {"name": "Men", "amount": 18},
        {"name": "Women", "amount": 28},
        {"name": "Children", "amount": 3},
        {"name": "Music", "amount": 36},
        {"name": "Vintage", "amount": 14},
        {"name": "Flower", "amount": 11},

    ],
    "size": [
        {"name": "90x50mm", "amount": 112},
        {"name": "85x55mm", "amount": 67},
    ],

    "colors": [
        "red", "blue", "green", "grey", "yellow", "black", "orange", "violet", "pink"
    ]
}

module.exports = FakeData;