#include <iostream>
#include <windows.h>

using namespace std;

int liczba;

int main()
{
    cout<<"WITAJ W LOSOWANIU! Za 3 sekundy następi zwolnienie blokady"<<endl;
    Sleep(3000);
    srand(time(NULL));

    for (int i = 0; i < 6; i++)
    {
        liczba = rand()%49+1;
        Sleep(1000);
        // \t - tabulator
        cout<<liczba<<"\t"<<" asdd "<<endl; 
        // \a - dźwięk  
        // cout<<liczba<<"\a"<<" asdd "<<endl;   
    }
    
}