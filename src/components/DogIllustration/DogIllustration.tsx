// Простая милая мордочка собаки в SVG — используется как плейсхолдер,
// пока не загружены реальные фото. Заполняет контейнер целиком.
export const DogIllustration = ({ variant = "card" }: { variant?: "card" | "mini" }) => {
  const strong = variant === "mini";
  return (
    <svg
      viewBox="0 0 300 225"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    >
      <ellipse cx="150" cy="155" rx="85" ry="65" fill="rgba(80,50,20,0.18)" />
      <circle cx="150" cy="100" r="62" fill="rgba(80,50,20,0.26)" />
      <ellipse cx="112" cy="58" rx="22" ry="34" fill="rgba(80,50,20,0.3)" transform="rotate(-18,112,58)" />
      <ellipse cx="188" cy="58" rx="22" ry="34" fill="rgba(80,50,20,0.3)" transform="rotate(18,188,58)" />
      <circle cx="132" cy="100" r={strong ? 8 : 9} fill="rgba(28,43,58,0.6)" />
      <circle cx="168" cy="100" r={strong ? 8 : 9} fill="rgba(28,43,58,0.6)" />
      <circle cx="134" cy="97" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="170" cy="97" r="3" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="150" cy="118" rx="13" ry="9" fill="rgba(200,100,80,0.65)" />
      <path d="M140 126 Q150 140 160 126" stroke="rgba(200,100,80,0.7)" strokeWidth="2.5" fill="none" />
    </svg>
  );
};
