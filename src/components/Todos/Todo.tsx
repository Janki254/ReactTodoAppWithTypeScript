import React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from 'reactstrap';

import colors from '../../constants/CardColors';
import { todoProps } from '../../DataModals/DataModals';
import styles from './Todo.module.css';

const Todo: React.FC<todoProps> = ({todo, colorIndx}) => {
    return (
        <React.Fragment>
            <div
                className={`col-xs-12 col-sm-6 col-md-4 col-lg-3 ${styles.card__container}`}
            >
                <Card className='w-100'>
                    <CardHeader
                        style={{
                            backgroundColor: colors[colorIndx % 5].primaryColor,
                        }}
                    ></CardHeader>
                    <CardBody>
                        <h6
                            className={styles.card_title}
                            style={{
                                backgroundColor:
                                    colors[colorIndx % 5].secondaryColor,
                            }}
                        >
                            {todo.title}
                        </h6>
                        <div className='d-flex align-items-center mt-2'>
                            <label className='fw-semibold me-2'>
                                description:
                            </label>
                            <div className='text-bg-light p-1 text-truncate '>
                                {todo.description}
                            </div>
                        </div>
                        <span
                            className={`badge ${
                                todo.status.length !== 0 &&
                                todo.status === 'Active'
                                    ? 'text-bg-warning'
                                    : 'text-bg-success'
                            } mt-3`}
                        >
                            {todo.status}
                        </span>
                    </CardBody>
                    <CardFooter className='d-flex justify-content-end align-items-center bg-white'>
                        <i
                            className={`fa-solid fa-pen-to-square me-2 `}
                            style={{
                                color: colors[colorIndx % 5].primaryColor,
                            }}
                        ></i>

                        <i
                            className={`fa-solid fa-trash `}
                            style={{
                                color: colors[colorIndx % 5].primaryColor,
                            }}
                        ></i>
                    </CardFooter>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default Todo;
