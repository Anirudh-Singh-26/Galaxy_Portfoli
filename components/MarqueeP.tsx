"use client";

export default function Marquee() {
  const content = (
    <span
      className="text-5xl sm:text-8xl md:text-8xl  text-transparent px-4"
      style={{
        WebkitTextStroke: "1px rgb(156 163 175)", // Tailwind gray-400
      }}
    >
      ANIRUDH SINGH RATHORE • WEB DESIGN • WEB DEVELOPMENT • UI/UX • FRONTEND •
      BACKEND • FULL STACK • JAVASCRIPT • REACT • NEXT.JS • NODE.JS •
    </span>
  );

  return (
    <div className="relative w-full overflow-hidden py-10 ">
      {/* Gradient overlay for soft edges */}
      <div className="absolute inset-0  via-transparent " />

      <div className="marquee-container">
        <div className="marquee-content">
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
        </div>

        {/* Duplicate for seamless looping */}
        <div className="marquee-content">
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: flex;
          animation: marquee 150s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
