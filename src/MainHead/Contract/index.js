import React from 'react';
import { Link } from 'react-router-dom';
import handyman from '../../image/Handyman_700х320.png'
import fffffff from '../../image/ffffff.png'
import apps from '../../image/app.png'
import ppppp from '../../image/pppp.png'

function Contracts() {
    return (
        <>
            <div className='mx-28 mt-2'>
                <p className='text-6xl font-extrabold text-emerald-500 font-serif cursor-pointer'>e.gree</p>
                <p className='flex list-none gap-7 text-l capitalize mt-2 cursor-pointer'>
                    <Link to='/contracts' className={window.location.pathname === '/contracts' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>contacts</li>
                    </Link>
                    <Link to='/faq' className={window.location.pathname === '/faq' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>FAQ</li>
                    </Link>
                    <Link to='/team' className={window.location.pathname === '/team' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>team</li>
                    </Link>
                    <Link to='/contact_us' className={window.location.pathname === '/contact_us' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>contact us</li>
                    </Link>
                    <Link to='/blog' className={window.location.pathname === '/blog' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>blog</li>
                    </Link>
                </p>
                <hr />
            </div>
            <p className='ml-28 text-5xl font-bold font-serif mt-5'>Contracts for all kinds of life situations</p>
            <p className='ml-28 text-2xl font-bold font-serif mt-5'>All you need is business</p>
            <div className='grid grid-cols-3 ml-10 mr-10 '>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={handyman} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/uploads/2021/12/Handyman-150x150.png'} alt="" className='h-8' />
                            <Link to='/handyman'>
                                <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>handyman</p>
                            </Link>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Refer-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-refer.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Refer</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>3 min to create</p>
                            <p>2610 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Venue-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-venue.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Venue</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>1 min to create</p>
                            <p>2072 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Freelance-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-freelance.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Freelance</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>2601 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Option-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-option.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>Option</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>3 min to create</p>
                            <p>2149 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Lock-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-lock.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Lock</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>0.5 min to create</p>
                            <p>2288 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Guest-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-guest.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Guest</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>2186 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Employ-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-employ.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>employ</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>1 min to create</p>
                            <p>2369 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Secret-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-secret.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>secret</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>1 min to create</p>
                            <p>2258 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Idea-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-idea.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>idea</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>1 min to create</p>
                            <p>2551 signed</p>
                        </footer>
                    </div>
                </div>
            </div>


            <p className='ml-28 text-2xl font-bold font-serif mt-10'>All you need is family and friends</p>
            <div className='grid grid-cols-3 ml-10 mr-10 '>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/12/1920%D1%85420-4-1536x336.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/uploads/2021/12/Icon_Promise.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Promise</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Rental-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/uploads/2021/10/icon-rental.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Rental</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Loan-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-loan.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Loan</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Testament-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-testament.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Testament</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Allowance-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-allowance.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>Allowance</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Purchase-and-Sale-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-purchase_and_sale.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Purchase and Sale</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Event-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-event.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Event</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Accident-1920x420-1-1536x336.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-accident.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>Accident</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Bet-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-bet.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Bet</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>Everybody, place your bets…into this e-greement!</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className=' h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/cat_4.png'} alt="" className='h-auto w-96 rounded-md' />

                    </div>
                </div>
            </div>

            <p className='ml-28 text-2xl font-bold font-serif mt-10'>All you need is relations</p>
            <div className='grid grid-cols-3 ml-10 mr-10 '>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Date-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-date.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Date</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Uncouple-700x320-1.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-uncouple.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Uncouple</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Prenup-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-prenup.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Prenup</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>
                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className='border h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/Couple-1920x420-1-1536x337.png'} alt="" className='h-40 w-96 rounded-md' />
                        <footer className='flex items-center pl-5'>
                            <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-couple.svg'} alt="" className='h-8' />
                            <p className='capitalize text-xl font-bold font-serif hover:text-emerald-400 cursor-pointer'>
                                Couple</p>
                        </footer>
                        <p className='pl-5 capitalize cursor-pointer'>for household projects large and small</p>
                        <footer className='flex gap-10 mt-[2rem] pl-5'>
                            <p>2 min to create</p>
                            <p>754 signed</p>
                        </footer>
                    </div>
                </div>

                <div className='flex justify-center gap-5 items-center mt-5'>
                    <div className=' h-auto rounded-md w-80'>
                        <img src={'https://e-gree.app/wp-content/uploads/2021/10/cat_3.png'} alt="" className='h-auto w-96 rounded-md' />

                    </div>
                </div>
            </div>

            <div className='flex justify-evenly items-center mt-10'>
                <footer>
                    <img src={fffffff} alt="" className='h-[28rem] w-[26rem]' />
                </footer>
                <footer>
                    <p className='font-bold font-serif text-4xl'>Now and forever</p>
                    <p className='w-[21rem] mt-2 font-serif'>Frist 3 created contracts are <span className='text-emerald-500'>free</span> and you can use it <span className='text-emerald-500'>forever</span>. All incoming contracts are always free</p>
                    <img src={apps} alt="" className='rounded-md mt-10 h-12' />
                </footer>
            </div>
            <div className='text-center h-72 pt-28 text-white font-serif font-bold text-3xl mt-5 ' style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp2987144.jpg')` }}>
                <p className='font-serif font-bold'>Let's agree</p>
                <p className='font-serif font-bold'>to e-gree</p>
            </div>

            <div className='flex justify-evenly items-center h-80 bg-slate-100'>
                <footer>
                    <p className='text-slate-400 text-xl'>Terms and Conditions</p>
                    <p className='text-slate-400 text-xl'>Our Team</p>
                    <p className='text-slate-400 text-xl'>Contact us</p>
                    <p className='text-slate-400 text-xl'>EDR Outline</p>
                    <p className='text-slate-400 text-xl'>EDR Rules</p>
                </footer>
                <div>
                    <footer className='flex items-center gap-9 mt-5'>
                        <img src={'https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg'} alt="" className='h-12' />
                        <img src={'https://img.freepik.com/premium-vector/instagram-app-icon-social-media-logo-vector-illustration_277909-403.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais'} alt="" className='h-10' />
                        <img src={'https://store-images.s-microsoft.com/image/apps.4784.13634052595610511.c45457c9-b4af-46b0-8e61-8d7c0aec3f56.3d483847-81a6-4078-8f83-a35c5c38ee92?h=464'} alt="" className='h-10' />
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'} alt="" className='h-10' />
                        <img src={'https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais'} alt="" className='h-10' />
                    </footer>
                    <footer>
                        <img src={ppppp} alt="" className='h-48' />
                    </footer>
                </div>
                <footer>
                    <p className='text-slate-400 text-xl'>© 2020–2022 e-gree</p>
                </footer>
            </div>
        </>
    );
}

export default Contracts;
