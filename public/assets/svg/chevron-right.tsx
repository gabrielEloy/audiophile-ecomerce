import * as React from 'react';
import { SVGProps } from 'react';

const Chevron = (props: SVGProps<SVGSVGElement>) => (
  <svg width={8} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m1.322 1 5 5-5 5" stroke="#D87D4A" strokeWidth={2} />
  </svg>
);

export default Chevron;
