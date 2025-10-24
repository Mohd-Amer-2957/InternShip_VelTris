// This is just for a array objects fuction to understand eaisily


const User = () => {

    const arr=[10,20,30,40];

  return (
    <div>
          {
            arr.map(function(ele){
                return 10*ele             // print 10 * ele   op:100200300400
            })
          } 

    </div>
  )
}

export default User