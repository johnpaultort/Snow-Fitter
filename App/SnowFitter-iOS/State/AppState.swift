import SwiftUI

@Observable
class AppState {
    var selectedSport: String?
    var selectedTool: String?
    
    func reset() {
        selectedSport = nil
        selectedTool = nil
    }
}
