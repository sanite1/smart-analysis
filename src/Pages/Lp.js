import Box from "@mui/material/Box"
import { Typography, Stepper, Step, StepLabel, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

// import PartyCards from "../Components/PartyCards";
import BarChart from "../Components/BarChart";
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
        lp: {
            background: "#ffe7d9",
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

const Lp = () => {

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
            data: [309.722, 303.472, 307.099, 307.077, 300.912, 307.472, 292.942, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [107.198, 142.746, 134.363, 117.494, 107.887, 113.973, 104.910, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northcentralpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [309.722, 303.472, 307.099, 307.077, 300.912, 307.472, 292.942, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [107.198, 142.746, 134.363, 117.494, 107.887, 113.973, 104.910, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const northEast = {
        labels: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
        datasets: [{
            label: "Positive",
            data: [316.928, 312.427, 266.947, 307.377, 309.468, 286.043, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [98.196, 100.109, 91.166, 106.974, 120.555, 90.370, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northEastpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [316.928, 312.427, 266.947, 307.377, 309.468, 286.043, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [98.196, 100.109, 91.166, 106.974, 120.555, 90.370, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const northWest = {
        labels: ["Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Sokoto", "Zamfara"],
        datasets: [{
            label: "Positive",
            data: [277.343, 310.961, 277.928, 262.071, 281.279, 264.788, 283.876, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [89.903, 107.859, 90.223, 95.670, 88.792, 98.493, 89.236, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const northWestpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [277.343, 310.961, 277.928, 262.071, 281.279, 264.788, 283.876, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [89.903, 107.859, 90.223, 95.670, 88.792, 98.493, 89.236, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southWest = {
        labels: ["Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo"],
        datasets: [{
            label: "Positive",
            data: [312.939, 294.008, 294.668, 295.659, 303.844, 302.567, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [125.830, 131.248, 119.530, 114.947, 115.227, 111.637, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southWestpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [312.939, 294.008, 294.668, 295.659, 303.844, 302.567, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [125.830, 131.248, 119.530, 114.947, 115.227, 111.637, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southSouth = {
        labels: ["Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers"],
        datasets: [{
            label: "Positive",
            data: [318.852, 314.914, 305.522, 307.260, 315.214, 287.993, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [92.406, 95.396, 109.309, 115.292, 123.951, 113.792, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southSouthpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [318.852, 314.914, 305.522, 307.260, 315.214, 287.993, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [92.406, 95.396, 109.309, 115.292, 123.951, 113.792, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const southEast = {
        labels: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        datasets: [{
            label: "Positive",
            data: [316.211, 318.712, 306.883, 317.755, 316.774, ],
            backgroundColor: ["#061b64"],
        },
        {
            label: "Negetive",
            data: [97.784, 95.012, 116.196, 122.004, 128.581, ],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    }
    const southEastpie = {
        labels: ["Positive", "Negetive"],
        datasets: [{
            label: "Works",
            data: [
                [316.211, 318.712, 306.883, 317.755, 316.774, ].reduce((accumulator, currentValue) => accumulator + currentValue),
                [97.784, 95.012, 116.196, 122.004, 128.581, ].reduce((accumulator, currentValue) => accumulator + currentValue),
            ],
            backgroundColor: ["#061b64", "#7a0c2e"],
            
        }]
    }
    const [ lineData,  ] = useState({
        labels: ["Benue", "Kogi", "Kwara", "Nassarawa", "Niger", "Plateau", "FCT", "Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe", "Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Sokoto", "Zamfara", "Ekiti", "Lagos", "Ogun", "Ondo", "Osun", "Oyo", "Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers", "Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        datasets: [{
            label: "Positve",
            data: [309.722, 303.472, 307.099, 307.077, 300.912, 307.472, 292.942, 316.928, 312.427, 266.947, 307.377, 309.468, 286.043, 277.343, 310.961, 277.928, 262.071, 281.279, 264.788, 283.876, 312.939, 294.008, 294.668, 295.659, 303.844, 302.567, 318.852, 314.914, 305.522, 307.260, 315.214, 287.993, 316.211, 318.712, 306.883, 317.755, 316.774, ],
            backgroundColor: ["#061b64"],
            
        },
        {
            label: "Negetive",
            data: [107.198, 142.746, 134.363, 117.494, 107.887, 113.973, 104.910, 98.196, 100.109, 91.166, 106.974, 120.555, 90.370, 89.903, 107.859, 90.223, 95.670, 88.792, 98.493, 89.236, 125.830, 131.248, 119.530, 114.947, 115.227, 111.637, 92.406, 95.396, 109.309, 115.292, 123.951, 113.792, 97.784, 95.012, 116.196, 122.004, 128.581, ],
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
                Analysis of Labour Party (LP)
            </Typography>
            <Box  sx={[styles.lp]}>
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
                                    LP
                                </Typography>
                                <Typography
                                    variant="p"
                                    sx={[styles.bottomText, {color: "#778eb8"}]}
                                >
                                    Labour Party
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
                                    {["lp", "peter", "obi"].map((step, index) => (
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
                                    {["obedience", "2023", "president"].map((step, index) => (
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
                <Box
                    sx={{
                        display: {xs: "block", md: "block"}
                    }}
                >
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
 
export default Lp;