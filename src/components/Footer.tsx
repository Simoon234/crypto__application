import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className='footer'>
            <p>Created by <span>Simon</span></p>
            <Link to='/'>Github</Link>
        </footer>
    )
}