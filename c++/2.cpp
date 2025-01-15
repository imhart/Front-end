#include <iostream>

using namespace std;

string pin,login,haslo;
int age;

int main(){
    cout<<"-------------------"<<endl;
    cout<<"WITAJ W NASZYM BANKU"<<endl;
    cout<<"-------------------"<<endl;
    cout<<"podaj pin:  ";
    cin >> pin; 
    cout<<"-------------------" <<  endl;
    if (pin == "1234") {
    cout << "DOBRY pin" <<endl ;
    } else {
        cout<<"ZłY pin" <<endl ;
        return 0;
    }
    cout<<"-------------------"<<endl;
    cout<<"LOGOWANIE"<<endl;
    cout<<"-------------------"<<endl;
    cout<<"LOGIN:  ";
    cin >> login;
    cout<<"HASLO:  ";
    cin >> haslo;
    cout<<"-------------------"<<endl;
    
    if ((login == "1234") && (haslo == "haslo"))  {
    cout << "ZALOGOWANY";
    } else {
        cout<<"ZłY DANE" << endl;
    }

    cout << "-----------------" << endl;
    cout << "PODAJ WIEK:  ";
    cin >> age;
    if (age > 18) {
        if (age > 35) {
            cout << "MOŻESZ ZOSTAĆ PREZYDENTEM, wiek > 35 pełnoletni" << endl;
        } else {
            cout << "Nie MOŻESZ ZOSTAĆ PREZYDENTEM, wiek < 35 pełnoletni" << endl;
        }
    } else {
        cout << "Jesteś niepełnoletni" << endl;
    }
    cout << "-----------------" << endl;
    
    return 0;
}