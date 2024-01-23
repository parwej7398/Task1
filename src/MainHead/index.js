import React from 'react'
import apps from '../image/app.png'
import images from '../image/Screenshot 2024-01-22 173940.png'
import ssss from '../image/ssss.png'
import ffff from '../image/legal-image.svg'
import handyman from '../image/Handyman_700х320.png'
import vanue from '../image/Venue-700x320-1.png'
import freelance from '../image/Freelance-700x320-1.png'
import tool from '../image/00bafbd467d3032080ea94def9f43a1a.jpg'
import machine from '../image/color-matching-toolbox-tools-clip-art-portable-colorblock_230996_wh1200.png'
import maaaa from '../image/images.png'
import promise from '../image/Promise_1920х420-700x320.png'
import rental from '../image/Rental-700x320-1.png'
import purchase from '../image/Purchase-and-Sale-700x320-1.png'
import date from '../image/Date-700x320-1.png'
import uncouple from '../image/Uncouple-700x320-1.png'
import prenup from '../image/Prenup-700x320-1.png'
import imagess from '../image/imagess.png'
import meanwhile from '../image/1086х496-5-1080x494.png'
import online from '../image/Обложка-1920х420-2-700x320.png'
import freelances from '../image/ggg.png'
import wish from '../image/Promise_1920х420-700x320.png'
import prenups from '../image/aa.png'
import fffffff from '../image/ffffff.png'
import pppp from '../image/pppp.png'
import { Button, Rating } from '@mui/material'

