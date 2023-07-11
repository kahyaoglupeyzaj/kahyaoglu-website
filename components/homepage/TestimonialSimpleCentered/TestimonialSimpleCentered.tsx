import Image from 'next/image'

/* This example requires Tailwind CSS v2.0+ */
export default function TestimonialSimpleCentered() {
  return (
    <section className="overflow-hidden bg-background-primary py-12 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute right-full top-full -translate-y-1/4 translate-x-1/3 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div className="relative">
          <blockquote className="mt-10">
            <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900">
              <p>
                &ldquo;Kahyaoğlu Peyzaj ile çalışmaya başladığımızdan beri
                bahçemiz çok daha keyifli. Ailem ile vaktimizin çoğunu bahçede
                geçiriyoruz. Özellikle Hüseyin Bey'e teşekkür ederiz.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  {/* <img
                    className="mx-auto h-10 w-10 rounded-full"
                    alt=""
                  /> */}
                </div>
                <div className="mt-3 text-center md:ml-4 md:mt-0 md:flex md:items-center">
                  <div className="font-medium text-base text-gray-900">
                    Sami Yangın
                  </div>
                  <svg
                    className="mx-1 hidden h-5 w-5 text-primary md:block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="font-medium text-base text-gray-500">
                    Yalıkavak Villa Peyzaj Projesi
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
