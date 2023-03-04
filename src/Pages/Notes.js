import Box from "@mui/material/Box"
import { Avatar, Button, Grid, Step, StepContent, StepLabel, Stepper, Typography, } from "@mui/material";
// import { Fragment, useState } from "react";

import PartyCards from "../Components/PartyCards";
import { useEffect, useState } from "react";

const Styles = () => {
    return {
        displayParties: {
            textAlign: "center",
            borderRadius: "12px",
            boxSizing: "border-box",
        },
        card: {
            background: "#edeff1",
            padding: "60px 0",
            borderRadius: "12px",
            boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
        icon: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // padding: "20px",
            boxShadow: "1px 1px 5px 1px gray",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            margin: "auto",
            marginBottom: "30px",
            
        },
        bigText: {
            fontSize: "20px",
            marginBottom: "6px",
            fontWeight: "500"
        },
        bottomText: {
            fontFamily: "sans-serif",
            fontSize: "14px"
        },
        img: {
            width: "50px",
            height: "50px"
        }
    }
}

const Notes = () => {

    const styles = Styles();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const group = [
        {
            name: "Sanni Collins Ojochonu",
            matric: "19/1547",
            img: "../images/collins.jpeg"
        },
        {
            name: "Femi-Akala Omotola Hamzat",
            matric: "19/1509",
            img: "../images/tola.jpeg"
        },
        {
            name: "Nwokoma Nwachukwu",
            matric: "19/1115",
            img: "../images/nwachukwu.png"
        },
    ]

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const notes = [
        {
            title: "Introduction",
            body: "The methodology for this sentiment analysis project involves several key steps to collect, process, and analyze tweets related to Nigeria's major political parties, the All Progressive Congress (APC), People’s Democratic Party (PDP), and Labor Party (LP), and make predictions about the upcoming elections.\n\n For the analysis, Python programming language was used."
        },
        {
            title: "Collection of Tweets",
            body: "The first step in the methodology is to collect tweets related to the political parties using Twitter API. We used the search method to gather tweets made around the time of the election. Once the tweets were collected, they needed to be preprocessed to remove any unwanted data such as URLs, hashtags, and normalize the text to lowercase to ensure consistency in the analysis. This is the process of cleaning the data."
        },
        {
            title: "Sentiment Analysis",
            body: "Sentiment analysis was performed using a Python library called VADAR. There are other python libraries that could be used to perform the sentiment analysis such as textblob, SentiWordNet and so on. VADAR, which can analyze the sentiment of the tweets and determine their polarity (positive, negative, or neutral) was chosen after proven more effective in our use case. The sentiment scores were then assigned to each tweet, and the results were aggregated to determine the overall sentiment of each political party."
        },
        {
            title: "Data Visualization",
            body: "Based on the sentiment analysis results, predictions will be made about the upcoming elections, including the likelihood of each party winning, and the factors that may influence the outcome."
        },
        {
            title: "Data Visualization on the Website",
            body: "Finally, this website was built using MUI, React.js, and Express.js to visualize the sentiment analysis results and provide users with an interactive interface to explore the data. The website includes features such as checking the overall result of all the parties, checking the individual results of each party/candidate in all states, and viewing related works."
        },
        
    ]

    const groupCards = group.map((item, pos) => {
        return (
            <Grid item xs={12} sm={5.5} md={4}
                sx={[styles.displayParties, {paddingRight: {xs: 0, md: "15px"}}]}
            >
                <Box sx={[styles.card]}>
                    <Box
                        sx={styles.icon}
                    >
                        <Box
                            component="img"
                            sx={{
                            height: "100%",
                            width: "100%",
                            // maxHeight: { xs: 233, md: 167 },
                            // maxWidth: { xs: 350, md: 250 },
                            borderRadius: "50%"
                            }}
                            alt="The house from the offer."
                            src={item.img}
                        />
                            {/* <img styles={styles.img} src={item.img} alt="" /> */}
                        
                    </Box>
                    <Typography
                        variant="h5"
                        sx={[styles.bigText, {color: "#"}]}
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        variant="p"
                        sx={[styles.bottomText, {color: "#"}]}
                    >
                        {item.matric}
                    </Typography>
                </Box>
            </Grid>
        )
    })

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Group Members
            </Typography>
            <Box>
            <Grid container rowGap={2} sx={{background: ""}}>
                {groupCards}
            </Grid>
            </Box>
            <Typography
                variant="h5"
                sx={{margin: "30px 0", fontWeight: "700", fontSize: "36px"}}
            >
                Here are some notes for you.
            </Typography>
            <Box>
                <Stepper activeStep={activeStep}  orientation="vertical">
                    {notes.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "600",
                                }}
                            >
                                {step.title}
                            </Typography>
                        </StepLabel>
                        <StepContent TransitionProps={{ timeout: 0 }} >
                        <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontFamily: "sans-serif"
                                }}
                            >
                                {step.body}

                                <Box>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === notes.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            </Typography>
                        </StepContent>
                    </Step>
                    ))}
                </Stepper>
            </Box>
        </Box>
    );
}
 
export default Notes;