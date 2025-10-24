import React from 'react'

const User = () => {

    const arr=[                         // arrayy of objects
        {user:'Amer',age:16,},
        {user:'khan',age:20,},
        {user:'pardu',age:89,}
    ]


  return (
    <div>hey

        {arr.map(function(ele){
            // console.log(ele.user,ele.age)
            return 'hey' 
        })}
    </div>
  )
}

export default User