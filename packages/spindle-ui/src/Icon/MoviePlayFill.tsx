import * as React from 'react';
import { SVGProps } from 'react';

const SvgMoviePlayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 4H5C3.34 4 2 5.34 2 7v10c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zM5.5 17.24a.749.749 0 1 1-1.5 0v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75S4 13.16 4 12.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75S4 8.67 4 8.26v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm9.27 4.16-3.93 2.45a.495.495 0 0 1-.76-.42v-4.9c0-.39.43-.63.76-.42l3.93 2.45c.31.19.31.64 0 .84zM20 17.24c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5zm0-4.49c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75v1.5z"
    />
  </svg>
);

export default SvgMoviePlayFill;
