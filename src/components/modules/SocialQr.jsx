import React from "react";
import Accordion from "../modules/Accordion";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";

const SocialQR = () => {
  const servicesLines = [
    {
      id: "keratine",
      responsible: "مهلا محتشم",
      mainService: "احیاء و صافی",
      social: [
        {
          id: "instagram",
          icon: <InstagramIcon fontSize="small" sx={{ ml: 0.5 }} />,
          title: "اینستاگرام",
          type: "url",
          value: "https://instagram.com/mahlamohtasham.hairstudio",
        },
        {
          id: "whatspp",
          icon: <WhatsAppIcon fontSize="small" sx={{ ml: 0.5 }} />,
          title: "شماره واتساپ",
          type: "text",
          value: "09156316631",
        },
        {
          id: "website",
          icon: <LanguageIcon fontSize="small" sx={{ ml: 0.5 }} />,
          title: "آدرس وبسایت",
          type: "url",
          value: "https://MohtashamHairStudio.ir",
        },
        {
          id: "call",
          icon: <PhoneAndroidIcon fontSize="small" sx={{ ml: 0.5 }} />,
          title: "شماره تماس",
          type: "text",
          value: "09156606636, 09331651902",
        },
      ],
    },
    // {
    //   id: "hair-dying",
    //   responsible: "الناز علیپور",
    //   mainService: "رنگ و لایت",
    //   social: [
    //     {
    //       id: "instagram",
    //       url: "https://instagram.com/elnaz__haircolor",
    //     },
    //     {
    //       id: "website",
    //       url: "https://ElnazHairColor.ir",
    //     },
    //   ],
    // },
  ];

  return (
    <div style={styles.container}>
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontSize: "16px",
          fontFamily: "Vazir, sans-serif",
          fontWeight: "bold",
          color: "",
          "@media(min-width:500px)": {
            fontSize: "20px",
          },
        }}
      >
        سالن تخصصی زیبایی مو مهلا محتشم
      </Typography>
      <div style={styles.mainServices}>
        {servicesLines.map((service) => (
          <Accordion key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    minHeight: "100vh",
    margin: "auto",
    backgroundColor: "white", // Example gradient
    borderRadius: "10px",
  },
  mainServices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    borderRadius: "10px",
    width: "100%",
    marginTop: "1.5rem",
    maxWidth: "500px",
  },
};

export default SocialQR;
