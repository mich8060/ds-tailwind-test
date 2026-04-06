import React, { useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "./_code.scss";
import type { CodeProps } from "./Code.types";

const BASE_CLASS = "uds-code";

const escapeHtml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const normalizeLanguage = (language?: string): string =>
  (language ?? "javascript").trim().toLowerCase();

export default function Code({
  code = "",
  language = "javascript",
  inline = false,
  className = "",
  ...rest
}: CodeProps) {
  const normalizedLanguage = normalizeLanguage(language);
  const source = typeof code === "string" ? code : "";

  const highlightedCode = useMemo(() => {
    const grammar = Prism.languages[normalizedLanguage] || Prism.languages.javascript;
    if (!grammar) {
      return escapeHtml(source);
    }
    return Prism.highlight(source, grammar, normalizedLanguage);
  }, [source, normalizedLanguage]);

  const classes = [
    BASE_CLASS,
    inline && `${BASE_CLASS}--inline`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (inline) {
    return (
      <code className={classes} {...rest}>
        <span
          className={`language-${normalizedLanguage}`}
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </code>
    );
  }

  return (
    <pre className={classes} {...rest}>
      <code
        className={`language-${normalizedLanguage}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
}
