import SingleBoard from './singleBoard';
import './styles/dashboard.css';
import { createBoard } from '../features/boardSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../shared/formElements/Button';
import {v4 as uuidv4 } from 'uuid';

const Dashboard = () => {
    const allBoards2 = useSelector((state) => state.boards.boards);
    return (

        <div>
            {allBoards2 && allBoards2.map((item) => (
                <SingleBoard
                    key = {item.id}
                    name = {item.name}
                    id={item.id}
                    date={item.date}
                    remTasks={item.leftTodo}
                    doneTasks = {item.doneTodo}
                />
            )
            )}
        </div>
    )
};

export default Dashboard;