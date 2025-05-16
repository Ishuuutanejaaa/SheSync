/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5001/api/auth/register", { name, email, password });

            alert(res.data.message);
            navigate("/login"); // Redirect to login after successful registration
        } catch (err) {
            alert("Error registering user");
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
        </div>
    );
};

export default Register;
*/
/*
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5001/api/auth/register", { name, email, password });

            alert(res.data.message);
            navigate("/login"); // Redirect to login after successful registration
        } catch (err) {
            alert("Error registering user");
        }
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <span onClick={() => navigate("/login")}>Login</span></p>
        </div>
    );
};

export default Register;
*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5001/api/auth/register", { name, email, password });
            alert(res.data.message);
            navigate("/");
        } catch (err) {
            alert("Error registering user");
        }
    };

    return (
        <div className="login-page">
            <div className="auth-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <span onClick={() => navigate("/")}>Login</span></p>
            </div>
        </div>
    );
};

export default Register;
