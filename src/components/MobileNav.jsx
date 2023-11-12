import { navLinks } from "../constants"

const MobileNav = () => {
  return (
    <ul className="hidden z-40 flex-col max-lg:flex items-center justify-center py-20 w-full absolute right-0 bg-primary bg-hero bg-cover bg-center">
        
        {navLinks.map((item) => (
            <li key={item.label} className="mb-6">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg hover:text-coral-red'
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mb-6" >
            <a className="font-montserrat leading-normal text-lg hover:text-coral-red" href='/'>Sign in</a>
            <span>/</span>
            <a className="font-montserrat leading-normal text-lg hover:text-coral-red" href='/'>Explore now</a>
          </li>
        </ul>
  )
}

export default MobileNav
