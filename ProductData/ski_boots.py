import json

SKI_BOOTS = [

    {
        "name": "",
        "brand": "",
        "styles": ["all-mountain"],
        "flex": ,
        "last_mm": ,
        "sizes": [],
        "price": ,
        "image": "URL",
        "notes": "."
    },
    {
        "name": "",
        "brand": "",
        "styles": ["all-mountain"],
        "flex": ,
        "last_mm": ,
        "sizes": [],
        "price": ,
        "image": "URL",
        "notes": "."
    },

# Atomic
    {
        "name": "Hawx Prime 120 S BOA",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 799.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306689-OLIVE-3.png?v=1778009728",
        "notes": "Hard-charging skiers who want all-mountain power without a punishing fit will find a lot to like in the Atomic Hawx Prime 120 S BOA. This is a medium-volume all-mountain boot built around a 100mm last, a stiff performance flex, and a BOA-closed lower shell that wraps the foot more evenly than a traditional buckle. The result is a precise, powerful boot that still goes on easy and stays comfortable all day. The closure is the big story: a BOA H+i1 Single Pull dial replaces the lower two buckles and tightens the shell evenly around the foot, while 6000-series aluminum buckles handle the cuff. Underneath, Prolite construction keeps weight down by reinforcing only the areas that need it, and Memory Fit lets a bootfitter expand the shell and cuff to match your anatomy. Power Shift 2.0 tunes forward lean between 13, 15, and 17 degrees and adjusts the flex feel by adding or removing a screw. The Mimic Platinum liner is fully heat moldable with three customizable zones and a Power Ankle Lock for a locked-in heel, and a 40mm velcro strap finishes it. GripWalk soles come standard."
    },
    {
        "name": "Hawx Prime 110 S BOA",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "flex": 110,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 699.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306690-BLKSLATE-3.png?v=1778015285",
        "notes": "Whether you’re skiing groomers or powder, the versatile Atomic Hawx Prime 110 S BOA is an all-mountain ski boot that offers the ideal balance of comfort and performance. Built using Prolite construction, the boot features a lightweight, slim build that wraps the foot effectively, with reinforced structural zones for powerful skiing. Featuring a medium 110 flex, the 100mm last fits people with medium-volume feet. The BOA® Fit System on the shell, in place of bottom buckles, uniformly encloses the foot for a precise fit that can be micro-adjusted. The form-fitting Mimic Gold Liner can be re-shaped to your anatomy through the heat-molded Mimic fitting process. In-store Memory Fit can reshape cuff and shell through heat fitting. Power Shift 2.0 is a shim system that gets your forward lean just right. And if you need more space in the lower leg, Adaptive Fit System (AFS) Cuff accommodates different calf shapes by adding volume through a removable spoiler."
    },
    {
        "name": "Hawx Magna 110 S",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "flex": 110,
        "last_mm": 102,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306698-BLKSLT-3.png?v=1780940695",
        "notes": "."
    },
    {
        "name": "Hawx Prime 100 BOA",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "flex": 100,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306691-BLKRED-3.png?v=1780352559",
        "notes": "The Atomic Hawx Prime 100 BOA Ski Boots are among the best boots in the game, and they get even better with the addition of a lower BOA® Fit System lower closure. They add the BOA® to the best-fitting average last on the market, and the best get better, with ongoing Memory Fit heat molding technology, full progressive-flexing Polyurethane construction, and a Mimic Silver heat moldable liner."
    },
    {
        "name": "Hawx Prime 100",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "flex": 100,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 449.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306692-BLKRED-3.png?v=1780406959",
        "notes": "An easy-to-wear alpine boot for all-mountain skiers, the Atomic Hawx Prime 100 hits the sweet spot between providing support without forgoing comfort. With a medium 100 flex and mid-volume 100mm last, it’s a great fit for skiers with medium-volume feet looking for a forgiving option. Next-level Prolite offers streamlined construction with supportive reinforcements in key areas to ensure skiers have the strength and confidence to drive a turn on all conditions. A heat-moldable Mimic Silver liner with Ankle Lock comes with cushioned anatomical shaping around the heel and ankle for a comfortable and secure fit. Memory Fit allows for full customization of shell and cuff in minutes. Add volume to the calf area with the removable Adaptive Fit System (AFS) Cuff spoiler."
    },
    {
        "name": "Hawx Magna 100",
        "brand": "Atomic",
        "styles": ["all-mountain"],
        "flex": 100,
        "last_mm": 102,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5, 32.5],
        "price": 449.95,
        "image": "URL",
        "notes": "."
    },

    # Women's Atomic 
    {
        "name": "",
        "brand": "",
        "styles": ["all-mountain"],
        "flex": ,
        "last_mm": ,
        "sizes": [],
        "price": ,
        "image": "URL",
        "notes": "."
    },

    
# Armada
    {
        "name": "AR One 130 MV",
        "brand": "Armada",
        "styles": ["all-mountain"],
        "flex": 130,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100285566.BlackGreen.2.png?v=1754107642",
        "notes": "The AR ONE 130 is built to get rowdy. The Hybrid Cabrio Construction creates an unprecedented blend of comfort and performance backed by a powerful, smooth 130 flex. Premium features like the Team Liner, Team Elastic Cam 50mm Powerstrap, Kush Damping Bootboard, and 1?2 tech inserts make this boot ideal for hard-charging freeride athletes looking for an exceptional handling and versatile boot."
    },
    {
        "name": "AR One 110 MV",
        "brand": "Armada",
        "styles": ["all-mountain"],
        "flex": 130,
        "last_mm": 100,
        "sizes": [23.5, 24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 599.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100285568.GreenBlack.2.png?v=1754107640",
        "notes": "The AR ONE 110 is the smooth-flexing, do-it-all boot. Top shelf features like the Team Liner, Team Elastic Cam 50mm Power Strap and the Kush Damping Bootboard give the AR ONE 110 a plush, supportive feel and customized fit that’s ideal for freestyle athletes. It’s the perfect blend of comfort and control to take the sting out of heavy landings and high speed chatter."
    },
    
# Salomon

    # Alpha
    {
        "name": "Salomon Alpha 100",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 100,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305021.BlkDrkGryMetSilverMet11.png?v=1782397559",
        "notes": "Built on the trusted fit of the original Alpha, the S/Pro Alpha BOA® introduces Salomon’s revolutionary ExoDrive construction and Powerlink lower pivot, for unmatched energy transmission, precision and confidence. The 98 mm last ensures a snug fit, while the cuff-mounted BOA® Fit System offers micro-adjustable comfort and control."
    },
    {
        "name": "Salomon Alpha 120",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 98,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305017.BlackSambaMetDarkGreyMet.2.png?v=1782168733",
        "notes": "Built on the trusted fit of the original Alpha, the S/Pro Alpha C BOA® 120 introduces Salomon’s revolutionary ExoDrive construction and Powerlink lower pivot, for unmatched energy transmission, precision and confidence. The 98 mm last ensures a snug fit, while the cuff-mounted BOA® Fit System offers micro-adjustable comfort and control."
    },
    {
        "name": "Salomon Alpha 130",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 130,
        "last_mm": 98,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 899.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305015.WroughtIronBlackRaspberry.2.png?v=1782148306",
        "notes": "Built on the trusted fit of the original Alpha, the S/Pro Alpha BOA® 130 introduces Salomon’s revolutionary ExoDrive construction and Powerlink lower pivot, for unmatched energy transmission, precision and confidence. The 98 mm last ensures a snug fit, while the cuff-mounted BOA® Fit System offers micro-adjustable precision and control."
    },
    
    # Supra
    {
        "name": "Salomon Supra 100",
        "brand": "Salomon",
        "styles": [],
        "skill": [],
        "flex": 100,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 499.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305022.BlkDrkGryMetBeluga.1.png?v=1782399162",
        "notes": "Exceptional fit and performance for an unparalleled skiing experience. Crafted to enhance your performance and comfort, Salomon’s S/Pro Supra boots prioritize superior foothold and optimized power transmission for a wide range of foot shapes. The Custom Fit 4D liner with latex foam can be molded to tailor the boots to your specific needs, while the 3D instep shell technology minimizes instep pressure."
    },
    {
        "name": "Salomon Supra 110",
        "brand": "Salomon",
        "styles": [],
        "skill": [],
        "flex": 110,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 699.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305020.BlkGrayAuroraSambaMet.1.png?v=1782345671",
        "notes": "The next dimension in fit. Engineered to advance foothold and performance by challenging traditional boot constructions, Salomon’s Supra BOA® outline a new standard of perfect fit. ExoWrap® Construction combined with the BOA® Fit System provides a micro-adjustable, precision fit and a targeted wrap around the foot that can easily be adjusted throughout the day."
    },
    {
        "name": "Salomon Supra 120",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 849.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305018.RoastCashewBlkSambaMet.2.png?v=1782321653",
        "notes": "Salomon’s S/Pro Supra Dual BOA® boots revolutionize micro-adjustable sensitivity to offer skiers superior control. With two BOA® dials, it delivers a customized fit, providing optimal support at the cuff and precise comfort in the lower shell. The result? A boot that enhances performance while keeping you comfortable on every slope."
    },
    {
        "name": "Salomon Supra 130",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 130,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 849.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305016.WroughtIronBlackSambaMet.1.png?v=1782162984",
        "notes": "The S/Pro Supra C BOA® 130combines a cuffmounted BOA® Fit System with two lower-shell buckles for a stronger support and reliable hold. Paired with Exowrap™ construction and a CF Expert liner, it delivers a precise fit, strong energy transmission, and all-day comfort for confident, high-performance skiing."
    },
    
    #Delta
    {
        "name": "Salomon Delta 120",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 102,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 799.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305019.BlkRoastCashSambaMet.1.png?v=1782341855",
        "notes": "The perfect fit for wider feet. The revolutionary BOA® Fit System debuts on a 102mm last with Salomon’s S/Pro Delta BOA®, enhancing performance and inclusivity. With a wider 102mm fit, these boots offer precise, micro-adjustable control and a secure, customized fit to skiers with wider feet, while the three-position Calf Adjuster ensures added comfort for various calf sizes."
    },
    
# Womens Salomon

    # Alpha
    {
        "name": "Salomon Alpha 85",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 85,
        "last_mm": 98,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305027.BlkDrkGryMetLtBronzeMet.5.png?v=1782420806",
        "notes": "Built on the trusted fit of the original Alpha, the S/Pro Alpha BOA® introduces Salomon’s revolutionary ExoDrive construction and Powerlink lower pivot, for unmatched energy transmission, precision and confidence. The 98 mm last ensures a snug fit, while the cuff-mounted BOA® Fit System offers micro-adjustable comfort and control."
    },
    {
        "name": "Salomon Alpha 95",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 95,
        "last_mm": 98,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305025.BlkGoldMetDrkGryMet.1.png?v=1782413042",
        "notes": "Reinventing design. Redefining performance. Built on the trusted fit of the original Alpha, the S/Pro Alpha BOA® introduces Salomon’s revolutionary ExoDrive construction and Powerlink lower pivot, for unmatched energy transmission, precision and confidence. The 98 mm last ensures a snug fit, while the cuff-mounted BOA® Fit System offers micro-adjustable comfort and control."
    },
    {
        "name": "Women's S/Pro Alpha C BOA 105",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 105,
        "last_mm": 98,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 749.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305023.BirchBlkGoldMet.6.png?v=1782403319",
        "notes": "Built on the trusted fit of the original Alpha, the S/Pro Alpha BOA® introduces Salomon’s revolutionary ExoDrive construction and Powerlink lower pivot, for unmatched energy transmission, precision and confidence. The 98 mm last ensures a snug fit, while the cuff-mounted BOA® Fit System offers micro-adjustable comfort and control."
    },
    
    # Womens Supra
    {
        "name": "Salomon Supra 85",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 85,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 499.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305028.BlkBlkLilacAsh.3.png?v=1782424598",
        "notes": "Exceptional fit and performance for an unparalleled skiing experience. Crafted to enhance your performance and comfort, Salomon’s S/Pro Supra boots prioritize superior foothold and optimized power transmission for a wide range of foot shapes. The Custom Fit 4D liner with latex foam can be molded to tailor the boots to your specific needs, while the 3D instep shell technology minimizes instep pressure."
    },
    {
        "name": "Salomon Supra 95",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 95,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5, 27.5],
        "price": 100.00,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305026.BlackBelugaMetGoldMet.4.png?v=1782417685",
        "notes": "The next dimension in fit. Engineered to advance foothold and performance by challenging traditional boot constructions, Salomon’s Supra BOA® outline a new standard of perfect fit. ExoWrap® Construction combined with the BOA® Fit System provides a micro-adjustable, precision fit and a targeted wrap around the foot that can easily be adjusted throughout the day."
    },
    {
        "name": "Salomon Supra 105",
        "brand": "Salomon",
        "styles": ["all-mountain"],
        "flex": 105,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 749.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305024.GrayAuroraBlkGoldMet.1.png?v=1782407648",
        "notes": "The next dimension in fit. Engineered to advance foothold and performance by challenging traditional boot constructions, Salomon’s Supra BOA® outline a new standard of perfect fit. ExoWrap® Construction combined with the BOA® Fit System provides a micro-adjustable, precision fit and a targeted wrap around the foot that can easily be adjusted throughout the day."
    },

