import React from "react";
import "./Resume.css";
import PDFViewer from "../PDFViewer/PDFViewer";
import PDFBackend from "../../backends/PDFBackend";
import resumePDF from "../../documents/bmresume.pdf";

function Resume(props) {
  return (
    <div className="resume">
      <PDFViewer backend={PDFBackend} src={resumePDF} />
    </div>
  );
}

export default Resume;
