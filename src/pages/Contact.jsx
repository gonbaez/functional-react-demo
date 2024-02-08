import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { country } = useParams();
  console.log(country);
  return <div>Contact page {country}</div>;
};

export default Contact;
