#include<iostream>
using namespace std; 

class hero{
// a class named hero is created 
// a classs is a user defined datatype 
//properties of hero


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

//it is a static memory declaration
hero a; 
a.sethealth(100);
a.setlevel(99); // or a.level=99;
cout << "level is :"<<a.level<<endl;
cout <<"health is :"<<a.gethealth()<<endl;//bcz wehave the private permisiion for health

//dynamiclaly memory declaraation
hero *b=new hero; //b ke andr new hero ka address store kr liya
b->level=100; // or b->setlevel(100); since it is used to set 
b->sethealth(199);

cout << "level is :"<<(*b).level<<endl; //b.level is not used since b has its address not the value
cout <<"health is :"<<(*b).gethealth()<<endl; //so (*b) is used to get the value stored in the container which has adress stored in b

//or


cout << "level is :"<<b->level<<endl; //withput above b->set it will give garbage values of both
cout <<"health is :"<<b->gethealth()<<endl;
return 0;


// a.her() iska mtlb a object ka hero wala function call krdo 
//ye constructor hai jo by default bn jata hai
//isse hum default constructor khete hai
}