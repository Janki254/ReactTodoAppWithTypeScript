import React, { useEffect, useState } from 'react';

import { Task } from '../../DataModals/DataModals';
import CreateTaskModal from '../AddNewTask/CreateTaskForm';
import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [taskList, setTaskList] = useState<Task[]>([]);

    useEffect(() => {
        const fetchedTasksFromLS = localStorage.getItem('TaskList');
        if (fetchedTasksFromLS) {
            const task_obj = JSON.parse(fetchedTasksFromLS);

            setTaskList(task_obj);
        }
    }, []);

    const addTaskHandler = (taskdata: Task) => {
        const new_task = [...taskList, taskdata];
        console.log(new_task);
        setTaskList(new_task);
        localStorage.setItem('TaskList', JSON.stringify(new_task));
    };
    const FormControlAction = () => {
        setIsFormOpen((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <div className={`text-center ${styles.todolist__header}`}>
                <h2>Todo List</h2>
                <button
                    className='btn btn-primary mt-2'
                    onClick={FormControlAction}
                >
                    Create New Task
                </button>
                <div
                    className={`row justify-content-center ${styles.todo__form}`}
                >
                    <div className='col-md-5'>
                        <CreateTaskModal
                            isFormOpen={isFormOpen}
                            toggleFun={FormControlAction}
                            submitTask={addTaskHandler}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.todolist__container}>
                <div
                    className={`row justify-content-center mt-5 ${styles.row_container} `}
                >
                    {taskList.map((task, indx) => (
                        <Todo key={`${task.id}${indx}`} todo={task} colorIndx={indx} />
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default TodoList;
