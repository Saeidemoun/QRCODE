import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function AccordionExpandDefault({
  responsible,
  mainService,
  social,
}) {
  return (
    <div style={styles.container}>
      <Accordion
        defaultExpanded
        sx={{
          width: "100%",
          margin: "10px auto",
          direction: "rtl",
          bgcolor: "rgb(227, 225, 238)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, .5)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div style={styles.containerSummary}>
            <h3 style={styles.h3}>
              <AccountCircleIcon sx={{ color: "gray", ml: 0.5 }} />
              {responsible}
            </h3>{" "}
            | <h5 style={styles.h5}>{mainService}</h5>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul style={styles.socialContainer}>
            {social.map((item, index) => (
              <li key={index} style={styles.socialContainerLi}>
                <h3 style={styles.socialContainerLiH3}>
                  {item.icon}
                  {item.title} |
                </h3>
                {item.type === "url" ? (
                  <a href={item.value} style={styles.link}>
                    {item.id === "instagram"
                      ? "برو به اینستاگرام"
                      : "وبسایت ما"}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  containerSummary: {
    width: "fit-content",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  socialContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
  },
  socialContainerLi: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "5px auto",
    padding: "10px",
    boxSizing: "border-box",
    overflow: "hidden",
    fontFamily: "Vazir, sans-serif",
    fontSize: ".7rem",
  },
  socialContainerLiH3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    textDecoration: "none", // Remove underline
    color: "gray", // Change color as needed
    fontWeight: "bold",
  },
  h3: {
    margin: 0,
    color: "black",
    fontFamily: "Vazir, sans-serif", // Use the Persian font
    fontSize: "1rem",
    marginLeft: ".5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  h5: {
    margin: 0,
    color: "gray",
    fontFamily: "Vazir, sans-serif", // Use the Persian font
    fontSize: ".7rem",
    marginRight: ".5rem",
  },
};
