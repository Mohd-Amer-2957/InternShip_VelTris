
import './App.css'
import Card1 from './components/Card1.jsx'
// import rough from './components/rough.jsx'


function App() {
  const arr=[                         // arrayy of objects
        {company:'Amazon',post:1, role:"Senior Devloper ",pay:50},
        {company:'MicroSoft',post:20,role:"Front-end Deverloper",pay:80},
        {company:'Google',post:3,role:"Full-stact Devloper",pay:100},
        {company:'Veltris',post:12,role:"Intership",pay:120},
        {company:'FaceBook',post:10,role:"Data-Scientist",pay:60}

    ];

  return (<div className='parent'>
    {arr.map(function(ele){
      // console.log(ele.pay)
      return <Card1 elecompany={ele.company} post={ele.post} role={ele.role} pay={ele.pay}/>
    })}

  </div>
  )
    
       
}

export default App
