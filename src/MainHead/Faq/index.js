import React from 'react'
import { Link } from 'react-router-dom'

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
            <div className="flex justify-center gap-52">
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
                    <img src="https://e-gree.app/wp-content/themes/eGree/images/faq_phone_protect.svg" alt="" />
                </div>
            </div>






        </>
    )
}

export default FAQ