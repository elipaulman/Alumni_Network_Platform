import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import alumain from "../images/alumain.png";
import EventIcon from "@mui/icons-material/Event";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import FeedIcon from "@mui/icons-material/Feed";

const DashboardCard = styled(Card)({
  padding: "24px",
  textAlign: "center",
  color: "#555",
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

function Main() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${alumain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        py: 6,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            LMCC Alumni Network
          </Typography>
          <Typography variant="h6" color="text.primary" sx={{ color: "#ffffff" }}>
            Stay connected, stay informed, and explore new opportunities.
          </Typography>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", textAlign: "center", mb: 4, color: "#ffffff" }}
          >
            Explore the Network
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <DashboardCard>
                <PeopleIcon fontSize="large" sx={{ mb: 2, color: "#00BDF2" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Directory
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                  Browse the alumni directory and connect with fellow graduates.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00BDF2",
                    "&:hover": { backgroundColor: "#009bbd" },
                  }}
                  href="/directory"
                >
                  View Directory
                </Button>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DashboardCard>
                <EventIcon fontSize="large" sx={{ mb: 2, color: "#00BDF2" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Events
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                  Stay updated on the latest events and meetups.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00BDF2",
                    "&:hover": { backgroundColor: "#009bbd" },
                  }}
                  href="/events"
                >
                  Explore Events
                </Button>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DashboardCard>
                <WorkIcon fontSize="large" sx={{ mb: 2, color: "#00BDF2" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Opportunities
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                  Discover job opportunities and collaborations available to alumni.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00BDF2",
                    "&:hover": { backgroundColor: "#009bbd" },
                  }}
                  href="/opportunities"
                >
                  Find Opportunities
                </Button>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
              <DashboardCard>
                <FeedIcon fontSize="large" sx={{ mb: 2, color: "#00BDF2" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Feed
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                  Check out the latest news and updates from the alumni network.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00BDF2",
                    "&:hover": { backgroundColor: "#009bbd" },
                  }}
                  href="/feed"
                >
                  View Feed
                </Button>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
              <DashboardCard>
                <AccountBoxIcon fontSize="large" sx={{ mb: 2, color: "#00BDF2" }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Profile
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
                  Update your profile and share your latest achievements.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00BDF2",
                    "&:hover": { backgroundColor: "#009bbd" },
                  }}
                  href="/profile"
                >
                  Update Profile
                </Button>
              </DashboardCard>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Main;


