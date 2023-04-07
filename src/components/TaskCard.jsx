
export const TaskCard = (props) =>{
    const {name} = props
    return(
         <div>
                    <h3>{name}  
                    <button onClick={function(){
                        console.log('editar')
                    }}>Editar</button>
                    <button onClick={function(){
                        console.log('eliminar')
                    }}>Eliminar</button>
                    </h3>
         </div>
    )

}