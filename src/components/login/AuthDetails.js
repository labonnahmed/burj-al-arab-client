import { Button } from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { webContent } from '../../App';
import auth from './firebase';

const AuthDetails = () => {
    const [user, setUser] = useContext(webContent);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

                satoreAuthToken();

                navigate(from, { replace: true })
            } else {
                setUser(null)
            };
        });
        return () => {
            listen();
        }
    }, [])
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                alert('sign out');
            })
            .catch((error) => {
                console.log(error.massage);
            });
    }

    const satoreAuthToken = () => {
        auth.currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div>
            {
                user && <Button onClick={handleLogout} variant="outlined" sx={{ bgcolor: '#9fa8da', ml: 1, color: 'black' }}>Log Out</Button>
            }
        </div>
    );
};

export default AuthDetails;