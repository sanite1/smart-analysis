
import Box from "@mui/material/Box"
import {  AppBar, Toolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Fragment, useState } from "react";
import { border, width } from "@mui/system";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonIcon from '@mui/icons-material/Person';
import Grid2 from '@mui/material/Unstable_Grid2';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import LoadingButton from '@mui/lab/LoadingButton/LoadingButton';


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

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const [values, setValues] = useState({
        fname: 'Collins',
        lname: 'Sanni',
        email: 'csanni52@gmail.com',
        phone: '09071423222',
        country: 'Nigeria',
        state: 'Lagos',
        password: '0000',
        showPassword: false,
    });

    const [loading, setLoading] = useState(false);

    function handleLoadClick() {
        setLoading(true);
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
        <Grid2 container columnGap={3} rowGap={3} sx={{background: ""}}>
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
                        Sanni Collins
                    </Typography>
                    <Typography
                        variant="p"
                        sx={[styles.sec2Txt, {fontSize: "13px", textAlign: "center", color: "gray"}]}
                    >
                        Date created: { `${day} - ${month} - ${year}` }
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
                        <TextField id="outlined-basic" label="First name" variant="outlined" value={values.fname} onChange={(e)=> setValues({fname: e.target.value})} fullWidth sx={{marginBottom: {xs: "10px", md: "30px"} }} />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Last name" variant="outlined" value={values.lname} onChange={(e)=> setValues({lname: e.target.value})} fullWidth sx={{marginBottom: {xs: "10px", md: "30px"} }} />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Email Address" variant="outlined" value={values.email} onChange={(e)=> setValues({email: e.target.value})} fullWidth sx={{marginBottom: {xs: "10px", md: "30px"} }} />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Phone number" variant="outlined" value={values.phone} onChange={(e)=> setValues({phone: e.target.value})} fullWidth sx={{marginBottom: {xs: "10px", md: "30px"} }} />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <TextField id="outlined-basic" label="Country" variant="outlined" value={values.country} onChange={(e)=> setValues({country: e.target.value})} fullWidth sx={{marginBottom: {xs: "10px", md: "30px"} }} />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
                        <TextField id="outlined-basic" label="State" variant="outlined" value={values.state} onChange={(e)=> setValues({state: e.target.value})} fullWidth sx={{marginBottom: {xs: "10px", md: "30px"} }} />
                    </Grid2>
                    <Grid2 item xs={12} md={6}>
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
                    </Grid2>
                </Grid2>
                <Box
                    sx={[styles.sec2Bottom]}
                >
                    <Box sx={[styles.saveBtnWrapper]}>
                        <LoadingButton
                            fullWidth
                            size="small"
                            onClick={handleLoadClick}
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