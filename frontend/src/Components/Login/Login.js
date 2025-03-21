import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Style.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });

            alert(res.data.message);
            localStorage.setItem("token", res.data.token); // Store JWT token
            navigate("/"); // Redirect to the dashboard or home page
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
            <p>New user? <span onClick={() => navigate("/register")}>Register now</span></p>
        </div>
    );
};

export default Login;
