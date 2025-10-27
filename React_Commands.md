### **React commands**



1. ###### **npm create vite**       : to create new folder      (select project name, script) then go to that folder (cd folder\_name)
2. ###### **npm install or npm i**  : to install node modules for this project
3. ###### **npm run dev**           : to run a react project    (goto to the exact folder)
4. ###### 

###### 

Hooks

useState:
1. useState stores the actual value inside React’s internal memory, not in your JavaScript variable.
2. it doesnt change const actual value in JS.
3. The “state” doesn’t live in the const variable itself — it lives in React’s hidden memory space.


arr=[10,20,30]

arr2=arr  //just copies the reference , changes in one can affect other too.instead, we use ...
arr2=[...arr]   // it will create new array with same values


//  ***********************          LOCAL STORAGE           

//  (saves in browser memory, on website check at f12-> applications-> local storage) 

// 1. localStorage.setItem(Key_str,str)                        :   to save in key,value pair
// 2. localStorage.getItem(Key_str)                            :   to get the item with key
// 3. localStorage.removeItem('Key_str')                       :   to remove item
// 4. localStorage.clear()                                     :   to clear storage
// 5. localStorage.setItem('key',JSON.stringify(obj))          :   to store obj by converting into string
// 6. const details= JSON.parse(localStorage.getItem('key'))   :   back to obj
