import React from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {
    return (
        <div>
            <div className='text-center mt-2'>
                <p className='text-6xl font-extrabold text-emerald-500 font-serif cursor-pointer'>e.gree</p>
                <p className='flex list-none gap-7 text-l justify-center capitalize mt-2 cursor-pointer'>
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




        </div>
    )
}

export default Sign