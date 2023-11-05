import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, PDFDownloadLink, Image } from '@react-pdf/renderer';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';

const Certificate = ({ qrCodeData }) => {
  const [qrCodeImage, setQRCodeImage] = useState(null);

  useEffect(() => {
    const captureQRCode = async () => {
      const qrCodeContainer = document.getElementById('qrCodeContainer');

      if (qrCodeContainer) {
        const canvas = await html2canvas(qrCodeContainer);
        setQRCodeImage(canvas.toDataURL('image/png'));
      }
    };

    captureQRCode();
  }, []);

  const MyDocument = () => {
    return (
      <Document>
        <Page size="A5">
          <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
         
            <Text style={{ fontSize: 24, marginBottom: 10 }}>Speak Sphere Certificate</Text>
            <Text style={{ fontSize: 18 }}>This is to certify that the student has successfully completed the course.</Text>
            {qrCodeImage && <Image src={qrCodeImage} style={{ width: 400, height: 100 }} />}
            {/* Add more text or information as needed */}
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <div className="Certificate">
      <h1>Certificate</h1>
      <div id="qrCodeContainer">
        <QRCode value={qrCodeData} />
      </div>
      <PDFDownloadLink document={<MyDocument />} fileName="certificate.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
};

export default Certificate;
