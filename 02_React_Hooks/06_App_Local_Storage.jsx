
//  ***********************      LOCAL STORAGE       ************************************************

//  (saves in browser memory, on website check at f12-> applications-> local storage) 

// 1. localStorage.setItem(Key_str,str)                        :   to save in key,value pair
// 2. localStorage.getItem(Key_str)                            :   to get the item with key
// 3. localStorage.removeItem('Key_str')                       :   to remove item
// 4. localStorage.clear()                                     :   to clear storage
// 5. localStorage.setItem('key',JSON.stringify(obj))          :   to store obj by converting into string
// 6. const details= JSON.parse(localStorage.getItem('key'))   :   back to obj


const App = () => {

    localStorage.setItem('id','amer')
    localStorage.setItem('id1','mohd')
    localStorage.setItem('id2','khan')
    localStorage.removeItem('id1')

   // localStorage.clear()

    const name=localStorage.getItem('id2')
    console.log(name)

    const obj={user:'Mohd', age:'24', loaction:'hyd'};
    console.log(obj)

    // localStorage.setItem('user1',obj)   this will not work bcz locallSorage only store Strings not obj so we use
    localStorage.setItem('user1',JSON.stringify(obj))                       //it will make whole ojb into string

    // to acces

    const details= JSON.parse(localStorage.getItem('user1'))    // back to Obj from string
    console.log(details)




  return (
    <div>
<h1>LOCAL STORAGE</h1>
    </div>
  )
}

export default App