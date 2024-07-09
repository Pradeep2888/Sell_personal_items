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
                {/* <div className='flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-3 bg-white py-2 px-2 lg:py-4 lg:px-5 rounded-md'> 
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
                    
                </div> */}
                <div className='w-full flex justify-between flex-col items-center mt-10'>
                    <p className='text-xl font-normal leading-6 text-white'>Follow our social media</p>
                    <div className='flex justify-between items-start gap-5 mt-5'>
                        <div className='rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 320 512">
                                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                            </svg>
                        </div>
                        <div className='rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                            </svg>
                        </div>
                        <div className='rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
                                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                            </svg>
                        </div>
                        <div className=' rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mt-5 relative z-20'>
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