import { useState } from "react";

export const TaskCard = (props) =>{
    const {name,onNewTaskClick,isComplete} = props
    const [state,setState] = useState(isComplete);

    const handleClick = () => {
        console.log(`time for ${name}`);
        onNewTaskClick(name);
    };

    return(
         <div>
                    <h3 style={{textDecoration:isComplete ? 'line-through' : ''}} >{name}</h3>
                    <button onClick={handleClick}>Complete</button>
         </div>
    )

}