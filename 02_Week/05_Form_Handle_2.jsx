//  *********    Two Way Binding (User->React->Form) React play middle ware for actions  **********************

import { useState } from "react"

const App = () => {

    const [initial_text, set_Text] = useState('')

    function FormHandler(ele){
        // ele.preventDefault()
        console.log("form Submitted by",initial_text)
    }

    


  return (
    <div><h1>Form Handling 2</h1>
    <div>
        <form onSubmit={(ele)=>{
            FormHandler(ele)
            ele.preventDefault()       // this method will stops auto reload form page
        }}>
            
            <input type="text" placeholder='Enter text'  value={initial_text}
            onChange={(ele)=>{
                set_Text(ele.target.value)     // passing inputted text and updating to the initial_text 
            }}/>
            

            <br/>
            <button>Submit</button>
        </form>
        <h1>You Entered {initial_text}</h1>
    </div>

    </div>
  )
}

export default App
