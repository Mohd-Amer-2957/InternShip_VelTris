

const Card1 = (props) => {
          


  return (
    <>
    <div id="container">

        <div id="top_section"><h4>companyLogo</h4>    <span id="btn"><button type="button">Save</button></span></div>
        
        
        
        <div id="middle_section">
            <div><h2>{props.company}</h2>  
             <span>{props.post} days ago</span>
             <div><h1>{props.role}</h1></div>
             </div>
        </div>



        <div id="bottom_section">
            <div><h2>${props.pay}/h</h2> <span><button>Apply now</button></span></div>
        </div>

         </div>
    </>
  )
}

export default Card1