import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



export default function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    let submit = () => {
        let user = { name, email, password };
        console.log("user: ", user)
        if (name && email && password) {
            navigate("/dashboard/" + name, { state: user })
        } else {
            alert("Please fill all required fields!")
        }
    }

    return (
        <Box sx={{
            // border: '2px solid',
            width: '99.6vw',
            height: '99.3vh',
            // display: 'flex',
            // flexDirection: 'column',
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                    <Box sx={
                        {
                            // border: '2px solid red',
                            width: "30%",
                            height: '80vh',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',


                        }}>
                        <Box sx={{
                            margin: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <PersonOutlineIcon sx={{ fontSize: '4.5rem',}} />
                            <Typography align="center" variant="h2" component="div">
                                Sign Up
                            </Typography>
                        </Box>
                        <Box sx={{ margin: '15px' }}>
                            <TextField
                                required
                                label="Name"
                                variant="standard"
                                fullWidth={true}
                                onChange={(e) => setName(e.target.value)} />
                        </Box>
                        <Box sx={{ margin: '15px' }}>
                            <TextField
                                required
                                label="Email"
                                variant="standard"
                                fullWidth={true}
                                onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                        <Box sx={{ margin: '15px' }}>
                            <TextField
                                required
                                id="standard-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                                fullWidth={true}
                                onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                        <Box sx={{ margin: '15px' }}>
                            <Button
                                variant="contained"
                                fullWidth={true}
                                onClick={submit}
                            >Sign UP</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
}
