import Box from "@mui/material/Box"
import {  Typography, Stepper, Step, StepLabel, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

// import PartyCards from "../Components/PartyCards";
import BarChart from "../Components/BarChart";
// import RelatedWorksData from "../Data/data";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import PieChart from "../Components/PieChart";
import LineChart from "../Components/LineChart";
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

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  
      const ratio = isLargeScreen ? 2 : 1;

    const northcentral = {
        labels: ["Benue", "Kogi", "Kwara", "Nassarawa", "Niger", "Plateau", "FCT"],
        datasets: [{
            label: "Positive",
            data: [260.316, 267.523, 270.628, 251.545, 265.578, 250.047, 243.840, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [116.028, 140.144, 139.150, 143.477, 138.116, 142.655, 122.323, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northcentralpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [260.316, 267.523, 270.628, 251.545, 265.578, 250.047, 243.840].reduce((accumulator, currentValue) => accumulator + currentValue),
                [116.028, 140.144, 139.150, 143.477, 138.116, 142.655, 122.323, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const northEast = {
        labels: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
        datasets: [{
            label: "Positive",
            data: [260.916, 262.022, 289.998, 253.805, 235.365, 264.412, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [106.840, 109.699, 107.477, 133.012, 156.793, 123.664, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northEastpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [260.916, 262.022, 289.998, 253.805, 235.365, 264.412,].reduce((accumulator, currentValue) => accumulator + currentValue),
                [106.840, 109.699, 107.477, 133.012, 156.793, 123.664,].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const northWest = {
        labels: ["Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Sokoto", "Zamfara"],
        datasets: [{
            label: "Positive",
            data: [280.783, 249.766, 281.440, 285.874, 273.559, 269.856, 256.972, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [111.656, 136.307, 112.426, 103.749, 117.287, 116.584, 123.726, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northWestpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [280.783, 249.766, 281.440, 285.874, 273.559, 269.856, 256.972].reduce((accumulator, currentValue) => accumulator + currentValue),
                [111.656, 136.307, 112.426, 103.749, 117.287, 116.584, 123.726].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southWest = {
        labels: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
        datasets: [{
            label: "Positive",
            data: [237.892, 256.014, 254.844, 249.815, 251.302, 251.807, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [154.200, 143.570, 143.766, 144.867, 143.780, 141.302, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southWestpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [237.892, 256.014, 254.844, 249.815, 251.302, 251.807, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [154.200, 143.570, 143.766, 144.867, 143.780, 141.302,].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southSouth = {
        labels: ["Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers"],
        datasets: [{
            label: "Positive",
            data: [263.988, 263.881, 246.578, 248.328, 237.467, 245.305, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [115.014, 114.296, 140.744, 140.275, 149.125, 151.075, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southSouthpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [263.988, 263.881, 246.578, 248.328, 237.467, 245.305].reduce((accumulator, currentValue) => accumulator + currentValue),
                [115.014, 114.296, 140.744, 140.275, 149.125, 151.075].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southEast = {
        labels: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        datasets: [{
            label: "Positive",
            data: [281.408, 261.469, 243.272, 231.105, 229.068, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [198.365, 120.908, 145.281, 165.135, 155.768, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southEastpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [281.408, 261.469, 243.272, 231.105, 229.068].reduce((accumulator, currentValue) => accumulator + currentValue),
                [198.365, 120.908, 145.281, 165.135, 155.768].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const [ lineData,  ] = useState({
        labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ],
        datasets: [{
            label: "Positve",
            data: [260.316, 267.523, 270.628, 251.545, 265.578, 250.047, 243.840, 260.916, 262.022, 289.998, 253.805, 235.365, 264.412, 280.783, 249.766, 281.440, 285.874, 273.559, 269.856, 256.972, 237.892, 256.014, 254.844, 249.815, 251.302, 251.807, 263.988, 263.881, 246.578, 248.328, 237.467, 245.305, 281.408, 261.469, 243.272, 231.105, 229.068, ],
            backgroundColor: ["#061b64"],
            
        },
        {
            label: "Negetive",
            data: [116.028, 140.144, 139.150, 143.477, 138.116, 142.655, 122.323, 106.840, 109.699, 107.477, 133.012, 156.793, 123.664, 111.656, 136.307, 112.426, 103.749, 117.287, 116.584, 123.726, 154.200, 143.570, 143.766, 144.867, 143.780, 141.302, 115.014, 114.296, 140.744, 140.275, 149.125, 151.075, 198.365, 120.908, 145.281, 165.135, 155.768, ],
            backgroundColor: ["#7a0c2e"],
            background: "#7a0c2e",
            color: "#7a0c2e",
            
        }]
    })


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
                            <Box sx={[styles.ap, {marginBottom: "20px", }]}>
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
                        <Box sx={{marginTop: "20px",display: "flex", justifyContent: "space-evenly"}}>
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
                            <PieChart chartData={northcentralpie}  />
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
                            <PieChart chartData={northEastpie}  />
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
                            <PieChart chartData={northWestpie}  />
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
                            <PieChart chartData={southEastpie}  />
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
                            <PieChart chartData={southWestpie}  />
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
                            <PieChart chartData={southSouthpie}  />
                        </Box>

                    </Grid2>
                    <Grid2 item xs={12} md={7} sx={{padding: {xs: "15px 6px", md: "15px"}}} >
                        <Box sx={[styles.barchart, styles.chart]}>
                            <BarChart chartData={southSouth} axis={"y"} />
                        </Box>
                    </Grid2>
                </Grid2>
                <Box>
                    <Grid2 container spacing={2} sx={styles.bt} >
                        
                        <Typography
                            variant="h5"
                            sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                        >
                            Change in sentiment across of all states
                        </Typography>
                        <Grid2 item xs={12} md={12} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                            <Box sx={[styles.piechart, styles.chart]}>
                                <LineChart chartData={lineData} axis={"x"} ratio={ratio} />
                            </Box>

                        </Grid2>
                    </Grid2>
                </Box>
            </Box>
            
        </Box>
    );
}
 
export default Pdp;