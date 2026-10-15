import React from "react";

export default function CursorIcon({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none">
      <path
        d="M2 2V22L7.5 16.5L12 25.5L15.5 24L11 15H18.5L2 2Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
