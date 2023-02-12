import Box from "@mui/material/Box"
import {  Typography, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";

// import PartyCards from "../Components/PartyCards";
import BarChart from "../Components/BarChart";
// import RelatedWorksData from "../Data/data";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PieChart from "../Components/PieChart";
// import LineChart from "../Components/LineChart";

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
        displayParties: {
            textAlign: "center",
            borderRadius: "12px",
            boxSizing: "border-box",
        },
        pdp: {
            background: "#fff7cd",
            padding: "30px 20px",
            borderRadius: "12px",
            marginBottom: "30px", 
        },
        icon: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            boxShadow: "1px 1px 5px 1px gray",
            borderRadius: "50%",
            width: "fit-content",
            margin: "auto",
            marginBottom: "30px",
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

const Pdp = () => {

    const styles = Styles();

    const northcentral = {
        labels: ["Benue", "Kogi", "Kwara", "Nassarawa", "Niger", "Plateau", "FCT"],
        datasets: [{
            label: "Positive",
            data: [20, 30, 90, 58, 11, 30, 10],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [80, 30, 60, 10, 23, 95, 40],
            backgroundColor: ["#7a0c2e"],
        },
        {
            label: "Neutral",
            data: [40, 50, 20, 30, 48, 60, 50],
            backgroundColor: ["#7a4f01"],
            
        }]
    }
    const northEast = {
        labels: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
        datasets: [{
            label: "Positive",
            data: [20, 30, 30, 90, 58, 11],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [80, 60, 10, 23, 95, 30],
            backgroundColor: ["#7a0c2e"],
        },
        {
            label: "Neutral",
            data: [40, 50, 20, 48, 60, 30],
            backgroundColor: ["#7a4f01"],
            
        }]
    }
    const northWest = {
        labels: ["Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Sokoto", "Zamfara"],
        datasets: [{
            label: "Positive",
            data: [20, 30, 90, 58, 11, 90, 20],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [80, 90, 60, 10, 23, 95, 14],
            backgroundColor: ["#7a0c2e"],
        },
        {
            label: "Neutral",
            data: [90, 40, 50, 20, 48, 60, 47],
            backgroundColor: ["#7a4f01"],
            
        }]
    }
    const southWest = {
        labels: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
        datasets: [{
            label: "Positive",
            data: [20, 30, 90, 58, 11, 90],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [80, 60, 10, 90, 23, 95],
            backgroundColor: ["#7a0c2e"],
        },
        {
            label: "Neutral",
            data: [40, 50, 20, 40, 48, 60],
            backgroundColor: ["#7a4f01"],
            
        }]
    }
    const southSouth = {
        labels: ["Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers"],
        datasets: [{
            label: "Positive",
            data: [20, 30, 90, 58, 11, 90],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [80, 60, 10, 90, 23, 95],
            backgroundColor: ["#7a0c2e"],
        },
        {
            label: "Neutral",
            data: [40, 50, 20, 40, 48, 60],
            backgroundColor: ["#7a4f01"],
            
        }]
    }
    const southEast = {
        labels: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        datasets: [{
            label: "Positive",
            data: [20, 30, 90, 58, 11],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [80, 60, 90, 23, 95],
            backgroundColor: ["#7a0c2e"],
        },
        {
            label: "Neutral",
            data: [50, 20, 40, 48, 60],
            backgroundColor: ["#7a4f01"],
            
        }]
    }
    const [ pieData, ] = useState({
        labels: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        datasets: [{
            label: "Works",
            data: [200, 150, 400, 393, 843],
            backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e"],
            
        }]
    })
    // const [ lineData, setLineData ] = useState({
    //     labels: RelatedWorksData.map((data) => data.year),
    //     datasets: [{
    //         label: "Works",
    //         data: RelatedWorksData.map((data) => data.test),
    //         backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e", "#778eb8", "#a04a5e"],
            
    //     },
    //     {
    //         label: "ygbiuyhg",
    //         data: RelatedWorksData.map((data) => data.test-20),
    //         // backgroundColor: ["#061b64", "#7a4f01", "#7a0c2e", "#778eb8", "#a04a5e"],
            
    //     }]
    // })

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Analysis of People's Democratic Party (PDP)
            </Typography>
            <Box  sx={[styles.pdp]}>
                <Grid2 container>
                    <Grid2 item xs={12} md={5} sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        <Box
                            sx={[styles.displayParties, {paddingRight: {xs: 0, md: "15px"}}, ]}
                        >
                            <Box sx={[styles.ap]}>
                                <Box
                                    sx={styles.icon}
                                >
                                    {/* <PaymentsIcon /> */}
                                </Box>
                                <Typography
                                    variant="h5"
                                    sx={[styles.bigText, {color: "#061b64"}]}
                                >
                                    PDP
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={[styles.bottomText, {color: "#778eb8"}]}
                                >
                                    People's Democratic Party
                                </Typography>
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 item xs={12} md={3} sx={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                        <Typography >
                            Keywords
                        </Typography>
                    </Grid2>
                    <Grid2 item xs={12} md={4}>
                        <Box sx={{display: "flex", justifyContent: "space-evenly"}}>
                            <Box>
                                <Stepper activeStep={3} orientation="vertical">
                                    {["pdp", "atiku", "abubakar"].map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel
                            
                                        >
                                            {step}
                                        </StepLabel>
                                    </Step>
                                    ))}
                                </Stepper>
                            </Box>
                            
                            <Box>
                                <Stepper activeStep={3} orientation="vertical">
                                    {["vp", "2023", "president"].map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel
                            
                                        >
                                            {step}
                                        </StepLabel>
                                    </Step>
                                    ))}
                                </Stepper>
                            </Box>
                        </Box>
                    </Grid2>
                </Grid2>
                
            </Box>
            <Box>
                <Grid2 container spacing={2} sx={styles.bt} >
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        North Central States
                    </Typography>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={northcentral} axis={"y"} />
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
                        North East States
                    </Typography>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={northEast} axis={"y"} />
                        </Box>
                    </Grid2>
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        North West States
                    </Typography>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={northWest} axis={"y"} />
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
                        South East States
                    </Typography>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={southEast} axis={"y"} />
                        </Box>
                    </Grid2>
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        South West States
                    </Typography>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={southWest} axis={"y"} />
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
                        South South States
                    </Typography>
                    <Grid2 item xs={12} md={5} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <PieChart chartData={pieData}  />
                        </Box>

                    </Grid2>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={southSouth} axis={"y"} />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>

        </Box>
    );
}
 
export default Pdp;