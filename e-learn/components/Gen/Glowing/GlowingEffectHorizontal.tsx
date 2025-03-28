export default function HorizontalGlow({
  className = "",

  height = "200px",
  colors = {
    from: "#524fd5",
    via: "#524fd5",
    to: "#524fd5",
  },
  opacities = {
    from: 0,
    via: 0.1,
    to: 0,
  },
  blurIntensity = "100px",
}) {
  // Position mapping

  return (
    <div
      className={`
          absolute left-0 right-0
          }
          ${className}
        `}
      style={{
        height: height,
        background: `linear-gradient(to right, 
            ${colors.from}${
          opacities.from === 0
            ? "00"
            : Math.round(opacities.from * 255)
                .toString(16)
                .padStart(2, "0")
        }, 
            ${colors.via}${
          opacities.via === 0
            ? "00"
            : Math.round(opacities.via * 255)
                .toString(16)
                .padStart(2, "0")
        }, 
            ${colors.to}${
          opacities.to === 0
            ? "00"
            : Math.round(opacities.to * 255)
                .toString(16)
                .padStart(2, "0")
        })`,
        filter: `blur(${blurIntensity})`,
      }}
    />
  );
}
