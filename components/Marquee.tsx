"use client";

export default function Marquee() {
  const content = (
    <span
      className="text-5xl sm:text-8xl md:text-8xl  text-transparent px-4"
      style={{
        WebkitTextStroke: "1px rgb(156 163 175)", // Tailwind gray-400
      }}
    >
      Full-stack developer | Problem solver | Lifelong learner | Tech
      enthusiast.{" "}
    </span>
  );

  return (
    <div className="relative w-full overflow-hidden py-20">
      <div className="absolute inset-0 via-transparent" />

      <div className="marquee-container">
        <div className="marquee-content">
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
          <div className="flex items-center mx-4">{content}</div>
        </div>

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
          animation: marquee 150s linear infinite reverse; /* <-- add 'reverse' */
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
