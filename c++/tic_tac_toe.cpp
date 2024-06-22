#include <iostream>
#include <string.h>
using namespace std;
void condition();
void func3(int a, int b, char c);
char space[3][3] = {{'1', '2', '3'},
                    {'4', '5', '6'},
                    {'7', '8', '9'}};
char token;
int pos;
int row, column;

void func1()
{
    char a;
    char b;
    string name1, name2;

    // cout << "enter the name of first player :" << endl;
    // getline(cin, name1);
    // cout << "enter the name of first player :" << endl;
    // getline(cin, name2);

    cout << space[0][0] << "  |  " << space[0][1] << " |  " << space[0][2] << endl;
    cout << "___|" << "____|" << "___" << endl;
    cout << space[1][0] << "  |  " << space[1][1] << " |  " << space[1][2] << endl;

    cout << "___|" << "____|" << "___" << endl;
    cout << space[2][0] << "  |  " << space[2][1] << " |  " << space[2][2] << endl;

    cout << "   |    |   " << endl;
}
void func2()
{

    cout << "enter the token to insert" << endl;
    cin >> token;
    cout << endl
         << "enter the position to insert:";
    cin >> pos;
    switch (pos)
    {
    case 1:
        row = 0, column = 0;
        func3(row, column, token);
        // condition();
        break;
    case 2:
        row = 0, column = 1;
        func3(row, column, token);
        break;
    case 3:
        row = 0, column = 2;
        func3(row, column, token);
        break;
    case 4:
        row = 1, column = 0;
        func3(row, column, token);
        break;
    case 5:
        row = 1, column = 1;
        func3(row, column, token);
        break;
    case 6:
        row = 1, column = 2;
        func3(row, column, token);
        break;
    case 7:
        row = 2, column = 0;
        func3(row, column, token);
        break;
    case 8:
        row == 2, column == 1;
        func3(row, column, token);
        break;
    case 9:
        row = 2, column = 2;
        func3(row, column, token);
        break;
    default:
        cout << "invalid position";
        break;
    }

    if (space[row][column] != 'x' && space[row][column] != 'o') {
        space[row][column] = token;
    } else if(space[row][column] == 'x' || space[row][column] == 'o') {
        cout << "Position already taken. Try again." << endl;
        func2();
    }
func3(row, column, token);
    condition();
}
void func3(int a, int b, char c)
{
    space[a][b]=c;

    cout << space[0][0] << "  |  " << space[0][1] << " |  " << space[0][2] << endl;
    cout << "___|" << "____|" << "___" << endl;
    cout << space[1][0] << "  |  " << space[1][1] << " |  " << space[1][2] << endl;

    cout << "___|" << "____|" << "___" << endl;
    cout << space[2][0] << "  |  " << space[2][1] << " |  " << space[2][2] << endl;

    cout << "   |    |   " << endl;
}

void condition()
{
    for (int i = 0; i < 3; i++) {
        if (space[i][0] == space[i][1] && space[i][1] == space[i][2]) {
            cout << space[i][0] << " wins!" << endl;
            exit(0);
        }
        if (space[0][i] == space[1][i] && space[1][i] == space[2][i]) {
            cout << space[0][i] << " wins!" << endl;
            exit(0);
        }
    }
    // Check diagonals
    if (space[0][0] == space[1][1] && space[1][1] == space[2][2]) {
        cout << space[0][0] << " wins!" << endl;
        exit(0);
    }
    if (space[0][2] == space[1][1] && space[1][1] == space[2][0]) {
        cout << space[0][2] << " wins!" << endl;
        exit(0);
    }
}
    


int main()
{
    while (true) {
        func1();
        func2();
    }
    return 0;
}