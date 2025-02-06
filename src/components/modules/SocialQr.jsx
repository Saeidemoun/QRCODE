import React from "react";
import { QRCodeSVG } from "qrcode.react";

const SocialQR = () => {
  // Combine your links into a single string
  const socialLinks =
    `Instagram: https://instagram.com/mahlamohtasham.hairstudio\n` +
    `Website: https://mohtashamhairstudio.ir`;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mahla Mohtasham Hair Studio Social</h1>
      <div style={styles.qrContainer}>
        <QRCodeSVG
          value={socialLinks}
          size={256}
          level="H" // Error correction level
          fgColor="#2c3e50" // QR code color
          bgColor="#ffffff" // Background color
        />
      </div>
      <p style={styles.note}>Scan this QR code to view my social profiles</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    minHeight: "100vh",
    backgroundColor: "#f5f6fa",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "2rem",
  },
  qrContainer: {
    padding: "1rem",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  note: {
    marginTop: "1.5rem",
    color: "#7f8c8d",
    fontSize: "0.9rem",
  },
};

export default SocialQR;
