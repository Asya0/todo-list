import {useState} from "react";

export function AddItemForm(props) {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [error, setError] = useState("")

    //пришлось сделать через !, потому что до этого добавляла таску
    const addTask = () => {
        if (newTaskTitle.trim() !== "") {
            props.addItem(newTaskTitle.trim());
            setNewTaskTitle("");
        } else {
            setError("field request");
        }
    }

    const onNewTaskChangeHandler = (e) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e) => {
        setError(null) //убирает error & error-mes если после ошибки юзер начинает набирать слова
        if (e.charCode === 13) {
            addTask()
        }
    }

    return (
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTaskChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : " "}
            />
            <button onClick={addTask}>Добавить</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}