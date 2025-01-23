// Profile.js
import React, { useEffect, useState } from 'react';

function Profile() {
    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mt-8">Welcome {loggedInUser}</h1>
            {/* You can add more profile-related content here */}
        </div>
    );
}

export default Profile;
