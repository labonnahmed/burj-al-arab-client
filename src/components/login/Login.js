import React, { useState } from 'react';
import { Avatar, TextField, Box, Button, Typography } from '@mui/material';
import auth from '../login/firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import AuthDetails from './AuthDetails';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Form validation and values set on state...
    const isFieldValid = (e) => {
        let fieldValid;
        const regexForEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexForPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (e.target.name === 'email') {
            fieldValid = regexForEmail.test(e.target.value);
        };

        if (e.target.name === 'password') {
            fieldValid = regexForPassword.test(e.target.value);
        };

        if (fieldValid) {
            if (e.target.name === 'email') {
                setEmail(e.target.value);
            }
            if (e.target.name === 'password') {
                setPassword(e.target.value);
            };
        };
    };

    // firebase authentication (sign up & sign in)
    const handleSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('successfully Register');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('successfully Login');
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
        console.log(email, password);

        e.preventDefault();
    };


    // handle google aunthentication....
    const handleGoogleSignIn = (provider) => {
        signInWithPopup(auth, provider)
            .then((res) => {
                const user = res.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
        console.log(email, password);
    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { mt: 3, mx: 1, width: '28ch' },
            }}
            align={"center"}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <h3 style={{ color: '#e21018' }}>Login/Register to your Account</h3>
            <div>
                <TextField
                    required
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    name='email'
                    defaultValue=""
                    onBlur={isFieldValid}
                />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    defaultValue=""
                    autoComplete="current-password"
                    onBlur={isFieldValid}
                />
                <br />
                <Button
                    sx={{ mt: 2 }}
                    color="error"
                    onClick={() => handleGoogleSignIn(new GoogleAuthProvider())}>
                    <Avatar
                        sx={{ bgcolor: '#f4221d', mr: 1 }}
                    >
                        G
                    </Avatar>
                    Continue with Google
                </Button>
                <br />
                <TextField
                    sx={{ bgcolor: "#f46c67" }}
                    style={{ borderRadius: '4px', marginBottom: '5px' }}
                    size="small"
                    value={newUser ? 'Register' : 'Login'}
                    type="submit"
                />
            </div>
            <Typography onClick={() => setNewUser(!newUser)} color="text.secondary">
                {
                    newUser ? 'have an account? login here' :
                        "don't have account? register here"
                }
            </Typography>
            <AuthDetails />
        </Box>
    );
};

export default Login;