export function CoreConcept({image,title,description}){
    return (
     <li>
      <img src={image} alt="not available" />
      <h3>TITLE is {title}</h3>
      <p>DESCRIPTION IS {description}</p>
     </li>
    )
  }