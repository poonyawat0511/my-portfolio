import { SVGAttributes } from "react";

export function ChevronRightIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
    </svg>
  );
}
