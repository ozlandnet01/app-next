import React from 'react';
import { Link } from 'react-scroll';

interface Props {
    to: string
    label: string;
    clickHandler?: () => void;
  }

const NavigationLink = ({ to, label, clickHandler }: Props) => {
  return (
    <Link
      to={to}
      duration={500}
      offset={-64}
      smooth
      spy
      onClick={clickHandler ? clickHandler : () => { }}
      className={`h-full flex align-middle items-center navigation-link hover:font-bold hover:text-xl transition-all duration-300 cursor-pointer`}
      activeClass='border-b-4 border-solid border-grey-900 text-xl font-bold'
    >
      {label}
    </Link>
  )
}

export default NavigationLink;
