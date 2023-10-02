import singleBoard from './singleBoard';
import './styles/dashboard.css';

const Dashboard = () => {

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

    return (

        <div>
            {allBoards.map((item) => (
                <SingleBoard
                    id={item.id}
                    date={item.date}
                    things={item.items}
                />
            )
            )}
        </div>
    )
};

export default Dashboard;