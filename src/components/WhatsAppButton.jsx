import React from "react";
import "./WhatsAppButton.css";
import goldWhatsapp from "../images/gold-whatsapp.jpg";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9840334320"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={goldWhatsapp} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;