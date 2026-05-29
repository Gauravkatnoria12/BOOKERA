import b5Img from '../assets/b5.webp';
import b4Img from '../assets/b4.webp';
import b2Img from '../assets/b2.png';
import b1Img from '../assets/b1.webp';

const Books = () => {
  return (
    <section className='w-full py-24 px-30 bg-stone-50/30'>

    <div className='flex items-center '>
      <img src={b5Img} className='w-30 h-45 opacity-75 relative hover:scale-105 transition-transform duration-300 ease-in-out'></img>
      <img src={b4Img} className='w-40 h-60 relative right-15 hover:scale-105 transition-transform duration-300 ease-in-out'></img>

      <div className='books-section flex items-center flex-col '>
        <h2 className='w-10 font-Inter text-7xl text-neutral-800'>THE SHIFT</h2>
        <h2 className='w-15 font-cormorant text-7xl text-neutral-800 z-40 '>
          FEATURED BOOKS
        </h2>
        <button className='px-8 py-5 bg-neutral-900 font-Inter text-white text-md hover:scale-105 transition-transform duration-300 ease-in-out'>
          SHOP NOW
        </button>
      </div>

      <img src={b2Img} className='w-80 h-110 relative ml-40 z-30 hover:scale-105 transition-transform duration-300 ease-in-out'></img>
      <img src={b1Img} className='w-40 h-60 opacity-80 relative right-10 hover:scale-105 transition-transform duration-300 ease-in-out'></img>
    </div>
    </section>
  )
}

export default Books