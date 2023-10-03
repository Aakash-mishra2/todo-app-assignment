import SingleBoard from './singleBoard';
import './styles/dashboard.css';

import { addTodo, deleteTodo, createBoard, deleteBoard } from '../features/boardSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../shared/formElements/Button';


const Dashboard = () => {
    const dispatch = useDispatch();
    const allBoards2 = useSelector((state) => state.boards.boards);

    const allBoards = [
        {
            id: 'c1',
            date: '23 June',
            todo: ["milk", "curd", "eggs"]
        },
        {
            id: 'c2',
            date: '25 June',
            todo: ["tomato", "spinach"]
        }
    ]
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
        console.log(allBoards2);
    }
    
    return (

        <div>
            <Button onClick={addBoards}>Add boards</Button>
            {allBoards.map((item) => (
                <SingleBoard
                    id={item.id}
                    date={item.date}
                    things={item.todo}
                />
            )
            )}
        </div>
    )
};

export default Dashboard;