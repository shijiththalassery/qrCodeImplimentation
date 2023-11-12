import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Font } from '@react-pdf/renderer';

Font.register({ family: 'Arial', src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kvnz.woff2' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Arial',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Arial',
  },
  downloadButton: {
    fontSize: 12,
    fontFamily: 'Arial',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
    textAlign: 'center',
  },
});

function PDFDocument() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Heading</Text>
          <Text style={styles.text}>Paragraph content goes here...</Text>
          <Text style={styles.downloadButton} render={({ pageNumber, totalPages }) => (
            `Your Name (Page ${pageNumber} of ${totalPages})`
          )} onClick={() => window.open('/path-to-your-pdf/document.pdf', '_blank')}>
            Download as PDF
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Company Name</Text>
        </View>
      </Page>
    </Document>
  );
}

function Medal() {
  return (
    <div>
      <div className="border border-solid border-black p-4 m-4 max-w-screen-lg mx-auto">
        <PDFViewer width="100%" height={600}>
          <PDFDocument />
        </PDFViewer>
      </div>
    </div>
  );
}

export default Medal;
