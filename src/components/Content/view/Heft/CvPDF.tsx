import { useState, useEffect } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { OpenFile, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import { SelectionMode } from "@react-pdf-viewer/selection-mode";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import PDFDesctopMagnifier from "../PDFDesctopMagnifier/PDFDesctopMagnifier";

type CvPDFTypes = {
  isCv: boolean | "1";
  flag: boolean;
};
const CvPDF = (props: CvPDFTypes) => {
  const [isClicked, setIsClicked] = useState(false);
  const [pdfFile, setPdfFile] = useState("");

  useEffect(() => {
    setPdfFile("cv.pdf");
  }, []);

  function onClick() {
    if (props.flag) {
      setIsClicked(true);
    }
  }

  const toolbarPluginInstance = toolbarPlugin({
    getFilePlugin: {
      fileNameGenerator: (file: OpenFile) => {
        const fileName = file.name.substring(file.name.lastIndexOf("/") + 1);
        return `a-copy-of-${fileName}`;
      },
    },
    searchPlugin: {
      keyword: "PDF",
    },
    selectionModePlugin: {
      selectionMode: SelectionMode.Text,
    },
  });
  const { Toolbar } = toolbarPluginInstance;

  return (
    <div className="viewer">
      <Toolbar>
        {(props: ToolbarSlot) => {
          const { Download, EnterFullScreen, Print, Zoom, ZoomIn, ZoomOut } =
            props;
          return (
            <div onClick={onClick} className="viewer__toolbar-slot">
              <div style={{ padding: "0px 2px" }}>
                <ZoomOut />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Zoom />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <ZoomIn />
              </div>

              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <EnterFullScreen />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Download />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <Print />
              </div>
            </div>
          );
        }}
      </Toolbar>
      {!isClicked && <PDFDesctopMagnifier flag={props.flag} />}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          fileUrl={pdfFile}
          defaultScale={SpecialZoomLevel.PageFit}
          plugins={[toolbarPluginInstance]}
        ></Viewer>
      </Worker>
    </div>
  );
};

export default CvPDF;
