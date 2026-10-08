import SwiftUI

struct SportsSelectionView: View {
    
    var body: some View {
        VStack(spacing: 18) {
            
            NavigationLink {
                SkiHubView()
            } label: {
                SelectionCard(
                    title: "SKI",
                    subtitle: "Find skis, boots, bindings & much more",
                    systemImage: "mountain.2"
                )
            }
            
            NavigationLink {
                SnowboardHubView()
            } label: {
                SelectionCard(
                    title: "SNOWBOARD",
                    subtitle: "Find boards, boots & bindings",
                    systemImage: "snowflake"
                )
            }
            
            NavigationLink {
                AccessoriesHubView()
            } label: {
                SelectionCard(
                    title: "ACCESSORIES",
                    subtitle: "Helmets, goggles, bags & more",
                    systemImage: "backpack"
                )
            }
        }
    }
}

struct SelectionCard: View {
    
    let title: String
    let subtitle: String
    let systemImage: String
    
    var body: some View {
        HStack(spacing: 18) {
            
            Image(systemName: systemImage)
                .font(.system(size: 30, weight: .bold))
                .frame(width: 50)
            
            VStack(alignment: .leading, spacing: 5) {
                
                Text(title)
                    .font(.title3)
                    .fontWeight(.bold)
                
                Text(subtitle)
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }
            
            Spacer()
            
            Image(systemName: "chevron.right")
                .font(.headline)
                .foregroundStyle(.secondary)
        }
        .padding(22)
        .frame(maxWidth: .infinity)
        .background(
            RoundedRectangle(cornerRadius: 18)
                .fill(Color(.secondarySystemBackground))
        )
    }
}

#Preview {
    SportsSelectionView()
}
