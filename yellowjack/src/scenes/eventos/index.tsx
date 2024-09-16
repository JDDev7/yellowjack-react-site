import ActionButton from '@/components/ActionButton';
import { appearFromBottom, appearFromTop } from '@/shared/animations';
import { SelectedPage } from '@/shared/types'
import YellowJackAddressView from '@/views/YellowJackAddressView';
import { motion } from 'framer-motion';
import { useState } from 'react';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

type View = 'default' | 'yellowJackAddress';

const Eventos = ({ setSelectedPage }: Props) => {
  const [currentView, setCurrentView] = useState<View>('default');

  return (
    <section id="eventos">
      {currentView === 'default' && (
        <motion.div className='eventos-container' onViewportEnter={() => setSelectedPage(SelectedPage.OurEvents)}>
          {/* Parte Izquierda */}
          <motion.div {...appearFromTop} className='eventos-imgs'>
              <img src="src/assets/eventos.webp" alt="imagen-eventos" />
          </motion.div>
          {/* Parte Derecha */}
          <motion.div {...appearFromBottom} className='eventos-text'>
              <h2 className='eventos-title'>
                  <span className='span-text-color'>Nuestros</span> Eventos      
              </h2>
              <p className='eventos-description'>
                  Nuestros eventos siempre están pensados para que las personas se lo pasen en grande. Desde rutas moteras, triatlones, concursos de pulsos... Nunca te aburrirás. Apoyados por el resto de locales de la ciudad, nos encargamos de que la gente que acude esté cuidada. Copas, refrescos, comida, todo lo que puedas necesitar. Siempre solemos tener algun premio que sortear o utilizar en nuestros concursos,¡Desde motos, premios en metalico, y más!
              </p>
              <ActionButton children="¡Ven al Yellow Jack!" onViewChange={() => setCurrentView('yellowJackAddress')}></ActionButton>
          </motion.div>
        </motion.div>
      )}
      {currentView === 'yellowJackAddress' && (
        <YellowJackAddressView />
      )}
    </section>
  )
}

export default Eventos