import SwiftUI

@Observable
class GearCart {
    var products: [Product] = []
    
    var count: Int {
        products.count
    }
    
    func add(_ product: Product) {
        guard !products.contains(where: {
            $0.name == product.name
        }) else {
            return
        }
        
        prodcuts.append(product)
    }
    
    func remove(_ product: Product) {
        products.removeAll()
    }
    
    func contains(_ product: Product) -> Bool {
        products.contains {
            $0.name == product.name
        }
    }
}
