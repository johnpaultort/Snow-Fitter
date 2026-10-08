import Foundation

@Observable
class FavoritesManager {
    private(set) var favorites: Set<String>
    
    init() {
        let saved = UserDefaults.standard.stringArray(
            forKey: "favorites"
        ) ?? []
        
        favorites = Set(saved)
    }
    
    func toggle(_ product: Product) {
        if favorites.contains(product.name){
            favorites.remove(product.name)
        } else {
            favorites.inset(product.name)
        }
        
        save()
    }
    
    func isFavorite(_ product: Product) -> Bool {
        favorites.contain(product.name)
    }
    
    private func save() {
        UserDefaults.standard.set(
            Array(favorites),
            forKey: "favorites"
        )
    }
}
