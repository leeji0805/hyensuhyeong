import React, { useState } from "react";
import style from "./sccreen.css"

function ImageUploadExample() {

  const proverbs=["100%","95%","90%","80%"]
  
  const getRandom = (length) => {

    return parseInt(Math.random() * length);
    
    }     
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <>
      <div class="container">
        <div class="header">
            <div id="button">
                
            </div>
        </div>
        <div class="content">
            <div class = "leftbox">
                <div>
                    {fileImage && (
                      <img
                        alt="sample"
                        src={fileImage}
                        style={{ margin: "auto" }}
                      />
                    )}
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        name="imgUpload"
                        type="file"
                        accept="image/*"
                        onChange={saveFileImage}
                      />
    
                      <button
                        style={{
                          backgroundColor: "gray",
                          color: "white",
                          width: "55px",
                          height: "40px",
                          cursor: "pointer",
                        }}
                        onClick={() => deleteFileImage()}
                      >
                        삭제
                      </button>
                    </div>
                  </div>
            </div>
            <div class="rightbox">
                <div class = "inerbox">
                    <div class = "upperbox">
                        <div id="pertext">
                        {proverbs[getRandom(proverbs.length)]} 
                        </div>
                    </div>
                    <div id="downbox">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  );
}

export default ImageUploadExample;