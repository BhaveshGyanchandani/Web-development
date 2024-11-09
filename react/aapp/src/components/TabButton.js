// export function TabButton(props){
//     return <li><button>{props.children}</button></li>
//   }

  //export function TabButton( {label} ){ the argument taken in destrcuting should be same as the <TabButton label="" /> the "label" thing in one way tag
//   return <li><button>{props.children}</button></li>
// }

export function TabButton({children}){
  function handleClick(){
        console.log("hello world");
      }
  return ( <li>
    <button onClick={handleClick}>{children}
      </button>
      </li>
  );
}
