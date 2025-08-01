'use client'
import Image from 'next/image'
import React from 'react';


export default function Author() {
return(
    
         <div className="flex items-center bg-white rounded-lg shadow-md p-6 my-6">
          
      {/* New author photo on the left */}
      <div className="w-20 h-20 relative flex-shrink-0 mr-4">
        <Image
          src="/author.jpg"    // place your new JPG here
          alt="Author portrait"
          fill
          className="rounded-full object-cover"
        />
      </div>
     <div>
        <h3 className="text-xl font-semibold">Yibraleh Ayele</h3>
        <p className="text-gray-600">
           I'm a dedicated Computer Engineering student at Addis Ababa Science and Technology University (AASTU),
         specializing in computer systems. Passionate about technology and innovation,
          I thrive at the intersection of hardware and software. With a strong foundation in electrical engineering principles and computer science concepts,
           I'm developing expertise in creating efficient, real-world technology solutions.
        </p>
        <div className="mt-2 space-x-3">
          
          <a href="https://github.com/Yibraleh" className="text-gray-700 hover:underline text-sm">
            GitHub
          </a>
        </div>
      </div>
    </div>
)
}