const MainHead = () => {
    return (
        <>
            <div className='mx-64 mt-2'>
                <p className='text-7xl text-green-600 font-serif cursor-pointer'>e.gree</p>
                <p className='flex list-none gap-7 text-l capitalize mt-2 cursor-pointer'>
                    <li className='hover:text-green-400'>contacts</li>
                    <li className='hover:text-green-400'>FAQ</li>
                    <li className='hover:text-green-400'>team</li>
                    <li className='hover:text-green-400'>contact us</li>
                    <li className='hover:text-green-400'>blog</li>
                </p>
            </div>
            <div className='flex justify-center items-center gap-20 mt-8 bg-emerald-400 h-[34rem]'>
                <div>
                    <p className='h-1 w-[30rem] font-serif text-4xl capitalize text-white font-bold  mr-28 italic'>helping you through all of life's agreements <span className='flex flex-col text-green-200'>and disagreements</span></p>
                    <img src={apps} alt="" className='rounded-md mt-32 h-12' />
                </div>
                <div className='flex'>
                    <img src={images} alt="" className='rounded-3xl bg-green-600 h-96 w-48' />
                    <img src={ssss} alt="" className='h-72 mt-10 rounded-e-2xl' />
                </div>
            </div>
            <div className='flex justify-center items-center gap-16 mt-10'>
                <div>
                    <img src={ffff} alt="" />
                </div>
                <div className='w-[40rem]'>
                    <p className='font-serif font-bold text-5xl capitalize'>quick, legal, affordable</p>
                    <p className='capitalize'>with over 20 different contract templates for everything from NDAs to prenups to freelace work agreements, e-gree legal services accessible and affordable.</p>
                </div>
            </div>

            <p className='font-serif text-center mt-14 font-bold text-4xl'>Contracts for all kinds <span className='flex flex-col'>of life situations</span></p>


            <p className='ml-28 text-2xl font-bold font-serif mt-5'>All you need is business</p>
            <div className='flex justify-center gap-10 items-center mt-5'>
                <div className='border h-auto rounded-md w-96'>
                    <img src={handyman} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        <img src={tool} alt="" className='h-8' />
                        <p className='capitalize text-xl font-bold font-serif'>handyman</p>
                    </footer>
                    <p className='pl-5 capitalize'>for household projects large and small</p>
                    <footer className='flex gap-10 mt-[4.7rem] pl-5'>
                        <p>2 min to create</p>
                        <p>754 signed</p>
                    </footer>
                </div>

                <div className='border h-auto rounded-md w-96'>
                    <img src={vanue} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        <img src={machine} alt="" className='h-8' />
                        <p className='capitalize text-xl font-bold font-serif'>venue</p>
                    </footer>
                    <p className='pl-5 capitalize'>estable and customize entry requirements for your event</p>
                    <footer className='flex gap-10 mt-12 pl-5'>
                        <p>1 min to create</p>
                        <p>2072 signed</p>
                    </footer>
                </div>

                <div className='border h-auto rounded-md w-96'>
                    <img src={freelance} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        <img src={maaaa} alt="" className='h-8' />
                        <p className='capitalize text-xl font-bold font-serif'>freelance</p>
                    </footer>
                    <p className='pl-5 capitalize'>giving your side hustle some get up and go.</p>
                    <footer className='flex gap-10 mt-12 pl-5 '>
                        <p>2 min to create</p>
                        <p>2601 signed</p>
                    </footer>
                </div>

            </div>

            <p className='ml-28 text-2xl font-bold font-serif mt-5'>All you need is family and friends</p>


            <div className='flex justify-center gap-10 items-center mt-5'>
                <div className='border h-auto rounded-md w-96'>
                    <img src={promise} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        {/* <img src={promise} alt="" className='h-4' /> */}
                        <p className='capitalize text-xl font-bold font-serif'>promise</p>
                    </footer>
                    <p className='pl-5 capitalize'>an official to mysell with a signature</p>
                    <footer className='flex gap-10 mt-12 pl-5'>
                        <p>1 min to create</p>
                        <p>59 signed</p>
                    </footer>
                </div>

                <div className='border h-auto rounded-md w-96'>
                    <img src={rental} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        {/* <img src={rental} alt="" className='h-4' /> */}
                        <p className='capitalize text-xl font-bold font-serif'>rental</p>
                    </footer>
                    <p className='pl-5 capitalize'>success is not owned. it's rented</p>
                    <footer className='flex gap-10 mt-12 pl-5'>
                        <p>3 min to create</p>
                        <p>2663 signed</p>
                    </footer>
                </div>

                <div className='border h-auto rounded-md w-96'>
                    <img src={purchase} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        {/* <img src={purchase} alt="" className='h-4' /> */}
                        <p className='capitalize text-xl font-bold font-serif'>purchase and sale</p>
                    </footer>
                    <p className='pl-5 capitalize'>the easy way to buy and sell with peace of mind.</p>
                    <footer className='flex gap-10 mt-12 pl-5 '>
                        <p>3 min to create</p>
                        <p>2066 signed</p>
                    </footer>
                </div>

            </div>

            <p className='ml-28 text-2xl font-bold font-serif mt-5'>All you need is relations</p>


            <div className='flex justify-center gap-10 items-center mt-5'>
                <div className='border h-auto rounded-md w-96'>
                    <img src={date} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        {/* <img src={date} alt="" className='h-4' /> */}
                        <p className='capitalize text-xl font-bold font-serif'>date</p>
                    </footer>
                    <p className='pl-5 capitalize'>ensure your privacy during(or after) the course of a relationship</p>
                    <footer className='flex gap-10 mt-12 pl-5'>
                        <p>4 min to create</p>
                        <p>2663 signed</p>
                    </footer>
                </div>

                <div className='border h-auto rounded-md w-96'>
                    <img src={uncouple} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        {/* <img src={uncouple} alt="" className='h-4' /> */}
                        <p className='capitalize text-xl font-bold font-serif'>uncouple</p>
                    </footer>
                    <p className='pl-5 capitalize'>for couples who wish to set some ground rules for their separation.</p>
                    <footer className='flex gap-10 mt-12 pl-5'>
                        <p>7 min to create</p>
                        <p>2400 signed</p>
                    </footer>
                </div>

                <div className='border h-auto rounded-md w-96'>
                    <img src={prenup} alt="" className='h-40 w-96 rounded-md' />
                    <footer className='flex items-center pl-5'>
                        {/* <img src={prenup} alt="" className='h-4' /> */}
                        <p className='capitalize text-xl font-bold font-serif'>prenup</p>
                    </footer>
                    <p className='pl-5 capitalize'>for future financial and personal assurances before marriage.</p>
                    <footer className='flex gap-10 mt-12 pl-5 '>
                        <p>4 min to create</p>
                        <p>123 signed</p>
                    </footer>
                </div>

            </div>


            <p className='ml-28 text-2xl font-bold font-serif mt-5'>All you need is life</p>

            <div className='flex ml-32 gap-[30rem] items-center'>
                <div className='flex flex-col gap-6'>
                    <footer className='flex gap-10 text-xl font-bold'>
                        <p>Allowance</p>
                        <p>Consent</p>
                        <p>Event</p>
                        <p>Idea</p>
                    </footer>
                    <footer className='flex gap-10 text-xl font-bold'>
                        <p>Prenup</p>
                        <p>Purchase and Sale</p>
                        <p>Refer</p>
                    </footer>
                    <footer className='flex gap-10 text-xl font-bold'>
                        <p>Secret</p>
                        <p>Sexting</p>
                    </footer>
                </div>
                <div><img src={imagess} alt="" className='h-60 w-[20rem]' /></div>
            </div>

            <div className='flex flex-col gap-5 items-center'>
                <p className='capitalize font-bold text-3xl'>protect it with e-gree</p>
                <p className='capitalize text-green-500 font-bold'>view all 25 contracts</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-16 bg-sky-800 h-80'>
                <p className='font-bold text-3xl capitalize text-white'>sign an agreement</p>
                <p className='font-bold text-3xl text-white'>in e-gree-save tree!</p>
                <p className='w-[25rem] text-white'>at e-gree we're doing our part by bringing legal services to the digital world. with our contract trmplates, we're saving time and money. and trees, of course</p>
                <button className='items-center border bg-emerald-600 h-12 mt-5 rounded-lg hover:bg-emerald-500 text-white text-xl w-52'>Sign now</button>
            </div>

            <p className='ml-20 text-2xl font-bold font-serif mt-7'>Meanwhile in our blog</p>
            <p className='ml-20 font-serif'>Our blog explains you how to use our app in all kinds of life situations.</p>
            <div className='flex justify-center items-center gap-10'>
                <div className='bg-red-50 rounded-md'>
                    <img src={meanwhile} alt="" className='h-96 w-[35rem] rounded-md' />
                    <p className='font-bold font-serif text-2xl pl-5'>Who do you need a handyman contract</p>
                    <p className='w-96 pl-5'>There is a need of having an agreement abvout thr works that will be provided and the payment that will be received.</p>
                    <div className='flex justify-between mt-10 pl-5 pr-5'>
                        <p>5 jan 2022, min read</p>
                        <p>10 likes  0 comments</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <footer className='border rounded-md h-[16.4rem]'>
                            <img src={online} alt="" className='h-40 w-full rounded-md' />
                            <p className='font-bold text-xl p-4'>How to sell your used things online</p>
                            <div className='flex justify-around mt-4'>
                                <p>3 min read</p>
                                <p> like 5   commant 0</p>
                            </div>
                        </footer>
                        <footer className='border rounded-md h-[16.4rem]'>
                            <img src={freelances} alt="" className='h-40 w-full rounded-md' />
                            <p className='font-bold text-xl p-4'>How to sell your used things online</p>
                            <div className='flex justify-around mt-4'>
                                <p>3 min read</p>
                                <p> like 5   commant 0</p>
                            </div>
                        </footer>
                    </div>
                    <div className='flex gap-5'>
                        <footer className='border rounded-md h-[16.4rem]'>
                            <img src={wish} alt="" className='h-40 w-full rounded-md' />
                            <p className='font-bold text-xl p-4'>How to sell your used things online</p>
                            <div className='flex justify-around mt-4'>
                                <p>3 min read</p>
                                <p> like 5   commant 0</p>
                            </div>
                        </footer>
                        <footer className='border h-[16.4rem] rounded-md'>
                            <img src={prenups} alt="" className='h-40 w-full rounded-md' />
                            <p className='font-bold text-xl p-4'>How to sell your used things online</p>
                            <div className='flex justify-around mt-4'>
                                <p>3 min read</p>
                                <p> like 5   commant 0</p>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>


            <p className='text-center mt-5 text-green-600 text-2xl font-bold'>Read our blog</p>


            <p className='font-bold mt-10 text-3xl ml-20 font-serif'>e-gree on the media</p>
            <div className='flex gap-10 ml-20 mt-6'>
                <footer className='h-40 bg-slate-200 w-80 rounded-lg border p-5'>
                    <p className='text-sky-700 font-bold text-2xl'>Forbes</p>
                    <p>e-gree --the company that will change the world.</p>
                </footer>
                <footer className='h-40 bg-slate-200 w-80 rounded-lg border p-5'>
                    <p className='text-pink-700 font-bold text-2xl'>cheddar</p>
                    <p>e-gree app creates leagal contracts for anyone with a smartphone.</p>
                </footer>
                <footer className='h-40 bg-slate-200 w-80 rounded-lg border p-5'>
                    <p className='text-sky-700 font-bold text-2xl'>METRO</p>
                    <p>New app gives you leagal protection when you send nudes.</p>
                </footer>
                <footer className='h-40 bg-slate-200 w-80 rounded-lg border p-5'>
                    <p className='text-sky-700 font-bold text-2xl italic'>MAC<span className='text-red-700'>TECH</span></p>
                    <p>e-gree, a new app that allows anyone builde own contact with their term.</p>
                </footer>
            </div>

            <p className='ml-20 font-serif mt-10 text-2xl font-bold'>Reviews from App Store and Google Play</p>

            <div className='flex gap-10 ml-20 mt-6'>
                <footer className='h-80 bg-sky-700 w-80 rounded-lg border p-5'>
                    <p className='text-white font-bold text-5xl'>4.8</p>
                    <p className='text-white'>is the average e-gree app rating on App Store and Google Play</p>
                </footer>
                <footer className='h-80 bg-slate-200 w-80 rounded-lg border p-5'>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={4} readOnly />
                    <p>It's the great application to a lot of problem and drama</p>
                </footer>
                <footer className='h-80 bg-slate-200 w-80 rounded-lg border p-5'>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={5} readOnly />
                    <p>e-gree dolor sit amet consectetur adipisicing elit. Alias, ipsa libero corporis voluptatem qui iure eligendi cumque beatae doloremque modi dignissimos error vel quae quidem velit aut, earum natus. Consectetur minus pariatur, impedit, nihil perspiciatis commodi inventore nam veniam quaerat porro quia accusamus soluta ut ex blanditiis. Ut, qui culpa!</p>
                </footer>
                <footer className='h-80 bg-slate-200 w-80 rounded-lg border p-5'>
                    <p className='text-sky-700 font-bold text-2xl italic'>MAC<span className='text-red-700'>TECH</span></p>
                    <p>e-gree, a new app that allows anyone builde own contact with their term.</p>
                </footer>
            </div>
            <p className='text-center mt-5 text-green-600 text-xl font-bold'>All reviews</p>


            <div className='flex justify-evenly items-center mt-10'>
                <footer>
                    <img src={fffffff} alt="" className='h-[30rem] w-[28rem]' />
                </footer>
                <footer>
                    <p className='font-bold font-serif text-4xl'>Now and forever</p>
                    <p className='w-[21rem] mt-2 font-serif'>Frist 3 created contracts are <span className='text-emerald-500'>free</span> and you can use it <span className='text-emerald-500'>forever</span>. All incoming contracts are always free</p>
                    <img src={apps} alt="" className='rounded-md mt-10 h-12' />
                </footer>
            </div>

            <div className='text-center h-72 pt-28 text-white font-serif font-bold text-3xl mt-5 bg-emerald-500'>
                <p>Let's agree</p>
                <p>to e-gree</p>
            </div>

            <div className='flex justify-evenly items-center'>
                <footer>
                    <p>Terms and Conditions</p>
                    <p>Our Team</p>
                    <p>Contact us</p>
                    <p>EDR Outline</p>
                    <p>EDR Rules</p>
                </footer>
                <div>
                    <footer className='flex gap-5 mt-5'>
                        <img src={'https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg'} alt="" className='h-10' />
                        <img src={'https://img.freepik.com/premium-vector/instagram-app-icon-social-media-logo-vector-illustration_277909-403.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705881600&semt=ais'} alt="" className='h-10' />
                        <img src={'https://store-images.s-microsoft.com/image/apps.4784.13634052595610511.c45457c9-b4af-46b0-8e61-8d7c0aec3f56.3d483847-81a6-4078-8f83-a35c5c38ee92?h=464'} alt="" className='h-10' />
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png'} alt="" className='h-10' />
                        <img src={'https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais'} alt="" className='h-10' />
                    </footer>
                    <footer>
                        <img src={pppp} alt="" className='h-40' />
                    </footer>
                </div>
                <footer>
                    <p>© 2020–2022 e-gree</p>
                </footer>
            </div>

        </>
    )
}

export default MainHead