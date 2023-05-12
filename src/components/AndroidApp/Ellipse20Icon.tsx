import { memo, SVGProps } from 'react';

const Ellipse20Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3.39999} cy={3} r={3} fill='#2D9737' />
  </svg>
);
const Memo = memo(Ellipse20Icon);
export { Memo as Ellipse20Icon };
