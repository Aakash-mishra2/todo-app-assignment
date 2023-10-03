import React, { useState } from 'react';
import Modal from "../shared/UIElements/Modal";
import './styles/singleBoard.css';

const SingleBoard = (props) => {
    const handleChange = (event) => {
         console.log(event.target.name);
    }
    const [openBox, setOpenBox] = useState(false);
    const toggleBoard = () => setOpenBox(prev => !prev);
    return (
        <React.Fragment>
            <Modal
                show={openBox}
                closeBox={toggleBoard}
                header={<p>{props.id} : {props.date}</p>}
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
                        {props.doneTasks.map(x => <p>{x}</p>)}
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