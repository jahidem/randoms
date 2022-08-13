import logo from './logo.svg';
import { Widget } from "@uploadcare/react-widget";
import { useState } from 'react';
import './App.css';

function App() {
  //Getting image using uuid --> 460abd89-e333-4045-97af-38b54499e1fe
  const [imgUrl,setImgUrl] = useState("https://ucarecdn.com/460abd89-e333-4045-97af-38b54499e1fe/"
                                         + '-/scale_crop/280x280/center/')
  const handleUpload = (fileInfo) => {
    
      console.log("Only this uuid goes to backend -->" + fileInfo.uuid);
      setImgUrl(fileInfo.cdnUrl + '-/scale_crop/280x280/center/');
  };
  return (
    <div >
    <img src={imgUrl}></img>
 <Widget onChange={(fileInfo) => handleUpload(fileInfo)}
      publicKey="6c3c08a73b43963de87b"
      clearable
      imagesOnly
      file={false}
       />
    </div>
  );
}

export default App;
