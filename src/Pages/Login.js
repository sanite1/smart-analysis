import { Grid, AppBar, Toolbar, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import Box from "@mui/material/Box"
import { useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const navigate = useNavigate()

    localStorage.setItem('loggedIn', false);

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(false); 
    
    // useEffect(() => { 
    //     localStorage.setItem('dataKey', JSON.stringify(data)); 
    // }, [data]);

    function handleLoadClick() {
        setLoading(true);
        localStorage.setItem('loggedIn', JSON.stringify(true)); 
        navigate("/home/dashboard")
    }
    function handleLogoutClick() {
        localStorage.setItem('loggedIn', JSON.stringify(false)); 
        // navigate("/home/dashboard")
    }

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                height: "100vh",
                // background: "black",
                // width: 1000
            }}
        >
            
            <Grid container >
                <Grid item md={5} xs={12}
                    sx={{
                        boxShadow: "0 0 5px 0 gray",
                        textAlign: "center",
                        height: "100vh",
                        display: {xs: "none", md: "block"}
                    }}
                >
                    <Box 
                        sx={{
                            
                            margin: "12px 30px",
                            width: "fit-content"
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            color="inherit" 
                            component="div"
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                fontFamily: "monospace",
                                color: "white",
                                background: "teal",
                                padding: "6px",
                                borderRadius: "12px",
                                margin: "12px 0",
                                width: "fit-content"
                            }}
                        >
                            S.A
                        </Typography>
                    </Box>
                    <Typography 
                        variant="h6" 
                        color="inherit" 
                        component="div"
                        sx={{
                            marginTop: 6,
                            marginBottom: 4,
                            fontSize: "28px",
                            fontWeight: 600,
                            fontFamily: "monospace",
                        }}
                    >
                        Hi, Welcome back
                    </Typography>
                    <img 
                        src="./images/login.png" alt="img" 
                        style={{
                            width: "fit-content"
                        }}
                    />
                </Grid>
                <Grid item md={7} xs={12}
                    sx={{
                        // width: {xs: "80%", md: "60%"},
                        textAlign: "center",
                        // height: "100vh",
                        marginTop: {xs: "20px", md: "15vh"}
                    }}
                >
                    <Box 
                        sx={{
                            
                            margin: "auto",
                            width: {xs: "80%", md: "60%"},
                            // background: "pink"
                        }}
                    >
                        <Typography 
                            variant="h6" 
                            color="inherit" 
                            component="div"
                            sx={{
                                textAlign: "left",
                                marginTop: 6,
                                fontWeight: 600,
                                fontFamily: "monospace",
                            }}
                        >
                            Sign in to Smart Analysis
                        </Typography>
                        <p style={{textAlign: "left", marginBottom: 30, fontFamily: "monospace",}}>Don't have an account? <a href="/">Get Started</a> <Link style={{decoration: "none", color: "black"}} to={"/home/dashboard"}>Back to home</Link></p>
                    

                        <form action="">
                            <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth sx={{marginBottom: "30px"}} />

                            <FormControl fullWidth sx={{marginBottom: "30px"}} variant="outlined">
                                <InputLabel fullWidth htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput fullWidth
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={(e)=> setValues({password: e.target.value})}
                                    endAdornment={
                                    <InputAdornment fullWidth position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                            <Typography 
                                variant="p" 
                                // color="primaru" 
                                component="div"
                                sx={{
                                    textAlign: "left",
                                    color: "teal",
                                    fontFamily: "monospace",
                                    marginBottom: "30px"
                                }}
                            >
                                Forgot Password?
                            </Typography>

                            <LoadingButton
                                fullWidth
                                size="small"
                                onClick={handleLoadClick}
                                endIcon={<SendIcon />}
                                loading={loading}
                                loadingPosition="end"
                                variant="contained"
                                sx={{
                                    fontSize: "20px",
                                    background: "teal",
                                    fontFamily: "monospace",
                                    "&:hover": {
                                        backgroundColor: 'teal'
                                    },
                                }}
                            >
                                Login
                            </LoadingButton>
                        </form>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
 
export default Login;