import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Home from '../home/Home'
import About from '../about/About'
import Team from '../team/Team'
import Sponsors from '../sponsors/Sponsors'
import ContactUs from '../contactUs/ContactUs'
import Archives from '../pasteditions/Archives'
import { Route, Routes} from 'react-router-dom'
import logo from '../../assets/logos/logo-white.png'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Past Editions', href: '/past-editions', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'Sponsors', href: '/sponsors', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <div>
      <Disclosure as="nav" className="bg-black">
        {({ open }) => (
          <>
            <div className=" px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="TEDx VNRVJIET"
                    />
                    <img
                      className="hidden h-11 pt-2 w-auto lg:block"
                      src={logo}
                      alt="TEDx VNRVJIET"
                    />
                  </div>
                  <div className=" hidden sm:ml-6 sm:block">
                    <div className="absolute right-0 flex space-x-4s">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'text-red-600 hover:bg-red-600 hover:text-white' : 'text-gray-300 hover:bg-red-600 hover:text-white',
                            'rounded-md px-3 py-2  text-medium font-semibold'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className=" space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path='/past-editions' element={<Archives />} />
            <Route path='/sponsors' element={<Sponsors />} />
            <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
    </div>
  )
}

export default Navbar