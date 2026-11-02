import React from "react";

const items = [
  "FULL STACK DEVELOPER",
  "REACT & TYPESCRIPT",
  "NODE.JS & NESTJS",
  "API DEVELOPMENT",
  "DATABASE DESIGN",
  "UI/UX DEVELOPMENT",
  "WEB APPLICATIONS",
  "Mobile APPLICATIONS",
  "React NATIVE",
];

export default function ScrollBar({ duration = 26, starDuration = 4 }) {
  return (
    <section className="w-full overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee-area">
          <div
            className="marquee-track flex w-max items-center"
            style={{
              "--marquee-duration": `${duration}s`,
              "--star-duration": `${starDuration}s`,
            } as React.CSSProperties}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="
                  flex shrink-0 items-center
                  gap-8 pr-8
                  md:gap-[52px] md:pr-[52px]
                "
              >
                {items.map((item, index) => (
                  <React.Fragment key={`${copy}-${index}`}>
                    {/* Text */}
                    <span
                      className="
                        whitespace-nowrap
                        text-base md:text-[22px]
                        font-bold uppercase tracking-normal
                        text-white
                      "
                    >
                      {item}
                    </span>

                    {/* Your ✳ icon: fixed square box so it is centered exactly
                        between the two words (equal gap on both sides) */}
                    <span
                      aria-hidden="true"
                      className="
                        marquee-star
                        inline-flex shrink-0 items-center justify-center
                        h-7 w-7 md:h-8 md:w-8
                        text-2xl md:text-[30px]
                        font-light leading-none
                        text-white
                      "
                    >
                      ✳
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          position: relative;
          isolation: isolate;          /* stacking context lives on the wrapper */
          width: 100%;
          padding: 35px 0;
        }

        /* Lavender diagonal back layer — sits BEHIND the gradient band */
        .marquee-wrapper::before {
          content: "";
          position: absolute;
          top: 35px;                   /* same vertical box as the band */
          bottom: 35px;
          left: -3%;
          width: 106%;
          background: #C0ACE9;
          transform: rotate(-1.09deg);
          z-index: 0;
        }

        /* Purple gradient band — sits ABOVE the lavender layer */
        .marquee-area {
          position: relative;
          z-index: 1;
          width: 100%;
          overflow: hidden;
          padding: 20px 0;
          background: linear-gradient(
            to right,
            #8B45F5,
            #6234B1,
            #321653
          );
        }

        @media (min-width: 768px) {
          .marquee-area { padding: 28px 0; }   /* ~88px band */
        }

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee-scroll var(--marquee-duration) linear infinite;
        }

        @keyframes marquee-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .marquee-star {
          transform-origin: center;
          animation: marquee-spin var(--star-duration) linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track,
          .marquee-star {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}