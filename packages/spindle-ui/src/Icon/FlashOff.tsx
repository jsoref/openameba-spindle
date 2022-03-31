import * as React from 'react';
import { SVGProps } from 'react';

const SvgFlashOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    role="img"
    {...props}
  >
    <path d="M10.62 20.84c-.15 0-.31-.03-.46-.08-.56-.2-.92-.71-.92-1.3v-5.61H6.47a1.37 1.37 0 0 1-1.07-2.23l6.33-7.86c.37-.46.97-.63 1.53-.43s.92.71.92 1.3v5.61h2.76c.53 0 1.01.3 1.24.78.23.48.17 1.04-.17 1.46l-6.33 7.86c-.26.32-.65.5-1.06.5zM7.26 12.1h2.36c.76 0 1.38.62 1.38 1.38v4.92l5.17-6.42H13.8c-.76 0-1.38-.62-1.38-1.38V5.68L7.26 12.1zm12.59 8.75c.2-.2.2-.51 0-.71l-3.29-3.29c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l3.29 3.29c.1.1.23.15.35.15.12 0 .27-.05.36-.15zm-3.29 0 3.29-3.29c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-3.29 3.29c-.2.2-.2.51 0 .71.1.1.23.15.35.15.12 0 .26-.05.36-.15z" />
  </svg>
);

export default SvgFlashOff;
