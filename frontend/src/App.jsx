import { ArrowRight } from 'lucide-react';
import Nav from './components/Nav';
import Marquee from './components/Marquee';
import Books from './components/Books';
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'

import heroImg from './assets/heroimg.jpg';
import secImg from './assets/book.jpg'

const App = () => {
  return (
    <>

      {/* NAVIGATION BAR */}

      <Nav />

      {/* HERO SECTION */}

      <div className="h-24"></div>
      <section className='h-screen w-full flex flex-row'>
        <div className='w-190 h-full pl-30 py-15'>
          <p className='font-Inter text-sm text text-neutral-400 tracking-widest shadow-2xs py-3'>✦ THE CREATIVE DESIGN</p>
          <h1 className='font-cormorant text-7xl text-neutral-800 py-5 '>Books that <br /> stays with <br /> you.</h1>
          <button className='mt-8 flex items-center gap-1 px-10 py-5 bg-neutral-900 rounded-lg font-Inter text-white text-md hover:scale-110 transition-transform duration-300 ease-in-out'> 
            Explore &nbsp;<ArrowRight  size={16} color="white" strokeWidth={1} />
          </button>
          <div className='font-Inter text-6xl text text-neutral-100 font-semibold pt-22 animate-pulse'>BOOK ERA</div>
        </div>
        <div className='w-full flex flex-col items-end gap-10 pr-28 py-15'>
          <img src={heroImg} className='w-140 rounded-2xl mb-10 shadow-lg hover:scale-102 transition-transform duration-300 ease-in-out' alt="Hero Books" />
          <p className='font-Inter text-right text-sm text text-neutral-400 tracking-widest mt-5 hover:-rotate-3 transition-transform duration-300 ease-in-out'>DEVELOPED WITH PASSION<br /> ✦ GAURAV K <br /> CREATIVE DEVELOPER </p>
        </div>
      </section>
      <div className='h-34 w-full '></div>


      {/* TEXT */}

      <section className='h-screen w-full bg-neutral-700 flex flex-col justify-center items-center text-white'>
        
        <div className=' flex flex-col justify-center'>
          <h2 className='font-wind text-4xl'>" A reader lives a thousand lives before he dies.</h2>
          <h2 className='font-wind text-4xl mt-6'>The man who never reads lives only one. "</h2>
          <p className='font-Inter text-neutral-400 mt-7'>– George R. R. Martin</p>
        </div>

        <div className=' flex flex-col justify-center mt-20 items-end'>
          <h2 className='font-wind text-4xl'>&nbsp;&nbsp; " We read to know we are not alone. "</h2>
          <p className='font-Inter text-neutral-400 mt-5'>– C.S. Lewis</p>
        </div>

      </section>

      {/* BOOKS SECTION */}

      <Books />

      { /* FEATURES SECTION */}

      <section className='h-screen w-full flex flex-row px-28 py-28 mb-24 gap-20'>
        <div>
          <img src={secImg} className='h-full'></img>
        </div>

        <div className='w-70 flex flex-col items-center justify-center'>
          <div>
            <p className='font-Inter text-sm text text-neutral-400 tracking-widest shadow-2xs py-3'>✦ FOR BOOK LOVERS</p>
            <h1 className='font-cormorant text-6xl text-neutral-800 mt-6'>More than <br />just a book.</h1>
            <p className='font-Inter mt-5 text-md text-neutral-700'>Explore our collection, discover new <br />favourites, and find the perfect gift.</p>
            <button className='group mt-6 px-7 py-4 flex flex-row items-center font-Inter border-2 border-neutral-600 text-neutral-700 text-md hover:bg-neutral-800 hover:text-neutral-50 hover:border-neutral-800 transition-colors duration-300 ease-in-out'>
              Explore Collections &nbsp;<ArrowRight  size={16} strokeWidth={1} className='text-neutral-800 group-hover:text-neutral-50'/>
            </button>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}

      <GetInTouch />

      {/* MARQUEE SECTION */}

      <Marquee />
      
      {/* FOOTER */}
      
      <Footer />
    </>
  )
}

export default App