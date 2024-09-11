import React from 'react'
// import useMediaQuery from '@/hooks/useMediaQuery';
import { appearFromLeft, appearFromRight } from '@/shared/animations';
import logo from '@/assets/logo.webp'
import { SelectedPage } from '@/shared/types';
import header from '@/assets/header.webp'
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Home = ({ setSelectedPage }: Props) => {
 
    return (
    <section id="inicio" className='home-section' >
        <motion.div className='hero-container' onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            <motion.div {...appearFromLeft} className="left-side">
                <img src={logo} alt="logo-hero-section" className='logo-hero'/>
                <div className='blackboard'>
                <div className='title-container'>
                <h1><span className='span-text-color'>Prueba</span> nuestro chuletón de 1kg</h1>
                </div>
                <div className="hero-text-container">
                <p>La octava maravilla de Sandy Shores. Un plato que no podrás encontrar en ninguna otra parte de la isla.
                    Hecho al punto que te guste, con salsa, especias de la casa y guarnición a elección.</p>
                </div>
                </div>
            </motion.div>

            <motion.div className="right-side" {...appearFromRight}>
                <img src={header} alt="chuleton-header" />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Home