import { useState } from "react"



const Form_Handle_3 = () => {

    const [mycolor, setColor] = useState('#04AA6D')

    function change_Color(ele){
        ele.preventDefault()
        console.log("Submitted and color changed")

        setColor('#c62155ff') // changing the button color
        const randomColor = "#" + Math.floor(Math.random()*10000000).toString(16);
        document.body.style.backgroundColor=randomColor;   // changing the bg color

    }




    function BgColor(){
        setColor('#2f64aeff')
     }


  return (
    <div>
        <center><h1>Bg Color Change</h1></center>
    
    <form onClick={change_Color}>
        <button type="submit" style={{backgroundColor:mycolor}}>Change Color</button>
    </form>
    <button onClick={change_Color}> click</button>
    </div>


  )
}

export default Form_Handle_3