import {
     useNavigate
} from "react-router-dom";
import './home.css'
// import bg from './cctv.jpg'


const Home = () => {
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/login');


    };
    return (
        <div className="home">
            <div className="navBar">
                <h1>Crime Detection</h1>
                <button onClick={handleClick} className="button-17">
                    Login
                </button>
            </div>
        </div>
    );
}
export default Home;