import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (login.username === "Admin" && login.password === "pass") {
            navigate('/main');

        }
    };
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
      }

    return (
        <div className="login-form">
            <div className="form-container">
                <h2>Login</h2>
                <div className="input-card">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={handleChange} placeholder='username' />
                </div>
                <div className="input-card">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange} id="password" placeholder="password" />
                </div>
            
                <button onClick={handleSubmit} className="button-5" id="login">Login</button>

            </div>

        </div>

    );
}
export default Login;