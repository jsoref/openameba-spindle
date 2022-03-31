import * as React from 'react';
import { SVGProps } from 'react';

const SvgLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12.82 15.72a3.62 3.62 0 0 1-2.33-.82 3.78 3.78 0 0 1-1.09-1.48 1.005 1.005 0 0 1 1.86-.76 1.7 1.7 0 0 0 .51.7 1.9 1.9 0 0 0 2.5-.25l3.84-3.83a1.77 1.77 0 0 0-2.5-2.5l-1.16 1.16a1 1 0 0 1-1.41-1.41l1.16-1.16a3.762 3.762 0 0 1 5.32 5.32l-3.83 3.84a4.07 4.07 0 0 1-2.87 1.19zm-3 2.93 1.16-1.17a1 1 0 0 0-1.41-1.41l-1.16 1.16a1.81 1.81 0 0 1-2.5 0 1.75 1.75 0 0 1 0-2.49l3.85-3.85a1.9 1.9 0 0 1 2.43-.29c.253.196.45.454.57.75a1.003 1.003 0 0 0 1.86-.75 3.79 3.79 0 0 0-1.22-1.59 3.88 3.88 0 0 0-5.07.48L4.5 13.32a3.77 3.77 0 0 0 5.32 5.33z" />
  </svg>
);

export default SvgLink;
