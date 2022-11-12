import Link from "next/link"

export default function Servicios({text, image}) {
    return(
        <div className="bg-white mx-5 my-5 shadow-2xl rounded-lg h-auto flex ">
<img src={image} className="h-24 w-24 ml-6"></img>
<Link href='/a' className="my-auto ml-10 text-xl font-medium hover:underline text-blue-600">{text}</Link>
        </div>
    )
}