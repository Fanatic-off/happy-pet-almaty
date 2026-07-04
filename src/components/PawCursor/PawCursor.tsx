import { useEffect, useRef } from "react";
import "./PawCursor.scss";

// Кликабельные элементы, над которыми лапка «тапает»
const CLICKABLE =
  "a,button,label,summary,[role='button'],.amount-chip,.amount-btn,.donate-chip,.filter-btn,.period-btn,.dog-card,.story-card";

export const PawCursor = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Только для мыши/трекпада — на тач-устройствах курсора нет
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    document.body.classList.add("paw-cursor-active");

    let raf = 0;
    let x = -100;
    let y = -100;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          raf = 0;
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
      }

      const target = e.target instanceof Element ? e.target : null;
      const overText = !!target?.closest("input,textarea,select");
      const clickable = !overText && !!target?.closest(CLICKABLE);

      el.classList.toggle("is-hidden", overText); // над полями — обычная каретка
      el.classList.toggle("is-hover", clickable); // над кнопками — «тап»
    };

    const down = () => el.classList.add("is-press");
    const up = () => el.classList.remove("is-press");
    const hide = () => el.classList.add("is-hidden");
    const show = () => el.classList.remove("is-hidden");

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", hide);
    document.addEventListener("mouseenter", show);

    return () => {
      document.body.classList.remove("paw-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", hide);
      document.removeEventListener("mouseenter", show);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="paw-cursor is-hidden" aria-hidden="true">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#ffffff" strokeWidth="1.5">
          <ellipse cx="16" cy="21" rx="7.5" ry="6.5" />
          <circle cx="7.5" cy="14" r="3.2" />
          <circle cx="12.5" cy="9.5" r="3.4" />
          <circle cx="19.5" cy="9.5" r="3.4" />
          <circle cx="24.5" cy="14" r="3.2" />
        </g>
      </svg>
    </div>
  );
};
