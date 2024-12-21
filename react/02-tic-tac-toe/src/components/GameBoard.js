

// export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {




// now we will manage and update the game board by using useState with the values 
// const [gameBoard, setGameBoard] = useState(initialGameBoard);
// useState uses initialGameBoard value as initial value  so that our state is such an array of nested arrays, such a multidimensional array therefore.
//  so to change the state when clicked we would need a function which will check it...

// function handleSelectSquare(rowIndex, colIndex) {
    //     // when its truggered we wanna call the setgameBoard so that the value can get updated i.e replace my gameboard wuth the new gameboard where one field will change from null to X or O based on the click we just wanna update one field of the array not the whole array.....so we will pass an anonomous function here having another function for updating the array
    //     setGameBoard((prevGameBoard) => {
        //         const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        
        //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
        //         return updateBoard;
        
        //     });
        
        
        
        // And for that here we can get the callIndex. So that we got row and column. And then of course we also need to know which symbol should be placed there, an X or an O, though that, of course, will simply depend on whose player's turn it is. And we'll therefore take care about that a little bit later....we should make a cpy of it and deal with that copy even thoigh the function has been read to avoid any bugs .....
        // so So therefore here what we should do is create a new constant, or variable, updatedBoard could be the name, which is a new array where we can use the spread operator to paste in all the existing elements of the old array. so now this is technically a new array object in memory that contains the old array elements as child elements.
        // Now since here I'm dealing with some nest arrays, those should be copied as well before we update anything.And we can achieve this here by calling the map method on our old state, so on our old array here So that here we got our innerArrays,and for every innerArray we also return a new nested array which spreads the elements of that innerArray inside of it.So that technically here we got a brand new array full of brand new nested arrays which still store the data they did store before,but now it's this updated board that should be updated here and that should be returned. And by using this approach and pattern we are updating the state in an immutable way,which is strongly recommended for the reasons mentioned before.
        
        
        //     onSelectSquare();
        // }
        
        export default function GameBoard({ onSelectSquare , board }) {
        return (

        <ol id="game-board">

            {/* {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>

                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))} */}

            {board.map((row, rowIndex) => (
                <li key={rowIndex}>

                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick= { () =>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>
    

    );
   
    }

 {/* map is used to create a new array by performiing some operation on  each array element , to make mapping uniqye in li we use key prop*
     key is like an unique atttribute or an unique identifer....it could be anything but should be unique...i.e no other element should have that same key value *
     map method takes a function in it...also called an anonomous arrow function , this anonomous function will be called for every item in the array of initialGameBoard*
     since 3 nested array are the item for the outer array,And therefore here, we'll get our row in the end, let's say,if these are our three rows. ,
            And for every row, we want to output a list item. for it ,  it will take row and generate a list item li.....but to make each list item li unique we use "key" prop..i.e we need a key bcz they are unique..... 
     so here we will use 2nd argument in the arrow function as a value for key which is " rowIndex"....which is the current index of the item for which this funciton is executed...we are using for now.........In most cases, you want to avoid using this index here,because this is not strictly tied to this value here.Because if this(0th index nested array row) row here would swap place with the next(1st indexed nested array row) row,technically this(1st nested array row) row would now have the index zero,even though this (the 0th indexed array which is now 1st indexed array bcz it swapped the row with the previous 1st indexed array) row had the index zero before.So the index is not tied to the data but to the position of the data.But here in this use case, that's no problem. Also because we're not going to swap any rows and therefore using the index here is fine.*

     But now inside of that list item, I want to have another list, another ordered list let's say, where I want to output these values inside of these inner arrays because we need a grid.
            And at the moment, in the end, we just have a couple of rows here. So in this ordered list here, we again want to output something dynamically, and that something is that row, because that's this inner array, three times this inner array. 
            To be precise,the dynamic value I want to output here is my playerSymbol (which can be the O ,X or null but initially its null since null is value in nested array). So this value here, which initially is null, and if we output null, nothing will be visible on the screen.
            ....the {playerSymbol} which is in b.w buttton tags*
     playerSymbol was called col before ....watch lec 80 to understand GameBoard for more...*/ }

