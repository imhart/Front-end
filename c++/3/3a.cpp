#include <iostream>
#include <thread>
#include <chrono>

using namespace std;

int main() {
    for (int bomb = 15; bomb >= 0; bomb--) {
        // Cofnij kursor na początek poprzedniej linii
        cout << "\rCzas: " << bomb << " sekund   " << flush;
        std::this_thread::sleep_for(std::chrono::seconds(1));
    }
    // Przejście do nowej linii po zakończeniu odliczania
    cout << endl << "Odliczanie zakończone!" << endl;
    return 0;
}
 