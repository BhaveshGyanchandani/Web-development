
export default function Tabs({children, buttons , ButtonsContainer}){

    // if we want to select a custom wrapper we can use prop ...which will wrap the {buttons}
    //  but if we want to set a default ButtonsContainer value in parameter we can do as...
    // function Tabs({children, buttons , ButtonsContainer ='menu' }) for custom component we write as ButtonsContainer=Section...
    // the menu is set as a string bcz its a built-in element ( ie tag)
    return (
        <>
             <ButtonsContainer>
            {buttons}
             </ButtonsContainer>
            {children}
        </>
    );
}

// we didnt set rthe TabButton here bcz now we would need multiple thiings to manage it like..handleClick,onClick , Onselect,selectedTopicand etc
// and we cant reuse it at those places where we dont have selectedTopic or something so it wouldnt fit everywhere not has less and complex reusbalitiy
// for this we would require multiple props in destrcuting to manage them....which would make it messy here...so we will manege that in TabButton.js


