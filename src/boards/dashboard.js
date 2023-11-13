import React from 'react';
import SingleBoard from './singleBoard';
import { useSelector } from 'react-redux';
import { AwesomeButton } from 'react-awesome-button';
import { useNavigate } from 'react-router';


const Dashboard = () => {
    const allBoards2 = useSelector((state) => state.boards.boards);
    const userName = useSelector((state) => state.userAccount.userName);
    const email = useSelector((state) => state.userAccount.email);
    const navigate = useNavigate();
    return (
        <React.Fragment >
            <section className="flex flex-col ml-4">
                <div className="font-default bg-white max-w-fit rounded-lg shadow-md shadow-black/40 text-base p-2.5 m-2.5">
                    <h2 className='text-2xl font-bold mb-4'><em>Welcome back, </em>{userName} !</h2>
                    <p className='text-lg tracking-normal'>
                        <b><em>{email}</em></b></p>
                    <p><em>All your boards are listed below. Click to view.</em> </p>
                </div>
                <div className='flex flex-wrap items-center box-border'>
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