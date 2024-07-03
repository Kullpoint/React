import { useState } from "react";

const Todo = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form>
            <input onChange={(e) => setName(e.target.value)} type='text' value={name} />
            <button onClick={handleSubmit} type='submit'>Add</button>
        </form>
    );
};

export default Todo;
