import React from "react";
import CenteredTitle from "../components/CenteredTitle";
import CalloutBox from "../components/CalloutBox";
import alumain from "../images/alumain.png";

function Main() {
  return (
    <div className="flex-1 flex items-center justify-center p-6 flex-col">
      <img
        src={alumain}
        alt="Alumni Network"
        className="mb-6 w-full max-w-2xl h-auto object-contain rounded-lg shadow-lg"
      />
      <CenteredTitle text="LMCC Alumni Network" />
      <CalloutBox
        title="Welcome"
        text="Welcome to the LMCC Alumni Network. Stay updated with our latest news and events, and reconnect with fellow alumni."
      />
    </div>
  );
}

export default Main;