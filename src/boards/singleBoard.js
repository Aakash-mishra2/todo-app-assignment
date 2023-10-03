import React, { useState } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Modal from "../shared/UIElements/Modal";
import { completeTodo } from '../features/boardSlice';
import { useDispatch } from 'react-redux';
import './styles/singleBoard.css';


const SingleBoard = (props) => {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(completeTodo({
            taskName: event.target.name,
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
                header={
                    <span>
                        <p>{props.id}</p>
                        <AwesomeButton type="primary"
                            onPress={() => {
                                // do something
                            }}>
                            Add new
                        </AwesomeButton>
                    </span>
                }
                footer={
                    <span>
                    <AwesomeButton type="secondary"
                            onPress={() => {
                                // do something
                            }}>
                            DELETE
                        </AwesomeButton>
                        <AwesomeButton type="danger"
                            onPress={toggleBoard}>
                            CLOSE
                        </AwesomeButton>
                    </span>
                }
            >
                <section className='alltasks'>
                    <div className='done'>
                        <h2>New Tasks</h2>
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