import { Grid, Typography, TextField, IconButton, Snackbar, Alert,  } from "@mui/material";
import Box from "@mui/material/Box"
import { useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";


import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const schema = yup.object().shape({
        firstName: yup.string().required("Firstname Is Required"),
        lastName: yup.string().required("Lastname Is Required"),
        country: yup.string().required("Country is Required"),
        state: yup.string().required("State is Required"),
        username: yup.string().required("Email Is Required"),
        phoneNumber: yup.string().required("Phone Number Is Required"),
        password: yup
        .string()
        .required("Password Is Required")
        .matches(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            "Password Must Contain An Uppercase, A Digit, and A Special Character"
        )
        .min(8, "Password Should Have At Least 8 Characters")
        .max(32, "Password Should Have At Most 32 Characters"),
        confirmPassword: yup
        .string()
        .required("Password Must Match")
        .oneOf(
            [yup.ref("password"), null],
            "Password Must Match"
        ),
    });

    const { handleSubmit, trigger, control, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const [values, setValues] = useState({
        showPassword: false,
    });

    const navigate = useNavigate()

    localStorage.setItem('loggedIn', false);

    const [loading, setLoading] = useState(false);

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");
    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleLoadClick = async (data) => {
        console.log(data);
        data = {
            ...data,
            dateCreated: `${day} - ${month} - ${year}`
        }
        console.log(data);
        setLoading(true);
        try {
            const response = await api.post("/register", data)
            if (response.data?.exists === true){
                setMessageSnackBar("Email address already in use.")
                handleSnackBar()
                setLoading(false)
                reset()
            }
            if (response.data?.success === false){
                setMessageSnackBar(response.data.message.message)
                handleSnackBar()
                setLoading(false)
            } else {
                localStorage.setItem('loggedIn', JSON.stringify(true)); 
                localStorage.setItem('user', JSON.stringify(response.data.user)); 
                navigate("/login")

            }
        } catch(err) {
            if(err.response) {
                setLoading(false)
                setMessageSnackBar("Error occured. Check internet and try again.")
                handleSnackBar()
            }
        }
    }

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
        // console.log(values)
    };

    

    return (
        <Box
            sx={{
                height: "100vh",
            }}
        >
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="error" sx={{ width: '100%' }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>
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
                        Hi, Welcome User
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
                        width: {xs: "100%", md: "60%"},
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
                                fontSize: "30px",
                            }}
                        >
                            Sign up to Smart Analysis
                        </Typography>
                        <p style={{textAlign: "left", marginBottom: 30, color: "black", fontFamily: "monospace",}}>Already have an account? <Link style={{decoration: "none", color: "teal"}} to={"/login"}>Sign in</Link></p>
                    

                        <form action="">

                            <Controller
                                name="firstName"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={{marginBottom: "30px"}}
                                    label="First Name"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("firstName");
                                    }}
                                    />
                                )}
                            />
                            <Controller
                                name="lastName"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={{marginBottom: "30px"}}
                                    label="Last Name"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("lastName");
                                    }}
                                    />
                                )}
                            />
                            <Controller
                                name="username"
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
                                        trigger("username");
                                    }}
                                    />
                                )}
                            />
                            <Controller
                                name="phoneNumber"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={{marginBottom: "30px"}}
                                    label="Phone Number"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("phoneNumber");
                                    }}
                                    />
                                )}
                            />
                            <Controller
                                name="country"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={{marginBottom: "30px"}}
                                    label="Country"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("country");
                                    }}
                                    />
                                )}
                            />
                            <Controller
                                name="state"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                    variant="outlined"
                                    sx={{marginBottom: "30px"}}
                                    label="State"
                                    fullWidth
                                    {...fields}
                                    inputRef={ref}
                                    error={Boolean(error?.message)}
                                    helperText={error?.message}
                                    onKeyUp={() => {
                                        trigger("state");
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
                            <Controller
                                name="confirmPassword"
                                control={control}
                                defaultValue=""
                                render={({
                                    field: { ref, ...fields },
                                    fieldState: { error },
                                }) => (
                                    <TextField
                                        variant="outlined"
                                        sx={{marginBottom: "30px"}}
                                        label="Confirm Password"
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
                                            trigger("confirmPassword");
                                        }}
                                    />
                                )}
                            />

                            

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
                                    marginBottom: "50px"
                                }}
                            >
                                Sign Up
                            </LoadingButton>
                        </form>

                    </Box>
                </Box>
            </Grid>
        </Box>
    );
}
 
export default Login;