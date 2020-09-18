import * as React from 'react';

function SvgAccesspageFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4 4.09H7.62c-1.11 0-2 .89-2 2v11.97c0 .06.01.12.02.18a1.991 1.991 0 01-1.82-1.98V4.29c0-1.1.9-2 2-2h8.78c1.04 0 1.89.8 1.98 1.82-.06-.01-.12-.02-.18-.02zM9.42 5.82h8.78c1.1 0 2 .9 2 2v7.72c0 .63-.25 1.24-.7 1.69l-3.86 3.86c-.45.45-1.05.7-1.69.7H9.42c-1.1 0-2-.9-2-2V7.82c0-1.1.9-2 2-2zm5.07 13.7l3.43-3.43c.25-.26.07-.69-.28-.69h-3.03c-.44 0-.8.36-.8.8v3.04c0 .35.43.53.68.28z"
      />
    </svg>
  );
}

export default SvgAccesspageFill;