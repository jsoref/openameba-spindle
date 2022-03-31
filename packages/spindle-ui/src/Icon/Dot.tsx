import * as React from 'react';
import { SVGProps } from 'react';

const SvgDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M21.15 12a9 9 0 1 1-18.002-.001A9 9 0 0 1 21.15 12z" />
  </svg>
);

export default SvgDot;
