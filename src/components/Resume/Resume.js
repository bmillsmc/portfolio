import React from "react";
import "./Resume.css";
import PDFViewer from "../PDFViewer/PDFViewer";
import PDFBackend from "../../backends/PDFBackend";

function Resume(props) {
  return (
    <div className="resume">
      <PDFViewer backend={PDFBackend} src="../../documents/bmresume.pdf" />
    </div>
  );
}

export default Resume;
