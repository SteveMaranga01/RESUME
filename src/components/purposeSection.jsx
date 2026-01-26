import React from 'react'

const PurposeSection = () => {
 const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];
  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
        <div className='max-w-6xl mx-auto ml-30'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                {/* heading text */}

                <div>
                    <p className='text-sm text-purple-500 mb-1 font-bold'>ACHIEVE MORE</p>
                    <h2 className='text-3xl font-bold text-gray-800 md:w-4/5 w-full md:text-4xl '>Purpose of a convoy is to keep your team</h2>
                </div>

                {/*bullet points */}

                <div className='col-span-2 grid grid-col-1 md:grid-cols-2 justify-between gap-8 '>
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start mb-4">
                        <span className="text-2xl mr-3">{feature.icon}</span>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-800">{feature.title}</h3>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                </div>


            </div>
        </div>
    </section>
   
  )
}

export default PurposeSection
