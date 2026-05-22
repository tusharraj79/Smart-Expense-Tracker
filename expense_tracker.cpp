#include <iostream>
#include <vector>

using namespace std;

class Expense {
public:
    string title;
    float amount;
    string category;

    Expense(string t, float a, string c) {
        title = t;
        amount = a;
        category = c;
    }
};

int main() {

    vector<Expense> expenses;

    int choice;

    do {

        cout << "\n===== Expense Tracker =====" << endl;
        cout << "1. Add Expense" << endl;
        cout << "2. View Expenses" << endl;
        cout << "3. Total Expense" << endl;
        cout << "4. Exit" << endl;
        cout << "Enter choice: ";

        cin >> choice;

        if(choice == 1) {

            string title, category;
            float amount;

            cout << "Enter title: ";
            cin >> title;

            cout << "Enter amount: ";
            cin >> amount;

            cout << "Enter category: ";
            cin >> category;

            expenses.push_back(Expense(title, amount, category));

            cout << "Expense Added Successfully!" << endl;
        }

        else if(choice == 2) {

            cout << "\n----- Expense List -----" << endl;

            if(expenses.size() == 0) {
                cout << "No expenses added yet." << endl;
            }

            for(int i = 0; i < expenses.size(); i++) {

                cout << i + 1 << ". ";
                cout << "Title: " << expenses[i].title;
                cout << " | Amount: ₹" << expenses[i].amount;
                cout << " | Category: " << expenses[i].category << endl;
            }
        }

        else if(choice == 3) {

            float total = 0;

            for(int i = 0; i < expenses.size(); i++) {
                total += expenses[i].amount;
            }

            cout << "\nTotal Expense: ₹" << total << endl;
        }

        else if(choice == 4) {
            cout << "\nThank You For Using Expense Tracker!" << endl;
        }

        else {
            cout << "\nInvalid Choice!" << endl;
        }

    } while(choice != 4);

    return 0;
}
