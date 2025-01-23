import React, { useEffect, useState } from 'react';

function AdminDashboard() {
    const [userData, setUserData] = useState([]);
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    useEffect(() => {
        // Fetch data only if user is admin
        if (role === 'admin' && token) {
            // Replace with actual API call
            fetch('/api/admin/data', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            })
                .then(response => response.json())
                .then(data => setUserData(data))
                .catch(err => console.error(err));
        }
    }, [role, token]);

    if (role !== 'admin') {
        return <div>You don't have access to this page.</div>;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {userData.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;
