import Link from "next/link"
import { Layout, SEO } from "~/components/common"

export default function Custom404() {
    return (
        <>
            <div className="h-[80vh]">
                <SEO title="Aradığınız Sayfa Bulunamadı" description='Kahyaoğlu Peyzaj İle Bahçeleriniz Daha Güzel' />

                <main
                    className="min-h-full bg-cover bg-top sm:bg-top h-full"
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
                    }}
                >
                    <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
                        <p className="text-base font-semibold text-black text-opacity-50">404 HATASI</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Eyvah, galiba kayboldunuz.</h1>
                        <p className="mt-2 text-lg font-medium text-black text-opacity-50">

                            Aradığınız sayfaya ulaşılamadı. Aşağıdaki butonu kullanarak anasayfaya geri dönebilirsiniz.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/"
                                className="inline-flex items-center rounded-md border border-transparent bg-background-primary bg-opacity-75 px-4 py-2 text-sm font-medium text-black text-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
                            >
                                Anasayfa
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

Custom404.Layout = Layout