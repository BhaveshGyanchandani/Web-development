import {useState} from 'react';


export function Player({initialNameOfPlayer, symbol, isActive , onChangeName }) {
    const [isEditing , setIsEditing] = useState(false); // false means for 1st run its false by default...
    const [playerName , setPlayerName] = useState(initialNameOfPlayer);
    // playerName has the value initialNameOfPlayer...(dk why its not showing in field)...and the setPlayerName is used to check/change the playerName to the updated name
    function handleEditClick(){
         // setIsEditing(!isEditing ); //  it would do like...since initailly isEditing is false so it will setIsEditing to true
        // it doesnrt INSTANTLY changes the state from false to true rather it set a SCHEDULED TIMER ( of like 1s ,1ms etc for future) so that it can update that value in near future (like in 1ms/1s/1ns etc)
        //if the new satte depends on your previous state then you shoudlnt update like this
        // initially it was false now its true...so it willl cause react to recheck the code and then re-execute it bcz setIsEditing is changed now
        // so that we can switch b/w Edit and save

      //instead pass a funciton to your state updating fucntion
      setIsEditing((editing) => !editing)// its a better way of updating the state than abovwe...means editing ki joh bhi value hai usko ulta krdo 
      // this function will automaticallt be called by react and wil recieve the guranteed laytest statae value
      if(isEditing){  
        onChangeName(symbol,playerName);
      }
    }

    function handleChange(event){// this event will be triggered whenever the player changes or inputs its name in value....
         // event is an objevt for this function , an event is automatically passed in onClick and onChange...isEditing

        setPlayerName(event.target.value);// event->target->value ...event.target.value is used to retrieve the value inputted in the playerName...so that it can change that inputted name with the intiaal name .....watch technical suneja if didnt undertood....
        // we could also do as.....const newName = event.target.value 
        //setPlayerName(newName)
    }

    // if the isEditing is false then show the name .....if its true then show the enter_name columm...we can do it using if-else
    let editablePlayerName =  <span className="player-name ">{playerName}</span>;
    // bcz we know that we can store JSX code as a value like abovr

    if(isEditing){
        // if true then show input which is essential (bcz we used required)
        // else it will show player-name (when isEditing is false which is its inital value)
        editablePlayerName=<input type='text' required  value={playerName} onChange={handleChange}/> // onChange is used to see the change in the values
        // we need to save the updated player-name so that at end of the game we can show the name of the winner name
        // to do this we would need another useState and we can do this.....
    }   // value is the value of the text box it will contain when entered text....

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
               {editablePlayerName}
                 <span className="player-symbol ">{symbol}</span>
            </span>

            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> 
            {/*to edit the name of player */} {/*if isEditing true then button name is save else Edit*/}
            {/* so make the edit button work i.e update the input name once confirmed by the user 
            we would need userState */}

        </li>
    );
}