#include <iostream>

using namespace std;

int liczba1, liczba2, wynik;

int main() 
{
    cout<< "Program kalkulator: " <<endl; 
    cout<< "Podaj liczbe 1:   " ; 
    cin>>liczba1;
    
    cout<< endl << "Podaj liczbe 2:   " ; 
    cin>>liczba2;


    cout<< endl << "MENU GŁÓWNE " <<endl;
    cout<<"____________ " <<endl;
    cout<<"Dodawanie " <<endl;
    cout<<"Odejmowanie " <<endl;
    cout<<"Mnożenie " <<endl;
    cout<<"Dzielenie " <<endl;
    cout<<"Wybierz " <<endl;

    switch (wybor)
    {
    case 1:
            cout<< "Wynik dodawania: " << liczba1 + liczba2 << endl;
    break;
    }


    return 0;
}