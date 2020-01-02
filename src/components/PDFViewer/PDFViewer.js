import React, { Component } from "react";
import "./PDFViewer.css";

class PDFViewer extends Component {
  constructor(props) {
    super(props);
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
  }

  render() {
    return <div id="viewer">Hello World</div>;
  }
}

export default PDFViewer;
