import React from "react";

export default function StarIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 8.41L23 9.5L16.5 15.09L18.82 23.36L12 18.75L5.18 23.36L7.5 15.09L1 9.5L9.41 8.41L12 0Z" />
    </svg>
  );
}
