import React from 'react'
import { motion } from 'framer-motion';
import { SelectedPage } from '@/shared/types';
import NuestraCartaTabs from '@/components/NuestraCartaTabs';
import AlcoholView from '@/views/AlcoholView';
import NonAlcoholView from '@/views/NonAlcoholView';
import ComidaView from '@/views/Comida';
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const tabs = [
  { id: 'alcohol', label: 'Alcohol' },
  { id: 'nonalcohol', label: 'Sin Alcohol' },
  { id: 'comida', label: 'Comida' },
];

const NuestraCarta = ({ setSelectedPage }: Props) => {
  const [selectedTabId, setSelectedTabId] = React.useState(tabs[0].id);

  let ViewComponent;
  switch (selectedTabId) {
    case 'alcohol':
      ViewComponent = AlcoholView;
      break;
    case 'nonalcohol':
      ViewComponent = NonAlcoholView;
      break;
    case 'comida':
      ViewComponent = ComidaView;
      break;
    default:
      ViewComponent = AlcoholView;
      break;
  }

  const handleTabSelect = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <section id="nuestracarta">
      <motion.div className="our-products-container" onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}>
        <div className='our-products'>
          <NuestraCartaTabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            onTabSelect={handleTabSelect}
          />
          {ViewComponent && <ViewComponent />}
        </div>
      </motion.div>
    </section>
  )
}

export default NuestraCarta