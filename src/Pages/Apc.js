import Box from "@mui/material/Box"
import { Typography, Stepper, Step, StepLabel, useMediaQuery } from "@mui/material";
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
        apc: {
            background: "#d1e9fc",
            padding: "30px 20px",
            borderRadius: "12px",
            marginBottom: "30px", 
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "space-evenly"
            // padding
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

const Apc = () => {

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
            data: [259.077, 266.727, 273.963, 232.333, 244.738, 243.962, 349.672],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [144.573, 157.213, 150.356, 175.920, 166.461, 163.041, 67.198, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northcentralpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [259.077, 266.727, 273.963, 232.333, 244.738, 243.962, 349.672].reduce((accumulator, currentValue) => accumulator + currentValue),
                [144.573, 157.213, 150.356, 175.920, 166.461, 163.041, 67.198, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const northEast = {
        labels: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
        datasets: [{
            label: "Positive",
            data: [254.795,  256.348, 272.336, 243.266, 231.357, 265.971,],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [157.049, 143.903, 133.631, 168.142, 162.123, 145.218,],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northEastpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [254.795,  256.348, 272.336, 243.266, 231.357, 265.971,].reduce((accumulator, currentValue) => accumulator + currentValue),
                [157.049, 143.903, 133.631, 168.142, 162.123, 145.218,].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const northWest = {
        labels: ["Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Sokoto", "Zamfara"],
        datasets: [{
            label: "Positive",
            data: [265.664, 232.689, 270.903, 273.128, 268.364, 270.380, 261.248],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [146.580, 172.063, 144.960, 125.458, 142.246, 138.359, 149.372],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northWestpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [265.664, 232.689, 270.903, 273.128, 268.364, 270.380, 261.248].reduce((accumulator, currentValue) => accumulator + currentValue),
                [146.580, 172.063, 144.960, 125.458, 142.246, 138.359, 149.372].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southWest = {
        labels: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
        datasets: [{
            label: "Positive",
            data: [226.145, 258.765, 253.221, 244.861, 252.483, 253.543, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [186.932, 162.408, 149.979, 139.527, 141.248, 134.271,],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southWestpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [226.145, 258.765, 253.221, 244.861, 252.483, 253.543, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [186.932, 162.408, 149.979, 139.527, 141.248, 134.271,].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southSouth = {
        labels: ["Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers"],
        datasets: [{
            label: "Positive",
            data: [260.517, 251.167, 246.564, 243.189, 229.592, 252.522],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [136.490, 136.526, 141.068, 145.931, 176.291, 132.484],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southSouthpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [260.517, 251.167, 246.564, 243.189, 229.592, 252.522].reduce((accumulator, currentValue) => accumulator + currentValue),
                [136.490, 136.526, 141.068, 145.931, 176.291, 132.484].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southEast = {
        labels: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        datasets: [{
            label: "Positive",
            data: [299.633, 255.785, 238.414, 217.878, 236.673],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [130.37, 135.971, 146.624, 191.519, 179.341],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southEastpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [299.633, 255.785, 238.414, 217.878, 236.673].reduce((accumulator, currentValue) => accumulator + currentValue),
                [130.37, 135.971, 146.624, 191.519, 179.341].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const [ lineData,  ] = useState({
        labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ],
        datasets: [{
            label: "Positve",
            data: [259.077, 266.727, 273.963, 232.333, 244.738, 243.962, 349.672, 254.795,  256.348, 272.336, 243.266, 231.357, 265.971, 265.664, 232.689, 270.903, 273.128, 268.364, 270.380, 261.248, 226.145, 258.765, 253.221, 244.861, 252.483, 253.543, 260.517, 251.167, 246.564, 243.189, 229.592, 252.522, 299.633, 255.785, 238.414, 217.878, 236.673],
            backgroundColor: ["#061b64"],
            
        },
        {
            label: "Negetive",
            data: [144.573, 157.213, 150.356, 175.920, 166.461, 163.041, 67.198, 157.049, 143.903, 133.631, 168.142, 162.123, 145.218, 146.580, 172.063, 144.960, 125.458, 142.246, 138.359, 149.372, 186.932, 162.408, 149.979, 139.527, 141.248, 134.271, 136.490, 136.526, 141.068, 145.931, 176.291, 132.484, 130.37, 135.971, 146.624, 191.519, 179.341],
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
                Analysis of All Progressive Congress (APC)
            </Typography>
            <Box  sx={[styles.apc]}>
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
                                    APC
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={[styles.bottomText, {color: "#778eb8"}]}
                                >
                                    All Progressive Congress
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
                                    {["apc", "tinubu", "bola"].map((step, index) => (
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
                                    {["ahmed", "asiwaju", "president"].map((step, index) => (
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
 
export default Apc;