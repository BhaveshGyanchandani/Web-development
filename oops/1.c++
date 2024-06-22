#include<iostream>
using namespace std; 

class hero{
// a class named hero is created 
// a classs is a user defined datatype 
//properties of hero

private:
int health;//iske peeche na public hai na private hai so isse by default private le liya hai

public://ab iske neeeche wala public ho gya hai
int level;
void print(){
cout<<health<<endl;//can be accessed since it is inside the class
}

int gethealth(){
    return health;// gives data of health
}
 
 int getlevel(){
    return level; // gives data of level
 }

 void sethealth(int h){

health=h; //used to set health
 }

void setlevel(int l){
    level=l;
}



};

int main(){

//an object of hero is created named P1 that contiains the data of class hero
hero P1; 
cout << "size of hero class is : " << sizeof(P1)<<endl;

//but how to access properties of hero classs 
//we can acess it by using "." ex-- P1.health to access health
//but it will show error cz it is by default private modifer 
//theere are 3 modifiers public , private , protected
//private wali chhhez sirf class ke andr hi access kr skte hai
//public wali properties ko class ke bhar bhi access kr skte hai
//protected mein 
cout << "P1 health is : "<<P1.gethealth()<<endl;  //gives garbage value
cout << "P1 level  is : " << P1.getlevel()<<endl; //gives garbage value
//gethealth is used when our datatype doesnot have the public permission instead has private permisiion so we use get and set to get output 
P1.sethealth(119);//sets health of object in the class
P1.setlevel(200);
cout << "P1 new level  is : " << P1.getlevel()<<endl;
cout << "P1 new health  is : " << P1.gethealth()<<endl;
// P1.health=70; cannot be used since it is now private if it was public we could use it at line 61 also
P1.level=99;
// cout << "old health of P1 is : " << P1.health<<endl;//error since it is outside the class
cout << "old level of P1 is : " << P1.level<<endl;
return 0;
}
