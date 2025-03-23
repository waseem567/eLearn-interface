interface GlowEffectProps {
  className?: string;
  color?: string;
  size?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  blur?: string;
  opacity?: number;
}

export default function GlowEffect({
  className = "",
  color = "#524fd5",
  size = "400px",
  top,
  left,
  right,
  bottom,
  blur = "100px",
  opacity = 0.3,
}: GlowEffectProps) {
  return (
    <div
      className={` rounded-full ${className} text-white z-50`}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        backgroundColor: color,
        opacity: opacity,
        filter: `blur(${blur})`,
      }}
    >
      lasststtt
    </div>
  );
}
