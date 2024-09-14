import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Eventos = ({ setSelectedPage }: Props) => {
  return (
    <section id="eventos">

      <motion.div className='eventos-container' onViewportEnter={() => setSelectedPage(SelectedPage.OurEvents)}>
        {/* Parte Izquierda */}
        <motion.div className='eventos-imgs'>
            <img src="src/assets/eventos.webp" alt="imagen-eventos" />
        </motion.div>
        {/* Parte Derecha */}
        <motion.div className='eventos-text'>
            <h2 className='eventos-title'>
                <span className='span-text-color'>Nuestros</span> Eventos      
            </h2>
            <p className='eventos-description'>
                Nuestros eventos siempre están pensados para que las personas se lo pasen en grande. Desde rutas moteras, triatlones, concursos de pulsos... Nunca te aburrirás. Apoyados por el resto de locales de la ciudad, nos encargamos de que la gente que acude esté cuidada. Copas, refrescos, comida, todo lo que puedas necesitar. Siempre solemos tener algun premio que sortear o utilizar en nuestros concursos,¡Desde motos, premios en metalico, y más!
            </p>
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Eventos