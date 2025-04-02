import { notFoundData } from "@/components/getData/notFoundData"
import Link from "next/link"
import { BsArrow90DegLeft } from "react-icons/bs"

const page = () => {
    return (
        <div className="bg-white dark:bg-gray-900 ">
            <section
                className="bg-[url(/logo/logo.png)] bg-center bg-repeat-space"
                
            >
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center bg-gray-600/60 rounded-full">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white dark:text-gray-500">{notFoundData.statusCode}</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl dark:text-white">{notFoundData.title}</p>
                        <p className="mb-4 text-lg font-light text-white dark:text-gray-400">{notFoundData.message}</p>
                        <Link href="/" className="inline-flex text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 items-center">
                            <BsArrow90DegLeft className="mr-2"/>
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
