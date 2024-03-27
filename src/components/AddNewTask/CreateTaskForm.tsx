import React, { useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Collapse } from 'reactstrap';

import { CreateTaskProps, Task } from '../../DataModals/DataModals';

const CreateTaskForm: React.FC<CreateTaskProps> = ({
    isFormOpen,
    toggleFun,
    submitTask,
}) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskStatus, setTaskStatus] = useState('');

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const taskDetails: Task = {
            id: Math.random().toString(),
            title: taskTitle,
            description: taskDescription,
            status: taskStatus,
        };

        // console.log(taskDetails);
        if (
            taskTitle.trim().length !== 0 &&
            taskDescription.trim().length !== 0
        ) {
            submitTask(taskDetails);
            setTaskTitle('');
            setTaskDescription('');
            setTaskStatus('');
        }
    };

    return (
        <React.Fragment>
            <Collapse isOpen={isFormOpen} className=' mt-3'>
                <Card className='text-start'>
                    <CardHeader className='text-bg-dark'>
                        <h5 className='m-0'>Creat a New Task</h5>
                    </CardHeader>
                    <form onSubmit={submitHandler}>
                        {/* Card Body */}
                        <CardBody>
                            <div className='form-group row mb-2'>
                                <label
                                    htmlFor='task_title'
                                    className='col-md-3 col-sm-12 mb-1'
                                >
                                    Task Title
                                </label>
                                <div className='col-md-9 col-sm-12'>
                                    <input
                                        id='task_title'
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Task Titel'
                                        value={taskTitle}
                                        onChange={(e) => {
                                            setTaskTitle(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className='form-group row mb-2'>
                                <label
                                    htmlFor='task_description'
                                    className='col-md-3 col-sm-12 mb-1'
                                >
                                    Task Description
                                </label>

                                <div className='col-md-9 col-sm-12'>
                                    <textarea
                                        id='task_description'
                                        rows={3}
                                        className='form-control'
                                        placeholder='Enter Task Description'
                                        value={taskDescription}
                                        onChange={(e) => {
                                            setTaskDescription(e.target.value);
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='form-group row'>
                                <label
                                    htmlFor='task_status'
                                    className='col-md-3 col-sm-12 mb-1'
                                >
                                    Task Status
                                </label>

                                <div className='col-md-9 col-sm-12'>
                                    <select
                                        id='task_status'
                                        value={taskStatus}
                                        className='form-select'
                                        placeholder='Enter Task Description'
                                        onChange={(e) => {
                                            setTaskStatus(e.target.value);
                                        }}
                                    >
                                        <option value='None'>--Select--</option>
                                        <option value='Active'>Active</option>
                                        <option value='Completed'>
                                            Completed
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </CardBody>
                        {/* Card Body Finished */}

                        <CardFooter className='d-flex justify-content-sm-end'>
                            <button
                                className='btn btn-primary me-1'
                                type='submit'
                            >
                                Save Task
                            </button>

                            <button
                                className='btn btn-secondary'
                                onClick={toggleFun}
                            >
                                Cancel
                            </button>
                        </CardFooter>
                    </form>
                </Card>
            </Collapse>
        </React.Fragment>
    );
};

export default CreateTaskForm;
