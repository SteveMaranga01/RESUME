import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
            <div>

                {/* brand column */}

                <div>
                    <div className='flex gap-1 items-center'>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 
                            hover:opacity-100 transtion-opacity"></div>
                            <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100
                            hover:opacity-75 transtion-opacity"></div>
                        </div>
                        <span>The Next Design</span>
                    </div>
                    <p className='textgray-600 mb-6'>The copy warned the little Blind Text, that where it came from it would have been rewritten a thousand times</p>

                    <div>
                        <a href="#">FaFacebookF</a>
                    </div>

                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer
