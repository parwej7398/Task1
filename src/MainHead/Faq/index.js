import React from 'react'
import { Link } from 'react-router-dom'
import fffffff from '../../image/ffffff.png'
import apps from '../../image/app.png'
import pppp from '../../image/pppp.png'

const FAQ = () => {
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
            <hr />
            <div className="flex justify-center gap-80">
                <div className='w-[40rem] mt-10'>
                    <div>
                        <p className="text-4xl font-bold font-serif  ">
                            Frequently Asked Questions
                        </p>
                        <p className="text-green-500 text-xl font-bold ">How does the app work?</p>
                        <p className="items-center text-xl">
                            You need to head into the app, pick the category that suits you,
                            adjust a few details, and get the other person (or people) to sign
                            the contract. All you need is your phone and internet connection.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">
                            How many types of contracts do you have?
                        </p>
                        <p className="items-center text-xl">
                            There are more than 20 different types of e-greements you can make.
                            And we are regularly releasing new ones.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">
                            Would these contracts hold up in court?
                        </p>
                        <p className="items-center text-xl">
                            Yes! These contracts contain all of the necessary elements to ensure
                            that it will be accepted in court and declare valid.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">
                            How can I sign a contract if I received a link to e-gree?
                        </p>
                        <p className="items-center text-xl">
                            When you receive a link to e-gree, simply open the link and it will
                            bring you to the e-gree registration page. Follow the instructions to
                            download the app and register with e-gree. Once e-gree is installed on
                            your smart device, the contract will open and you will be able to
                            review it, make any proposed changes to send back to the sender, and
                            sign it electronically.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">How do I cancel a contract?</p>
                        <p className="items-center text-xl">
                            Once a contract is signed, it becomes a legally binding contract and
                            you are obligated to perform under the terms of the contract. You can
                            only cancel a contract under very limited circumstances. The most
                            common being if all parties jointly agree to cancel the contract.
                            Also, if a contract has been entered into based on misrepresentation
                            or mistake, you may be able to bring an action to cancel the contract.
                            Additionally, if the other party has breached the contract, you may
                            bring an action against the other party for breach or to cancel the
                            contract.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">
                            How serious is a breach of contract?
                        </p>
                        <p className="items-center text-xl">
                            It is serious. A contract represents a legally binding obligation. If
                            you do not perform the obligations set forth in the contract that you
                            signed then you have breached the contract. If that occurs, then the
                            other party can bring a legal action against you for any damages that
                            party has suffered as a result of your breach.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">
                            How long does a contract last? Does it have an expiration date?
                        </p>
                        <p className="items-center text-xl">
                            Each contract will have a term. This term may be expressly stated in
                            the contract. Or, it may be defined by the obligations to be performed
                            by a party to the contract. For example, the contract will end when
                            each party has fully performed the obligations set forth in the
                            contract. Also, some contracts may have no expiration date. For
                            example, a non-disclosure agreement that requires a person to forever
                            keep sensitive information secret.
                        </p>
                    </div>
                    <div>
                        <p className="text-green-500 text-xl font-bold">
                            How many people can sign one contract?
                        </p>
                        <p className="items-center text-xl">
                            Contracts are typically between two people. Sometimes, a contract will
                            have a “co-signor”. This is a third-person that has agreed to be
                            responsible for the legal obligations of a party to a contract and is
                            usually called upon to perform those obligations if and when the other
                            party fails to perform. Also, a form-type of contract can be signed by
                            several people. For example, a large group of people attending an
                            event may be asked to sign the same waiver form. By signing such a
                            contract, each person is agreeing to the terms set forth in the
                            contract.
                        </p>
                    </div>
                </div>


                <div>
                    <img src="https://e-gree.app/wp-content/themes/eGree/images/faq_phone_protect.svg" alt="" className='mt-5' />
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

            <div className='flex h-[25rem] justify-evenly items-center  bg-slate-100'>
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
                        <img src={pppp} alt="" className='h-52' />
                    </footer>
                </div>
                <footer>
                    <p>© 2020–2022 e-gree</p>
                </footer>
            </div>




        </>
    )
}

export default FAQ