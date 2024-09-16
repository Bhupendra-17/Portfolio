import React from 'react'
import Items from './Items'

function temp() {
    return (
        <div className='absolute top-0 z-50 bg-sky-950 text-white shadow-md text-xl w-full overflow-hidden'>
            <div className='flex justify-end lg:mr-10 '>
                <Items title="Home" link="/"/>
                <Items title="Project" link="/project"/>
                <Items title="Skills" link="/skills"/>
            </div>

        </div>
    )
}

export default temp