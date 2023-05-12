import { memo, SVGProps } from 'react';

const Rectangle22Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 3C0 1.34315 1.34315 0 3 0H12C13.6569 0 15 1.34315 15 3V11C15 12.6569 13.6569 14 12 14H3C1.34315 14 0 12.6569 0 11V3Z'
      fill='white'
      stroke='#2D9737'
      strokeWidth={1.5}
    />
  </svg>
);
const Memo = memo(Rectangle22Icon);
export { Memo as Rectangle22Icon };
