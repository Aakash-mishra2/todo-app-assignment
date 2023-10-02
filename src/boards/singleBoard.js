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
            {props.things.map(x => <p>{x}</p>)}
        </div>
    )
}
export default SingleBoard;