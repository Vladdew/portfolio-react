import { useState, useEffect } from "react";
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { toolbarPlugin, ToolbarSlot } from "@react-pdf-viewer/toolbar";
import { SelectionMode } from "@react-pdf-viewer/selection-mode";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Intro1 from "../cv/introSteps1";
import { useTranslation } from "react-i18next";
import packageJson from "../../../../../package.json";

import { stepsPDF_en } from "../cv/introSteps1/steps";
import { stepsPDF_de } from "../cv/introSteps1/steps";

type CvPDFTypes = {
  isCv: boolean | "1";
  showIntro1: boolean;
};

const CvPDF = (props: CvPDFTypes) => {
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const pdfjsVersion = packageJson.dependencies["pdfjs-dist"];

  useEffect(() => {
    const loadPDF = () => {
      setLoading(true);
      try {
        const file = "./pres_de_nofoto.pdf";
        if (!file) throw new Error("PDF file not found");

        setPdfFile(file);
        setError(null);
      } catch (err) {
        console.error("Ошибка при загрузке PDF:", err);
        setError("Ошибка при загрузке PDF-файла");
      } finally {
        setLoading(false);
      }
    };

    loadPDF();
  }, []);

  const { i18n } = useTranslation();

  useEffect(() => {
    const file =
      i18n.language === "de" ? "./pres_de_nofoto.pdf" : "./pres_en_nofoto.pdf";
    setPdfFile(file);
  }, [i18n.language]);

  const toolbarPluginInstance = toolbarPlugin({
    getFilePlugin: {
      fileNameGenerator: file => {
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

  if (loading) {
    return <div>Загрузка PDF...</div>; // Индикатор загрузки
  }

  return (
    <div className="viewer">
      <Intro1
        steps={i18n.language === "de" ? stepsPDF_de : stepsPDF_en}
        enabled={props.showIntro1}
      />
      {error ? (
        <div
          className="error-message"
          style={{ color: "red", textAlign: "center" }}
        >
          {error}
        </div>
      ) : pdfFile ? (
        <>
          <Toolbar>
            {(props: ToolbarSlot) => {
              const { EnterFullScreen, Zoom, ZoomIn, ZoomOut } = props;
              return (
                <div className="viewer__toolbar-slot">
                  <div className="zoom">
                    <div style={{ padding: "0px 2px" }}>
                      <ZoomOut />
                    </div>
                    <div style={{ padding: "0px 2px" }}>
                      <Zoom />
                    </div>
                    <div style={{ padding: "0px 2px" }}>
                      <ZoomIn />
                    </div>
                  </div>

                  <div
                    id="full"
                    style={{ padding: "0px 2px", marginLeft: "auto" }}
                  >
                    <EnterFullScreen />
                  </div>
                </div>
              );
            }}
          </Toolbar>

          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={pdfFile} // Убедитесь, что pdfFile не null
              defaultScale={SpecialZoomLevel.PageWidth}
              plugins={[toolbarPluginInstance]}
            />
          </Worker>
        </>
      ) : null}
    </div>
  );
};

export default CvPDF;
