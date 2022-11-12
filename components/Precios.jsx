import {useState, useEffect} from 'react'

export default function Precios () {
   
const [coins, setCoins] = useState([])


   const RequestData = async() => {
    const data = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false')
    const res = await data.json()
    setCoins(res)
}

useEffect(() => {
RequestData()
},[])

    return(
      <div className="bg-white dark:bg-slate-700  flex items-start rounded-xl  mt-5 mb-5 mx-5 lg:mx-32 lg:w-1/2 xl:mx-24 2xl:mx-80">

<div>{coins.map(coin => {
    return(
        <div key={coin}>
            <img src={coin.image} className='h-12 w-12 my-4 ml-5'></img>
        </div>
    )
})}</div>

<div>{coins.map(coin => {
    return(
        <div key={1}>
        <h4 className='text-lg  mx-5 my-9 mr-10'>{coin.symbol}</h4>
        </div>
    )
    })}</div>


<div>{coins.map(coin => {
    return(
        <div key={1}>
        <h4 className='text-xl font-bold mx-5 my-9  text-green-500'>$ {coin.current_price}</h4>
        </div>
    )
})}</div>
        </div>
    )
} 