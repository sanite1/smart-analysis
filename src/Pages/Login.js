import { Grid, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import Box from "@mui/material/Box"
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from "react-router-dom";


import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {

    const schema = yup.object().shape({
        email: yup.string().required("Email Is Required"),
        password: yup
        .string()
        .required("Password Is Required")
        
    });

    const { handleSubmit, trigger, control } = useForm({
        resolver: yupResolver(schema),
    });
    const [values, setValues] = useState({
        showPassword: false,
    });

    const navigate = useNavigate()

    localStorage.setItem('loggedIn', false);

    const [loading, setLoading] = useState(false);

    function handleLoadClick() {
        setLoading(true);
        localStorage.setItem('loggedIn', JSON.stringify(true)); 
        navigate("/home/dashboard")
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
            }}
        >
            
            <Grid container >
                <Box item md={5} xs={12}
                    sx={{
                        position: "fixed",
                        left: 0,
                        width: "40vw",
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
                    <Box
                        sx={{
                            margin: "auto",
                            width: "90%",
                        }}
                    >
                        <img
                            src="./images/login.png" alt="img"
                            style={{
                                width: "100%"
                            }}
                        />
                    </Box>
                </Box>
                <Box item md={7} xs={12}
                    sx={{
                        width: {xs: "80%", md: "60%"},
                        marginLeft: {xs: "0", md: "40%"},
                        textAlign: "center",
                        marginTop: {xs: "20px", md: "15vh"}
                    }}
                >
                    <Box 
                        sx={{
                            margin: "auto",
                            width: {xs: "80%", md: "60%"},
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
                        <p style={{textAlign: "left", marginBottom: 30, color: "black", fontFamily: "monospace",}}>Don't have an account? <Link style={{decoration: "none", color: "teal"}} to={"/signup"}>Get Started</Link></p>
                    

                        <form action="">

                        <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={{marginBottom: "30px"}}
                                    label="Email"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("email");
                                    }}
                                    />
                                )}
                            />
                            
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        variant="outlined"
                                        sx={{marginBottom: "30px"}}
                                        label="Password"
                                        fullWidth
                                        {...fields}
                                        type={values.showPassword ? "text" : "password"}
                                        InputProps={{
                                            endAdornment: (
                                            <IconButton onClick={handleClickShowPassword}>
                                                {values.showPassword === true ? (
                                                <Visibility />
                                                ) : (
                                                <VisibilityOff />
                                                )}
                                            </IconButton>
                                            ),
                                        }}
                                        inputRef={ref}
                                        error={Boolean(error?.message)}
                                        helperText={error?.message}
                                        onKeyUp={() => {
                                            trigger("password");
                                        }}
                                    />
                                )}
                            />

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
                                <Link style={{decoration: "none", color: "teal"}} to={"/signup"}>Forgot Password?</Link>
                            </Typography>

                            <LoadingButton
                                fullWidth
                                size="small"
                                onClick={handleSubmit(handleLoadClick)}
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
                </Box>
            </Grid>
        </Box>
    );
}
 
export default Login;