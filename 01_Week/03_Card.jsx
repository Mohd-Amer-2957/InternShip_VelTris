
const Card = (props) =>{

     console.log(props.user)
    return (<div>
        <h1>Hey from card <span style={{color:"blue",background:"pink"}}>{props.user} <span style={{color:"green"}}>{props.age}</span></span> </h1>
        
    </div>
    )
}

export default Card