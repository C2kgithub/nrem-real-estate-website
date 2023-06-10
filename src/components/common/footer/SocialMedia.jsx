import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTiktok,
    faLinkedin,
    faInstagram,
    faGoogle
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div class="social-container">
      <h3>Connect with us on Social Media</h3>

      <a href="https://www.facebook.com/naijarealestatemarket" target="_blank" rel="noreferrer"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.tiktok.com/@n_rem_ltd" target="_blank" rel="noreferrer"
        className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a href="https://www.instagram.com/off.icialn_rem?igshid=NTc4MTwNjQ2YQ==" target="_blank" rel="noreferrer"
      className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/naija-real-estate-market-ltd-ab6079265/" target="_blank" rel="noreferrer"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="mailto:Naijaremplace@gmail.com" target="_blank" rel="noreferrer"
        className="gmail">
        <FontAwesomeIcon icon={faGoogle} size="2x" />
      </a>

    </div>
  );
}
