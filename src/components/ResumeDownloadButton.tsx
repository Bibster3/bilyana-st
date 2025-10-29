import React from "react";
import resumeFile from "../assets/Bilyana_Stefanova_Resume.pdf";

const ResumeDownloadButton = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.setAttribute("download", "Bilyana_Stefanova_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      onClick={downloadResume}
    >
      Download Resume
    </button>
  );
};

export default ResumeDownloadButton;