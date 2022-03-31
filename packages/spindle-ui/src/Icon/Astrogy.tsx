import * as React from 'react';
import { SVGProps } from 'react';

const SvgAstrogy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M12.3 21c-2.5 0-4.8-1-6.5-2.9-.5-.5-.6-1.3-.3-2s1-1 1.7-.9h1.1C12 15 15 12 15.2 8.3V7.2c-.1-.7.3-1.4.9-1.7.7-.3 1.4-.2 2 .3 2.1 1.9 3.2 4.8 2.8 7.7-.5 3.8-3.7 7-7.5 7.5h-1.1zM7 16.7c-.1 0-.2.1-.2.1 0 .1-.1.2 0 .3 1.6 1.8 4 2.7 6.4 2.3 3.2-.4 5.8-3 6.2-6.2.3-2.4-.5-4.8-2.3-6.4-.1-.1-.2-.1-.3 0-.1 0-.1.1-.1.2 0 .4.1.9 0 1.4-.2 4.4-3.9 8.1-8.3 8.3-.4.1-.9.1-1.4 0 .1 0 .1 0 0 0zm4-11.1-2.2-.2-.9-2c-.2-.5-1-.5-1.2 0l-.9 2-2.1.2c-.6.1-.8.8-.4 1.2l1.6 1.5-.4 2.1c-.1.6.5 1 1 .7L7.3 10l1.9 1.1c.5.3 1.1-.2 1-.7l-.4-2.2 1.6-1.5c.4-.3.2-1-.4-1.1z" />
  </svg>
);

export default SvgAstrogy;
