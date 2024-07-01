import { Link } from 'react-router-dom'
import Gadgets from "../../../assets/Gadgets.png"
import HomeAndGarden from "../../../assets/Home-And-Garden.png"
import clothing from "../../../assets/Clothing.png"
import kids from "../../../assets/Kids.png"
import vehicles from "../../../assets/Vehicles.png"
import toys from "../../../assets/Toys.png"
import sports from "../../../assets/Sports.png"
import CollectiblesArt from "../../../assets/Collectibles-Art.png"



function Banner() {
    return (
        <div className='w-full h-[130vh] lg:h-screen banner relative flex flex-col '>
            <div className='absolute top-0 left-0 w-full h-[130vh] lg:h-screen bg-[#44525ecf]'></div>
            <div className='relative z-20 '>
                <div className='text-center mb-4'>
                    <h1 className='text-xl md:text-3xl lg:text-7xl font-bold text-white py-2'>Give Your Items</h1>
                    <h1 className='text-xl md:text-3xl lg:text-7xl font-bold text-yellow-500'>A Second Chance!</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-3 bg-white py-2 px-2 lg:py-4 lg:px-5 rounded-md'>
                    <div className='border border-[#D5E3EE] w-full relative'>
                        <input className='py-3 px-14 focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="I'm looking for..." />
                        <span className='absolute top-2 left-2 w-8 h-8 rounded-md bg-[#d5e3ee]'></span>
                    </div>
                    <div className='border border-[#D5E3EE] w-full relative'>
                        <input className='py-3 px-14 focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="Location (e.g. New York)" />
                        <span className='absolute top-2 left-2 w-8 h-8 rounded-md bg-[#d5e3ee]'></span>
                    </div>
                    <div className='w-full bg-[#537cd9] py-[15px] px-4'>
                        <div className="w-[20px] h-[20px] flex justify-center items-center relative transition-transform ease-in-out transform hover:scale-125">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M0 7.24416C0 3.25516 3.25515 0 7.24416 0C11.2332 0 14.4883 3.25516 14.4883 7.24416C14.4883 8.87942 13.9353 10.3861 13.0149 11.601L17.6928 16.2798C17.9538 16.5305 18.0589 16.9026 17.9677 17.2528C17.8764 17.6029 17.6029 17.8764 17.2528 17.9677C16.9026 18.0589 16.5305 17.9538 16.2798 17.6928L11.601 13.0149C10.3861 13.9353 8.87942 14.4883 7.24416 14.4883C3.25515 14.4883 0 11.2332 0 7.24416ZM12.4899 7.24416C12.4899 4.33516 10.1532 1.99839 7.24416 1.99839C4.33516 1.99839 1.99839 4.33516 1.99839 7.24416C1.99839 10.1532 4.33516 12.4899 7.24416 12.4899C8.64188 12.4899 9.90406 11.9466 10.8418 11.0633C10.904 10.9775 10.9794 10.9021 11.0653 10.8399C11.9474 9.90231 12.4899 8.64089 12.4899 7.24416Z"
                                    fill="#FDFDFE"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 relative z-20'>
                {/* <div className='bg-transparent flex items-center justify-center lg:justify-between gap-1 lg:gap-3 flex-wrap'>
                    <div className='border-2 transition ease-in-out reletive hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={Gadgets} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Electronics & Media</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={HomeAndGarden} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Home & Garden</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={clothing} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Clothing, Shoes & Accessories</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={kids} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Baby & Kids</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={vehicles} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Vehicles</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={toys} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Toys, Games & Hobbies</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={sports} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Sports & Outdoors</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={CollectiblesArt} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Collectibles & Art</Link>
                    </div>
                </div> */}
                <div className='max-w-3xl mx-auto text-center mt-20'>
                    <p className='text-3xl leading-10 text-white font-medium '>Join our group of buyers and sellers of some of the highest-quality merchandise, many of which have never been used. You will surely find great deals for yourself, your family, and your friends.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner