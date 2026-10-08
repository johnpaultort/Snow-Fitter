import json

# Format
#    {
#        "name": "Pivot 11",
#        "brand": "Look",
#        "widths":[95, 105, 115],
#        "price": "279.95",
#        "image": "https://www.sportsbasement.com/cdn/shop/files/100288955_WHBK_1.png?v=1754107554",
#        "notes": ""
#    },

SKI_BINDINGS = [

    # Look
    {
        "name": "Pivot 11",
        "brand": "Look",
        "widths":[95, 105, 115],
        "price": "299.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100288955_WHBK_1.png?v=1754107554",
        "notes": ""
    },
    {
        "name": "Pivot 2.0 13 GW",
        "brand": "Look",
        "widths": [95, 105, 115],
        "price": "399.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100288954_BLST_1.png?v=1754107555",
        "notes": "In the pursuit of excellence, Pivot 2.0 13 GW introduces enhancements such as extended boot-sole-length adjustments, updated DIN setting screws, better durability with specific protections for ski edges and poles, and a 105mm brake ensuring compatibility with various ski shapes and sizes. Unleash the evolution of the Pivot 2.0 and discover a binding that not only adapts to your style but elevates your entire skiing journey."
    },
    {
        "name": "Pivot 2.0 15 GW",
        "brand": "Look",
        "widths": [95, 105, 115],
        "price": "499.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100270601.Bluesteel.1.png?v=1754107674",
        "notes": "The Look Pivot 2.0 15 GripWalk® ski bindings raise the performance bar while honoring the Pivot design and making it more durable than ever. Every detail of the Pivot 2.0 from the unmistakable turntable heel to the short mounting zone and Gripwalk® boot sole compatibility is about performance, retention and release that you can trust. Powerful shock absorption and travel equals consistent performance when you need it most. It's compatible with Alpine ISO 5355 and GripWalk® boot soles ISO 23223 A."
    },
    
    # Marker
    {
        "name": "Youth FDT 4.5",
        "brand": "Marker",
        "widths": [85],
        "price": "139.99",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100254321_BLK_1.png?v=1729876163",
        "notes": "Marker's 4.5 Junior bindings offer high-level features like the 4-linkage JR toe and Compact JR 2 heel to the very youngest of skiers, allowing them to easily step in and out of the binding on their own. Apart from that the binding provides great skiing safety and always enough pressure on the edge. Compatible with Children and Adult boots (type A and C) and GripWalk boots."
    },
    {
        "name": "Youth 7.0",
        "brand": "Marker",
        "widths": [85],
        "price": "149.95",
        "image": "https://www.sportsbasement.com/cdn/shop/products/1002521820-BLKANT-1.png?v=1681254988",
        "notes": "Marker's 7.0 Junior bindings offer high-level features like the 4-linkage Jr toe and Compact Jr 2 heel to the very youngest of skiers, allowing them to easily step in and out of the binding on their own. The binding provides great riding performance and always enough pressure on the edge. Compatible with Children and Adult boots (type A and C) and GripWalk boots."
    },
    {
        "name": "Squire 11",
        "brand": "Marker",
        "widths": [90, 100, 110],
        "price": "249.99",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100224158_BLK_1.png?crop=center&height=800&v=1754107711&width=800",
        "notes": "The Squire 11 is a progressive, very light and sturdy rookie freeride/freestyle binding, GripWalk-ready and equipped with state-of-the-art components. The completely redesigned Squire 11 has progressive looks and is specially designed for lighter weight but fully motivated freeride and freestyle rookies. An extensively improved, lightweight Triple Pivot Light toe piece features a distinctive Ice Off Rail to keep the sole free of snow and ice. A state-of-the-art Hollow Linkage heel with its wider boot holder reduces the step-in force by approximately 35%, even with GripWalk soles. All in all, the Squire 11 is very compact and, despite its GripWalk compatibility, only 24 mm high, which allows a very direct feel and ski control. "
    },
    {
        "name": "Griffon X 13",
        "brand": "Marker",
        "widths": [90, 105, 120],
        "price": "299.99",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305309_BLK_1.png?v=1779991584",
        "notes": "The Marker Griffon X 13 ski bindings are the all-mountain and freeride workhorse of Marker's X-Series lineup, trusted by skiers who push hard across groomers, chop, and off-piste terrain. With a DIN range of 4 to 13 and a redesigned 14mm stand height (down from 24mm), the Griffon X 13 delivers a more direct, responsive connection to the ski than the binding it replaces."
    },
    {
        "name": "Griffon 13 X MWerks",
        "brand": "Marker",
        "widths": [90, 105, 120],
        "price": "429.99",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100293343_BKGR_1.png?v=1782407508",
        "notes": "This performance freeride binding is optimized for lighter riders and is equipped with the same features as its big brother, the Jester X MWerks, apart from a DIN-setting of up to 13. The housing of the TP Elite X toe is made from a single cast making it even lighter, more compact and therefore more stable. The anti-ice rail is more robust than ever, thanks to the new alloy. The most impressive feature is the incredibly direct power transmission made possible by the integrated brake, allowing a stand height of 14 mm instead of the previous 24 mm. Whether in the park, in the pipe, or off-piste, the Griffon X 13 MWerks delivers super-precise control with a Z-value of 4 to 13, allowing the ski, binding, and boot to merge into a single unit."
    },
    {
        "name": "Jester 16 x MWerks",
        "brand": "Marker",
        "widths": [105, 120],
        "price": "489.99",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100293342_BKOR_1.png?v=1754107226",
        "notes": "Since its launch over 10 years ago, the name Jester has stood for the best freeride performance in literally all conditions. The Jester X 16 MWerks features some amazing improvements: The TP Elite X toe piece housing is made from a single cast, making the whole construction even lighter, more compact and therefore more stable. Thanks to the new alloy the anti-ice rail is more robust than ever and ensures great lateral power transmission. The high-quality metal frame results in a shorter yet more stable and reliable construction. But the most impressive feature, made possible by the brake integrated into the design, is the stand height of 14 mm instead of the previous 24 mm. This makes the X Series bindings the lowest bindings on the market! Power transmission couldn’t be more direct! Whether in the park, in the pipe or off-piste, with a DIN-setting of 6 - 16, the Jester X MWerks delivers ultra-precise control and allows ski, binding and boot to basically merge into a single unit."
    },


    
    # Salomon
    {
        "name": "Youth C5 GW",
        "brand": "Salomon",
        "widths": [85],
        "price": "119.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305014-LTGRYBLK-1.png?v=1783109903",
        "notes": "The Salomon Youth C5 GW is a lightweight and easy-to-use binding that is perfect for young skiers who are just starting out. It is designed to keep young skiers comfortable and safe on the slopes, with the right performance level. Because they slide directly onto an integrated track system, they allow for quick tool-free adjustments as your child's foot grows. It features a low DIN range of 0.75 - 4.5 and is fully compatible with both standard Alpine and GripWalk (GW) boot soles, ensuring easy entry and reliable release for young riders."
    },
    {
        "name": "Youth L7 GW",
        "brand": "Salomon",
        "widths": [90, 100],
        "price": "129.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305031-BLKMET-1.png?v=1783106451",
        "notes": "Built for young skiers still building their technique, the Salomon L7 GW Ski Bindings give beginners a solid foundation to progress quickly on the slopes. Salomon's automatic wing and toe adjustment takes the guesswork out of setup."
    },
    {
        "name": "Strive 10 GW",
        "brand": "Salomon",
        "widths": [80, 90],
        "price": "199.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100305014-LTGRYBLK-1.png?v=1783109903",
        "notes": "As the lightest option in Atomic's Strive lineup, the Strive 10 GW Ski Bindings are built with a lower DIN range that suits newer or lighter-weight skiers. The LDN toe design lowers your stance closer to the snow, sharpening feedback, power transfer, and responsiveness on every turn. These bindings also offer flexible boot compatibility, working with both Alpine ISO 5355 and GripWalk ISO 23223 soles."
    },
    {
        "name": "Strive 12 GW",
        "brand": "Salomon",
        "widths": [90, 100, 115],
        "price": "239.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/L47322700__7b8bea2180fdecdd09906e0759d0434b.png?crop=center&height=800&v=1754107706&width=800",
        "notes": "Designed for skiers looking for an increased sense of power and control, and shorter response time, Salomon’s Strive 12 bindings feature an ultra-low profile toe piece that lowers your center of gravity when on the skis. Feel every aspect of the terrain you are on and get more out of every day you spend on your skis. An unrivaled 47mm of elasticity builds confidence and security at speed. The low-profile toe piece creates a low center of gravity, providing an unmatched on-snow feel. A wide (72 mm) AFD pad, gives skiers extra contact between boot and binding. This adds stability and increases power transfer from binding to ski. A low center of gravity creates unmatched ski-to-snow connectivity. Enhanced sensitivity equals quicker reaction, heightened control, and a better day on skis."
    },
    {
        "name": "Strive 14 GW",
        "brand": "Salomon",
        "widths": [90, 100, 115, 130],
        "price": "279.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100248134_BLK_1.png?v=1746656803",
        "notes": "The Strive 14 features an ultra low-profile toe piece which creates a low center of gravity. This enhances a skier’s power, control, and response due to enhanced sensitivity. The binding lets the characteristics of the ski and slope excel, creating better days on the mountain."
    },
    {
        "name": "Strive 14 MN",
        "brand": "Salomon",
        "widths": [100, 115, 130],
        "price": "299.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100258748_SPNK_1.png?v=1754107704",
        "notes": "The Strive 14 features an ultra low-profile toe piece which creates a low center of gravity. This enhances a skier’s power, control, and response due to enhanced sensitivity. The binding lets the characteristics of the ski and terrain excel, creating better days on skis."
    },
    {
        "name": "Strive 16 MN",
        "brand": "Salomon",
        "widths": [90, 100, 115, 130],
        "price": "399.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100248133-BLK-1.png?crop=center&height=800&v=1683821506&width=800",
        "notes": "Whether it’s all-mountain, freeride or freestyle skiing, the Atomic Strive 16 MN delivers a super stable platform that excels in every situation and snow condition. The low center of gravity of the LDN Toe places the binding closer to the ski for better next-to-snow feel, more direct response and quicker reaction throughout the turn. A low profile, 3-Part Heel absorbs vibrations while ensuring friction-free release when needed. The slightly ramped chassis positions the skier in a more neutral stance while preserving the natural flex and arc of the ski. Multi Norm certified, this binding works with all ISO norm ski boot soles – DIN, Touring and Walk To Ride (WTR). The Manual Toe Height Adjustment allows for instant adjustments between different boot norms quickly and easily. Robust and lightweight, Strive 16 MN shaves weight without compromising durability by using just enough metal where it’s needed most. Low, dynamic and neutral, this binding is most at home when its charging hard."
    },
    {
        "name": "S/Lab Shift2 13 MN",
        "brand": "Salomon",
        "widths": [90, 100, 110, 120],
        "price": "679.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100270447-BLK-1.png?v=1729109767",
        "notes": "Pushing the iconic SHIFT recipe to new heights, Salomon’s SHIFT² bindings are trailblazing a new era of downhill skiability and uphill experience. Meticulously redesigned, these 13 DIN bindings elevate your skiing experience while remaining faithful to the revolutionary concept that made the original SHIFT bindings stand out."
    },
    
    # Armada
    {
        "name": "Strive 12 GW",
        "brand": "Armada",
        "widths": [90, 100],
        "price": "249.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100259251_GRN_1.png?v=1754107431",
        "notes": "The STRIVE 12 GW ticks the boxes with a low center of gravity and a neutral stance in a GRIPWALK compatible package. Lightweight and secure with a great feel, it's everything a modern binding should be."
    },
    {
        "name": "Strive 14 GW",
        "brand": "Armada",
        "widths": [90, 100, 115],
        "price": "129.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100248213_MGRN_1.png?v=1782178029",
        "notes": "The STRIVE 14 GW ticks the boxes with a low center of gravity and a neutral stance in a GRIPWALK compatible package. Lightweight and secure with a great feel and high DIN range, it's everything a modern binding should be."
    },
    
    # Atomic
    {
        "name": "Strive 12 GW",
        "brand": "Atomic",
        "widths": [90, 100, 115],
        "price": "239.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306682-BLK-2.png?v=1776708168",
        "notes": "An alpine binding with limitless capabilities, the lightweight Atomic Strive 12 GW provides the perfect entry point into freeskiing, allowing you to ski exactly the way you want, wherever you want. The low center of gravity LDN Toe places the binding closer to the ski for better next-to-snow feel, more direct response and quicker reaction throughout the turn. An easy step-in toe adapts automatically to your alpine normed boot height and width and ensures constant release values. A slightly ramped chassis positions the skier in a more neutral stance. The super light 3-part heel offers easy step-in while delivering convenience, comfort, and consistency. One of the lightest DIN-12 bindings on the market, the robust Strive 12 GW shaves weight without compromising durability by using just enough metal where it’s needed most. The result is an all-mountain binding with a lower swing weight for easier maneuverability and strong, proficient skiing all day long."
    },
    {
        "name": "Strive 14 MN",
        "brand": "Atomic",
        "widths": [90, 100, 115, 130],
        "price": "299.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306683-BLK-1.png?v=1776715256",
        "notes": "Whether it’s all-mountain, freeride or freestyle skiing, the Atomic Strive 14 MN delivers a super stable platform that excels in every situation and snow condition. The low center of gravity of the LDN Toe places the binding closer to the ski for better next-to-snow feel, more direct response and quicker reaction throughout the turn. A low profile, 3-Part Heel absorbs vibrations while ensuring friction-free release when needed. The slightly ramped chassis positions the skier in a more neutral stance while preserving the natural flex and arc of the ski. Multi Norm certified, this alpine ski binding works with all ISO norm ski boot soles – DIN, Touring and Walk To Ride (WTR). Manual Toe Height Adjustment allows for instant adjustments between different boot norms quickly and easily. Robust and lightweight, Strive 14 MN shaves weight without compromising durability by using metal only where it’s truly needed. Low, dynamic and neutral, this binding is most at home when it’s charging hard."
    },
    {
        "name": "Strive 16 MN Bent Chetler",
        "brand": "Atomic",
        "widths": [90, 100, 115, 130],
        "price": "399.95",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306685-SUNBEAM-1.png?v=1776722028",
        "notes": "Whether it’s all-mountain, freeride or freestyle skiing, the Atomic Strive 16 MN delivers pro-level performance in a stable platform that excels in every situation and snow condition. The low center of gravity of the LDN Toe places the binding closer to the ski for better next-to-snow feel, more direct response and quicker reaction throughout the turn. The slightly ramped chassis positions the skier in a more neutral stance while preserving the natural flex and arc of the ski. A widebody, 3-Part Metal Heel offers a robust connection for extreme durability, strong retention, and stability. Multi Norm certified, this alpine ski binding works with all ISO norm ski boot soles – DIN, Touring and Walk To Ride (WTR). The Manual Toe Height Adjustment makes for switching between different boot norms quick and easy. The Strive 16 MN is the go-to binding for the Atomic Freeski team, trusted by athletes like Justine Dufour-Lapointe, Nico Porteous and Tess Ledeux for its uncompromising performance."
    },
    
    # Only 3 models
    #Tyrolia
    {
        "name": "Protector Evo PR 11 GW",
        "brand": "Tyrolia",
        "widths": [85, 95],
        "price": "319.00",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306790_BLK_1.png?v=1778613642",
        "notes": "The Protector EVO PR 11 GW binding features innovative Full Heel Release (FHR) technology and promises outstanding safety by significantly reducing release forces in forward and especially backward twisting falls. Thanks to the intelligent 180° heel release, horizontal and vertical, the load on the knee is significantly reduced, ensuring safer skiing. This leads to a significant reduction and mitigation of knee injuries. As the binding is based on PowerRail technology, it works with all skis with a pre-mounted PR Base. Moreover, the binding is GripWalk compatible and can be used with alpine and GripWalk ski boots. This binding innovation is for all piste skiers, whether young or old, beginner or advanced. In addition to the innovative FHR technology of the updated heel, the VX toe offers all TYROLIA safety features, such as BTR kinematics, AFS and Full Diagonal toe."
    },
    {
        "name": "Protector Evo PR 13 GW",
        "brand": "Tyrolia",
        "widths": [85, 95],
        "price": "369.00",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306789_BLK_1.png?v=1778613224",
        "notes": "The Protector EVO PR 13 GW binding features innovative Full Heel Release (FHR) technology and promises outstanding safety by significantly reducing release forces in forward and especially backward twisting falls. Thanks to the intelligent 180° heel release, horizontal and vertical, the load on the knee is significantly reduced, ensuring safer skiing. This leads to a significant reduction and mitigation of knee injuries. As the binding is based on PowerRail technology, it works with all skis with a pre-mounted PR Base. Moreover, the binding is GripWalk compatible and can be used with alpine and GripWalk ski boots. This binding innovation is for all piste skiers, whether young or old, beginner or advanced. In addition to the innovative FHR technology of the updated heel, the VX toe offers all TYROLIA safety features, such as BTR kinematics, AFS and Full Diagonal toe."
    },
    {
        "name": "Protector+ Attack 14 GW",
        "brand": "Tyrolia",
        "widths": [95, 110, 120],
        "price": "379.00",
        "image": "https://www.sportsbasement.com/cdn/shop/files/100306788_WHT_1.png?v=1778610897",
        "notes": "The Protector+ Attack 14 GW delivers enhanced performance with lower stand height and higher DINs, offering greater precision and protection. The Protector+ Attack 14 GW binding combines the innovative Full Heel Release technology with the reliability and performance of the Attack series. Innovative FHR technology delivers intelligent 180° release, both horizontally and vertically. This technology can lower release values in forward and especially backward twisting fall situations, which reduces the risk of suffering a knee injury." + "The binding is extremely versatile and ready for use in any terrain. The binding is equipped with the FR PRO 3 toe, which guarantees constant release values and can be easily adjusted to different boot sole heights thanks to the revised AFD. The Protector+ Attack 14 GW is compatible with adult alpine ski boots (ISO 5355 TYPE A) and adult walk ski boots (ISO 23223 TYPE A)."
    }
]
