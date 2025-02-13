#include <iostream>
#include <cstdlib>
#include <time.h>
#include <stdio.h>

using namespace std;

int liczba, strzal, ile_prob=0;


int main()
{
    cout<<"wylowuj licznę od 1 do 100:  ";
    srand(time(NULL));
    liczba = rand()%100+1;
    // cout<<liczba<<endl;

    while (strzal!=liczba)
    {
        ile_prob++;

        cout<<"Zgadnij jaka liczba: ";
        cin>>strzal;

        if (strzal==liczba)
        {
            cout<<"Zgadłeś! Wygrywasz!"<<endl;
            cout<<"Zgadłęś za "<< ile_prob<<" próbą" <<endl;
            break;
        }
        else if (strzal<liczba)
        {
            cout<<"Za mało!    "<<endl<<endl;
        }
        else if (strzal>liczba)
        {
            cout<<"Za dużo!    "<<endl<<endl;
        }
    }

    getchar(); getchar();
    return 0;
}




