import getImg from '../assets/getIn.avif'
import { Mail, SquareArrowOutUpRight  } from 'lucide-react'

const GetInTouch = () => {
  return (
    <section className='h-screen w-full flex flex-row mb-24 px-20'>
      <div className='w-60'>
        <img src={getImg} className='h-full object-cover object-right'></img>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div>
            <p className='font-Inter text-sm text text-neutral-400 tracking-widest shadow-2xs py-3'>GET IN TOUCH</p>
            <h1 className='font-cormorant text-6xl text-neutral-800 mt-10'>We'd love to<br />hear from you.</h1>
            <p className='font-Inter mt-5 text-md text-neutral-600'>
              Have a question, a project in mind,
              <br />or just want to say hello? We're here<br />
              and happy to help.</p>
            <div className='h-24 shadow-2xs mb-5'/>
            <div className='flex flex-row gap-8 px-2'>
              <Mail size={24} color='black' strokeWidth={1} />
              <SquareArrowOutUpRight  size={24} color='black' strokeWidth={1} />
            </div>
          </div>
      </div>
      <div className='flex-1 bg-neutral-50 flex items-center justify-center'>
        <form>
          <table className='w-90 [&_label]:text-md [&_label]:text-neutral-700 [&_label]:font-Inter'>
            <tr>
              <label for='name'>Name</label>
            </tr>
            <tr>
              <input type='text' id='name' className='h-10 w-full bg-white rounded-md mt-2 mb-6 border-neutral-100 border-2 px-3 font-Inter text-neutral-800 focus:outline-none focus:border-neutral-300 transition-all duration-200'/>
            </tr>
            <tr>
              <label for='mail'>Email</label>
            </tr>
            <tr>
              <input type='email' id='mail' className='h-10 w-full bg-white rounded-md mt-2 mb-6 border-neutral-100 border-2 px-3 font-Inter text-neutral-800 focus:outline-none focus:border-neutral-300 transition-all duration-200'/>
            </tr>
            <tr>
              <label for='message'>Message</label>
            </tr>
            <tr>
              <textarea 
                id='message'
                className='w-full rounded-md mt-2 mb-6 border-neutral-100 border-2 px-3 py-2 bg-white font-Inter text-neutral-800 focus:outline-none focus:border-neutral-300 transition-all duration-200 h-32 max-h-48 resize-y' 
                placeholder='Write your message here...'
              />
            </tr>
            <tr>
              <input type='submit' value={"SUBMIT"} className='ml-2 bg-neutral-800 rounded-md text-white font-Inter text-md py-4 px-8 hover:scale-103 transition-transform duration-200 ease-in-out'/>
            </tr>
          </table>
        </form>
      </div>
    </section>
  )
}

export default GetInTouch