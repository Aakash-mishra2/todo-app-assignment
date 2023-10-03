import './styles/singleBoard.css';

const SingleBoard = (props) => {
    return (


        <div className="note"
            onClick={() => {
                props.whenClicked(props.id);
            }}>
            <h1>
                {props.date}
            </h1>
        </div>
    )
}
export default SingleBoard;