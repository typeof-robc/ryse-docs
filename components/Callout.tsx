import * as React from "react";

export function Callout({ title, children, type }) {
  let styles;

  switch (type) {
    case "success":
      styles = {
        background: "#e6f7e6",
        border: "1px solid #b7e4b7",
      };
      break;
    case "error":
      styles = {
        background: "#fdecea",
        border: "1px solid #f5c6cb",
      };
      break;
    case "warning":
      styles = {
        background: "#fff4e5",
        border: "1px solid #ffeeba",
      };
      break;
    case "info":
      styles = {
        background: "#f6f9fc",
        border: "1px solid #dce6e9",
      };
      break;
    default:
      styles = {
        background: "#f6f9fc",
        border: "1px solid #dce6e9",
      };
  }

  return (
    <div className='callout'>
      <strong>{title}</strong>
      <span>{children}</span>
      <style jsx>
        {`
          .callout {
            display: flex;
            flex-direction: column;
            padding: 12px 16px;
            border-radius: 4px;
            background: ${styles.background};
            border: ${styles.border};
          }
          .callout :global(p) {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}
