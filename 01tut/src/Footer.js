import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    //use built in footer
    <footer>
      {/* Use getter from today object*/}
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
