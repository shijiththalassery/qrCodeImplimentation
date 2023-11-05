import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';
// import Certificate from './Certificate';
import Certificate from './certicate';
import html2pdf from 'html2pdf.js';





function App() {

  const certificateRef = useRef(null);

  const generatePDF = () => {
    const opt = {
      margin: 10,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    const content = certificateRef.current;

    html2pdf().from(content).set(opt).outputPdf((pdf) => {
      pdf.output('dataurlnewwindow');
    });
  };


  const [text, setText] = useState('');
  const [qrCodeData, setQRCodeData] = useState('');

  const generateQRCode = () => {
    setQRCodeData(text);
  };

  return (
    <div className="App">
      <div className="p-4">
        <label className="block text-gray-600 mb-2">Enter text for QR code:</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="mt-4 ">
          <h1>hai</h1>
          <QRCode value={text} size={128} />
        </div>
        <button onClick={generateQRCode} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Generate QR Code
        </button>
        <button onClick={generatePDF}>Generate PDF</button>
        <Certificate qrCodeData={qrCodeData} />
      </div>
    </div>

  );
}

export default App;
