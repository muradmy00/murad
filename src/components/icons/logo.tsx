import type { SVGProps } from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 3v18l6-6 6 6V3L6 3z" />
    <path d="M12 9l-6 6" />
    <path d="M12 9l6 6" />
  </svg>
);

export default Logo;
