struct SkiRecommendation{
    let name: String
    let minLength: Int
    let maxLength: Int
    let width: String
    let rocker: String
    let description: String
    let products: [Ski]
}

final class SkiRecommendationService {
    
    func recommend(
        preferences: SkiPreferences,
        skis: [Ski]
    ) -> SkiRecommendation {
        
        let weightKg =
            Double(preferences.weightLbs) / 2.205
        
        var base = preferences.heightCm
        
        switch preferences.skill {
        case "begineer":
            base -= 15
            
        case "intermediate":
            base -= 8
            
        case "advanced":
            base -= 3
            
        default:
            break
        }
        
        switch preferences.style {
        case "freeride":
            base += 6
            
        case "park":
            base += 8
            
        case "groomer":
            base += 4
            
        default:
            break
        }
        
        if weightKg > 90 {
            base += 5
        } else if weightKg < 60 {
            base -= 5
        }
        
        let minLength = base - 3
        let maxLength = base + 3
        
        let products = skis.filter {
            $0.styles.contains(preferences.style) &&
            $0.skill.contains(preferences.skill) &&
            $0.gender == preferences.gender
        }
        
        let type = skiType(
            for: preferences.style
        )
        
        return SkiRecommendation(
            name: type.name,
            minLength: minLength,
            maxLength: maxLength,
            width: type.width,
            rocker: type.rocker,
            description: type.description,
            products: products
        )
    }
    
    private func skiType(
            for style: String
        ) -> (
            name: String,
            width: String,
            rocker: String,
            description: String
        ) {

            switch style {

            case "groomer":
                return (
                    "Carving / Groomer Ski",
                    "80-88mm",
                    "Camber dominant",
                    "Narrow waist for precise carving on groomers."
                )

            case "freeride":
                return (
                    "Powder / Freeride Ski",
                    "100–130mm",
                    "Full early rise tip & tail",
                    "Wide and rockered for deep snow."
                )

            case "park":
                return (
                    "Park / Twin-Tip Ski",
                    "88–95mm",
                    "Twin-tip, slight camber",
                    "Symmetrical for skiing switch and park features."
                )

            default:
                return (
                    "All-Mountain Ski",
                    "90-100mm",
                    "Slight tip rocker",
                    "Versatile ski for any condition."
                )
            }
        }
    }
