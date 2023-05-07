import React from 'react';
import { Link } from 'react-scroll';

interface Props {
    to: string
    label: string;
    clickHandler?: () => void;
    href?: string;
  }

const NavigationLink = ({ to, label, clickHandler, href }: Props) => {
  return (
    <Link
      href={href}
      to={to}
      duration={500}
      offset={-64}
      smooth
      spy
      onClick={clickHandler ? clickHandler : () => { }}
      className={`h-full flex align-middle items-center navigation-link hover:font-bold hover:text-xl transition-all duration-300 cursor-pointer`}
    >
      {label}
    </Link>
  )
}

export default NavigationLink;
