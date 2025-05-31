import React from 'react';
import { useAuth } from '../context/AuthContext';


function Dashboard() {
  const {currentUser}=useAuth()
  return (
<>

 {currentUser ? (
        <p>Welcome, {currentUser.email}</p>
      ) : (
        <p>Please login</p>
      )}

</>
  );
}

export default Dashboard;