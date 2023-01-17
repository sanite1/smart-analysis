import Box from "@mui/material/Box"
import { Grid, AppBar, Toolbar, Typography, Avatar, List, ListItemButton, ListItemIcon, ListItemText, Divider, Button, SwipeableDrawer } from "@mui/material";
import { Fragment, useState } from "react";

import PartyCards from "../Components/PartyCards";
import BarChart from "../Components/BarChart";
import RelatedWorksData from "../Data/data";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PieChart from "../Components/PieChart";
import LineChart from "../Components/LineChart";

const Styles = () => {
    return {
        chart: {
            background: "#ffffff", 
            padding: "30px",
            boxSizing: "border-box",
            height: "fit-content",
            borderRadius: "12px",
            boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
        piechart: {
            background: "#ffffff", 
            padding: "30px"
        },
        barchart: {
            background: "#ffe7d9"
        },
    }
}

const Dashboard = () => {

    const styles = Styles();

    const [ barData, setBarData ] = useState({
        labels: RelatedWorksData.map((data) => data.year),
        datasets: [{
            label: "Works",
            data: RelatedWorksData.map((data) => data.test),
            backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e", "#778eb8", "#a04a5e"],
            
        },
        {
            label: "ygbiuyhg",
            data: RelatedWorksData.map((data) => data.test-20),
            // backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e", "#778eb8", "#a04a5e"],
            
        }]
    })
    const [ pieData, setPieData ] = useState({
        labels: ["APC", "PDP", "LP"],
        datasets: [{
            label: "Works",
            data: [200, 150, 400],
            backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e"],
            
        }]
    })
    const [ lineData, setLineData ] = useState({
        labels: RelatedWorksData.map((data) => data.year),
        datasets: [{
            label: "Works",
            data: RelatedWorksData.map((data) => data.test),
            backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e", "#778eb8", "#a04a5e"],
            
        },
        {
            label: "ygbiuyhg",
            data: RelatedWorksData.map((data) => data.test-20),
            // backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e", "#778eb8", "#a04a5e"],
            
        }]
    })

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Hi, Welcome back
            </Typography>
            <Box  sx={{marginBottom: "30px", }}>
                <PartyCards />
            </Box>
            <Box>
                <Grid2 container spacing={2} sx={styles.bt} >
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        Eastern States
                    </Typography>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={barData} axis={"y"} />
                        </Box>
                    </Grid2>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        Sounthern States
                    </Typography>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={barData} axis={"y"} />
                        </Box>
                    </Grid2>
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        Northern States
                    </Typography>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={barData} axis={"y"} />
                        </Box>
                    </Grid2>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        Western States
                    </Typography>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={barData} axis={"y"} />
                        </Box>
                    </Grid2>
                    {/* <Grid2 item xs={12} md={12} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <LineChart chartData={lineData} ratio={2} axis={"x"} />
                        </Box>

                    </Grid2> */}
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        Overview of all states
                    </Typography>
                    <Grid2 item xs={12} md={12} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <BarChart chartData={lineData} axis={"x"} ratio={2} />
                        </Box>

                    </Grid2>
                </Grid2>
            </Box>

        </Box>
    );
}
 
export default Dashboard;