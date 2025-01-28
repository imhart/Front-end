 #include <iostream>

 using namespace std;

int populacja=1,godzian=0;

 int main()
 {
    while (populacja < 1000000000)
    {
        godzian++;
        populacja = populacja *2;

        cout <<"mineło godzin :  "<<godzian<<endl;
        cout <<"liczba bakteri :  "<<populacja<<endl<<endl;

    }
    
    return 0;
 }