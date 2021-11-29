import * as React from "react"

function HamburgerMenu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0H16V3H0z" />
      <path fill="#fff" d="M0 6H16V9H0z" />
      <path fill="#fff" d="M0 12H16V15H0z" />
    </svg>
  )
}

export default HamburgerMenu
