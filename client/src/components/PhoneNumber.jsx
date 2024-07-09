import { MobileIcon } from "./Icons"
import { useState } from 'react';
import { PhoneInput, CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css';

// const PhoneCode = ({ className, phone, setPhone }) => {
//     return (
//         <div className={className}>
//             <PhoneInput
//                 defaultCountry="ua"
//                 value={phone}
//                 className="border-none"
//                 onChange={(phone) => setPhone(phone)}
//                 inputRef={(ref) => { ref ? ref.style.display = "none" : null }}
//                 // buttonStyle={{border:"none"}}
//                 renderButtonWrapper={(children, rootProps) =>
//                     console.log(children, rootProps)
//                 }
//             />
//         </div>
//     );
// };

// const CountryCodeSelector = () => {
//     const [country, setCountry] = useState("ua");
//     console.log(country);
//     return (
//         <CountrySelector
//             selectedCountry={country}
//             onSelect={({ iso2 }) => setCountry(iso2)}
//         />
//     )
// }




export function PhoneNumber({ value, onchange }) {
    const [countryCode, setCountryCode] = useState('+91');
    const [country, setCountry] = useState('in');

    return (
        <div className='relative flex'>
            <div className='flex justify-start items-center gap-3 py-3 w-full px-14 border border-[#D5E3EE] rounded'>
                {/* <PhoneCode phone={phone} setPhone={setPhone} /> */}
                <CountrySelector
                    buttonStyle={{ border: "none" }}
                    selectedCountry={country}
                    onSelect={(country) => {
                        setCountryCode(country.dialCode);
                        setCountry(country.iso2);
                    }}
                />
                <span className="text-primary font-medium">{countryCode}</span>
                <input name='contactNumber' value={value} onChange={(e) => onchange(`${countryCode}-${e.target.value}`)} className='w-full rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="tel" placeholder="Phone" />
            </div>
            <span className='absolute top-[16px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                <MobileIcon color={"#475B6B"} />
            </span>
        </div>
    )
}

export default PhoneNumber