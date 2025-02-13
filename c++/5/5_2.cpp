#include <iostream>

using namespace std;

int fib[100000];
int n;

// tworzenie ciągu Fibonacciego

int main()
{
    cout << "Podaj liczbę n: ";
    cin >> n;
    // pierwsze dwa elementy ciągu Fibonacciego
    fib[0] = 0;
    fib[1] = 1;
    // obliczanie ciągu Fibonacciego
    for (int i = 2; i < n; i++)
    {
        fib[i] = fib[i-1] + fib[i-2]; 
    }

    cout << endl << "Ciąg Fibonacciego: ";
    // wypisanie ciągu Fibonacciego
    for (int i = 1; i < n; i++)
    {
        cout << endl << i << ": " << fib[i] << " ";
    }
}