# Nordica
    # Promachine
    {
        "name": "Promachine 3 110",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 110,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307175.Dark.Gray.Black.Red.1.png?v=1776118384",
        "notes": "Confidence comes easily in the new Promachine 3 110. This boot has it all: A precise 98-mm fit, modern stance, refined shell shape, smooth flex, enhanced lateral stability, and efficient power transfer through every transition. At a 110 flex, it’s made for skiers with a lighter touch who still demand Promachine performance. The shell’s 3Force Frame Technology, paired with 3D Cork Fit liner, channels energy exactly where you need it, keeping the boot reactive yet comfortable wherever you take it. This is your go-to, forgiving-flex boot made for maximum fun—wherever the mountain calls."
    },
    {
        "name": "Promachine 3 120",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 98,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 749.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307173.GrayBlackRed.1.png?v=1776106479",
        "notes": "The redesigned Promachine 3 120 is built for skiers—those who ski hard, ski often, and demand gear that keeps up. The all-new, performance-driven, 98-mm shell features our foundational 3Force Frame Technology, delivering power and locked-in edge stability. Together with a modernized stance and refined shape, the Promachine 3 120 provides a smoother flex, enhanced lateral stability, and dialed energy transfer across every turn. With infrared customization available at your local Nordica bootfitter, you can dial in a fit that’s just for you. Lock into powerful precision with a supportive 120 flex and experience all-day skiing performance."
    },
    
    # Speedmachine
    {
        "name": "Speedmachine 3 BOA 110",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 110,
        "last_mm": 100,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 699.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100279281.BlackGreyRed.1.png?v=1728584677",
        "notes": "Elevate your experience—and your expectations—with Nordica’s Speedmachine 3 BOA 110. Offering exceptional comfort and performance, this legendary all-mountain boot features the BOA® Fit System for exceptional microadjustability. This fit system pairs perfectly with Nordica’s Tri Force technology by maximizing the transmission of energy. It also boosts power and control. The boot’s slightly softer flex provides all-day comfort without sacrificing precision. And for a truly personal fit, its liner and shell can readily be customized. Ski your best across the entire mountain with Nordica’s Speedmachine 3 BOA 110."
    },
    {
        "name": "Speedmachine 120 BOA Cuff",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 100,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5],
        "price": 799.99,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307174.DarkGrey.BlackRed.11.png?v=1782498063",
        "notes": "Speedmachine performance taken to the next level - start your ski day with the wrapping power of BOA®. Featuring an enhanced 3D Cork Fit liner, an all-new BOA® cuff closure system, and two micro-adjust buckles on the lower shell, keep your energy contained and channeled from turn to turn while dialing up your power and precision. Its Tri Force cuff has been redesigned to accommodate the BOA® closure system, crafting the highest level of skiing precision in the Speedmachine family to date. Fully customizable, fine-tune your fit and buckle down faster in the all-new Speedmachine 3 120 BOA® Cuff."
    },

    # Sportmachine
    {
        "name": "Sportmachine 3 100",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 100,
        "last_mm": 102,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 549.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294740_GBR_1.png?v=1759848889",
        "notes": "Sportmachine 3 BOA®100 allows you to explore the entire mountain in comfort without sacrificing performance. Its integrated BOA®Fit System perfectly pairs with Tri Force technology, enhancing its performance, precision and comfort. To keep you warm and dry run after run, it features a Precision Fit liner with PrimaLoft insulation. And thanks to a customizable shell and liner, you can truly make this boot your own. Ski your best turns yet with the Sportmachine 3 BOA®100."
    },
    {
        "name": "Sportmachine 3 120 BOA",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 120,
        "last_mm": 102,
        "sizes": [25.5, 26.5, 27.5, 28.5, 29.5, 30.5, 31.5],
        "price": 699.99,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294739_BGR_1.png?v=1759850791",
        "notes": "No matter the terrain or the conditions, the Sportmachine 3 BOA®120 unlocks everything the mountains have to offer. This boot features an integrated BOA®Fit System to enhance comfort and precision, while seamlessly integrating with redesigned Tri Force technology to increase performance. For an even more personalized fit, the shells and liners can be readily customizable. And with 3D Cork Fit Primaloft liner, you will be able to ski run after run while remaining warm and dry. Ski your favorite terrain with the Sportmachine 3 BOA®120."
    },

    # HF
    {
        "name": "HF 110",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 110,
        "last_mm": 102,
        "sizes": [24.5, 25.5, 26.5, 27.5, 28.5, 29.5, 30.5],
        "price": 649.99,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294739_BGR_1.png?v=1759850791",
        "notes": "No matter the terrain or the conditions, the Sportmachine 3 BOA®120 unlocks everything the mountains have to offer. This boot features an integrated BOA®Fit System to enhance comfort and precision, while seamlessly integrating with redesigned Tri Force technology to increase performance. For an even more personalized fit, the shells and liners can be readily customizable. And with 3D Cork Fit Primaloft liner, you will be able to ski run after run while remaining warm and dry. Ski your favorite terrain with the Sportmachine 3 BOA®120."
    },
    
