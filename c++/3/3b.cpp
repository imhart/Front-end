#include <iostream>

using namespace std;

string imie;
int liczba;

// pętla wykonująca się tyle razy ile wpisemy z klawiatury, wypisuje nasze imie 

int main()
{
    cout<<"Podaj imie: ";
    cin>>imie;
    cout<<"podaj dodatnią liczbę całkowitą: ";
    cin>>liczba;

    for (int i = 1; i <= liczba; i++)
    {
        cout<<i<<".  "<<imie<<endl;
    }
    

    return 0;    
}