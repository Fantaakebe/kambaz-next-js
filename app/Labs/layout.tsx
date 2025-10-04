// app/Labs/layout.tsx
import type { ReactNode } from "react";
import TOC from "./TOC";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: 180 }}>
        <TOC />
      </nav>
      <main style={{ marginLeft: 20, flex: 1 }}>{children}</main>
    </div>
  );
}


