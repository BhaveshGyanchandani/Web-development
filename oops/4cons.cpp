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

///copy constructor
hero(hero temp){
    this->health=temp->health;
    this->level=temp->level;
}

void print(){
cout<<"the health is :"<<this->health<<endl<<"the level is : "<<this->level<<endl;
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

hero paul;
paul.sethealth(100);
paul.setlevel(110);
//or 
// hero paul(100,110)
paul.print();

//copy constructor
hero law(paul);
    //law ke andr paul ki value daal do
law.print();

//do alg object bnanae ab paul mein valyue daali ab paul ki value kko law mein bhi pass ya copy kr dynamically


return 0;
}