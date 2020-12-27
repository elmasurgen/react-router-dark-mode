import React from "react";
function Footer(props) {
  
  return (
   <div className={`${props.themeObj.bgColor} ${props.themeObj.textColor}`}>
    <footer className="text-muted py-5">
      <div className="container">
     <button
        className={`btn ${props.themeObj.btnColor}`}
        onClick={props.themeHandler}
      >
        Change Theme
      </button>
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">
          Album example is © Bootstrap, but please download and customize it for
          yourself!
        </p>
        <p className="mb-0">
          New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
          <a href="/docs/5.0/getting-started/introduction/">
            getting started guide
          </a>
          .
        </p>
      </div>
    </footer>
    </div>
  );
}
export default Footer;