#include <iostream>

using namespace std;

int uczniowie, cukierki, otrzymajo, zostanie; 
int main(){
    cout << "liczba osób w klasie: ";
    cin >> uczniowie;

    cout << "liczba cukierków : ";
    cin >> cukierki;

    otrzymajo = cukierki / (uczniowie-1);
    cout << "Tyle cukierków dostanie każdy uczeń: " << otrzymajo << endl;

    zostanie = cukierki - otrzymajo * (uczniowie-1);
    cout << "Zostanie na wieczór:  " << zostanie;
}

