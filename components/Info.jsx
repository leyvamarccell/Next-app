export default function Info({image, text}) {
    return(
        <div className="bg-white mx-5 rounded-lg shadow-2xl flex flex-col items-center mb-5 ">
            <img src={image} className='h-20 w-20'></img>
            <h3 className="text-xl font-medium mx-5 mb-4">{text}</h3>
        </div>
    )
}