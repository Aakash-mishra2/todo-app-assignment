import React from 'react';
import SingleBoard from './singleBoard';
import './styles/dashboard.css';
import { createBoard } from '../features/boardSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../shared/formElements/Button';
import { v4 as uuidv4 } from 'uuid';
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router';
const Dashboard = () => {
    const allBoards2 = useSelector((state) => state.boards.boards);
    const navigate = useNavigate();
    return (
        <React.Fragment >
        <section className="home">
            <div className='note'>
                <h2>Welcome back, User!</h2>
                <p><em>All your boards are listed below. Click to view.</em> </p>
            </div>
            <div className='display-boards'>
            <AwesomeButton type='primary'
                onPress={() => { navigate('/boards/new'); }}
            >
                <h2>+</h2>
            </AwesomeButton>
                {allBoards2 && allBoards2.map((item) => (
                    <SingleBoard
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        date={item.date}
                        remTasks={item.leftTodo}
                        doneTasks={item.doneTodo}
                    />
                )
                )}
            </div>
            </section>
        </React.Fragment>
    )
};

export default Dashboard;