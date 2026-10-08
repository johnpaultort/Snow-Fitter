import json

# Format
#    {
#        "gender": [""],
#        "name": "",
#        "brand": "",
#        "styles": ["""],
#        "skill": [""],
#        "shape": "",
#        "flex": ,
#        "lengths": [],
#        "wide_lengths": [],
#        "price": "",
#        "image": "",
#        "notes": ""
#    },

SNOWBOARDS = [
    #
    # Bataleon
    #
    {
        "gender": ["mens", "womens"],
        "name": "Whatever",
        "brand": "Bataleon",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 5,
        "lengths": [148, 151, 154, 157],
        "price": "579.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100309170_1.png?v=1780608050",
        "notes": (
            "The Bataleon Whatever Snowboard is the ultimate all-in-one quiver killer—built to handle whatever, wherever. From park laps and groomer carves to powder stashes, "
            "this board thrives in every condition with its perfect blend of freestyle playfulness and all-mountain control. Thanks to Triple Base Technology™ and a medium flex, it’s catch-free, floaty, and ready to adapt to your every move. "
            "If versatility is your vibe, the Whatever is your ride."
        )
    },
    {
        "gender": "mens",
        "name": "Evil Twin",
        "brand": "Bataleon",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5,
        "lengths": [151, 154, 157, 159],
        "price": "579.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100309164_1.png?v=1780606727",
        "notes": "Bataleons best resort board that we carry, it has a lot of hype around the mountain from the park to steeps."
    },
    {
        "gender": "mens",
        "name": "Disaster",
        "brand": "Bataleon",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 3,
        "lengths": [144, 148, 151, 154, 157],
        "price": "499.95",
        "image": "https://bataleon.com/cdn/shop/files/bataleon-2526-disaster-2-mens-snowboards.jpg?v=1757387976&width=493",
        "notes": "Park heavy board that does anything, best for butters or any kind of presses."
    },
    {
        "gender": "mens",
        "name": "Goliath+",
        "brand": "Bataleon",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 7,
        "lengths": [153, 156, 159],
        "price": "699.95",
        "image": "https://bataleon.com/cdn/shop/files/bataleon-2526-goliath-plus-2-mens-snowboards_e50c0e08-eddc-470d-b54c-99092098b4b3.jpg?v=1764664626&width=360",
        "notes": "This is going to be their all mountain option that can run down the hill."
    },

    #
    # Capita (25/26 images)
    #
    {
        "gender": "mens",
        "name": "Resort Twin",
        "brand": "Capita",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5,
        "lengths": [152, 154, 156, 158, 160],
        "wide_lengths": [155, 158],
        "price": "599.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303371-ONE.png?v=1779917790",
        "notes": "Capitas staple in my opinion, cannot go wrong with this board as it does everything great."
    },
    {
        "gender": "mens",
        "name": "Mercury",
        "brand": "Capita",
        "styles": ["all-mountain", "freeride"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional",
        "flex": 6.5,
        "lengths": [147, 150, 153, 155, 157, 159, 161],
        "wide_lengths": [156, 158, 160, 162],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303367-ONE-1.png?v=1778714939",
        "notes": "Capitas staple in my opinion, cannot go wrong with this board as it does everything great."
    },
    {
        "gender": "mens",
        "name": "Mega Merc",
        "brand": "Capita",
        "styles": ["all-mountain", "freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 7,
        "lengths": [153, 155, 157, 159, 161],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303357-ONE-1.png?v=1778537175",
        "notes": "Capitas staple in my opinion, cannot go wrong with this board as it does everything great."
    },
    {
        "gender": "mens",
        "name": "Mega Death",
        "brand": "Capita",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 6.5,
        "lengths": [156, 159, 162],
        "wide_lengths": [157, 161, 165, 169],
        "price": "1,199.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303355-ONE-2.png?v=1778531228",
        "notes": "Capitas staple in my opinion, cannot go wrong with this board as it does everything great."
    },
    {
        "gender": "mens",
        "name": "Kazu Kokubo Pro",
        "brand": "Capita",
        "styles": ["freeride", "all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 6,
        "lengths": [151, 154, 157, 160],
        "wide_lengths": [155, 158, 161, 164],
        "price": "679.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303369-ONE-1.png?v=1779749673",
        "notes": "Fast and Powerful. This board goes from side-country down to resort once you are done."
    },
    {
        "gender": "mens",
        "name": "D.O.A.",
        "brand": "Capita",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5.5,
        "lengths": [148, 150, 152, 154, 156, 158, 160],
        "wide_lengths": [153, 155, 157, 159, 161],
        "price": "599.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303361-ONE-1.png?v=1778605725",
        "notes": "D.O.A stands for Destroyer of Awesomeness with this board anything can be done. Really good at going fast and really stable."
    },
    {
        "gender": "mens",
        "name": "Super D.O.A.",
        "brand": "Capita",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5.5,
        "lengths": [152, 154, 156, 158, 160],
        "wide_lengths": [155, 157, 159, 161, 163],
        "price": "599.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303359-ONE-1.png?v=1778597250",
        "notes": "D.O.A stands for Destroyer of Awesomeness with this board anything can be done. Really good at going fast and really stable."
    },
    {
        "gender": "mens",
        "name": "Sidewinder",
        "brand": "Capita",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5.5,
        "lengths": [148, 150, 152, 154, 156, 158, 160],
        "price": "549.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303362-ONE-2.png?v=1778612047",
        "notes": "D.O.A stands for Destroyer of Awesomeness with this board anything can be done. Really good at going fast and really stable."
    },
    {
        "gender": "mens",
        "name": "Black Snowboard of Death",
        "brand": "Capita",
        "styles": ["all-mountain", "freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 6.5,
        "lengths": [156, 159, 162],
        "wide_lengths": [157, 161, 165],
        "price": "749.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303363-ONE-1.png?v=1778616675",
        "notes": ""
    },
    {
        "gender": "mens",
        "name": "Matriarch",
        "brand": "Capita",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5.5,
        "lengths": [155, 158, 161],
        "wide_lengths": [157, 160],
        "price": "729.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303365-ONE-1.png?v=1778648036",
        "notes": ""
    },

    #
    # United Shapes (25/26 images)
    #
    {
        "gender": "mens",
        "name": "Horizon",
        "brand": "United Shapes",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 5,
        "lengths": [143, 147, 151, 155, 159],
        "price": "649",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100295818_1.png?v=1766423862",
        "notes": "For those who like simple. Any board from the United Shapes line comes with matte top sheet. This board is for those who want to do everything, this board has no limits. "
                 "Not to mention the tortional flex this board has allows for quick response."
    },
    {
        "gender": "mens",
        "name": "Object",
        "brand": "United Shapes",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 4,
        "lengths": [144, 148, 152, 156, 160],
        "price": "599",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100295816_1.png?v=1766425330",
        "notes": "The object is a really niche park board that is not spotted on the regular, this board is really flexy for those who enjoy presses and butters."
    },
    {
        "gender": "mens",
        "name": "Deep Reach",
        "brand": "United Shapes",
        "styles": ["freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 8,
        "lengths": [144, 148, 152, 156, 160],
        "price": "749.00",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100295815_1.png?crop=center&height=800&v=1766421876&width=800",
        "notes": "The Deep Reach is amazing at holding edges, and carving really fun on those powder days."
    },
    {
        "gender": "mens",
        "name": "Cadet",
        "brand": "United Shapes",
        "styles": ["freeride", "carving", "all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 8,
        "lengths": [144, 148, 152, 156, 160],
        "price": "599",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100295816_1.png?v=1766425330",
        "notes": "This board is so amazing at everything, looking for something that does everything this is the one (We had a customer heli ride in this). The stiffness on this board "
                 "allows it to be stable at high speeds, the edge control is instant this board wants to move."
    },

    #
    # Lib Tech (26/27 images)
    #
    {
        "gender": "mens",
        "name": "Orca",
        "brand": "Lib Tech",
        "styles": ["freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 7,
        "lengths": [144, 147, 150, 153, 156, 159, 162],
        "price": "749",
        "image": "https://www.lib-tech.com/media/catalog/product/cache/bd322120d976889db2881a06b8dbba23/2/0/2026-2027-Lib-Tech-Trice-ORCA-II-Snowboard-2400x2400.jpg",
        "notes": "Directonal board that does everything from groomers down to powder, this is an everday board that you cannot get enough from."
    },
    {
        "gender": "mens",
        "name": "DPR",
        "brand": "Lib Tech",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 6,
        "lengths": [144, 148, 152, 156, 160],
        "price": "499",
        "image": "https://www.lib-tech.com/media/catalog/product/cache/bd322120d976889db2881a06b8dbba23/2/0/2025-2026-Lib-Tech-dPr-Snowboard.jpg",
        "notes": "The price tag this has is insane for a board that can do anything the price justifies it. There are boards that feel the exact same for way more."
    },
    
    #
    # Salomon (26/27 images)
    #
    {
        "gender": "mens",
        "name": "Sleepwalker",
        "brand": "Salomon",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5,
        "lengths": [148, 151, 153, 155, 158],
        "price": "449",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100287400_1.png?v=1746804963",
        "notes": "True twin that is ready for any rails, this board is mid stiff great entry level board into the sport as well"
    },
    {
        "gender": "mens",
        "name": "Huck Knife",
        "brand": "Salomon",
        "styles": ["park"],
        "skill": ["intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 6,
        "lengths": [148, 151, 153, 155, 158],
        "price": "579.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303307_1.png?v=1778699861",
        "notes": "True twin that is ready for any rails, this board is mid stiff great entry level board into the sport as well"
    },
    {
        "gender": "mens",
        "name": "Huck Knife Pro",
        "brand": "Salomon",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 7,
        "lengths": [138, 143, 147, 151, 153, 155, 158],
        "price": "679.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303306_1.png?v=1778699095",
        "notes": "True twin that is ready for any rails, this board is mid stiff great entry level board into the sport as well"
    },
    {
        "gender": "mens",
        "name": "Abstract",
        "brand": "Salomon",
        "styles": ["park"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "true-twin",
        "flex": 5,
        "lengths": [138, 143, 147, 151, 153, 155, 158],
        "price": "549.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303308_1.png?v=1778710493",
        "notes": "True twin that is ready for any rails, this board is mid stiff great entry level board into the sport as well"
    },
    {
        "gender": "mens",
        "name": "Assasin",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 4,
        "lengths": [144, 148, 152, 156, 160],
        "price": "649.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303301_1.png?v=1778690327",
        "notes": "Matte color to avoid having a shark or a bannana printed on your board, a niche board that holds a lot of fun."
    },
    {
        "gender": "mens",
        "name": "Assasin Pro",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 4,
        "lengths": [144, 148, 152, 156, 160],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303300_1.png?v=1778689126",
        "notes": "."
    },
    {
        "gender": "mens",
        "name": "Craft",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "skill": ["beginner", "intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 4,
        "lengths": [150, 153, 155, 157, 158, 160, 162],
        "price": "479.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303303_1.png?v=1778697728",
        "notes": "."
    },
    {
        "gender": "mens",
        "name": "Dancehaul",
        "brand": "Salomon",
        "styles": ["freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 4,
        "lengths": [144, 148, 152, 156, 160],
        "price": "549.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303302_1.png?v=1778697239",
        "notes": "."
    },

    #
    # Jones (26/27 images)
    # 
    {
        "gender": ["mens"],
        "name": "Rally Cat",
        "brand": "Jones",
        "styles": ["park", "all-mountain"],
        "skill": ["beginner", "intermediate"],
        "shape": "directional-twin",
        "flex": 4,
        "lengths": [151, 154, 156, 158, 161],
        "price": "499.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308722_1.png?crop=center&height=800&v=1779469529&width=800",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Frontier 2.0",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["beginner", "intermediate"],
        "shape": "directional",
        "flex": 4,
        "lengths": [150, 153, 156, 159, 162, 165],
        "price": "549.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308719_1.png?crop=center&height=800&v=1779463769&width=800",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Storm Wolf",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 8,
        "lengths": [154, 158, 162],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308712_1.png?crop=center&height=800&v=1779401974&width=800",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Storm Chaser",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 6,
        "lengths": [142, 147, 152, 157],
        "price": "729.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308712_1.png?crop=center&height=800&v=1779401974&width=800",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Free Carver 6000",
        "brand": "Jones",
        "styles": ["carving"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 6,
        "lengths": [150, 154, 156, 162],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308715_1.png?v=1779405784",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Free Carver 9000",
        "brand": "Jones",
        "styles": ["carving"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 8,
        "lengths": [152, 156, 160, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308733_1.png?v=1779406817",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Howler",
        "brand": "Jones",
        "styles": ["freeride", "park"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 8,
        "lengths": [152, 155, 158, 161, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308718_1.png?v=1779462047",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Mountain Twin Pro",
        "brand": "Jones",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional-twin",
        "flex": 8,
        "lengths": [154, 157, 160, 163],
        "price": "729.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308720_1.png?v=1779466234",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Hovercraft 2.0",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 6,
        "lengths": [144, 148, 152, 156, 160, 164],
        "price": "649.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100291901.Hovercraft2.0.1.png?v=1766013699",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Stratos",
        "brand": "Jones",
        "styles": ["freeride", "all-mountain"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 6,
        "lengths": [149, 153, 156, 159, 162],
        "price": "679.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100291897.Stratos.1.png?v=1766000848",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Flagship",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["intermediate", "advanced"],
        "shape": "directional",
        "flex": 8,
        "lengths": [151, 154, 158, 161, 164, 167, 172],
        "price": "749.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308717_1.png?v=1779458790",
        "notes": "."
    },
    {
        "gender": ["mens"],
        "name": "Flagship pro",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 10,
        "lengths": [154, 158, 161, 164],
        "price": "949.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308716_1.png?v=1779460684",
        "notes": "."
    },
    #
    # WOMENS JONES OPTIONS
    #
    {
        "gender": ["womens"],
        "name": "Howler",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 10,
        "lengths": [154, 158, 161, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308726_1.png?v=1779488948",
        "notes": "."
    },
    {
        "gender": ["womens"],
        "name": "Rally Cat",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional-twin",
        "flex": 10,
        "lengths": [139, 142, 145, 148, 151, 154],
        "price": "499.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308730_1.png?v=1779747357",
        "notes": "."
    },
    {
        "gender": ["womens"],
        "name": "Twin Sister",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional-twin",
        "flex": 10,
        "lengths": [140, 143, 146, 149, 152, 155],
        "price": "599.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308729_1.png?v=1779748198",
        "notes": "."
    },
    {
        "gender": ["womens"],
        "name": "Stratos",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 10,
        "lengths": [154, 158, 161, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308726_1.png?v=1779488948",
        "notes": "."
    },
    {
        "gender": ["womens"],
        "name": "Dream Weaver 2.0",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 10,
        "lengths": [154, 158, 161, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308726_1.png?v=1779488948",
        "notes": "."
    },
    {
        "gender": ["womens"],
        "name": "Airheart 2.0",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 10,
        "lengths": [154, 158, 161, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308726_1.png?v=1779488948",
        "notes": "."
    },
    {
        "gender": ["womens"],
        "name": "Flagship",
        "brand": "Jones",
        "styles": ["freeride"],
        "skill": ["advanced"],
        "shape": "directional",
        "flex": 10,
        "lengths": [154, 158, 161, 164],
        "price": "699.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100308726_1.png?v=1779488948",
        "notes": "."
    },
]