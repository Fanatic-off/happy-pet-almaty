import type { ReactNode, CSSProperties } from "react";
import { useInView } from "../../hooks/useInView";

// Оборачивает контент и плавно показывает его при появлении в зоне видимости.
export const Reveal = ({
  children,
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};
