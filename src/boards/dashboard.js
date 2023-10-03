import SingleBoard from './singleBoard';
import './styles/dashboard.css';
import { createBoard } from '../features/boardSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../shared/formElements/Button';


const Dashboard = () => {
    const dispatch = useDispatch();
    const allBoards2 = useSelector((state) => state.boards.boards);
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
    }
    
    return (

        <div>
            <Button onClick={addBoards}>Add boards</Button>
            {allBoards2 && allBoards2.map((item) => (
                <SingleBoard
                    key = {item.id}
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