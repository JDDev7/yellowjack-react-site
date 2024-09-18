import React, { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/solid'
import YellowJackMap from '@/assets/map.webp'
import ActionButton from '@/components/ActionButton';
import Eventos from '@/scenes/eventos';
import { motion } from 'framer-motion';
import { slowTransition } from '@/shared/animations';


// Define the possible views for the YellowJackAddressView component
type View = 'default' | 'eventos';

// The YellowJackAddressView component
const YellowJackAddressView = () => {
  // State to keep track of the current view
  const [currentView, setCurrentView] = useState<View>('default');

  return (
    <div>
      {/* Render the default view */}
      {currentView === 'default' && (
        <div className='yellowjack-address-container'>
          <motion.div  {...slowTransition} className='yellowjack-address-title'>
            <h1>Encuentranos en:</h1>
            <MapPinIcon className='yellowjack-address-icon'></MapPinIcon>
          </motion.div >
          <motion.div  {...slowTransition} className='yellowjack-address-text'>
            <p>Panorama Drive, Oeste, Sandy Shores, en el cruce hacia la Ruta 68</p>
          </motion.div >
          <motion.div  {...slowTransition} className='map-image-container'>
            <img src={YellowJackMap} alt="yellow-jack-map" />
          </motion.div >
          <motion.div  {...slowTransition} className='yellowjack-address-button'>
            {/* Render an ActionButton to switch to the Eventos view */}
            <ActionButton children="Volver a Eventos" onViewChange={() => setCurrentView('eventos')}></ActionButton>
          </motion.div >
        </div>
      )}
      {/* Render the Eventos view */}
      {currentView === 'eventos' && (
        <Eventos setSelectedPage={() => {} } />
      )}
    </div>
  )
}

export default YellowJackAddressView