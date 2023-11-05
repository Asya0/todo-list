import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";

export function Todolist(props) {

    //показывает все таски
    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }
    //показывает только невыполненные, когда isDone = false
    const onActiveClickHandler = () => {
        props.changeFilter("active", props.id)
    }
    //только выполненные, когда isDone = true
    const onCompletedClickHandler = () => {
        props.changeFilter("completed", props.id)
    }
    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = (newTitle) => {
        props.changeTodolistTitle(props.id, newTitle);
    }
    const addTask = (title) => {
        props.addTask(title, props.id)
    }
    return (
        <div>
            <h3> <EditableSpan title={props.title} onChange={changeTodolistTitle}/>
                <button onClick={removeTodolist}>x</button>
            </h3>
            <AddItemForm addItem={addTask} />
            <ul>
                {
                    //выводит столько li сколько id у переменной task в App.js
                    props.tasks.map((t) => {
                        const onRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }
                        const onChangeStatusHandler = (e) => {
                            props.changeTaskStatus(t.id, e.currentTarget.checked)
                            //console.log(props.changeTaskStatus(t.id, e.currentTarget.checked, props.id))
                        }
                        const onChangeTitleHandler = (newValue) => {
                            props.changeTaskTitle(t.id, newValue, props.id)
                        }

                        return <li key={t.id} className={t.isDone ? "is-done" : ""}><input
                            type='checkbox'
                            onChange={onChangeStatusHandler}
                        />
                            <EditableSpan title={t.title}
                                          onChange={onChangeTitleHandler} />
                            <button onClick={onRemoveHandler}>x</button>
                        </li>
                    })
                }

            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === "completed" ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
}

