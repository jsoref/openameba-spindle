import * as React from 'react';
import { SVGProps } from 'react';

const SvgMessageboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M17.28 7.01c0 .55-.45 1-1 1h-5.47c-.55 0-1-.45-1-1s.45-1 1-1h5.47c.55 0 1 .45 1 1zm-9.56-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8.56 3.5h-5.47c-.55 0-1 .45-1 1s.45 1 1 1h5.47c.55 0 1-.45 1-1s-.45-1-1-1zm-8.56 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8.56 3.43h-5.47c-.55 0-1 .45-1 1s.45 1 1 1h5.47c.55 0 1-.45 1-1s-.45-1-1-1zm-8.56 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM21 4.98v11c0 1.66-1.34 3-3 3h-3.5l-1.66 2.57a1.002 1.002 0 0 1-1.68-.01L9.5 18.98H6c-1.66 0-3-1.34-3-3v-11c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3zm-2 0c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h4.59l.59.91.82 1.27.82-1.27.59-.91H18c.55 0 1-.45 1-1v-11z" />
  </svg>
);

export default SvgMessageboard;
