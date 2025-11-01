    
// Creating tags outside of html with JS
var h1=document.createElement('h1');         // created a h1 empty tag
h1.innerHTML="Hello Vetris from JS";         // assigned content to h1

    document.body.appendChild(h1)            // inserted in html body
// console.log(h1);




// import/export content from another Js

import  name from './Export_content_.js'       // importing variable naam from app.js  and storing in a name variable  (default)
import {arr} from './Export_content_.js'       // named export/import
console.log(name,arr)


// There are two types of import/export

// DEFUALT      
//  1.you can pass any element using                               --export default ele_name" --
//  2.import file(Default) can acces the ele_name with any variable name    -- import variable from './exportFile.js'--   
//  3.Only one default export is allowed per file.           



// NAMED EXPORT  
// 1.just add export before declaration                         --export varName="amer"--
// 2. import file Must use same name as exportfile declared     --import {varName} from './exportFile'
// 3. you can use varName as any othername                      --import {arr as myarr} from './exportFile'
