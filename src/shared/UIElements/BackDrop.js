import './BackDrop.css';
import ReactDOM from "react-dom";
export default function BackDrop(props) {
    return ReactDOM.createPortal(<div className='backdrop' onClick={props.onClick}></div>, document.getElementById('backdrop'));
}