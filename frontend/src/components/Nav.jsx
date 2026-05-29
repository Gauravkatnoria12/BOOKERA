import { Search, ChevronDown, User, Plus  } from 'lucide-react'


const Nav = () => {
  return (
    <nav className='flex items-center fixed top-0 justify-between w-full h-24 bg-stone-50/90 shadow-xs border-b-0 px-22 z-50 '>
      <div className='font-cormorant text-3xl text-neutral-800 w-80 flex items-center justify-center'>BOOK.ERA</div>
      <div className= 'w-full flex flex-row gap-7 justify-center items-center font-Inter font-semibold text-xs text-neutral-600 cursor-pointer'>
        <a href="#">
          <p className='hover:scale-110 transition-transform duration-100 ease-in-out active:scale-100'>HOME</p>
        </a>
        <a href="#">
          <p className="group flex items-center gap-1">ABOUT <ChevronDown size={16} strokeWidth={1} className='group-hover:-rotate-180 transition-transform duration-300 ease-in-out'/></p>
        </a>
        <a href="#">
          <p className='hover:scale-110 transition-transform duration-100 ease-in-out active:scale-100'>CONTACT</p>
        </a>
        <a href="#">
          <p className="group flex items-center gap-1">CATEGORIES <ChevronDown size={16} strokeWidth={1} className='group-hover:-rotate-180 transition-transform duration-300 ease-in-out'/></p>
        </a>
        <a href="#">
          <p className="group flex items-center gap-1">AUTHORS <ChevronDown size={16} strokeWidth={1} className='group-hover:-rotate-180 transition-transform duration-300 ease-in-out' /></p>
        </a>
      </div>
      <div className="w-60 flex flex-row justify-center gap-6">
        <Search size={24} color="black" strokeWidth={1}  className='hover:scale-120 transition-transform duration-100 ease-in-out active:scale-100' />
        <User size={24} color="black" strokeWidth={1} className='hover:scale-120 transition-transform duration-100 ease-in-out active:scale-100' />
        <Plus size={24} color="black" strokeWidth={1} className='hover:scale-120 transition-transform duration-100 ease-in-out active:scale-100' />
      </div>
    </nav>
  )
}

export default Nav