import * as React from 'react';
import { SVGProps } from 'react';

const SvgExclamationmarkCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.25-12.5V13a1.25 1.25 0 0 1-2.5 0V7.5a1.25 1.25 0 0 1 2.5 0zm0 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
  </svg>
);

export default SvgExclamationmarkCircle;
