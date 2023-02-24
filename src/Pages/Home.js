import Box from "@mui/material/Box"
import {  AppBar, Toolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer, IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"
import { Fragment, useState } from "react";
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
// import FlagIcon from '@mui/icons-material/Flag';
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Notes from "./Notes";
import ErrorPage from "./ErrorPage";
import RelatedWorks from "./RelatedWorks";
import LayersIcon from '@mui/icons-material/Layers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Apc from "./Apc";
import Pdp from "./Pdp";
import Lp from "./Lp";
// import ShowChartIcon from '@mui/icons-material/ShowChart';
import EqualizerIcon from '@mui/icons-material/Equalizer';
// import Dashboard from './Pages/Dashboard';

const Home = () => {

    let navigate = useNavigate();

    let params = useParams();

    console.log(params);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [expand, setExpand] = useState(false);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleListItemClick = (val, index) => {
        setSelectedIndex(index);
        navigate(`/home/${val}`);
        toggleDrawer("left", false);
    };
    const handleExpand = () => {
        setExpand(!expand);
        
        toggleDrawer("left", true);
    };
    function handleLogoutClick() {
        localStorage.setItem('loggedIn', JSON.stringify(false)); 
        navigate("/login")
    }

    const menu = <Box
        sx={{
            // background: "pink",
            width: "90%",
            margin: "auto",
            paddingTop: "20px",
            height: "100%"
        }}
    >
        <Box
            sx={{
                background: "#edeff1",
                width: "90%",
                margin: "auto",
                padding: "12px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "12px",
                marginBottom: "12px",
                // boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            }}
        >
            <Avatar sx={{ bgcolor: "purple" }}>{`${JSON.parse(localStorage.user).lastName[0]}${JSON.parse(localStorage.user).firstName[0]}`}</Avatar>
            <Typography variant="p" sx={{fontFamily: "sans-serif"}}>
                {`${JSON.parse(localStorage.user).lastName} ${JSON.parse(localStorage.user).firstName}`}
            </Typography>
        </Box>
        
        <Box sx={{ width: '100%', fontSize: "20px", }} onClick={toggleDrawer("left", false)} onKeyDown={toggleDrawer("left", false)}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick("dashboard", 0)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <StackedBarChartIcon sx={{fontSize: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" primaryTypographyProps={selectedIndex === 0 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                    <IconButton edge="end" aria-label="delete" onClick={handleExpand}>
                      <ExpandMoreIcon />
                    </IconButton>
                </ListItemButton>
                <Box
                    sx={{ padding: 0, paddingLeft: "20px", borderRadius: "6px", display: expand ? "block" : "none" }}
                    // selected={selectedIndex === 0}
                    // onClick={(event) => handleListItemClick("dashboard", 0)}
                >
                    <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton
                                sx={{ borderRadius: "6px" }}
                                selected={selectedIndex === 5}
                                onClick={(event) => handleListItemClick("apc", 5)}
                            >
                                <ListItemIcon sx={{fontSize: '14px'}}>
                                    <EqualizerIcon sx={{fontSize: '20px'}}/>
                                </ListItemIcon>
                                <ListItemText primary="APC" primaryTypographyProps={selectedIndex === 5 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                            </ListItemButton>
                            <ListItemButton
                                sx={{ borderRadius: "6px" }}
                                selected={selectedIndex === 6}
                                onClick={(event) => handleListItemClick("pdp", 6)}
                            >
                                <ListItemIcon sx={{fontSize: '14px'}}>
                                    <EqualizerIcon sx={{fontSize: '20px'}}/>
                                </ListItemIcon>
                                <ListItemText primary="PDP" primaryTypographyProps={selectedIndex === 6 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                            </ListItemButton>
                            <ListItemButton
                                sx={{ borderRadius: "6px" }}
                                selected={selectedIndex === 7}
                                onClick={(event) => handleListItemClick("lp", 7)}
                            >
                                <ListItemIcon sx={{fontSize: '14px'}}>
                                    <EqualizerIcon sx={{fontSize: '20px'}}/>
                                </ListItemIcon>
                                <ListItemText primary="LP" primaryTypographyProps={selectedIndex === 7 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                            </ListItemButton>
                            
                        </List>
                </Box>
                
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick("notes", 1)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <BookIcon sx={{fontSize: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Notes" primaryTypographyProps={selectedIndex === 1 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick("related-works", 2)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <LayersIcon sx={{fontSize: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Related Works" primaryTypographyProps={selectedIndex === 2 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                
            </List>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    sx={{ borderRadius: "6px" }}
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick("settings", 3)}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <SettingsIcon sx={{fontSize: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Settings" primaryTypographyProps={selectedIndex === 3 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                <ListItemButton
                    sx={selectedIndex === 4 ? { borderRadius: "6px", background: "#edeff1" } : { borderRadius: "6px" }}
                    selected={selectedIndex === 4}
                    onClick={handleLogoutClick}
                >
                    <ListItemIcon sx={{fontSize: '14px'}}>
                        <LogoutIcon sx={{fontSize: '20px'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" primaryTypographyProps={selectedIndex === 4 ? {fontSize: '14px', fontWeight: 600} : {fontSize: '14px', fontWeight: 550, color: "gray"}}/>
                </ListItemButton>
                
            </List>
            
        </Box>
    </Box>

    const display = () => {
        params = params.menu
        if(params === "dashboard"){
            return <Dashboard />
        }else if(params === "apc"){
            return <Apc />
        }else if(params === "pdp"){
            return <Pdp />
        }else if(params === "lp"){
            return <Lp />
        }else if(params === "notes"){
            return <Notes />
        }else if(params === "settings"){
            return <Settings />
        }else if(params === "logout"){
            // return <Dashboard />
        }else if(params === "related-works"){
            return <RelatedWorks />
        }else{
            return <ErrorPage home={true}/>
        }
    }

    return (
        <Box
            sx={{
                height: "100vh",
            }}
        >
            <Box container >
                <Box item xs={12} md={2.5} 
                    sx={{
                        // boxShadow: "0 0 5px 0 gray",
                        borderRight: "2px dashed #edeff1",
                        // textAlign: "center",
                        height: "100vh",
                        display: {xs: "none", md: "block"},
                        paddingTop: "12px",
                        position: "fixed",
                        width: "21vw",
                        zIndex: "2",
                        top: 0
                    }}
                >
                    <Typography 
                        variant="h6" 
                        color="inherit" 
                        component="div"
                        sx={{
                            fontSize: "20px",
                            fontWeight: 600,
                            fontFamily: "monospace",
                            color: "white",
                            background: "teal",
                            padding: "2px 6px",
                            borderRadius: "12px",
                            margin: "9px 0",
                            marginLeft: "12px",
                            width: "fit-content",
                            
                        }}
                    >
                        S.A
                    </Typography>
                    {menu}
                </Box>
                <Box item 
                    sx={{
                        marginLeft: {xs: "0", md: "21vw"}
                    }}
                >
                    <Box>
                        <Box>
                            <AppBar 
                                position="static"
                                elevation={0}
                                sx={{
                                    background: "transparent",
                                    // height: "18vh",
                                    position: "fixed",
                                    top: 0,
                                    
                                }}
                            >
                                <Toolbar variant="dense"  
                                    sx={{
                                        justifyContent: {xs: "space-between", md: "end"}, 
                                        backdropFilter: "blur(5px)", 
                                        zIndex: "555", 
                                        height: "10vh", 
                                        width: {md: "75vw"}, 
                                        paddingRight: {xs: "0", md: "55px"} 
                                    }}
                                >
                                    <Typography 
                                        variant="h6" 
                                        color="inherit" 
                                        component="div"
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 600,
                                            fontFamily: "monospace",
                                            color: "white",
                                            background: "teal",
                                            padding: "2px 6px",
                                            borderRadius: "12px",
                                            margin: "9px 0",
                                            marginLeft: "12px",
                                            width: "fit-content",
                                            display: {xs: "block", md: "none"},
                                            visibility: { md: "hidden"}
                                        }}
                                    >
                                        S.A
                                    </Typography>
                                    <Box sx={{display: {xs: "flex", md: "flex"}}}>
                                        {/* <FlagIcon sx={{color: "black"}}/> */}
                                        
                                        <Avatar sx={{ bgcolor: "purple" }}>{`${JSON.parse(localStorage.user).lastName[0]}${JSON.parse(localStorage.user).firstName[0]}`}</Avatar>

                                        {/* <Typography sx={{color: "blue"}}>Wooooooooow</Typography> */}
                                        
                                        <Fragment >
                                            <Button sx={{display: {xs: "block", md: "none"}}} onClick={toggleDrawer("left", true)}><MenuIcon sx={{color: "black"}}/></Button>
                                            <SwipeableDrawer
                                                
                                                anchor="left"
                                                open={state["left"]}
                                                onClose={toggleDrawer("left", false)}
                                                onOpen={toggleDrawer("left", true)}
                                            >
                                                <Box sx={{width: 250}}>
                                                    <Typography 
                                                        variant="h6" 
                                                        color="inherit" 
                                                        component="div"
                                                        sx={{
                                                            fontSize: "20px",
                                                            fontWeight: 600,
                                                            fontFamily: "monospace",
                                                            color: "white",
                                                            background: "teal",
                                                            padding: "2px 6px",
                                                            borderRadius: "12px",
                                                            margin: "9px 0",
                                                            marginLeft: "12px",
                                                            width: "fit-content"
                                                        }}
                                                    >
                                                        S.A
                                                    </Typography>
                                                    { menu }
                                                </Box>
                                            </SwipeableDrawer>
                                        </Fragment>

                                    </Box>
                                </Toolbar>
                            </AppBar> 
                        </Box>
                        <Box
                            sx={{
                                padding: {xs: "20px", md: "50px"},
                                marginTop: "8vh"
                            }}
                        >
                            {display()}
                        </Box>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
}
 
export default Home;