import React from "react";
import { Document, Page } from "react-pdf";
import SinglePagePDFViewer from "../components/pdf/singlepage";



const Resume = () => {
  return (
    <div className="App">
      
      <SinglePagePDFViewer pdf={Page} />

      <hr />
    </div>
  );
};

export default Resume;
