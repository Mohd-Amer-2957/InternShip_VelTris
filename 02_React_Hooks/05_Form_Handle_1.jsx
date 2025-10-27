
//  ******************   preventDefault()   in form submit reload ****************

const App_01 = () => {

    function FormHandler(ele){
        ele.preventDefault()
        console.log("form Submitted")
    }
  return (
    <div><h1>Form Handling</h1>
    <div>
        <form onSubmit={(ele)=>{
            FormHandler(ele)
        }}>
            <input type="text"  placeholder='Enter text'/><br />
            <button>Submit</button>
        </form>
    </div>
    
    </div>
  )
}

export default App_01


//  When we use form, after submitting the form page will automatically reload,so
// to prevent auto reloading we use preventDefault() method   
// pass an ele to a function and call preventDefault() method
// note : * we cant pass direct parameters at onSubmit, create arrow func and pass to another func 