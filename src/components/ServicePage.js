import React from 'react';
import CommentSection from './CommentSection';


function ServicePage({ serviceName }) {
  return (
    <div>
      <h2>{serviceName} Service</h2>
      <p>Details about the {serviceName} service will go here.</p>
      <iframe
        src="https://docs.google.com/document/d/your-document-id-here/preview"
        width="100%"
        height="600px"
        title="Document Viewer"
      ></iframe>
      <CommentSection />
    </div>
  );
}

export default ServicePage;
