import SingleBoard from './singleBoard';
import './styles/dashboard.css';
import { useState } from 'react';
import { createBoard } from '../features/boardSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../shared/formElements/Button';


const Dashboard = () => {
    const dispatch = useDispatch();
    const allBoards2 = useSelector((state) => state.boards.boards);
    const [boards, setBoards] = useState();
    const addBoards = () => {
        dispatch(createBoard(
            {
                id: 'c1',
                date: '23 June',
                todo: ["milk", "curd", "eggs"]
            }
        ));
        dispatch(createBoard(
            {
                id: 'c2',
                date: '25 June',
                todo: ["tomato", "spinach"]
            }
        ));
        setBoards(allBoards2);
    }
    
    return (

        <div>
            <Button onClick={addBoards}>Add boards</Button>
            {boards && boards.map((item) => (
                <SingleBoard
                    key = {item.id}
                    id={item.id}
                    date={item.date}
                    things={item.leftTodo}
                />
            )
            )}
        </div>
    )
};

export default Dashboard;