// PinContainer.js (Suponiendo que tiene una estructura similar a esta)
import React from "react";

export function PinContainer({ title, href, children }) {
  return (
    <div className="p-4 border rounded-lg">
      <a href={href} className="block">
        <div className="flex flex-col items-start space-y-2">
          {title && <h3 className="text-lg font-bold">{title}</h3>}
          {children}
        </div>
      </a>
    </div>
  );
}
