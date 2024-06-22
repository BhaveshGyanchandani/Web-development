#include<iostream>
using namespace std; 

class hero{
// a class named hero is created 
// a classs is a user defined datatype 
//properties of hero


int health;//iske peeche na public hai na private hai so isse by default private le liya hai
public://ab iske neeeche wala public ho gya hai
int level;

//created our constructor 
hero(){
    //jb hm apna aisa constructor bnate hai toh fir computer wala default constructor delete ho jata hai ab bs ye wala cons is operte hoga
    cout<<"constructor callled"<<endl;
}

//paramaterized constructor
hero (int health){
    cout << "this -> "<<this <<endl;
    ///lets say agr ek health ka alg se box hai ab mein uss heqalth ki value ko a ya P1 wale object ki value mein dalna chata hu toh mein iss cosnstructor ka use krunga 
    //but yha  health=health; ye ho rha hai ki mein alg wale health ke box mein ussi ki value ko daal rha hu jo ki shi nhi hai
    //issliye hum yha this keyword ko smjhenge
    //ismein hum ek dabba bnaenge "this" naam se ismein hum a ya P1 ka object ka adddrss dalenge
    //health=health; wrong
    this->health=health;//mtlb this ke andr ek address store hai ye this ke paas jayega this apne address se object ke paas point krega 
    //aur wha jayega ab bhar wale health ke value object ke health mein store ho jayegi
    
}
hero (int health , int level){
    this->level=level;
    this->health=health;
}


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
cout <<"constructor is not called"<<endl;
//object created statically
hero a(100); // ye hero naam se
cout << "cons is called"<<endl;
 cout << "the addreess of a is : "<<&a<<endl;
a.print();
//  a.gethealth();
 //dynamically
 hero *b=new hero(178);//will work same as static with () or without ()
b->print();

hero temp(22,222); //temp bhi a ke jaisa ek object hai ab ismein hmnbe value daal di jo ki upr constriuctor mein jayngi
temp.print();
return 0;
}