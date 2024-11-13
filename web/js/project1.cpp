#include <iostream>
#include <cmath>
using namespace std;

int main() {

    double r, l, c; 
    double z;
    double w;
    double XL, XC;
    char unit1;
    char unit2;
    char pilih;
do {
    cout <<"Masukan nilai resistor (r) : ";
    cin >> r;

    cout <<"Masukkan nilai induktor (l) dalam Henry/Microhenry : ";
    cin >> l;
do{
    cout <<"Apakah kapasitansi yang diinput merupakan mikrohenry (m) atau henry (h)? (masukkan 'm' atau 'h'): ";
    cin >> unit1;
    if ((unit1 != 'm' && unit1 != 'h')){
    cout << "inputan anda tidak valid, silahkan input kembali " <<endl;
    }
} while (unit1 != 'm' && unit1 != 'h');
    
    if (unit1 == 'm') {
        l *= 1e-6; 
    }
    
    cout << "Masukkan nilai kapasitor (c) dalam Farad/Microfarad : ";
    cin >> c;

do{
    cout << "Apakah kapasitansi yang diinput merupakan mikrofarad (m) atau farad (f)? (masukkan 'm' atau 'f'): ";
    cin >> unit2;
    if ((unit2 != 'm' && unit2 != 'f')){
    cout << "input tidk valid, silahkan input kembali " <<endl;
}

} while (unit2 != 'm' && unit2 != 'f');

    if (unit2 == 'm') {
        c *= 1e-6; 
    } 

    cout <<"Masukkan nilai omega : ";
    cin >> w;

    cout << endl;

    XL= w * l;
    XC= 1/(w * c);
    z= sqrt(pow(r, 2) + pow((XL - XC), 2));
    
    cout <<"Nilai resistor (r) adalah  : "<< r<< " ohm." << endl;
    cout <<"Nilai induktor (L) adalah  : "<< l<< " Henry." << endl;
    cout <<"Nilai kapasitor (C) adalah : "<< c<< " Farad." << endl;
    cout <<"Nilai omega (w) adalah     : "<< w<< " rad/s." << endl;
    cout <<"Besar reaktansi induktif (XL) adalah  : "<< XL<< " ohm." << endl;
    cout <<"Besar reaktansi kapasitif (XC) adalah : "<< XC<< " ohm." << endl;
    cout <<"Besar impedansi tersebut (z) adalah   : "<< z<< " ohm." << endl;
    //confirm iterasi
    cout << "Apakah anda ingin menggunakan program kembali ? (Y/N) : ";
    cin >> pilih;
} while (pilih == 'Y' || pilih == 'y');
    cout << "Terima kasih telah menggunakan program ini" << endl;

    return 0;
}