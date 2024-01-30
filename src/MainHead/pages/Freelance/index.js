import React from 'react'
import { Link } from 'react-router-dom'
import freelance from '../../../image/Freelance.png'
import pppp from '../../../image/pppp.png'
import fffffff from '../../../image/ffffff.png'
import apps from '../../../image/app.png'



const Freelance = () => {
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
                <img src={freelance} alt="" className='w-full h-96' />
            </div>
            <div className='flex gap-10 mt-5'>
                <div className='w-[50%] ml-24'>
                    <p className='text-7xl font-bold font-serif'> Freelance</p>
                    <p className='text-xl pt-4'>If you provide creative contributions or other services on a project or short-term basis – or
                        if you hire such contributors – then use this e-greement to secure your rights. This e-greement is designed for
                        a wide variety of projects and work-for-hire situations and contains the necessary elements to ensure that you will
                        be paid for your work and that the rights to your work and the scope of its use will be properly assigned. So, whether it’s Blog
                        Posts, Freelance Writing, Editorial Contributions, Content Creation,
                        or consulting services, whenever and wherever you work for hire, this e-greement works with you.</p>
                </div>
                <div className='w-[50%] mt-5 pl-10 text-center items-center justify-center'>
                    <img src={'https://e-gree.app/wp-content/themes/eGree/images/icon-freelance.svg'} alt="" className='pl-64 h-40' />
                    <button className='border bg-blue-400 text-2xl text-white h-12 rounded-3xl w-72 mt-5'>Create contact</button>
                    <header className='flex flex-col mt-5'>
                        <span>2601 freelance contracts</span>
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

export default Freelance