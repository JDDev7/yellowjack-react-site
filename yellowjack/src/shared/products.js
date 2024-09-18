import botellaCerveza from '@/assets/botella-cerveza.webp';
import jarraCerveza from '@/assets/jarra-cerveza.webp';
import mojito from '@/assets/mojito.webp';
import ronCola from '@/assets/ron-cola.webp';
import whiskyCola from '@/assets/whisky-cola.webp';
import whisky from '@/assets/whisky.webp';
import agua from '@/assets/agua.webp';
import cafe from '@/assets/cafe.webp';
import cola from '@/assets/cola.webp';
import alitas from '@/assets/alitas.webp';
import chuleton from '@/assets/chuleton.webp';
import nachos from '@/assets/nachos.webp';
import patatas from '@/assets/patatas.webp';
export const alcohol = {
    botellaCerveza: {
        img: botellaCerveza,
        name: 'Botella de Cerveza',
        description: 'Deliciosa cerveza americana, producto local de Sandy Shores',
        price: 50
    },
    jarraCerveza: {
        img: jarraCerveza,
        name: 'Jarra de Cerveza',
        description: 'Deliciosa cerveza americana, local de Sandy Shores',
        price: 60
    },
    mojito: {
        img: mojito,
        name: 'Mojito',
        description: 'Refrescante, con hierbabuena, lima y hecho con auténtico ron cubano.',
        price: 70
    },
    ronCola: {
        img: ronCola,
        name: 'Ron con Cola',
        description: 'Ron, cola y limón. La mejor combinación.',
        price: 75
    },
    whiskyCola: {
        img: whiskyCola,
        name: 'Whisky con Cola',
        description: 'Whisky con cola y limón, para los que le gusta una mezcla dulce y fuerte.',
        price: 70
    },
    whisky: {
        img: whisky,
        name: 'Whisky',
        description: 'Tenemos Irlandés, escocés, galés, canadiense y estadounidense. Tú eliges.',
        price: 180
    }
};
export const nonAlcohol = {
    agua: {
        img: agua,
        name: 'Agua',
        description: 'Agua mineral natural de los manantiales de la isla.',
        price: 25
    },
    cafe: {
        img: cafe,
        name: 'Cafe',
        description: 'Cafe al gusto, solo, con leche, con hielo, como lo prefieras.',
        price: 25
    },
    refrescos: {
        img: cola,
        name: 'Refrescos',
        description: 'Cola, Soda de naranja, Sprunk... los refrescos mas famosos de la isla.',
        price: 35
    }
};
export const comida = {
    alitas: {
        img: alitas,
        name: 'Alitas Marinadas',
        description: 'Con salsa de soja, pimienta negra, limón, romero, tomillo, un chorro de coñac y, para los más valientes, una cucharadita de tabasco.',
        price: 50
    },
    chuleton: {
        img: chuleton,
        name: 'Chuletón',
        description: 'Plato estrella de la casa: Chuletón de buey de 1kg a la brasa, especiado y acompañado de salsa barbacoa y patatas o ensalada.',
        price: 80
    },
    nachos: {
        img: nachos,
        name: 'Nachos',
        description: 'Nachos con carne de ternera, mezcla de quesos, tomate, cebolla y jalapeños.',
        price: 60
    },
    patatas: {
        img: patatas,
        name: 'Patatas Fritas',
        description: 'Patatas fritas en cono, para llevatelas a donde quieras y como quieras. Con salsa o sin ella.',
        price: 50
    }
};
