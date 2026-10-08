import SwiftUI

struct SkiHubView: View {
    var body: some View {
        VStack(spacing: 20) {
            Text("Ski")
                .font(.largeTitle)
                .fontWeight(.bold)
            
            Text("Choose a ski fitting tool")
                .foregroundStyle(.secondary)
        }
        .navigationTitle("Ski")
    }
}

#Preview {
    SkiHubView()
}
