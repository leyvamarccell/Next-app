
import Input from "./Input";
import InputCoin from "./inputCoin";
import InputPay from "./inputPay";
import Modal from "./Modal";

export default function Remesa () {
    return(
        <div className="bg-white mx-5 rounded-lg shadow-2xl mt-5 h-auto w-auto flex items-center flex-col">

<InputCoin/>
<InputPay/>
<Input type='email' placeholder='Email '/>
<Input type='text' placeholder='Wallet'/>
<Input type='number' placeholder='Targeta del beneficiario'/>
<Input type='number' placeholder='Monto'/>
<Modal/>

        </div>
    )
}