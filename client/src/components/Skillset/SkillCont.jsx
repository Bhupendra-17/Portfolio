import React from 'react'
import Skillset from './temp'
import Cpp from './c++.png'
import Java from './java.png'
import Html from './html.png'
import Css from './css.png'
import Reactjs from './react.png'
import Tailwind from './tailwind.png'
import JavaScript from './js.png'
import Github from './github.png'
import MySql from './mysql.png'

function temp2() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4 md:gap-0'>
            <Skillset item={Cpp} title="C++" desc="Intermediate"
            />
            <Skillset item={Java} title="Java" desc="Intermediate"
            />
            <Skillset item={JavaScript} title="JavaScript" desc="Intermediate"
            />
            <Skillset item={Reactjs} title="React Js" desc="Intermediate"
            />
            <Skillset item={Tailwind} title="Tailwind CSS" desc="Intermediate"
            />
            <Skillset item={Html} title="HTML" desc="Intermediate"
            />
            <Skillset item={Css} title="CSS" desc="Intermediate"
            />
            <Skillset item={MySql} title="MySQL" desc="Intermediate"
            />
            <Skillset item={Github} title="GitHub" desc="Begginer"
            />
        </div>
    )
}
export default temp2