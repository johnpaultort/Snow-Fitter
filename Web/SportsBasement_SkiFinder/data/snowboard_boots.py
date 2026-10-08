import json

# Format
#    {
#        "name": "",
#        "brand": "",
#        "styles": [""],
#        "flex": ,
#        "sizes": [],
#        "lacing": [],
#        "price": "",
#        "image": "",
#        "notes": ""
#    },

BOOTS = [
    {
        "name": "Lasso",
        "brand": "Ride",
        "styles": ["all-mountain"],
        "flex": 7,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        "lacing": ["double-boa"],
        "price": "379.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303347_BLK_1.png?crop=center&height=800&v=1778544478&width=800",
        "notes": "One of the best boots for 25/26 season, was impossible to keep in stock. This boot gives one of the best heelholds in the game, can run a mile in these boots maybe more."
    },
    {
        "name": "Anthem",
        "brand": "Ride",
        "styles": ["all-mountain"],
        "flex": 3,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        "lacing": ["single-boa"],
        "price": "289.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303348_BLK_1.png?crop=center&height=800&v=1778545677&width=800",
        "notes": "."
    },
    {
        "name": "Lasso Pro",
        "brand": "Ride",
        "styles": ["all-mountain", "freeride"],
        "flex": 8,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        "lacing": ["double-boa"],
        "price": "459.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303345_BLK_1.png?crop=center&height=800&v=1778277477&width=800",
        "notes": "."
    },
    {
        "name": "Deadbolt Zonal",
        "brand": "Ride",
        "styles": ["all-mountain"],
        "flex": 7,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        "lacing": ["double-boa"],
        "price": "409.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303346_BLK_1.png?crop=center&height=800&v=1778543319&width=800",
        "notes": "."
    },
    {
        "name": "Insano",
        "brand": "Ride",
        "styles": ["all-mountain"],
        "flex": 10,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        "lacing": ["double-boa"],
        "price": "489.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303343_BLK_1.png?crop=center&height=800&v=1778275313&width=800",
        "notes": "."
    },
    #
    # K2 Boots (26/27)
    # READY
    {
        "name": "Maysis",
        "brand": "K2",
        "styles": ["all-mountain"],
        "flex": 7,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        "lacing": ["double-boa"],
        "price": "379.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303471_BLK_1.png?v=1775852175",
        "notes": "."
    },
    {
        "name": "Theory",
        "brand": "K2",
        "styles": ["all-mountain"],
        "flex": 7,
        "sizes": [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        "lacing": ["double-boa"],
        "price": "409.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303465_BLK_1.png?v=1775850369",
        "notes": "."
    },
    {
        "name": "Orton",
        "brand": "K2",
        "styles": ["all-mountain"],
        "flex": 8,
        "sizes": [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        "lacing": ["double-boa"],
        "price": "489.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303464_BLK_1.png?v=1775848403",
        "notes": "."
    },
    {
        "name": "Raider",
        "brand": "K2",
        "styles": ["all-mountain"],
        "flex": 4,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        "lacing": ["single-boa"],
        "price": "279.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303468_GRY_1.png?v=1775856349",
        "notes": "."
    },
    #
    # Salomon (26/27)
    # READY
    {
        "name": "Dialogue",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 6,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5],
        "lacing": ["double-boa"],
        "price": "429.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303316_BLK_1.png?v=1779123852",
        "notes": "."
    },
    {
        "name": "Faction",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 4,
        "sizes": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        "lacing": ["double-boa"],
        "price": "279.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303320_BLK_1.png?v=1779130003",
        "notes": "."
    },
    {
        "name": "Dialogue Lace",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 5,
        "sizes": [9, 9.5, 10, 10.5, 11, 11.5, 12],
        "lacing": ["lace"],
        "price": "399.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303318_RED_1.png?v=1779124475",
        "notes": "."
    },
    {
        "name": "X Approach Lace",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 4,
        "sizes": [8, 8.5, 9, 9.5, 10, 10.5, 11],
        "lacing": ["lace"],
        "price": "349.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303316_BLK_1.png?v=1779123852",
        "notes": "."
    },
    # Union
    {
        "name": "Reset Pro",
        "brand": "Union",
        "styles": ["all-mountain"],
        "flex": 8,
        "sizes": [8, 8.5, 9, 9.5, 10, 10.5, 11],
        "lacing": ["double-boa"],
        "price": "649.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303383.Black.3.png?v=1780435792",
        "notes": "."
    },
    {
        "name": "Reset",
        "brand": "Union",
        "styles": ["all-mountain"],
        "flex": 6,
        "sizes": [8, 8.5, 9, 9.5, 10, 10.5, 11],
        "lacing": ["double-boa"],
        "price": "549.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303384.Black.1.png?v=1780441049",
        "notes": "."
    }
]