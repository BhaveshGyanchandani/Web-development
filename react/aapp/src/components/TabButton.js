// export function TabButton(props){
//     return <li><button>{props.children}</button></li>
//   }

  //export function TabButton( {label} ){ the argument taken in destrcuting should be same as the <TabButton label="" /> the "label" thing in one way tag
//   return <li><button>{props.children}</button></li>
// }

// export function TabButton({children}){
//   function handleClick(){
//         console.log("hello world");
//       }
//   return ( <li>
//     <button onClick={handleClick}>{children}
//       </button>
//       </li>
//   );
// }

export function TabButton({children ,  isSelected , ...props}){
  
  return ( <li>
    <button className={isSelected ? 'active' : undefined} {...props}>{children}
      </button>
      </li>
  );
}

// we changed onClick={onSelect} with {...props}....and now since we appended all the args except children and onSelect 
// we can now remove onSelect from <TabButton > and replace it with onClick
// bcz it would explitly say onClick={() => handleSelect('state')} as an arg or property....
// bcz here  we had defined onClick={onSelect} where onSelect={() => handleSelect('state')} so we basically shortened it and took onClick whole as an arg..
