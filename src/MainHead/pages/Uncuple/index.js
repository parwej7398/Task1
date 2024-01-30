import React from 'react'
import { Link } from 'react-router-dom'
import uncuople from '../../../image/Uncouple.png'
import pppp from '../../../image/pppp.png'
import apps from '../../../image/app.png'
import fffffff from '../../../image/ffffff.png'


const Uncouple = () => {
    return (
        <div>
            <div className='mx-28 mt-2'>
                <p className='text-6xl font-extrabold text-emerald-500 font-serif cursor-pointer'>e.gree</p>
                <p className='flex list-none gap-7 text-l capitalize mt-2 cursor-pointer'>
                    <Link to='/contracts' className={window.location.pathname === '/contracts' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>contacts</li>
                    </Link>
                    <Link to='/faq' className={window.location.pathname === '/faq' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>FAQ</li>
                    </Link>
                    <Link to='/team' className={window.location.pathname === '/faq' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>team</li>
                    </Link>
                    <Link to='/contact_us' className={window.location.pathname === '/faq' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>contact us</li>
                    </Link>
                    <Link to='/blog' className={window.location.pathname === '/blog' ? "!underline" : ""}>
                        <li className='hover:text-green-400'>blog</li>
                    </Link>
                </p>
            </div>
            <div>
                <img src={uncuople} alt="" className='w-full h-[30rem] mt-5' />
            </div>
            <div className='flex gap-10 mt-5'>
                <div className='w-[50%] ml-24'>
                    <p className='text-7xl font-bold font-serif'>
                        Uncouple</p>
                    <p className='text-xl pt-4'>This e-greement is for married or common-law couples
                        who wish to separate either on a trial basis or as a precursor to divorce. This e-greement
                        helps couples set some ground rules for their separation,
                        divide assets, determine custody and provide for spousal and child support.</p>
                </div>
                <div className='w-[50%] mt-5 pl-10 text-center items-center justify-center'>
                    <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-uncouple.svg'} alt="" className='pl-64' />
                    <Link to='https://apps.apple.com/us/app/e-gree-contracts-documents/id1517425693?shortlink=fc7688c4&c=MainPage_context&pid=MainPage_context&source_caller=ui'>
                        <button className='border bg-blue-400 text-2xl text-white h-12 rounded-3xl w-72 mt-5'>Create contact</button>
                    </Link>
                    <header className='flex flex-col mt-5'>
                        <span>2400 uncouple contracts</span>
                        <span>have already signed</span>
                    </header>
                </div>
            </div>

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

            <div className='text-center h-72 pt-28 text-white font-serif font-bold text-3xl mt-5 ' style={{ backgroundImage: `url('https://wallpapercave.com/wp/wp2987144.jpg')` }}>
                <p>Let's agree</p>
                <p>to e-gree</p>
            </div>

            <div className='flex h-[25rem] justify-evenly items-center bg-slate-100'>
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
                        <img src={pppp} alt="" className='h-48' />
                    </footer>
                </div>
                <footer>
                    <p>© 2020–2022 e-gree</p>
                </footer>
            </div>

        </div>
    )
}

export default Uncouple