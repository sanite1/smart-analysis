
import Box from "@mui/material/Box"
import { Grid, AppBar, Toolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer } from "@mui/material";
import { Fragment, useState } from "react";
import { border, width } from "@mui/system";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PaymentsIcon from '@mui/icons-material/Payments';


const Styles = () => {
    return {
        displayParties: {
            textAlign: "center",
            borderRadius: "12px",
            boxSizing: "border-box",
        },
        apc: {
            background: "#d1e9fc",
            padding: "60px 0",
            borderRadius: "12px",
        },
        pdp: {
            background: "#fff7cd",
            padding: "60px 0",
            borderRadius: "12px",
        },
        lp: {
            background: "#ffe7d9",
            padding: "60px 0",
            borderRadius: "12px",
        },
        icon: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            // border: "1px solid green",
            boxShadow: "1px 1px 5px 1px gray",
            borderRadius: "50%",
            width: "fit-content",
            margin: "auto",
            marginBottom: "30px",
            // backdropFilter: "blur(5px)",
            // marginTop: "30px",
            // background: "transparent"
        },
        bigText: {
            fontWeight: "700"
        },
        bottomText: {
            fontFamily: "sans-serif",
            fontSize: "14px"
        }
    }
}

const PartyCards = () => {

    const styles = Styles();
    return (
        <Grid container rowGap={2} sx={{background: ""}}>
            <Grid item xs={12} sm={5.5} md={4}
                sx={[styles.displayParties, {paddingRight: {xs: 0, md: "15px"}}]}
            >
                <Box sx={[styles.apc]}>
                    <Box
                        sx={styles.icon}
                    >
                        <PaymentsIcon />
                    </Box>
                    <Typography
                        variant="h5"
                        sx={[styles.bigText, {color: "#061b64"}]}
                    >
                        APC
                    </Typography>
                    <Typography
                        variant="p"
                        sx={[styles.bottomText, {color: "#778eb8"}]}
                    >
                        All Progressive Congress
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={5.5} md={4}
                sx={[styles.displayParties, {padding: {xs: 0, md: "0 15px"}, paddingLeft: {sm: "15px", md: "15px"}}]}
            >
                <Box  sx={styles.pdp}>
                    <Box
                        sx={styles.icon}
                    >
                        <BeachAccessIcon />
                    </Box>
                    <Typography
                        variant="h5"
                        sx={[styles.bigText, {color: "#7a4f01"}]}
                    >
                        PDP
                    </Typography>
                    <Typography
                        variant="p"
                        sx={[styles.bottomText, {color: "#aa8b4a"}]}
                    >
                        People's Democratic Party
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={5.5} md={4}
                sx={[styles.displayParties, {paddingLeft: {xs: 0, md: "15px"}}]}
            >
                <Box sx={styles.lp}>
                    <Box
                        sx={styles.icon}
                    >
                        <HealthAndSafetyIcon />
                    </Box>
                    <Typography
                        variant="h5"
                        sx={[styles.bigText, {color: "#7a0c2e"}]}
                    >
                        LP
                    </Typography>
                    <Typography
                        variant="p"
                        sx={[styles.bottomText, {color: "#a04a5e"}]}
                    >
                        Labour Party
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
 
export default PartyCards;