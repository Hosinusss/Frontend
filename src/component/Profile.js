// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import { useAuth } from './AuthContext';

const Profile = () => {
    const { token, logout } = useAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await apiService.getUser(token);
                setUser(response.data);
            } catch (error) {
                console.error('Failed to fetch user', error);
            }
        };
        if (token) {
            fetchUser();
        }
    }, [token]);

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.email}</h1>
                    <p>Roles: {user.roles.join(', ')}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
