import React, { useState } from "react";

export default function Mess() {
  const [message, setMessage] = useState("");
  const [delay, setDelay] = useState(10);
  const [isSending, setIsSending] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [sentMessage, setSendMessage] = useState("");

  const handleSend = () => {
    setIsSending(true);
    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false);
    }, delay * 1000);
    setTimerId(id);
  };
  const handleCancel = () => {
    if (timerId) clearTimeout(timerId);
    setIsSending(false);
  };
  return (
    <div className="messApp">
      <div className="meaasga">
        <h2>Dm Delay button</h2>
        <textarea
          placeholder="enter text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="number"
          placeholder="Delay in seconds"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
        {!isSending ? (
          <button onClick={handleSend}>Send with delay</button>
        ) : (
          <button onClick={handleCancel}>Cancel button</button>
        )}
        {sentMessage && (
          <div>
            <p>message</p>
            <p>{sentMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
