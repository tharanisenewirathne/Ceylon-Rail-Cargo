import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
/*
import { saveAs } from 'file-saver';
import PDFDocument from './PDFDocument';
import Samplereport from '../Components/Samplereport';

const AdminReports = ({ contactData }) => {
  const [pdfDataUri, setPdfDataUri] = useState('');

  useEffect(() => {
    generatePdf();
  }, []);

  const generatePdf = () => {
    const pdfData = <Samplereport data={contactData} />;
    const blob = new Blob([pdfData], { type: 'application/pdf' });
    const dataUri = URL.createObjectURL(blob);
    setPdfDataUri(dataUri);
  };

  const downloadPdf = () => {
    saveAs(pdfDataUri, 'contact_data.pdf');
  };
  */
 //<button onClick={downloadPdf}>Download PDF</button>
  const AdminReports = () => {
  return (
    <div className='bg-[#121212] text-gray-200'>
        
      <Sidebar/>
      
    </div>
  )
}

export default AdminReports