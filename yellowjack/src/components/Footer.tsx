import React from 'react'
import Instagram from '@/assets/square-instagram-brands-solid.svg'
import Twitter from '@/assets/square-twitter-brands-solid.svg'
import LinkedIn from '@/assets/linkedin-brands-solid.svg'
import Github from '@/assets/square-github-brands-solid.svg'

const Footer = () => {
  return (
    <footer>
        <div className='footer-parent-container'>
            <div className='footer-container'>
            <div className='left-side-footer'>
                <h3>Nuestras Redes</h3>
                <div className='social-media'>
                <img src={Instagram} alt="instagram-logo" />
                <p>@YellowJack</p>
                </div>
                <div className='social-media'>
                <img src={Twitter} alt="twitter-logo" />
                <p>@YellowJack</p>
                </div>
            </div>

            <div className="middle-footer">
                <p>Trabaja con nosotros</p>
                <p>Política de privacidad</p>
                <p>Términos de uso</p>

            </div>

            <div className='right-side-footer'>
            <h3>Nuestras Redes</h3>
                <div className='social-media'>
                <img src={Github} alt="github-logo" />
                <a href="http://github.com/JDDev7"  target='_blank' rel="noreferrer">Mi Github</a>
                <p> / </p>
                <a href="https://github.com/JDDev7/yellowjack-react-site" target='_blank' rel="noreferrer">Github del proyecto</a>
                </div>
                <div className='social-media'>
                <img src={LinkedIn} alt="linkedin-logo" />
                <a href="https://www.linkedin.com/in/jdmorenopulido/"  target='_blank' rel="noreferrer">LinkedIn</a>
                </div>
                <div className='social-media'>
                <img src={Twitter} alt="twitter-logo" />
                <a href="https://www.twitter.com/JDdev_"  target='_blank' rel="noreferrer">Twitter</a>
                </div>
            </div>
            
        </div>
        <div className='footer-centered'>
            <p>Copyright &copy; JDDev {new Date().getFullYear()}. La marca YellowJack pertenece a Rockstar Games. Diseño y desarrollo de la web por José Diego "JDDev" Moreno.</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer