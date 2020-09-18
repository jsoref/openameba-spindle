import * as React from 'react';

function SvgBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20 15c-.6-.9-1-1.9-1-3v-1.7c0-3-1.8-5.6-4.4-6.7-.5-1-1.5-1.6-2.6-1.6s-2.1.6-2.6 1.5c-.8.3-1.6.8-2.3 1.5C5.8 6.3 5 8.1 5 10v2c0 1.1-.4 2.1-1 3-.6.8-.7 1.8-.2 2.6C4.2 18.5 5 19 6 19h12c1 0 1.8-.5 2.2-1.4.5-.8.4-1.8-.2-2.6zm-1.6 1.7c0 .1-.2.3-.4.3H6c-.3 0-.4-.2-.4-.3 0-.1-.1-.3 0-.5C6.5 15 7 13.5 7 12v-2c0-1.4.5-2.6 1.5-3.6C9.5 5.5 10.7 5 12 5h.2c2.7.1 4.8 2.4 4.8 5.2V12c0 1.5.5 3 1.4 4.2.2.2.1.4 0 .5zM13.7 20c.4 0 .6.4.4.8-.4.7-1.2 1.2-2.1 1.2-.9 0-1.7-.5-2.2-1.2-.2-.3 0-.8.4-.8h3.5z" />
    </svg>
  );
}

export default SvgBell;