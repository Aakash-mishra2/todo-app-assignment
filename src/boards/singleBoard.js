import React, { useState } from 'react';
import Modal from "../shared/UIElements/Modal";
import { completeTodo } from '../features/boardSlice';
import { useDispatch } from 'react-redux';
import './styles/singleBoard.css';
import Button from '../shared/formElements/Button';

const SingleBoard = (props) => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(completeTodo({
            taskName:  event.target.name,
            boardID: props.id,
        }));
    }
    const [openBox, setOpenBox] = useState(false);
    const toggleBoard = () => setOpenBox(prev => !prev);

    return (
        <React.Fragment>
            <Modal
                show={openBox}
                closeBox={toggleBoard}
                header={<p>{props.id} : {props.date}</p>}
                footer={
                    <span>
                        <Button onClick={(e) => e.preventDefault()} >Add Task</Button>
                        <Button danger onClick={toggleBoard}>CLOSE</Button>
                    </span>
                }
            >
                <section className='alltasks'>
                    <div className='done'>
                        <h1>Incomplete Tasks</h1>
                        {props.remTasks.map(x => 
                            <label htmlFor={x}>
                            <b><em>{x}      </em></b>
                            <input type='checkbox' name={x} onChange={handleChange} />
                            </label>
                        )}
                    </div>
                    <div className='notDone'>
                        <h1>Completed Tasks</h1>
                        {props.doneTasks.map(x => <b><em>{x}</em></b>)}
                    </div>
                </section>
            </Modal>

            <div className="note"
                onClick={toggleBoard}>
                <h1>
                    {props.date}
                </h1>
            </div>
        </React.Fragment>
    )
}
export default SingleBoard;