# Womens Nordica

    # Womens Promachine
    {
        "name": "Promachine 3 85",
        "brand": "Nordica",
        "styles": [],
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
        "styles": ["all-mountain"],
        "flex": 98,
        "last_mm": 95,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100307176.Black.LightBlue.White.1.png?v=1776119968",
        "notes": "The all-new Promachine 3 95 W is the go-to boot for women seeking a proper performance fit, without the stiff flex of other Promachine models. With a 95 flex rating, it’s built for lighter skiers, young adults, or those who prefer a smooth, agile, and confident ride. Developed with top bootfitters and Nordica's R&D team, this women’s-specific boot features a redesigned shell with 3Force Frame Technology and a 3D Cork Fit liner for a progressive flex, enhanced lateral support, and efficient energy transfer. Whether you're building confidence on groomers or exploring more varied terrain, the Promachine 3 95 W gives you the tools to progress. Ski strong, stay comfortable, and let every run build your confidence."
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
        "styles": ["all-mountain"],
        "flex": 95,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5, 27.5],
        "price": 699.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100279286.BlackLightBlueWhite.1.png?v=1727902346",
        "notes": "When it’s time to explore the entire mountain, slip into Nordica’s Speedmachine 3 BOA® 95 W. With an emphasis on comfort and performance, this legendary all-mountain boot features the BOA® Fit System for exceptional microadjustability. This innovative fit system pairs perfectly with Nordica’s Tri Force technology to maximize the transmission of energy, making it especially easy to initiate turns. A slightly softer flex offers a smooth ride without compromising precision. And for a truly personal fit, the liner and shell can readily be customized. No matter the terrain or conditions, Nordica’s Speedmachine 3 BOA® 95 W amplifies your confidence and fun."
    },
    {
        "name": "Women's Speedmachine 3 105 BOA DD",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 105,
        "last_mm": 100,
        "sizes": [22.5, 23.5, 24.5, 25.5, 26.5],
        "price": 849.99,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100294741_GBA_1.png?v=1755200682",
        "notes": "The Speedmachine 3 DD BOA® 105 W is designed for versatility and performance, allowing you to confidently explore the entire mountain. This boot features a women's specific fit and a Dual Dial Fit System from BOA®, allowing you to experience performance and comfort. Nordica redesigned the Tri-Force shell to pair perfectly with the BOA® Fit System to maximize energy transmission for unrivaled power, efficiency, and control. And for a more personal fit, its customization features allow you to truly make this boot your own. Experience a new level of skiing comfort with the Speedmachine 3 DD BOA® 105 W."
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

    # HF
    {
        "name": "Women's HF 85",
        "brand": "Nordica",
        "styles": ["all-mountain"],
        "flex": 85,
        "last_mm": 102,
        "sizes": [23.5, 24.5, 25.5, 26.5, 27.5],
        "price": 649.95,
        "image": "https://www.sportsbasement.com/cdn/shop/files/100279287.BlackGreenAquamarine.1.png?v=1727904971",
        "notes": "Comfort from beginning to end. As the saying goes, the HF 85 W places an emphasis on comfort from the moment you slip into it to the moment you call it a day. Thanks to the softer lighter shell and 3D cork liner, this boot is fully customizable to ensure comfort and performance while providing the perfect fit. Specially designed for women skiers, the HF 85 W offers a smooth, flowing ride every ride."
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
