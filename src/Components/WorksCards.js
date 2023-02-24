import Box from "@mui/material/Box"
import {  Typography, Button, Tooltip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import { useState } from "react";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import RelatedWorksData from "../Data/data";

const Styles = () => {
    return {
        card: {
            // background: "#fff",
            borderRadius: "12px"
        },
        imgWrapper: {
            // background: "blue",
            borderRadius: "12px 12px 0 0",
            height: "160px"
        },
        img: {
            borderRadius: "12px 12px 0 0",
            height: "100%",
            width: "100%"
        },
        sec2: {
            borderRadius: " 0 0 12px 12px",
            background: "#fff",
            padding: "12px"
        },
        cite: {
            color: "#afb8c2",
            fontSize: "14px",
            height: "16px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontFamily: "sans-serif",
            fontWeight: "500",
            padding: "12px 0 0px"
        },
        title: {
            color: "#27313b",
            fontSize: "15px",
            fontWeight: "600",
            maxHeight: "30px",
            fontFamily: "sans-serif",
            wordWrap: "break-word",
            textOverflow: "ellipsis",
            overflow: "hidden",
            hyphens: "auto",
            wordBreak: "break-all",
            width: "100%",
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            padding: "12px 0",
            // textAlign: "justify",
            "&:hover": {
                textDecoration: "underline",
                cursor: "pointer"
            }
        },
        year: {
            color: "#919eab",
            fontSize: "14px",
            fontFamily: "sans-serif",
            padding: "12px 0",
            textAlign: "right"
        },
    }
}

const WorksCards = () => {

    const styles = Styles();

    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleClickOpen = (title, body) => {
        setTitle(title);
        setBody(body);
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };

    const cards = RelatedWorksData.map((item, pos) => {
        return(
            <Grid2 item key={pos} sx={styles.card} xs={12} sm={6} md={3}>
                <Box
                    sx={{
                        boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
                        borderRadius: "12px"
                    }}
                >
                    <Box sx={styles.imgWrapper}>
                        <img style={styles.img} src={item.img} alt="" />
                    </Box>
                    <Box sx={styles.sec2}>
                        <Typography sx={styles.cite}>
                            {item.cite}
                        </Typography>
                        <Tooltip title={item.title} placement="bottom-start">
                            <Typography sx={styles.title}  onClick={() => handleClickOpen(`${item.title} (${item.cite}, ${item.year})`, item.note)}>
                                {item.title}
                            </Typography>
                        </Tooltip>
                        <Box>
                            <Typography sx={styles.year}>
                                {item.year}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                
            </Grid2>
        )
    })

    return (
        <Box>
            <Dialog fullScreen
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {body}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Grid2 container spacing={3}>

                {cards}
            </Grid2>
        </Box>
    );
}
 
export default WorksCards;