import SwiftUI

struct LandingView: View{
    var body: some View{
        NavigationStack{
            ScrollView{
                VStack(spacing: 30) {
                    
                    VStack(spacing: 6) {
                        Text("SPORTS BASEMENT")
                            .font(.system(size: 42, weight: .black))
                            .tracking(1.5)
                        
                        Text("Fitter")
                            .font(.system(size: 42, weight: .black))
                            .tracking(2)
                        
                        Text("Find the right gear for your next adventure.")
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                            .multilineTextAlignment(.center)
                            .padding(.top, 6)
                    }
                    .padding(.top, 40)
                    
                    Text("What are you shopping for?")
                        .font(.title2)
                        .fontWeight(.bold)
                        .padding(.top, 15)
                    
                    SportsSelectionView()
                        .padding(.horizontal, 20)
                    
                }
                .frame(maxWidth: 700)
                .frame(maxWidth: .infinity)
            }
            .navigationBarHidden(true)
        }
    }
}

#Preview {
    LandingView()
}
