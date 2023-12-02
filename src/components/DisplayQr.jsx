import React from "react";

function DisplayQr({ imgUrl }) {
  return (
    <div className="h-auto w-full p-4 border rounded-md shadow-md my-4">
      <img src={imgUrl} className="mx-auto h-56" />
      <a
        href={imgUrl}
        download="QR Code"
        className="border rounded-md px-3 py-1"
      >
        Download
      </a>
    </div>
  );
}

export default DisplayQr;
