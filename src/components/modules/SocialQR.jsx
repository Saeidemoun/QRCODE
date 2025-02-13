import React from "react";
import Image from "next/image";
import Link from "next/link";
// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SmsIcon from "@mui/icons-material/Sms";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import qrCode from "../../../public/qrCode.jpeg";
import bannerImage from "../../../public/bannerImage.jpg";

// Helper function to convert Latin digits to Farsi numerals
function convertToFarsi(numberString) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return numberString
    .toString()
    .split("")
    .map((char) => (/\d/.test(char) ? persianDigits[parseInt(char)] : char))
    .join("");
}

function SocialQR() {
  // Share handler for QR code image
  const handleShare = async () => {
    if (navigator.share) {
      try {
        // Get the image URL from the imported qrCode object
        const imageUrl = qrCode.src;
        // Fetch the image as a blob
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        // Create a File object from the blob
        const file = new File([blob], "qr-code.jpeg", { type: blob.type });

        // Check if the navigator can share the file object (File sharing is not supported on every device)
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "QR Code",
            text: "Check out this QR code!",
            files: [file],
          });
        } else {
          alert("Sharing with files is not supported on your device.");
        }
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  const servicesLines = [
    {
      id: "keratine",
      responsible: "مهلا محتشم",
      mainService: "احیاء و صافی",
      social: [
        {
          id: "instagram",
          icon: <InstagramIcon sx={{ ml: 0.5, color: "#a21caf" }} />,
          title: "اینستاگرام",
          type: "url",
          value: "https://instagram.com/mahlamohtasham.hairstudio",
        },
        {
          id: "whatspp",
          icon: <WhatsAppIcon sx={{ ml: 0.5, color: "#22c55e" }} />,
          title: "شماره واتساپ",
          type: "text",
          value: "09151259373",
        },
        {
          id: "website",
          icon: <LanguageIcon sx={{ ml: 0.5, color: "#38bdf8" }} />,
          title: "آدرس وبسایت",
          type: "url",
          value: "https://MohtashamHairStudio.ir",
        },
        {
          id: "call",
          icon: <PhoneAndroidIcon sx={{ ml: 0.5, color: "#6366f1" }} />,
          title: "شماره تماس",
          type: "text",
          value: "09151259373, 09001259373",
        },
        {
          id: "location",
          icon: <AddLocationAltIcon sx={{ ml: 0.5, color: "#f87171" }} />,
          title: "آدرس",
          type: "text",
          value: "مشهد، بین بزرگمهر جنوبی 2 و 4 پلاک 14",
        },
      ],
    },
  ];

  return (
    <div className="mb-auto mt-5 w-full h-full p-4 bg-white/5 rounded-lg">
      {servicesLines.map((service) => (
        <div
          key={service.id}
          className="flex flex-col justify-center items-start w-full"
        >
          <div className="w-full flex justify-between items-center font-light text-sm">
            <h3>
              <AccountCircleIcon fontSize="small" sx={{ ml: 0.3 }} />
              <strong>نام:</strong> {service.responsible}
            </h3>
            <span className="text-[12px]">{service.mainService}</span>
          </div>
          <div className="mt-3 w-full bg-white/20 h-[1px] rounded-full"></div>
          <ul className="w-full flex flex-col justify-center items-start mt-5">
            {service.social.map((social) => (
              <li
                key={social.id}
                className="w-full flex justify-between items-center py-1 my-3"
              >
                <span className="flex items-center font-bold text-sm">
                  {social.icon}
                  {social.title} :
                </span>
                <div>
                  {social.type === "url" ? (
                    <a
                      href={social.value}
                      className={`ring-1 p-1 rounded-md text-sm font-bold text-transparent
                      bg-clip-text bg-gradient-to-l ${
                        social.id === "instagram"
                          ? "ring-fuchsia700 from-fuchsia700 via-fuchsia400 to-fuchsia700"
                          : "ring-sky700 from-sky700 via-sky400 to-sky700"
                      }`}
                    >
                      {social.id === "instagram"
                        ? "پیج اینستاگرام"
                        : "وبسایت ما"}
                    </a>
                  ) : (
                    <span className="text-[13px] font-light text-gray200 min-[400px]:text-sm">
                      {social.value
                        .split(",")
                        .map((part) => convertToFarsi(part.trim()))
                        .join(", ")}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <Link
            className="w-full text-center mt-3 bg-purple950 px-1 py-2 rounded-md 
            text-sm font-light transition-all duration-500 hover:opacity-70"
            href="sms:+989151259373?body= سلام و وقت بخیر؛ جهت ......... پیام میدم."
          >
            <SmsIcon fontSize="small" sx={{ ml: 1 }} />
            جهت ارسال پیامک مستقیم کلیک کنید
          </Link>
          <div className="flex flex-col w-full justify-center items-center my-7">
            <div className="flex w-full justify-between items-center">
              <div
                className="w-fit flex flex-col text-sm font-light
               justify-center items-start"
              >
                <p>جهت ارسال QR Code کلیک کنید.</p>
                <button
                  className="w-full text-center mt-2 bg-indigo600 p-1 rounded-md
                transition-all duration-500 hover:opacity-70"
                >
                  ارسال QR Code
                  <SendToMobileIcon fontSize="small" sx={{ mr: 0.3 }} />
                </button>
              </div>
              <Image
                className="rounded-lg w-20 max-w-[300px] aspect-square"
                src={qrCode}
                width={400}
                height={400}
                alt="qr-code"
              />
            </div>
            <Image
              className="w-full aspect-video mt-7 mb-0 rounded-lg shadow-forDark transition-all duration-500
              hover:backdor-filter hover:blur-sm"
              src={bannerImage}
              width={400}
              height={400}
              alt="banner"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialQR;
