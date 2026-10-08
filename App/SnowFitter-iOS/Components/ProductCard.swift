struct PorductCard: View {
    let product: Product
    
    var body: some View {
        VStack(alignment: .leading, spacing: 10) {
            
            Text(product.brand)
                .font(.caption)
                .foregroundStyle(.secondary)
            
            Text(product.name)
                .font(.headline)
            
            Text(product.price)
                .font(.subheadline)
            
            Button("Add to List") {
                
            }
            
            Button {
                
            } label: {
                Image(systemName: "heart")
            }
        }
    }
}
