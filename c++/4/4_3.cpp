#include <iostream>
#include <windows.h>
#include <cstdlib>
#include <ctime>

using namespace std;

int main()
{
    cout << "WITAJ W LOSOWANIU! Za 3 sekundy nastąpi zwolnienie blokady" << endl;
    Sleep(3000);
    srand(time(NULL));

    int liczby[6]; // Tablica na wylosowane liczby
    int liczba;
    bool unikalna;

    for (int i = 0; i < 6; i++)
    {
        do
        {
            liczba = rand() % 49 + 1;
            unikalna = true;

            // Sprawdzanie, czy liczba już była wylosowana
            for (int j = 0; j < i; j++)
            {
                if (liczby[j] == liczba)
                {
                    unikalna = false;
                    break;
                }
            }
        } while (!unikalna); // Powtarzaj, aż znajdziesz unikalną liczbę

        liczby[i] = liczba; // Dodanie liczby do tablicy
        Sleep(1000);
        cout << liczby[i] << "\t" << " wylosowana liczba" << endl;
    }

    return 0;
}
