###### **1️⃣ useState Counter Example**



This program demonstrates React’s useState hook for managing dynamic values like numbers and text. It defines two states — number and name — which change when the user clicks “Increase” or “Decrease.” When increasing, the name switches to “Pardhu bhai,” and when decreasing, it reverts to “Mohd Amer.” The key learning is how React re-renders the UI automatically when state updates. The comments also explain the difference between directly using setnum(num+1) and the functional update form setnum(prev => prev + 1), which ensures correct incrementing when multiple state updates occur together.







###### **2️⃣ FormHandle\_1 – Basic Form Submission**



This example introduces React’s form submission handling. It uses a function FormHandler that calls event.preventDefault() to stop the page from reloading when the form is submitted. Normally, submitting a form triggers a browser refresh, but this method prevents that default behavior. The code logs “form submitted” to the console instead, showing how to capture and control form data flow. It highlights how to properly pass functions to onSubmit using arrow functions for better flexibility.







###### **3️⃣ FormHandle\_2 – Two-Way Data Binding**



Here, React’s useState is used for two-way binding — meaning the input field updates state, and the state updates the UI. The initial\_text variable stores user input, updated in real-time using onChange. On form submission, the current value is logged, and preventDefault() avoids page reload. The rendered UI also echoes “You Entered \[text]” live as the user types. This concept is essential for form control in React apps like login screens or search fields.







##### **4️⃣ FormHandle\_3 – Background and Button Color Change**



This program adds interactivity through color manipulation. It initializes a state variable mycolor for button color and changes it dynamically when the form is clicked or submitted. A random background color is generated each time using JavaScript’s Math.random() and applied to the document body. The example demonstrates React state use for UI styling and DOM manipulation via document.body. Combined with CSS styling from index.css, this example merges React logic with visual feedback to create a lively, interactive user experience.









###### **5️⃣ Local Storage Example**



This program demonstrates how to store, retrieve, and manage data inside the browser using the localStorage API. It saves items with setItem() and retrieves them using getItem(), showing that data remains even after reloading the page. The code also removes specific keys using removeItem() and shows how to convert objects to strings with JSON.stringify() before saving them, since localStorage only stores string data. Later, JSON.parse() is used to convert the stored string back into an object for use. Overall, this example teaches how to persist user data like settings or tokens between sessions in a web app.









###### **6️⃣ Axios (API Data Fetching) Example**



This React program uses the axios library to perform asynchronous API calls and display data on the page. It defines a state variable to hold the data and an async function called getData() that fetches data from a fake API (https://jsonplaceholder.typicode.com/todos). When the “getData” button is clicked, it retrieves a list of items, updates the state with setdata(), and maps through each element to render it on the screen. This example shows the proper way to handle asynchronous operations in React using async/await, manage API responses, and display fetched content dynamically.

