
import React from 'react';

import TodoList from './components/Todos/TodoList';

const App = () => {
    return (
        <React.Fragment>
            <div className='page-container'>
                <TodoList />
            </div>
        </React.Fragment>
    );
};

export default App;
