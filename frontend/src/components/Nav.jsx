import { 
  Search, 
  ChevronDown, 
  User, 
  Handbag 
} from 'lucide-react'

const Nav = () => {
  return (
    <nav className='flex items-center fixed top-0 justify-between w-full h-24 bg-stone-50/90 backdrop-blur-md shadow-xs border-b-0 px-22 z-50 '>
      <div className='font-cormorant text-3xl text-neutral-800 w-80 flex items-center justify-center select-none'>BOOK.ERA</div>
      
      <div className='w-full h-full flex flex-row gap-8 justify-center items-center font-Inter font-semibold text-xs tracking-[0.2em] text-neutral-600 cursor-pointer'>
        {/* HOME LINK */}
        <a href="#" className="h-full flex items-center">
          <p className='hover:text-neutral-900 transition-colors duration-200 hover:scale-105 active:scale-100'>HOME</p>
        </a>
        
        {/* ABOUT DROPDOWN */}
        <div className="relative group h-full flex items-center">
          <button className="flex items-center gap-1 hover:text-neutral-900 transition-colors duration-200 uppercase tracking-[0.2em] font-semibold text-xs focus:outline-none cursor-pointer">
            ABOUT 
            <ChevronDown size={14} strokeWidth={1.5} className='group-hover:rotate-180 transition-transform duration-300 ease-in-out'/>
          </button>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-96 bg-white rounded-2xl border border-neutral-100 shadow-[0_12px_42px_rgba(0,0,0,0.08)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden cursor-default">
            <div className="p-5 flex flex-col gap-2">
              <div className="text-[10px] tracking-[0.2em] text-neutral-400 font-bold font-Inter pb-2 border-b border-neutral-50 mb-1">ABOUT BOOK.ERA</div>
              
              <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Our Story</h4>
                <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">How we grew from a small neighborhood shelf to a curated digital library ecosystem.</p>
              </a>

              <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Our Mission</h4>
                <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Fostering rich reading habits and standardizing quality curation across generations.</p>
              </a>

              <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Careers</h4>
                <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Join our remote-first creative crew of literary curators and engineering minds.</p>
              </a>

              <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Press & Media</h4>
                <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Read our latest articles, official announcements, and library press kits.</p>
              </a>
            </div>
            
            <a href="#" className="flex items-center justify-between px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200 text-neutral-700 text-xs font-Inter font-semibold tracking-wider group/footer">
              LEARN MORE ABOUT US
              <span className="transform transition-transform duration-300 group-hover/footer:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* CONTACT LINK */}
        <a href="#" className="h-full flex items-center">
          <p className='hover:text-neutral-900 transition-colors duration-200 hover:scale-105 active:scale-100'>CONTACT</p>
        </a>

        {/* CATEGORIES DROPDOWN */}
        <div className="relative group h-full flex items-center">
          <button className="flex items-center gap-1 hover:text-neutral-900 transition-colors duration-200 uppercase tracking-[0.2em] font-semibold text-xs focus:outline-none cursor-pointer">
            CATEGORIES 
            <ChevronDown size={14} strokeWidth={1.5} className='group-hover:rotate-180 transition-transform duration-300 ease-in-out'/>
          </button>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-lg bg-white rounded-2xl border border-neutral-100 shadow-[0_12px_42px_rgba(0,0,0,0.08)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden cursor-default">
            <div className="p-6">
              <div className="text-[10px] tracking-[0.2em] text-neutral-400 font-bold font-Inter pb-2 border-b border-neutral-50 mb-3">EXPLORE GENRES</div>
              
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Fiction</h4>
                  <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Novels, fantasy, and imaginary worlds.</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Biography</h4>
                  <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Real stories of inspirational lives.</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Science & Tech</h4>
                  <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Exploring space, physics, and future tech.</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">History</h4>
                  <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Chronicles of human era & ancient times.</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Art & Design</h4>
                  <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Visual aesthetics, designs, and architecture.</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group/item">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">Children</h4>
                  <p className="font-Inter font-normal text-neutral-500 text-xs tracking-normal mt-1 leading-relaxed">Bedtime stories and early learning adventures.</p>
                </a>
              </div>
            </div>
            
            <a href="#" className="flex items-center justify-between px-6 py-4 bg-neutral-50 hover:bg-neutral-100 transition-colors duration-200 text-neutral-700 text-xs font-Inter font-semibold tracking-wider group/footer">
              DISCOVER FEATURED BOOKSHELF
              <span className="transform transition-transform duration-300 group-hover/footer:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* AUTHORS DROPDOWN */}
        <div className="relative group h-full flex items-center">
          <button className="flex items-center gap-1 hover:text-neutral-900 transition-colors duration-200 uppercase tracking-[0.2em] font-semibold text-xs focus:outline-none cursor-pointer">
            AUTHORS 
            <ChevronDown size={14} strokeWidth={1.5} className='group-hover:rotate-180 transition-transform duration-300 ease-in-out'/>
          </button>
          
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-120 bg-white rounded-2xl border border-neutral-100 shadow-[0_12px_42px_rgba(0,0,0,0.08)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden cursor-default flex flex-row">
            {/* Left Column - Featured Authors */}
            <div className="w-[55%] p-6 border-r border-neutral-100/80">
              <div className="text-[10px] tracking-[0.2em] text-neutral-400 font-bold font-Inter pb-2 border-b border-neutral-50 mb-3">FEATURED AUTHORS</div>
              <div className="flex flex-col gap-2">
                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-all duration-200 group/author">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">George R.R. Martin</h4>
                  <p className="font-Inter font-normal text-neutral-400 text-[9px] tracking-wider uppercase mt-1">FANTASY & DRAMA</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-all duration-200 group/author">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">C.S. Lewis</h4>
                  <p className="font-Inter font-normal text-neutral-400 text-[9px] tracking-wider uppercase mt-1">CLASSICS & PHILOSOPHY</p>
                </a>

                <a href="#" className="block p-3 rounded-xl hover:bg-neutral-50 transition-all duration-200 group/author">
                  <h4 className="font-Inter font-semibold text-neutral-800 text-sm tracking-normal">J.K. Rowling</h4>
                  <p className="font-Inter font-normal text-neutral-400 text-[9px] tracking-wider uppercase mt-1">ADVENTURE & FICTION</p>
                </a>
              </div>
            </div>

            {/* Right Column - Spotlight & CTA */}
            <div className="w-[45%] bg-neutral-50/70 p-6 flex flex-col justify-between">
              <div>
                <div className="text-[10px] tracking-[0.2em] text-neutral-400 font-bold font-Inter pb-2 mb-3">SPOTLIGHT</div>
                <div className="bg-white p-3.5 rounded-xl border border-neutral-100/50 shadow-xs">
                  <p className="font-wind text-neutral-600 text-xl tracking-normal">" A reader lives a thousand lives. "</p>
                  <p className="font-Inter font-semibold text-neutral-500 text-[9px] tracking-wider uppercase mt-3">— G.R.R. MARTIN</p>
                </div>
              </div>
              
              <a href="#" className="group/btn flex items-center gap-1 text-neutral-800 hover:text-black font-Inter font-bold text-[10px] tracking-wider transition-colors duration-200 mt-4 uppercase">
                VIEW ALL AUTHORS
                <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-60 flex flex-row justify-center gap-6 select-none">
        <Search size={24} color="black" strokeWidth={1}  className='hover:scale-120 transition-transform duration-100 ease-in-out active:scale-100 cursor-pointer' />
        <User size={24} color="black" strokeWidth={1} className='hover:scale-120 transition-transform duration-100 ease-in-out active:scale-100 cursor-pointer' />
        <Handbag size={24} color="black" strokeWidth={1} className='hover:scale-120 transition-transform duration-100 ease-in-out active:scale-100 cursor-pointer' />
      </div>
    </nav>
  )
}

export default Nav