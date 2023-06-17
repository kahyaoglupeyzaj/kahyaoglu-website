
import Image from 'next/image'
import React from 'react'

export default function ResponsiveImage({ imageUrl, alt, title1, title2 }: { imageUrl: string, alt?: string, title1?: string, title2?: string }) {
    return (
        <div className="relative   w-full aspect-square md:aspect-[2.4]">
            {/* <div className="absolute inset-x-0 bottom-0 bg-gray-100" /> */}

            <div className=" absolute w-full h-full z-20 text-white flex items-center justify-center flex-col">
                {title2 && <h2 className="py-4 text-xl font-semibold">{title2}</h2>}
                <h1 className="pb-8 text-3xl font-semibold">{title1}</h1>
            </div>

            <div className="block h-fit">
                <div className="hidden phoneFin:block h-full w-full ">
                    <Image
                        src={imageUrl}
                        alt={alt || "resim"}
                        className=" mix-blend-darken  bg-black brightness-50 object-cover object-center"
                        priority
                        fill
                    />
                </div>
                <div className="block phoneFin:hidden h-fit">
                    <Image
                        src={imageUrl}
                        alt={alt || "resim"}
                        className=" mix-blend-darken  bg-black brightness-50 object-cover object-center"
                        priority
                        fill
                    />
                </div>
            </div>


        </div>
    )
}
