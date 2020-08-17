import React from 'react';

// props are nothing but a way to pass data down
const NewTodoForm = (props) => {
    return (
        // pass the events automatically
        <form onSubmit={props.formSubmitted}>
            <label htmlFor="newTodo">New Todo</label>
            <input
                onChange={props.newTodoChanged}
                id="newTodo"
                name="newTodo"
                value={props.newTodo}
            ></input>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodoForm;