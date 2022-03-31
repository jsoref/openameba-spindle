import * as React from 'react';
import { SVGProps } from 'react';

const SvgBellSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M7.49 4.66c.85-.72 1.83-1.22 2.88-1.47C10.73 2.46 11.31 2 12 2c.7 0 1.27.46 1.63 1.2 3.06.77 5.37 3.67 5.37 7.05V13c0 .43.14.86.4 1.2l.6.8c.54.72.63 1.64.29 2.46l-3-3C17.11 14 17 13.5 17 13v-2.75c0-2.81-2.17-5.17-4.85-5.25H12c-1.13 0-2.2.39-3.08 1.09L7.49 4.66zM19.5 19.5a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29L16.17 19H6c-.95 0-1.81-.53-2.24-1.38-.42-.85-.33-1.86.24-2.62l.6-.8c.26-.34.4-.77.4-1.2v-3c0-.65.1-1.29.27-1.9L3.09 5.91A.996.996 0 1 1 4.5 4.5l3.12 3.12L17 17l1.84 1.84.66.66zM14.17 17 7.02 9.84C7.01 9.9 7 9.95 7 10v3c0 .86-.28 1.71-.8 2.4l-.6.8c-.17.22-.09.44-.05.52.04.09.17.28.45.28h8.17zm-.44 3h-3.45c-.39 0-.63.43-.43.76.43.74 1.23 1.24 2.15 1.24.92 0 1.72-.5 2.16-1.24.2-.33-.04-.76-.43-.76z" />
  </svg>
);

export default SvgBellSlash;
