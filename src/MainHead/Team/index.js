import React from 'react'
import { Link } from 'react-router-dom'
import Keith from '../../image_team/IMG-20240128-WA0002.jpg'
import Araz from '../../image_team/IMG-20240128-WA0003.jpg'
import Ilya from '../../image_team/IMG-20240128-WA0004.jpg'
import Jessica from '../../image_team/IMG-20240128-WA0006.jpg'
import Howard from '../../image_team/IMG-20240128-WA0007.jpg'
import Timon from '../../image_team/IMG-20240128-WA0008.jpg'
import Natalia from '../../image_team/IMG-20240128-WA0005.jpg'
import Matthew from '../../image_team/IMG-20240128-WA0009.jpg'
import fffffff from '../../image/ffffff.png'
import apps from '../../image/app.png'
import pppp from '../../image/pppp.png'

const Team = () => {
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
            </div>



            <div className="mx-[250px]">
                <div className="flex flex-col">
                    <p className="text-3xl italic mt-9">The e-gree team</p>
                    <div className="flex mt-10">
                        <img src={Keith} alt="" className="w-44 h-44 " />
                        <div className=" flex flex-col justify-center mx-10">
                            <p className="text-4xl text-green-500">Keith Fraser </p>
                            <p className="text-2xl">CEO</p>
                            <p className="text-[20.5px] mt-5">
                                A lawyer who brings 20 years of legal practice experience to
                                e-gree. Based in California, Keith devotes his practice to
                                representing individuals, entrepreneurs, small businesses and
                                start-ups worldwide with the broad range of legal issues his
                                clients face. These include intellectual property business
                                formation, trade secrets, purchasing and investment, licensing,
                                and rights of privacy and publicity. Keith Fraser also has an
                                undergraduate degree in Physics that has allowed him to fully
                                embrace and incorporate technology into the practice of law. Early
                                on in his career, Keith recognized the efficiencies provided by
                                technology and how they can be utilized to provide access to the
                                legal system to those that need it.
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className="flex mt-10">
                    <img src={Araz} alt="" className="w-44 h-44" />
                    <div className="flex flex-col justify-center mx-10">
                        <p className="text-green-500 text-4xl">Araz Mamet </p>
                        <p className="text-2xl">CCO</p>
                        <p className="text-[21px] mt-5">
                            A serial entrepreneur and tech expert with over 25 years of
                            experience in creating successful businesses. His company created VR
                            Box, which is one of the most popular and best-selling VR headsets
                            in the world. When he found himself defending his IP against
                            counterfeit manufacturers, he became aware of just how ineffective
                            the justice system was in these areas. His interest in the legal
                            system, as well as his vision and ambition to find a way to make it
                            more accessible, affordable and effective for all sparked the
                            creation of e-gree.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className=" flex  mt-10 ">
                    <img src={Ilya} alt="" className="w-44 h-44" />
                    <div className="flex flex-col justify-center mx-10">
                        <p className="text-green-500 text-4xl">Ilya Flaks </p>
                        <p className="text-2xl">CVO</p>
                        <p className="text-[21px] mt-5">
                            A serial entrepreneur with more than 18 years of experience in tech
                            development and e-business. He is the VP of the VR/AR department at
                            LANIT and the founder of FIBRUM (currently one of the largest AV/VR
                            companies in the world). He also created IMMO GAMES, a company with
                            a user base of millions worldwide. Ilya's primary focus is on
                            innovating with purpose, changing and improving lives. While working
                            on the development of e-gree, Flaks also created a system that
                            reduces the risk of infection by COVID-19 currently faced by
                            doctors. This system is now up and running in 30 clinics and will
                            soon expand further.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className="flex flex-col  mt-10">
                    {/* <p className="text-4xl italic">e-gree advisors</p> */}
                    <div className="flex">
                        <img src={Natalia} alt="" className="w-44 h-44" />
                        <div className="flex flex-col justify-center mx-10">
                            <p className="text-green-500 text-4xl">Natalia Vodianova</p>
                            <p className="text-[21px] mt-5">
                                Natalia Vodianova is a supermodel, philanthropist, and social
                                media advocate. As a model, she has worked with big fashion
                                houses, such as Yves Saint Laurent, Gucci, and Chanel. In 2004,
                                Natalia founded the Naked Heart Foundation to create playgrounds
                                for kids in impoverished areas, supporting families of children
                                with disabilities. The organization has built 170 playgrounds and
                                raised more than €40 million for charity. Now, Natalia Vodianova
                                supports companies that plan to change the world. She has invested
                                in 17 startups.
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className="flex mt-10">
                    <img src={Jessica} alt="" className="w-44 h-44" />
                    <div className="flex flex-col mx-10">
                        <p className="text-green-500 text-4xl">Jessica Kahawaty</p>
                        <p className="text-[21px] mt-5">
                            An Australian-Lebanese model, philanthropist, and former TV host, as
                            well as Miss World Australia 2012. As a model, she has filmed
                            commercials for many famous brands like Maybelline Cosmetics India
                            and Lexus Australia. She currently works with UNICEF and helps
                            startups through her investment and entrepreneurial work. She also
                            has a Bachelor of Law and Finance.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className="flex mt-10">
                    <img src={Howard} alt="" className="w-44 h-44" />
                    <div className="flex flex-col mx-10">
                        <p className="text-green-500 text-4xl">B. Howard</p>
                        <p className="text-[21px] mt-5">
                            An American singer, record producer, and songwriter. He has
                            collaborated with artists like Ne-Yo, Kevin Lytle, Brook Valentine,
                            Chris Brown, Trey Songz, Dru Hill, Marques Houston, Lupe Fiasco,
                            Vanessa Hudgens, and many others. In 2016, Howard's single, “Don't
                            Say You Love Me”, hit number 11 on Billboard's Top Dance charts.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className="flex mt-10">
                    <img src={Timon} alt="" className="w-44 h-44" />
                    <div className="flex flex-col mx-10">
                        <p className="text-green-500 text-4xl">Timon Afinsky</p>
                        <p className="text-[21px] mt-5">
                            A London-based digital media and communications professional. For
                            over 12 years, he has worked as a Media Director and PR Director and
                            helped organizations within the UK and CEEMEA to create tangible
                            impact. He believes in the power of digital and social media for
                            social good.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />

                <div className="flex mt-10">
                    <img src={Matthew} alt="" className="w-44 h-44" />
                    <div className="flex flex-col mx-10">
                        <p className="text-green-500 text-4xl">Matthew Freud</p>
                        <p className="text-[21px] mt-5">
                            Сhairman of Freud Communications, one of the largest UK PR companies
                            and the most influential PR professional in the UK. Нe started
                            career as Press Officer for RCA records before setting up his own PR
                            company. Freud Communications represents celebrity clients including
                            Madonna, Guy Ritchie, Chris Evans, and Geri Halliwell as well as the
                            multinational businesses BT, Nike, and Pepsi. According to the
                            Sunday Times Rich List in 2020, Freud is worth an estimated £170
                            million.
                        </p>
                    </div>
                </div>
                <br /><br /><br />
                <hr />
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
                        <img src={pppp} alt="" className='h-44' />
                    </footer>
                </div>
                <footer>
                    <p>© 2020–2022 e-gree</p>
                </footer>
            </div>

        </>
    )
}

export default Team