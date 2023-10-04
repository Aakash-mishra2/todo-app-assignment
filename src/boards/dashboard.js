import React from 'react';
import SingleBoard from './singleBoard';
import './styles/dashboard.css';
import { useSelector} from 'react-redux';
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router';


const Dashboard = () => {
    const allBoards2 = useSelector((state) => state.boards.boards);
    const userName = useSelector((state) => state.userAccount.userName);
    const email = useSelector((state) => state.userAccount.email); 
    const password = useSelector((state) => state.userAccount.password);
    const navigate = useNavigate();
    return (
        <React.Fragment >
        <section className="home">
            <div className='note'>
                <h2><em>Welcome back,  </em>{userName} !</h2>
                <p>{email} {password} </p>
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