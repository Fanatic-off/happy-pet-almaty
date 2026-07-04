import { useEffect } from "react";
import { SITE } from "../config/site";

interface DocumentMeta {
  title: string;
  description: string;
  path: string; // маршрут для canonical, напр. "/dogs"
}

// Создаёт/обновляет head-тег по селектору
const upsert = (
  selector: string,
  attr: string,
  value: string,
  create: () => HTMLElement
) => {
  let el = document.head.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

// Задаёт уникальные SEO-метаданные для страницы (SPA рендерится в JS —
// Googlebot исполняет его и считывает эти значения).
export function useDocumentMeta({ title, description, path }: DocumentMeta) {
  useEffect(() => {
    const url = SITE.url.replace(/\/$/, "") + path;
    document.title = title;

    upsert('meta[name="description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      return m;
    });
    upsert('link[rel="canonical"]', "href", url, () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });
    upsert('meta[property="og:title"]', "content", title, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    upsert('meta[property="og:description"]', "content", description, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    upsert('meta[property="og:url"]', "content", url, () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
  }, [title, description, path]);
}
