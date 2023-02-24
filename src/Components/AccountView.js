
import Box from "@mui/material/Box"
import { Typography, Avatar, TextField, IconButton, Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import Grid2 from '@mui/material/Unstable_Grid2';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../api/api";
// import { useNavigate } from "react-router-dom";



const Styles = () => {
    return {
        displayParties: {
            textAlign: "center",
            borderRadius: "12px",
            boxSizing: "border-box",
            // padding: "40px 0",
            boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            
        },
        card: {
            background: "#fff"
        },
        icon: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            width: "fit-content",
            margin: "auto",
            marginBottom: "20px",
        },
        bigText: {
            fontWeight: "700",
            marginBottom: "5px",
        },
        sec2Txt: {
            fontFamily: "sans-serif",
            textAlign: "left",
            display: "block",
            marginBottom: "3px",
        },
        textFieldSection: {
            width: {xs: "95%", md: "90%"} ,
            margin: "auto"
        },
        sec2Head: {
            // background: "blue",
            padding: "20px 0",
            marginBottom: "20px",
            borderBottom: "2px solid #f9fafb"
        },
        sec2Bottom: {
            // background: "blue",
            padding: "20px 0",
            // marginBottom: "20px",
            borderTop: "2px solid #f9fafb"
        },
        sec2Head2: {
            width: {xs: "95%", md: "90%"},
            margin: "auto",
        },
        saveBtnWrapper: {
            width: {xs: "95%", md: "20%"},
            margin: {xs: "auto", md: ""},
            marginRight: {xs: "auto", md: "6%"},
            textAlign: {xs: "center", md: "right"},
        },
    }
}

const AccountView = () => {

    const styles = Styles();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const schema = yup.object().shape({
        firstName: yup.string().required("Firstname Is Required"),
        lastName: yup.string().required("Lastname Is Required"),
        country: yup.string().required("Country is Required"),
        state: yup.string().required("State is Required"),
        username: yup.string().required("Email Is Required"),
        phoneNumber: yup.string().required("Phone Number Is Required"),
        password: yup
        .string()
        .required("Password Is Required"),
    });

    const { handleSubmit, trigger, control, } = useForm({
        resolver: yupResolver(schema),
    });

    const [values, setValues] = useState({
        fname: JSON.parse(localStorage.user).firstName,
        lname: JSON.parse(localStorage.user).lastName,
        username: JSON.parse(localStorage.user).username,
        phone: JSON.parse(localStorage.user).phoneNumber,
        country: JSON.parse(localStorage.user).country,
        state: JSON.parse(localStorage.user).state,
        password: JSON.parse(localStorage.user).password,
        showPassword: false,
    });

    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    // const navigate = useNavigate()

    
    const [openSnackBar, setOpenSnackBar] = useState(false);
    const [messageSnackBar, setMessageSnackBar] = useState("");
    const handleSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleLoadClick = async (data) => {
        setLoading(true);
        try {
            const response = await api.patch("/update", data)
            console.log(data)
            console.log(response)
            if (response.data?.success === false){
                setMessageSnackBar("Error occured. Check internet and try again.")
                handleSnackBar()
                setLoading(false)
            } else {
                localStorage.setItem('user', JSON.stringify(response.data.user)); 
                setLoading(false)
                window.location.reload()
            }
        } catch(err) {
            if(err.response) {
                setLoading(false)
                if(err.response.status === 401) {
                    setMessageSnackBar("Password incorrect!")
                    handleSnackBar()
                } else {
                    setMessageSnackBar("Error occured. Check internet and try again.")
                    handleSnackBar()
                }
                // console.log("Error: " + err.response);
            }
        }
    }

    return (
        <Grid2 container columnGap={3} rowGap={3} sx={{background: ""}}>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert onClose={() => setOpenSnackBar(false)} severity="error" sx={{ width: '100%' }}>
                    {messageSnackBar}
                </Alert>
            </Snackbar>
            <Grid2 item xs={12} sm={6} md={3.5}
                
            >
                <Box sx={[styles.displayParties, styles.card, {padding: "40px 0"}]}>
                    <Box
                        sx={styles.icon}
                    >
                        <Avatar sx={{padding: "10px", }}><PersonIcon fontSize="large" /></Avatar>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={[styles.bigText, {color: ""}]}
                    >
                        {`${JSON.parse(localStorage.user).lastName} ${JSON.parse(localStorage.user).firstName}`}
                    </Typography>
                    <Typography
                        variant="p"
                        sx={[styles.sec2Txt, {fontSize: "13px", textAlign: "center", color: "gray"}]}
                    >
                        Date created: { JSON.parse(localStorage.user).dateCreated }
                    </Typography>
                </Box>
            </Grid2>
            <Grid2 item xs={12} md={8}
                sx={[styles.displayParties, styles.card]}
            >
                <Box
                    sx={[styles.sec2Head]}
                >
                    <Box sx={[styles.sec2Head2]}>
                        <Typography
                            variant="h6"
                            sx={[styles.sec2Txt, {fontWeight: "500"}]}
                        >
                            Profile
                        </Typography>
                        <Typography
                            variant="p"
                            sx={[styles.sec2Txt, {fontSize: "13px", color: "gray"}]}
                        >
                            This information can be edited
                        </Typography>
                    </Box>
                </Box>
                <Grid2 container spacing={2} sx={[styles.textFieldSection]}>
                    <Grid2 item xs={12} md={6}>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue={values.fname}
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
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue={values.lname}
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
                                    trigger("lasstName");
                                }}
                                />
                            )}
                        />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue={values.username}
                            render={({
                                field: { ref, ...fields },
                                fieldState: { error },
                            }) => (
                                <TextField
                                disabled
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
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            defaultValue={values.phone}
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
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <Controller
                            name="country"
                            control={control}
                            defaultValue={values.country}
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
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <Controller
                            name="state"
                            control={control}
                            defaultValue={values.state}
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
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
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
                    </Grid2>
                </Grid2>
                <Box
                    sx={[styles.sec2Bottom]}
                >
                    <Box sx={[styles.saveBtnWrapper]}>
                        <LoadingButton
                            fullWidth
                            size="small"
                            onClick={handleSubmit(handleLoadClick)}
                            endIcon={<SaveAltIcon />}
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
                            save
                        </LoadingButton>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    );
}
 
export default AccountView;