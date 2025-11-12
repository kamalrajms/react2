import React, { useRef, useState, useEffect } from "react";
import "./Useref.css";

export default function UseRef() {
  //eg1
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  //eg2
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //eg3
  const [newProductImg, setNewProductImg] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const imageRef = useRef(0);

  const handleimg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProductImg(false);
      console.log(preview);
    }
  };

  return (
    <div>
      {/* eg2 */}
      <nav>
        <input ref={inputRef} type="text" placeholder="Type here..." />
        <button onClick={focusInput}>Focused input</button>
      </nav>
      {/* /eg2 */}
      <nav>
        <h3>Timer : {seconds}</h3>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
      {/* / eg3 */}
      <h3>image uploading</h3>
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        hidden
        onChange={handleimg}
      />
      {newProductImg ? (
        <div onClick={() => imageRef.current.click()} className="image">
          {" "}
          upload image
        </div>
      ) : (
        <img
          onClick={() => imageRef.current.click()}
          className="org-img"
          src={imageURL}
        />
      )}
    </div>
  );
}
