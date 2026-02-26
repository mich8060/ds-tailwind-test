import type { ButtonHTMLAttributes } from "react";

export interface PlaygroundProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  propDefinitions?: Record<string, unknown>;
  title?: string;
  initialProps?: Record<string, unknown>;
  renderComponent?: unknown;
}
