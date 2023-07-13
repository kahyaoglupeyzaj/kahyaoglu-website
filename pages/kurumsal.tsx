import Image from 'next/image'
import { Layout, SEO } from '~/components/common'
import KurumsalImage from '@public/kurumsal-page.jpg'
import {
  BoltIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'GÜVEN',
    description:
      'Güven, bilgi birikimimiz, geniş tecrübemiz, etkin iş yapış şeklimiz ve kurumsal değerlere olan bağlılığımızla tüm paydaşlarımız için temel bir unsur oluşturuyoruz. Taahhütlerimizi zamanında yerine getiriyor, her durumda güven veren profesyonel yaklaşımlarımızla öne çıkıyoruz.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'MÜŞTERİ ODAKLILIK',
    description:
      "Müşterilerimizin beklenti ve ihtiyaçlarını en üst düzeyde önemsiyoruz. 'Koşulsuz müşteri memnuniyeti' ilkesiyle hareket ediyor, taahhütlerimizi hızlı ve müşteri beklentilerinin ötesinde yerine getiriyoruz. Zamanında ve etkili çözümler sunarak, müşterilerimize karşı sorumluluklarımızı yerine getiriyoruz.",
    icon: UserGroupIcon,
  },
  {
    name: 'SAYGI',
    description:
      'Tüm paydaşlarımıza saygıyla yaklaşırız; onların sesini dinler, görüş ve fikirlerini değerli buluruz. İnsan haklarına, doğaya, çevreye ve tüm yasal düzenlemelere büyük önem veririz. Müşterilerimizin, çalışanlarımızın, toplumun ve doğanın haklarına saygı gösteririz. Sizin ve tüm paydaşlarımızın güvenini kazanmak için adanmış bir şekilde çalışıyoruz.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function Kurumsal() {
  return (
    <div>
      <SEO
        title="Kurumsal"
        description="Kahyaoğlu Peyzaj Hakkında Kurumsal Bilgiler"
      />
      <div className="relative bg-background-primary">
        <div className="h-56 bg-background-primary sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
          <Image
            className="h-full w-full object-cover"
            src={KurumsalImage.src}
            alt="Kahyaoglu Peyzaj Kurumsal"
            width={KurumsalImage.width}
            height={KurumsalImage.height}
          ></Image>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-2xl lg:ml-auto lg:mr-0 lg:w-1/2 lg:max-w-none lg:pl-10">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Güvenilir, Saygılı, Müşteri odaklı
            </h2>
            <p className="mt-6 text-lg text-gray-500">
              <span className='text-primary font-medium'>Kahyaoğlu Peyzaj</span>, fidancılık, peyzaj mimarisi ve kentsel tasarım
              projelerinde daima öncü olup, kaliteli ve şık mekanlar yaratmaya
              devam ediyor. Geçmişten bugüne, müşterilerimize eşsiz deneyimler
              sunmayı sürdürüyoruz. İleri teknolojiye sahip ekipmanlarımız ve
              yenilikçi ürünlerimiz sayesinde son trendleri yakından takip
              ediyor, en üstün hizmeti sunuyoruz. Kahyaoğlu Peyzaj ile
              yaşayabileceğiniz farkı deneyimlemek ve en kaliteli hizmeti almak
              için sizi ziyaret etmeye davet ediyoruz.
            </p>
            <div className="mt-8 overflow-hidden">
              <dl className="-mx-8 -mt-8 flex flex-wrap">
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 font-medium text-base text-gray-500">
                    Hizmet
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-primary sm:text-3xl sm:tracking-tight">
                    7/24
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 font-medium text-base text-gray-500">
                    Müşteri Memnuniyeti
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-primary sm:text-3xl sm:tracking-tight">
                    %100
                  </dd>
                </div>
                <div className="flex flex-col px-8 pt-8">
                  <dt className="order-2 font-medium text-base text-gray-500">
                    Mutlu Müşteri
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-primary sm:text-3xl sm:tracking-tight">
                    500+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background-primary py-12">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900  sm:text-4xl md:py-12 ">
            Değerlerimiz
          </h2>
          <h2 className="sr-only">Kahyaoğlu Peyzaj Değerlerimiz</h2>
          <dl className="mt-12 space-y-10 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

Kurumsal.Layout = Layout
