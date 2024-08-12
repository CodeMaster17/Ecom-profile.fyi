
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_ROUTE } from '../constants';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await axios.post(`${BACKEND_ROUTE}/signup`, { username, email, password });
            navigate('/login');
        } catch (err: any) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };


    return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <label className="block">
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </label>
                <label className="block">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </label>
                <label className="block">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp