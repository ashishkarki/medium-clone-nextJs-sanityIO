import Link from 'next/link'
import { BsMedium } from 'react-icons/bs'
import { NAVBAR_ITEMS_NAMES, ROUTE_PATH_NAMES } from '../constants'

const Header = () => {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      {/* the left side of header including logo */}
      <div className="flex items-center space-x-5">
        <Link href={ROUTE_PATH_NAMES.ROOT}>
          <img
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="medium"
            className="w-44 object-contain cursor-pointer"
          />
        </Link>

        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>{NAVBAR_ITEMS_NAMES.ABOUT}</h3>

          <h3>{NAVBAR_ITEMS_NAMES.CONTACT}</h3>

          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            {NAVBAR_ITEMS_NAMES.FOLLOW}
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>

        <h3 className="border border-green-600 px-4 py-1 rounded-full">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
