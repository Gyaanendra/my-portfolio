// components/ImageButton.js
import React from "react";
import css from "styled-jsx/css";

// Define styles as a constant
const buttonStyles = css`
  .image-button {
    border: none;
    padding: 2;
    background: none;
    cursor: pointer;
  }

  .image {
    display: block;
    width: 300px; /* Adjust the size as needed */
    height: auto;
    border-radius: 12px; /* Optional: for rounded corners */
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2); /* Optional: for shadow effect */
    transition: transform 0.2s ease; /* Optional: for hover effect */
    background-color: #ebf6fa;
  }

  .image:hover {
    transform: scale(1.05); /* Optional: for hover effect */
  }
`;

const ImageButton = ({ src, alt, onClick }) => {
  return (
    <button className="image-button" onClick={onClick}>
      <img src={src} alt={alt} className="image" />
      <style jsx>{buttonStyles}</style>
    </button>
  );
};

export default ImageButton;
