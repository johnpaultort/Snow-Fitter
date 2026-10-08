import json

# Union sizing chart 
#
#         "sizes": [
#            {
#                "size": "S",
#                "boot_sizes": "5.5-7.5"
#            },
#            {
#                "size": "M",
#                "boot_sizes": "8-10"
#            },
#            {
#                "size": "L",
#                "boot_sizes": "10.5-13"
#            }
#          ],


# Format
# {
#   "gender": [],
#   "name": "",
#   "brand": "",
#   "style": [],
#   "skill": [],
#   "sizes": [
#
#   ],
#
#   "flex": ,
#   "pattern": [],
#   "type": "",
#   "price": "",
#   "image": "",
#   "notes": "."
# },
#


SB_BINDINGS = [

    # Union Bindings
    # 25/26 images
    # Ultra and Strata no update only

    {
        "gender": ["mens"],
        "name":     "Strata",
        "brand":    "Union",
        "style":   ["park", "all-mountain"],
        "skill":   ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     5,
        "pattern": ["4x2", "channel"],
        "type": "traditional",
        "price":    "279.95",
        "image":    "https://unionbindingcompany.com/cdn/shop/files/UN25_STRATA_BLACK_1024x.jpg?v=1753686597",
        "notes":    "The Strata has a mini disk that allows the binding to carry a soft surfy feeling. Smaller contact point and allows your board to flex naturally."
    },
    {
        "gender": ["mens"],
        "name": "Force",
        "brand": "Union",
        "style":    ["all-mountain", "park"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex": 7, 
        "pattern": ["4x4", "4x2", "channel"],
        "type": "traditional",
        "price": "349.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100303407.Force.Black.1.png?v=1780696910",
        "notes": "The Union Force is the ultimate do-it-all binding trusted by riders worldwide. With a smooth, responsive flex and bombproof construction, it’s built to handle any terrain, any rider, any condition."
    },
    {
        "gender": ["mens"],
        "name":     "Falcor",
        "brand":    "Union",
        "style":    ["freeride", "park", "all-mountain"],
        "skill":    ["intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     7,
        "pattern":  ["4x2", "channel"],
        "type": "traditional",
        "price":    "439.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303402.Black.1.png?v=1780676964",
        "notes":    "Precision-engineered for the demands of Travis Rice, the Union Falcor is built for riders who push the limits of big mountain snowboarding. Lightweight, responsive, and ultra-durable, it blends power and precision for aggressive freeride performance."
    },
    {
        "gender": ["mens"],
        "name":     "Atlas",
        "brand":    "Union",
        "style":    ["all-mountain", "carving", "park", "freeride"],
        "skill":    ["intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     8,
        "pattern":  ["4x4", "4x2", "channel"],
        "type": "traditional",
        "price":    "399.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303406.Atlas.Black.1.png?v=1780693194",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Ultra",
        "brand":    "Union",
        "style":    ["park", "all-mountain"],
        "skill":    ["intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     6, 
        "pattern":  ["4x2", "channel"],
        "type": "traditional",
        "price":    "329.95",
        "image":    "https://unionbindingcompany.com/cdn/shop/files/UN25_ULTRA_BLACK_1024x.jpg?v=1753276418",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Neo",
        "brand":    "Union",
        "style":    ["park", "all-mountain"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     6, 
        "pattern":  ["4x2", "channel"],
        "type": "traditional",
        "price":    "379.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303403.Neo.White.1.png?v=1780680369",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "STR",
        "brand":    "Union",
        "style":    ["all-mountain"],
        "skill":    ["beginner"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     6, 
        "pattern":  ["4x2", "4x4", "channel"],
        "type": "traditional", 
        "price":    "199.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303408.STR.Black.1.png?v=1780704023",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Atlas Step On",
        "brand":    "Union",
        "style":    ["park", "all-mountain", "freeride"],
        "skill":    ["intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "6-8"
            },
            {
                "size": "M",
                "boot_sizes": "8.5-10.5"
            },
            {
                "size": "L",
                "boot_sizes": "11-13"
            },
            {
                "size": "XL",
                "boot_sizes": "14-15"
            }
        ],
        "flex":     8, 
        "pattern":  ["4x2", "channel"],
        "type": "step-on",
        "price":    "429.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303392.Black.1.png?v=1780506580",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Atlas Step On Pro",
        "brand":    "Union",
        "style":    ["park", "all-mountain"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5.5-7.5"
            },
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     6, 
        "pattern":  ["4x2", "channel"],
        "type": "step-on",
        "price":    "499.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303385.Black.1.png?v=1780499173",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Source",
        "brand":    "Union",
        "style":    ["all-mountain", "carving", "freeride"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     7, 
        "pattern":  ["4x2", "channel"],
        "type": "traditional",
        "price":    "549.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303400.Source.Black.1.png?v=1780612051",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Source FC",
        "brand":    "Union",
        "style":    ["all-mountain", "freeride", "carving"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     8, 
        "pattern":  ["4x2", "channel"],
        "type": "traditional",
        "price":    "999.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303396.FCBlack.1.png?v=1780606599",
        "notes":    "."
    },
    {
        "gender": ["mens"],
        "name":     "Source Pro TH",
        "brand":    "Union",
        "style":    ["park", "all-mountain"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "M",
                "boot_sizes": "8-10"
            },
            {
                "size": "L",
                "boot_sizes": "10.5-13"
            }
        ],
        "flex":     6, 
        "pattern":  ["4x2", "channel"],
        "type": "traditional", 
        "price":    "999.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100303397.SourceProTH.Black.1.png?v=1780610364",
        "notes":    "."
    },

    # 26/27 images
    # Jones Bindings
    {
        "gender": ["mens", "womens"],
        "name":     "Nebula FASE",
        "brand":    "Jones",
        "style":    ["park", "all-mountain"],
        "skill":    ["beginner", "intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5-8"
            },
            {
                "size": "M",
                "boot_sizes": "8.5-10.5"
            },
            {
                "size": "L",
                "boot_sizes": "11-14"
            }
        ],
        "flex":     4, 
        "pattern":  ["4x4", "4x2", "channel"],
        "type": "fase",
        "price":    "299.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100308731_TBR_1.png?v=1780069215",
        "notes":    "."
    },
    {
        "gender": ["mens", "womens"],
        "name":     "Mercury FASE",
        "brand":    "Jones",
        "style":    ["freeride", "all-mountain"],
        "skill":    ["intermediate", "advanced"],
        "sizes": [
            {
                "size": "S",
                "boot_sizes": "5-8"
            },
            {
                "size": "M",
                "boot_sizes": "8.5-10.5"
            },
            {
                "size": "L",
                "boot_sizes": "11-14"
            }
        ],
        "flex":     8, 
        "pattern":  ["4x4", "4x2", "channel"],
        "type": "fase",
        "price":    "369.95",
        "image":    "https://www.sportsbasement.com/cdn/shop/files/100308731_TBR_1.png?v=1780069215",
        "notes":    "."
    }
]
