import * as React from 'react';
import { SVGProps } from 'react';

const SvgFilterCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M21 5.5c0 .55-.45 1-1 1H7.8C7.42 7.38 6.54 8 5.51 8a2.5 2.5 0 0 1 0-5c1.02 0 1.9.62 2.29 1.5H20c.55 0 1 .45 1 1zm-2.49 4c-1.03 0-1.9.62-2.29 1.5H4c-.55 0-1 .45-1 1s.45 1 1 1h12.23c.39.88 1.26 1.5 2.29 1.5a2.5 2.5 0 0 0 2.5-2.5 2.516 2.516 0 0 0-2.51-2.5zm-8.91 8H7.8c-.38-.88-1.26-1.5-2.29-1.5a2.5 2.5 0 0 0 0 5c1.02 0 1.9-.62 2.29-1.5h1.8c.55 0 1-.45 1-1s-.45-1-1-1zm7.52 4.81 5.59-5.59a.996.996 0 1 0-1.41-1.41l-4.88 4.88-2.36-2.35c-.39-.39-1.03-.39-1.42 0-.39.39-.39 1.03 0 1.42l3.06 3.05c.2.19.45.29.71.29.26 0 .51-.1.71-.29z" />
  </svg>
);

export default SvgFilterCheck;
