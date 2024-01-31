import React from "react";
import { Link } from "react-router-dom";
import blogImages from '../../assest/BlogImage/blog.png'
import blog from '../../assest/BlogImage/shrat.png'
import blogs from '../../assest/BlogImage/tab.png'
import blogimg from '../../assest/BlogImage/begin.png'
import blogim from '../../assest/BlogImage/partner.png'
import blogg from '../../assest/BlogImage/girl.png'
import blogpa from '../../assest/BlogImage/party.png'
import blogcop from '../../assest/BlogImage/coulpe.png'
import blogtem from '../../assest/BlogImage/tab.png'
import blognews from '../../assest/BlogImage/new.png'
import blogphot from '../../assest/BlogImage/photog.png'
import blogcoc from '../../assest/BlogImage/coc.jpg'
import fffffff from '../../image/ffffff.png'
import apps from '../../image/app.png'
import ppppp from '../../image/pppp.png'

const Blog = () => {
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
            <div>
                <div className=" justify-center items-center mt-2">
                    <p className="ml-28 text-3xl font-bold font-serif mt-5">
                        Highlights & Featured
                    </p>
                    <p className="ml-28 text-1xl  font-serif">
                        Contract creator app | Simple and Secure Agreements | Free legal
                        forms → Blog
                    </p>
                    <div className="flex gap-5">
                        <img src={blogImages} alt="" className="mt-2 mx-24 w-[80rem]" />
                    </div>
                </div>


                <div className="grid grid-cols-3 justify-center ml-20 mr-5 p-5 gap-2">
                    <div className=" border h-auto rounded-md  w-96">
                        <img src={blog} alt="" />
                        <p className="text-2xl p-2 font-bold font-serif mt-5">
                            How to sell your used things online
                        </p>
                        <p className="p-2">
                            Do you have a lot of stuff occupying your home space and
                            collecting dust? on the tidy-up train and
                            get rid of the things that can find a new owner who will actually
                            use it? Junk for you can be someone’s treasure.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md  w-96">
                        <img src={blogs} alt="" />
                        <p className="text-2xl p-2 font-bold font-serif mt-5">
                            How to set your freelance rate?
                        </p>
                        <p className="p-2">
                            As a freelancer you have the freedom to set your rates by
                            yourself, which actually makes your potential income uncapped.
                            However, the luxury of choices makes a lot of beginners stuck with
                            the question of pricing.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md  w-96">
                        <img src={blogimg} alt="" />
                        <p className="text-2xl p-2 font-bold font-serif mt-5">
                            The right way to make a wish
                        </p>
                        <p className="p-2">
                            Traditionally, New Year’s Day is the best time to start a new
                            life. Are you keen to reinvent yourself in the new year? Do you
                            want to get rid of bad habits or pick up new ones? Maybe these
                            resolutions.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md mt-5 w-96">
                        <img src={blogim} alt="" />
                        <p className="text-2xl p-2 font-bold font-serif mt-5">
                            Who needs a prenup contract
                        </p>
                        <p className="p-2">
                            When two people get married, they’re not just uniting their lives,
                            bodies, and souls but also joining their financial assets and
                            responsibilities. Surely, it’s a terribly unromantic fact, and
                            probably the last thing anyone who just got engaged wants to talk
                            about.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md mt-5 w-96">
                        <img src={blogg} alt="" />
                        <p className=" text-2xl p-2 font-bold font-serif mt-5">
                            How to protect yourself when renting an apartment
                        </p>
                        <p className="p-2">
                            Renting an apartment or other property seems like such a common
                            thing to do. Most of us have ever rented or are renting out one,
                            but yet this simple task seems quite tricky sometimes. When
                            renting out a property, one should always consider the safety of
                            the tenant.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md mt-5 w-96">
                        <img src={blogpa} alt="" />
                        <p className=" text-2xl p-2 font-bold font-serif mt-5">
                            7 rules to follow for a successful event
                        </p>
                        <p className="p-2">
                            Making an event is a complex task to organize. You have to manage
                            a lot of different aspects like production, catering, technical
                            issues and the eternity of others. Usually, all the tasks of the
                            preparation stage are done by professionally qualified parties,
                            like catering companies or technical engineers.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md mt-5 w-96">
                        <img src={blogcop} alt="" className="h-44" />
                        <p className=" text-2xl p-2 font-bold font-serif mt-5">
                            Why it is important to secure your data and how to do it
                        </p>
                        <p className="p-2">
                            Having our files securely stored in a cloud seems to have made our
                            lives way easier. But what about when you need to process your
                            information.
                        </p>
                    </div>
                    <div className=" border h-auto rounded-md mt-5 w-96">
                        <img src={blogtem} alt="" />
                        <p className="p-2 text-2xl font-bold font-serif mt-5">
                            How to use the Freelance e-greement
                        </p>
                        <p className="p-2">
                            As a freelancer, you’ve got a lot on your plate. The last thing
                            you want to think about is the legalities of your business
                            relationships.
                        </p>
                    </div>
                </div>



                <div className="flex ml-20 gap-4 p-4 mt-5 items-center text-center">
                    <div className="flex border w-[66vh] h-[25rem] flex-col items-center relative gap-5">
                        <img src={blogcoc} alt="" className="rounded-full size-32 absolute -top-10"
                        />
                        <div>
                            <img src={blognews} alt="" className="h-44" />
                            <p className=" text-3xl font-bold font-serif mt-5">
                                Enforcement with a Capital E
                            </p>
                            <p className="p-2">
                                “Get it in writing.” It is time-honored advice and e-gree
                                certainly subscribes to it. Indeed, e-gree exists and was
                                founded.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col border w-[66vh] h-[25rem] items-center relative mt-8">
                        <img
                            src={blogcoc} alt="" className="rounded-full size-32 absolute -top-10" />
                        <div className="justify-center items-center">
                            <img src={blogphot} alt="" className="" />
                            <p className=" text-3xl font-bold font-serif mt-5">
                                Your legal rights as content
                            </p>
                            <p className="p-2">
                                Life, Liberty and Property: Three natural human rights that
                                centuries of philosophizing have concluded belong to each and
                                every one of us.
                            </p>
                        </div>
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
};

export default Blog;
