import json

# Format
#    {
#        "name": "Hawx Prime 110 S BOA",
#        "brand": "Atomic",
#        "styles": ["all-mountain"],
#        "skill": ["intermediate", "advanced"],
#        "flex": 110,
#        "last_mm": 100,
#        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5],
#        "price": 699.95,
#        "image": "URL",
#        "notes": "Excellent all-mountain boot with strong heel hold."
#    }

SKI_BOOTS = [

# Atomic
    {
        "name": "Hawx Prime 110 S BOA",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "skill": ["intermediate", "advanced"],
        "flex": 110,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5],
        "price": 699.95,
        "image": "URL",
        "notes": "."
    },
    
# Armada
    {
        "name": "AR One 130 MV",
        "brand": "Armada",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.95,
        "image": "URL",
        "notes": ""
        
    },
    {
        "name": "AR One 110 MV",
        "brand": "Armada",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 599.95,
        "image": "URL",
        "notes": ""
    },
    
# Salomon

    # Alpha
    {
        "name": "Salomon Alpha 100",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 98,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305021.BlkDrkGryMetSilverMet11.png?v=1782397559",
        "notes": ""
    },
    {
        "name": "Salomon Alpha 120",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 98,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305017.BlackSambaMetDarkGreyMet.2.png?v=1782168733",
        "notes": ""
    },
    
    # Supra
    {
        "name": "Salomon Supra 100",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 499.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305022.BlkDrkGryMetBeluga.1.png?v=1782399162",
        "notes": ""
    },
    {
        "name": "Salomon Supra 110",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 110,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 699.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305020.BlkGrayAuroraSambaMet.1.png?v=1782345671",
        "notes": ""
    },
    {
        "name": "Salomon Supra 120",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305018.RoastCashewBlkSambaMet.2.png?v=1782321653",
        "notes": ""
    },
    {
        "name": "Salomon Supra 130",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305016.WroughtIronBlackSambaMet.1.png?v=1782162984",
        "notes": ""
    },
    
    #Delta
    {
        "name": "Salomon Delta 120",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 102,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 499.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305019.BlkRoastCashSambaMet.1.png?v=1782341855",
        "notes": ""
    },
    
# Womens Salomon

    # Alpha
    {
        "name": "Salomon Alpha 85",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 85,
        "last_mm": 98,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305027.BlkDrkGryMetLtBronzeMet.5.png?v=1782420806",
        "notes": ""
    },
    {
        "name": "Salomon Alpha 95",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 95,
        "last_mm": 98,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 649.95,
        "image": "",
        "notes": ""
    },
    
    # Womens Supra
    {
        "name": "Salomon Supra 85",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 85,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 499.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305028.BlkBlkLilacAsh.3.png?v=1782424598",
        "notes": ""
    },
    {
        "name": "Salomon Supra 95",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 95,
        "last_mm": 102,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    {
        "name": "Salomon Supra 105",
        "brand": "Salomon",
        "styles": [],
        "skill":
        "flex": 105,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },

# Nordica
    # Promachine
    {
        "name": "Promachine 3 110",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 110,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307175.Dark.Gray.Black.Red.1.png?v=1776118384",
        "notes": ""
    },
    {
        "name": "Promachine 3 120",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 749.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307173.GrayBlackRed.1.png?v=1776106479",
        "notes": ""
    },
    
    # Speedmachine
    {
        "name": "Speedmachine 3 110",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 110,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 699.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100279281.BlackGreyRed.1.png?v=1728584677",
        "notes": ""
    },
    {
        "name": "Speedmachine 3 120",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.99,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307174.DarkGrey.BlackRed.11.png?v=1782498063",
        "notes": ""
    },
    
    # Sportmachine
    {
        "name": "Sportmachine 3 100",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 102,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294740_GBR_1.png?v=1759848889",
        "notes": ""
    },
    {
        "name": "Sportmachine 3 120",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 102,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 699.99,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294739_BGR_1.png?v=1759850791",
        "notes": ""
    },
    
# Womens Nordica

    # Womens Promachine
    {
        "name": "Promachine 3 85",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 98,
        "last_mm": 85,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    {
        "name": "Promachine 3 95",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 98,
        "last_mm": 95,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    
    # Womens Speedmachine
    {
        "name": "Speedmachine 3 85",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 85,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    {
        "name": "Speedmachine 3 95",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 95,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    {
        "name": "Speedmachine 105",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 105,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    
    # Womens Sportmachine
    {
        "name": "Sportmachine 3 85",
        "brand": "Nordica",
        "styles": [],
        "skill":
        "flex": 85,
        "last_mm": 102,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294743_BBR_1.png?v=1759848490",
        "notes": ""
    },

# Tecnica
    # Mach
    {
        "name": "Mach BOA MV 100",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 599.95,
        "image": "",
        "notes": ""
    },
    {
        "name": "Mach BOA MV 120",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Mach BOA MV 130",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 949.99,
        "image": "",
        "notes": ""
    },
    
    # HV
    {
        "name": "Mach BOA HV 100",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 103,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 599.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Mach BOA HV 120",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 103,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.99,
        "image": "",
        "notes": ""
    },
    
    # Mach 1
    {
        "name": "Mach1 LV 120",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Mach1 LV 130",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.99,
        "image": "",
        "notes": ""
    },
    
# Womens Tecnica
    # Mach
    {
        "name": "Women's Mach BOA MV 85",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 85,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 599.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Women's Mach BOA MV 95",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 95,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 699.99,
        "image": "",
        "notes": ""
    },

    # Mach Sport
    {
        "name": "Women's Mach Sport LV 75",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 75,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 449.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Women's Mach Sport LV 85",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 85,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 549.99,
        "image": "",
        "notes": ""
    },
    
    
    # Mach1
    {
        "name": "Women's Mach1 LV 95",
        "brand": "Tecnica",
        "styles": [],
        "skill":
        "flex": 95,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 699.99,
        "image": "",
        "notes": ""
    },
    
# K2
    # Cortex
    {
        "name": "Cortex 120 Zonal BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.95,
        "image": "",
        "notes": ""
    },
    
    # Recon
    {
        "name": "Recon 100 MV",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 449.95,
        "image": "",
        "notes": ""
    },
    {
        "name": "Recon 110 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 110,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 699.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Recon 120 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.99,
        "image": "",
        "notes": ""
    },
    {
        "name": "Recon 130 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    
    # Mindbender
    {
        "name": "Mindbender 120 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": ,
        "image": "",
        "notes": ""
    },
    
    # BFC
    {
        "name": "BFC 90",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 90,
        "last_mm": 100-103,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 449.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100273725_1.png?v=1754107673",
        "notes": ""
    },
    {
        "name": "BFC 100 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 100,
        "last_mm": 100-103,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100273724_1.png?v=1754107671",
        "notes": ""
    },
    {
        "name": "BFC 120 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 120,
        "last_mm": 100-103,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 749.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100288932_BLU_1.png?v=1754107442",
        "notes": ""
    },
    {
        "name": "BFC 130 BOA",
        "brand": "K2",
        "styles": [],
        "skill":
        "flex": 130,
        "last_mm": 100-103,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 899.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100288931_BRBK_1.png?v=1754107446",
        "notes": ""
    }
]
