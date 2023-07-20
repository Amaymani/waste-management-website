import React from 'react';

function EntryDownload(){
    return(<div className="d-flex flex-column mb-3 col-6 justify-content-center download-section">
    <p className="download-btn-label">Get the Scanner App</p>
    <button class="button">
      <div class="btn-circle"></div>
      <div class="btn-circle"></div>
      <p class="btn-text">
        Download for <i class="fa-brands fa-windows"></i>
      </p>
    </button>
  </div>);
}

export default EntryDownload;