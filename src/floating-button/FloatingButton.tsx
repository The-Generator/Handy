import { listen } from "@tauri-apps/api/event";
import React, { useEffect, useState } from "react";
import { commands } from "@/bindings";
import "./FloatingButton.css";

const FloatingButton: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let unlistenState: (() => void) | undefined;
    const setupListeners = async () => {
      unlistenState = await listen<boolean>("recording-state", (event) => {
        setIsRecording(event.payload);
      });
    };
    setupListeners();
    return () => {
      unlistenState?.();
    };
  }, []);

  const handleClick = () => {
    commands.toggleRecording();
  };

  return (
    <div
      className={`floating-button ${isRecording ? "recording" : "idle"}`}
      onClick={handleClick}
    >
      <div className="button-icon">
        {isRecording ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="4" width="12" height="12" rx="2" fill="white" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2C8.34 2 7 3.34 7 5V10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10V5C13 3.34 11.66 2 10 2Z"
              fill="white"
            />
            <path
              d="M15 10C15 12.76 12.76 15 10 15C7.24 15 5 12.76 5 10H3C3 13.53 5.61 16.43 9 16.92V19H11V16.92C14.39 16.43 17 13.53 17 10H15Z"
              fill="white"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default FloatingButton;
