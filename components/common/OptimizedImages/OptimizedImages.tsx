import React from 'react'

import Image from 'next/image'

export default function OptimizedImages({
  id,
  image,
  text,
}: {
  id: number
  image: string
  text: string
}) {
  return (
    <div className="w-full text-center" key={id}>
      <div className="relative aspect-square">
        <Image
          className=" rounded-2xl object-cover
                            
                            "
          src={image}
          alt={text}
          // width={tasarim.width}
          // height={tasarim.height}
          fill
        ></Image>
      </div>
      <span className="text-lg font-medium">{text}</span>
    </div>
  )
}
