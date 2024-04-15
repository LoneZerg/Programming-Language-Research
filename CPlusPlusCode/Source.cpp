#include <time.h>
#include <iostream>
#include <fstream>

using namespace std;

void SampleCode();

const int NUMRUNS = 1000000;

int main()
{
    ofstream fout;

    fout.open("Values.txt");

    for (int i = 0; i < 1000; i++)
    {
        clock_t start, end;
        double timeElapsed;

        start = clock();

        SampleCode();

        end = clock();

        timeElapsed = double(end - start) / CLOCKS_PER_SEC;
        fout << timeElapsed / NUMRUNS << endl;
    }

    fout.close();
}

void SampleCode()
{
    for (int i = 0; i < NUMRUNS; i++)
    {
        //float f1 = 1.1, f2 = 1.2, f3 = 1.3, f4 = 1.4, f5 = 1.5, f6 = 1.6, f7 = 1.7, f8 = 1.8, f9 = 1.9, f10 = 1.0; // [1]

        //auto f1 = 1.1, f2 = 1.2, f3 = 1.3, f4 = 1.4, f5 = 1.5, f6 = 1.6, f7 = 1.7, f8 = 1.8, f9 = 1.9, f10 = 1.0; // [2]

        /*float f1 = 1; // [3]
        float f2 = 2;
        f1 += f2;*/

        /*auto f1 = 1; // [4]
        float f2 = 2;
        f1 += f2;*/

        /*int i1 = 1; // [5]
        int i2 = 2;
        i1 += i2;*/

        /*auto i1 = 1; // [6]
        int i2 = 2;
        i1 += i2;*/

        /*float f1 = 2.1, f2 = 3.2; // [7]
        int i1 = 1, i2 = 2;
        f1 += f2;
        i1 += i2;
        f1 += i1;*/
        
        /*float f1 = 2.1, f2 = 3.2; // [8]
        int i1 = 1, i2 = 2;
        f1 += i1;
        f2 += i2;
        f1 += f2;*/
    }
}