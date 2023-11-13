import ReactDOM from "react-dom";
export default function BackDrop(props) {
    return ReactDOM.createPortal(<div
        className='fixed top-0 left-0 w-full h-full bg-black/75 z-10'
        onClick={props.onClick}></div>
        , document.getElementById('backdrop')
    );
}