import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Qrcode from "qrcode";
import DisplayQr from "./components/DisplayQr";

function App() {
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [toast, setToast] = useState("");

  const genQr = async () => {
    try {
      const resQrUrl = await Qrcode.toDataURL(text);
      setImgUrl(resQrUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="shadow-lg bg-gradient-to-tl from-violet-500 to-fuchsia-500 p-1 rounded-md">
      <div className="border-2 border-purple-500 p-8 rounded-lg grid gap-2 bg-white">
        <h1 className="font-semibold bg-gradient-to-t from-violet-500 to-fuchsia-500 px-4 py-3 rounded-md text-white">
          QR Code Generator
        </h1>
        <div className="card mt-4">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (text) {
                genQr();
                setToast("QR Code generated Successfully");
              } else setToast("Enter some text to generate New QR code");
            }}
          >
            <input
              type="text"
              className="border rounded-md resize-y px-2 py-1.5 grow"
              placeholder="Enter Something"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="px-2 py-1.5 bg-gradient-to-tl from-violet-500 to-fuchsia-500 text-white rounded-md active:scale-95"
            >
              Generate
            </button>
          </form>
          {imgUrl ? <DisplayQr imgUrl={imgUrl} /> : null}
          <p className="py-1">{toast}</p>
        </div>
        <p className="lightgray">Generate &amp; Download QR Code.</p>
      </div>
    </div>
  );
}

export default App;
