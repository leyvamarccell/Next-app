export default function Input({type, placeholder}) {
    return(
        <input type={type} required placeholder={placeholder} className='bg-white border mt-3 border-gray-300 rounded-md h-14 w-64 mx-auto outline-none focus:border-indigo-500 focus:border-2 px-3 text-lg text-gray-700 font-medium'></input>
           
    )
}