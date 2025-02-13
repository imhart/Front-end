#include <iostream>

using namespace std;

float oceny[5];
float srednia;
float suma;

// wyliczanie średniej z 5 ocen

int main()
{
    for (int i = 0; i < 5; i++)
    {
        cout << endl << "Podaj " << i+1 << " ocenae: "; 
        cin >> oceny[i];
        suma += oceny[i];
    }
    
    srednia = suma / 5; 
    cout << endl << "średnia ocen: " << srednia << endl;

}












