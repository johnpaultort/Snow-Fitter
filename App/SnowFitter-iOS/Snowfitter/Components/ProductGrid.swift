struct ProductGrid: View {
    let products: [Product]
    
    var body: some View {
        LazyVGrid(
            columns: [
                GridItem(.flexible()),
                GridItem(.flexible())
            ],
            spacing: 16
        ) {
            ForEach(products) { product in
                ProductCard(product: product)
            }
        }
    }
}
