import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig';
import Header from './Header.jsx';
import Logout from './Logout.jsx';
import Login from './Login.jsx';
import Stats from './stats.jsx';
import Archive from './Userarchive.jsx';
import FetchUserGameData from './FetchUserGameData.jsx';
import background from './assets/background_2.png';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedNavItem, setSelectedNavItem] = useState('todaysGame'); 
  const today = new Date().toISOString().split('T')[0];


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderContent = (userEmail) => {
    switch (selectedNavItem) {
      case 'todaysGame':
        return <FetchUserGameData userEmail={userEmail} date={today} />
      case 'archive':
        return <Archive userEmail={userEmail} />;
      case 'stats':
        return <Stats userEmail={userEmail} />;
    }
  };

  return (
    <div>
      <div className='bg'>
        <img className='bg-image' src={background} alt=""></img>
      </div>
      <div className='app'>
        {user ? (
          <>
            <div className='HeadWrapper'>
              <Header onNavItemClick={setSelectedNavItem} />
              <Logout />
            </div>
            <div className='content'>
            {renderContent(user.email)}
            </div>
          </>
        ) : (
          <>
            <div className='HeadWrapper'>
            <Header onNavItemClick={setSelectedNavItem} />
            <Login />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
