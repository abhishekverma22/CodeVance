import React from 'react';

function Documentaions() {
  return (
    <div
      className="h-screen flex items-center justify-center text-4xl font-semibold"
      style={{
        color: "white",
        backgroundImage: `
          repeating-linear-gradient(
            60deg,
            rgba(128, 128, 128, 0.1) 0px,
            rgba(128, 128, 128, 0.1) 1px,
            transparent 1px,
            transparent 40px
          ),
          repeating-linear-gradient(
            120deg,
            rgba(128, 128, 128, 0.1) 0px,
            rgba(128, 128, 128, 0.1) 1px,
            transparent 1px,
            transparent 40px
          ),
          linear-gradient(to right, #0f0f0f, #2f3743)
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      Documentations
    </div>
  );
}

export default Documentaions;
