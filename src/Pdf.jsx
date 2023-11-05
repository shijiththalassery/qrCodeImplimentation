import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PdfDownloader = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [canvas, setCanvas] = useState(null);

  const downloadPdf = async () => {
    if (!canvas) {
      return;
    }

    const pdf = new jsPDF();
    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0);
    pdf.save('my-pdf.pdf');
  };

  const captureCanvas = async () => {
    const element = document.createElement('div');
    element.innerHTML = htmlContent;

    const canvas = await html2canvas(element);
    setCanvas(canvas);
  };

  return (
    <div>
      <textarea
        rows="10"
        value={htmlContent}
        onChange={(e) => setHtmlContent(e.target.value)}
      />
      <button onClick={captureCanvas}>Capture HTML</button>
      <button onClick={downloadPdf} disabled={!canvas}>
        Download PDF
      </button>
    </div>
  );
};

export default PdfDownloader;
