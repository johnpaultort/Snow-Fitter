import SwiftUI

struct SnowboardHubView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Snowboard")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            Text("Choose a snowboard fitting tool")
                .foregroundStyle(.secondary)
        }
        .navigationTitle("Snowboard")
    }
}

#Preview {
    SnowboardHubView()
}
