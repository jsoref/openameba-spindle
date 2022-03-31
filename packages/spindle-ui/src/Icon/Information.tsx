import * as React from 'react';
import { SVGProps } from 'react';

const SvgInformation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12.01 22c5.51 0 10-4.49 10-10s-4.49-10-10-10-10 4.49-10 10 4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-1.25 12.5V11a1.25 1.25 0 0 1 2.5 0v5.5a1.25 1.25 0 0 1-2.5 0zm0-8.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0z" />
  </svg>
);

export default SvgInformation;
