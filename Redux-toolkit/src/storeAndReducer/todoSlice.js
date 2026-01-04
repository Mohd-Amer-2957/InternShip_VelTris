import {
    createSlice,
    nanoid
} from "@reduxjs/toolkit"; // nanoid :  creates random unique id


const initialState = { // initialize todos 
    todos: [{
        id: 1,
        text: "Hello world !"
    }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        //add item
        addTodo: (state, action) => { // current state, action by fucntion
            const todo = {
                id: nanoid(), // unique id creted
                text: action.payload // getting data from action
            }
            state.todos.push(todo) // push to todos
            console.log("todo added success");
        },


        // remove item
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((ele) => ele.id !== action.payload.id) // filtering todos, except current todo
        },


        //Update todo

        updateTodo: (state, action) => {
            const {
                id,
                text
            } = action.payload;

            const todo = state.todos.find((ele) => ele.id === id);

            if (todo) {
                todo.text = text;
            }
        }

    }
})


export const {
    addTodo,
    removeTodo,
    updateTodo
} = todoSlice.actions // exporting individual functions  access to other components

export default todoSlice.reducer