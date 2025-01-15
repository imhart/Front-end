#include <iostream>
#include <thread>   // Dla std::this_thread::sleep_for
#include <chrono>   // Dla std::chrono::seconds

#include <windows.h>
#include <cstdlib>

using namespace std;

int main()
{
    for (int i = 1; i < 10; i++)
    {
        cout << i + " liczba" << endl ;
    }


    for (int i = 1; i <= 10; i++)
    {
        cout << i << " liczba" << endl ;
    }


    for (int bomb = 15; bomb >= 0; bomb--) {
        cout << "Czas: " << bomb << " sekund" << endl;
        std::this_thread::sleep_for(std::chrono::seconds(1));
        system("CLEAR");
    }
    std::cout << "Odliczanie zakończone!" << std::endl;
    return 0;
}