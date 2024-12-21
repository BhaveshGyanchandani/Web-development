// export function Section({title,id,children}){
    
//     return (
//         <section id={id}>
//             <h2>
//                 {title}
//             </h2>
//             {children}
//         </section>
//     );
// }

// but what if there are multiple arguments in the <Section > .....bcz of it we would have to make multiple destructing arguments and have to set in <section> tag
    //which could make it messed .....so to solve it we would use " ... ( spread operator) with props"  ex ...props
    // it will tell that all the argument aside the described one in destructing should be added/appended in props (prop_name) object and should be assigned together when used

    export function Section({title,children , ...props}){
    
        return (
            <section {...props}>
                <h2>
                    {title}
                </h2>
                {children}
            </section>
        );
    }

    // it told that except the title and children args , whatever args are in <Section> like id, className etc should be added/appended in props object alltogether...
    ///its called forward wrapping....
    // we can use this method various other function like TabButton
    //...props should be wriiten at last not in first or middle of destrcut args