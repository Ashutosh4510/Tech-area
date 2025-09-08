import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../api/auth';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You are not logged in.');
      return;
    }
    fetchUserProfile(token).then(data => {
      if (data.message) {
        setMessage(data.message);
      } else {
        setProfile(data);
      }
    });
  }, []);

  if (message) {
    return <p>{message}</p>;
  }

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
