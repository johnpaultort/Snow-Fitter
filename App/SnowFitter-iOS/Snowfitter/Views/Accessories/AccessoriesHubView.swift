import SwiftUI

struct AccessoriesHubView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Accessories")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            Text("Find the accessories you need")
                .foregroundStyle(.secondary)
        }
        .navigationTitle("Accessories")
    }
}

#Preview {
    AccessoriesHubView()
}
