import { Link } from 'react-router-dom';
import './landing.css';

export default function Landing() {
    return (
        <div className="MyImage">
            <image className='TheImage' src='' alt='' />
            <Link to="/videogames">
                <h1>PI - Carmelo Cabezon - Videojuegos</h1>
                <button className="myButton">Gamer's Home</button>
            </Link>
        </div>
    );
}