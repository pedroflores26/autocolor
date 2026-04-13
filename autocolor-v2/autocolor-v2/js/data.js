/* ==========================================
   AutoColor — data.js
   Base de dados: marcas, modelos, anos,
   cores e slug da Wikipedia para foto real.
   ========================================== */

const DB = {
  Fiat: {
    Cronos: {
      wikiSlug: 'Fiat_Cronos',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Banchisa',   hex: '#F5F4F0', type: 'Sólido'    },
        { name: 'Preto Vulcano',     hex: '#1A1A1A', type: 'Sólido'    },
        { name: 'Cinza Scandium',    hex: '#8A8A8A', type: 'Metálico'  },
        { name: 'Prata Bari',        hex: '#C4C8C8', type: 'Metálico'  },
        { name: 'Vermelho Colorado', hex: '#B82020', type: 'Sólido'    },
        { name: 'Azul Riva',         hex: '#1E3A5F', type: 'Metálico'  },
        { name: 'Bege Savana',       hex: '#C8B9A0', type: 'Perlizado' },
        { name: 'Cinza Misterio',    hex: '#555558', type: 'Metálico'  },
      ],
    },
    Pulse: {
      wikiSlug: 'Fiat_Pulse',
      years: [2024, 2023, 2022],
      colors: [
        { name: 'Branco Banchisa',   hex: '#F5F4F0', type: 'Sólido'    },
        { name: 'Preto Vulcano',     hex: '#1A1A1A', type: 'Sólido'    },
        { name: 'Cinza Scandium',    hex: '#8A8A8A', type: 'Metálico'  },
        { name: 'Laranja Sicilia',   hex: '#E05C20', type: 'Metálico'  },
        { name: 'Verde Oliva',       hex: '#5A6642', type: 'Metálico'  },
        { name: 'Azul Intenso',      hex: '#253B5C', type: 'Perlizado' },
      ],
    },
    Strada: {
      wikiSlug: 'Fiat_Strada',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Banchisa',   hex: '#F5F4F0', type: 'Sólido'   },
        { name: 'Preto Vulcano',     hex: '#1A1A1A', type: 'Sólido'   },
        { name: 'Vermelho Colorado', hex: '#B82020', type: 'Sólido'   },
        { name: 'Cinza Scandium',    hex: '#8A8A8A', type: 'Metálico' },
        { name: 'Prata Bari',        hex: '#C4C8C8', type: 'Metálico' },
        { name: 'Azul Riva',         hex: '#1E3A5F', type: 'Metálico' },
      ],
    },
  },

  Volkswagen: {
    Gol: {
      wikiSlug: 'Volkswagen_Gol',
      years: [2023, 2022, 2021, 2020, 2019],
      colors: [
        { name: 'Branco Cristal',    hex: '#EFEFED', type: 'Sólido'   },
        { name: 'Preto Profundo',    hex: '#151515', type: 'Metálico' },
        { name: 'Prata Tungsten',    hex: '#9FA4A8', type: 'Metálico' },
        { name: 'Vermelho Tornado',  hex: '#C0182A', type: 'Sólido'   },
        { name: 'Azul Biscay',       hex: '#1F3D6B', type: 'Metálico' },
      ],
    },
    Polo: {
      wikiSlug: 'Volkswagen_Polo',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Cristal',    hex: '#EFEFED', type: 'Sólido'   },
        { name: 'Preto Profundo',    hex: '#151515', type: 'Metálico' },
        { name: 'Cinza Platinum',    hex: '#8E9194', type: 'Metálico' },
        { name: 'Prata Reflex',      hex: '#BBBFC4', type: 'Metálico' },
        { name: 'Vermelho Flash',    hex: '#CC1E2E', type: 'Sólido'   },
        { name: 'Azul Biscay',       hex: '#1F3D6B', type: 'Metálico' },
        { name: 'Laranja Energy',    hex: '#E86010', type: 'Metálico' },
      ],
    },
    'T-Cross': {
      wikiSlug: 'Volkswagen_T-Cross',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Cristal',    hex: '#EFEFED', type: 'Sólido'   },
        { name: 'Preto Profundo',    hex: '#151515', type: 'Metálico' },
        { name: 'Cinza Platinum',    hex: '#8E9194', type: 'Metálico' },
        { name: 'Prata Reflex',      hex: '#BBBFC4', type: 'Metálico' },
        { name: 'Azul Biscay',       hex: '#1F3D6B', type: 'Metálico' },
        { name: 'Vermelho Flash',    hex: '#CC1E2E', type: 'Sólido'   },
        { name: 'Dourado Pyrit',     hex: '#A08B5C', type: 'Metálico' },
      ],
    },
  },

  Chevrolet: {
    Onix: {
      wikiSlug: 'Chevrolet_Onix',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Summit',     hex: '#F2F2EE', type: 'Sólido'    },
        { name: 'Preto Ouro Negro',  hex: '#141414', type: 'Metálico'  },
        { name: 'Cinza Grafite',     hex: '#5C5C5C', type: 'Metálico'  },
        { name: 'Prata Mercury',     hex: '#ADADAD', type: 'Metálico'  },
        { name: 'Vermelho Chilli',   hex: '#BC1D1D', type: 'Metálico'  },
        { name: 'Azul Iceberg',      hex: '#3D6EA6', type: 'Metálico'  },
        { name: 'Bege Champagne',    hex: '#C8BC9E', type: 'Perlizado' },
      ],
    },
    Tracker: {
      wikiSlug: 'Chevrolet_Tracker',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Summit',     hex: '#F2F2EE', type: 'Sólido'   },
        { name: 'Preto Ouro Negro',  hex: '#141414', type: 'Metálico' },
        { name: 'Cinza Grafite',     hex: '#5C5C5C', type: 'Metálico' },
        { name: 'Prata Mercury',     hex: '#ADADAD', type: 'Metálico' },
        { name: 'Vermelho Chilli',   hex: '#BC1D1D', type: 'Metálico' },
        { name: 'Azul Iceberg',      hex: '#3D6EA6', type: 'Metálico' },
        { name: 'Laranja Burn',      hex: '#D4571A', type: 'Metálico' },
      ],
    },
  },

  Toyota: {
    Corolla: {
      wikiSlug: 'Toyota_Corolla_(E210)',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Pérola',     hex: '#F4F3EF', type: 'Perlizado' },
        { name: 'Preto Ebony',       hex: '#181818', type: 'Metálico'  },
        { name: 'Cinza Celestial',   hex: '#7A7D80', type: 'Metálico'  },
        { name: 'Prata Classic',     hex: '#BFC0C2', type: 'Metálico'  },
        { name: 'Azul Blue Crush',   hex: '#1C3354', type: 'Metálico'  },
        { name: 'Vermelho Scarlet',  hex: '#B01B22', type: 'Metálico'  },
      ],
    },
    Hilux: {
      wikiSlug: 'Toyota_Hilux',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Pérola',     hex: '#F4F3EF', type: 'Perlizado' },
        { name: 'Preto Ebony',       hex: '#181818', type: 'Metálico'  },
        { name: 'Prata Classic',     hex: '#BFC0C2', type: 'Metálico'  },
        { name: 'Cinza Dark',        hex: '#525254', type: 'Metálico'  },
        { name: 'Azul Blue Crush',   hex: '#1C3354', type: 'Metálico'  },
        { name: 'Vermelho Scarlet',  hex: '#B01B22', type: 'Metálico'  },
        { name: 'Bronze Attitude',   hex: '#7A6040', type: 'Metálico'  },
      ],
    },
  },

  Honda: {
    Civic: {
      wikiSlug: 'Honda_Civic_(eleventh_generation)',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Platinum',   hex: '#F0EFEA', type: 'Perlizado' },
        { name: 'Preto Crystal',     hex: '#1C1C1C', type: 'Metálico'  },
        { name: 'Cinza Lunar',       hex: '#868A8F', type: 'Metálico'  },
        { name: 'Prata Meteoroid',   hex: '#C2C4C6', type: 'Metálico'  },
        { name: 'Azul Sonic',        hex: '#224D78', type: 'Perlizado' },
        { name: 'Vermelho Rallye',   hex: '#C01826', type: 'Perlizado' },
      ],
    },
    'HR-V': {
      wikiSlug: 'Honda_HR-V',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Platinum',   hex: '#F0EFEA', type: 'Perlizado' },
        { name: 'Preto Crystal',     hex: '#1C1C1C', type: 'Metálico'  },
        { name: 'Cinza Lunar',       hex: '#868A8F', type: 'Metálico'  },
        { name: 'Azul Obsidian',     hex: '#1A2E4A', type: 'Perlizado' },
        { name: 'Vermelho Rallye',   hex: '#C01826', type: 'Perlizado' },
      ],
    },
  },

  Hyundai: {
    HB20: {
      wikiSlug: 'Hyundai_HB20',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Polar',      hex: '#F1F0EC', type: 'Sólido'    },
        { name: 'Preto Black Rock',  hex: '#1A1A1A', type: 'Metálico'  },
        { name: 'Cinza Sterling',    hex: '#888C8F', type: 'Metálico'  },
        { name: 'Prata Silver',      hex: '#C0C3C6', type: 'Metálico'  },
        { name: 'Vermelho Pulse',    hex: '#BE1E24', type: 'Metálico'  },
        { name: 'Azul Star Dust',    hex: '#2D4E76', type: 'Perlizado' },
        { name: 'Verde Tea',         hex: '#7A9478', type: 'Metálico'  },
      ],
    },
    Creta: {
      wikiSlug: 'Hyundai_Creta',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Polar',      hex: '#F1F0EC', type: 'Sólido'    },
        { name: 'Preto Black Rock',  hex: '#1A1A1A', type: 'Metálico'  },
        { name: 'Cinza Titan',       hex: '#696E70', type: 'Metálico'  },
        { name: 'Prata Silver',      hex: '#C0C3C6', type: 'Metálico'  },
        { name: 'Azul Star Dust',    hex: '#2D4E76', type: 'Perlizado' },
        { name: 'Vermelho Pulse',    hex: '#BE1E24', type: 'Metálico'  },
        { name: 'Laranja Lava',      hex: '#CF4B10', type: 'Metálico'  },
      ],
    },
  },

  Renault: {
    Kwid: {
      wikiSlug: 'Renault_Kwid',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Glacier',    hex: '#F0EFEB', type: 'Sólido'    },
        { name: 'Preto Nacre',       hex: '#1C1C1C', type: 'Perlizado' },
        { name: 'Cinza Iron',        hex: '#828485', type: 'Metálico'  },
        { name: 'Vermelho Flamme',   hex: '#C82222', type: 'Sólido'    },
        { name: 'Laranja Pop',       hex: '#E35A10', type: 'Sólido'    },
        { name: 'Azul Iron',         hex: '#2A456A', type: 'Metálico'  },
      ],
    },
    Duster: {
      wikiSlug: 'Renault_Duster',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Glacier',    hex: '#F0EFEB', type: 'Sólido'    },
        { name: 'Preto Nacre',       hex: '#1C1C1C', type: 'Perlizado' },
        { name: 'Cinza Iron',        hex: '#828485', type: 'Metálico'  },
        { name: 'Bege Sahara',       hex: '#C4AF8E', type: 'Metálico'  },
        { name: 'Vermelho Flamme',   hex: '#C82222', type: 'Sólido'    },
        { name: 'Azul Iron',         hex: '#2A456A', type: 'Metálico'  },
      ],
    },
  },

  Jeep: {
    Renegade: {
      wikiSlug: 'Jeep_Renegade',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Alpino',     hex: '#F2F1ED', type: 'Sólido'    },
        { name: 'Preto Cosmos',      hex: '#1A1A1E', type: 'Metálico'  },
        { name: 'Cinza Granito',     hex: '#6A6C6E', type: 'Metálico'  },
        { name: 'Vermelho Colorado', hex: '#B8202A', type: 'Metálico'  },
        { name: 'Azul Hydro',        hex: '#1F3B5C', type: 'Perlizado' },
        { name: 'Verde Tasco',       hex: '#3A5440', type: 'Metálico'  },
        { name: 'Laranja Omaha',     hex: '#D0540C', type: 'Metálico'  },
      ],
    },
    Compass: {
      wikiSlug: 'Jeep_Compass',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Alpino',     hex: '#F2F1ED', type: 'Sólido'    },
        { name: 'Preto Cosmos',      hex: '#1A1A1E', type: 'Metálico'  },
        { name: 'Cinza Granito',     hex: '#6A6C6E', type: 'Metálico'  },
        { name: 'Prata Billet',      hex: '#C8CACC', type: 'Metálico'  },
        { name: 'Azul Hydro',        hex: '#1F3B5C', type: 'Perlizado' },
        { name: 'Vermelho Colorado', hex: '#B8202A', type: 'Metálico'  },
      ],
    },
  },

  Nissan: {
    Kicks: {
      wikiSlug: 'Nissan_Kicks',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Pérola',     hex: '#F3F2EE', type: 'Perlizado' },
        { name: 'Preto Super Black', hex: '#161616', type: 'Sólido'    },
        { name: 'Cinza Gun',         hex: '#6E7073', type: 'Metálico'  },
        { name: 'Prata Brilliant',   hex: '#C5C7CA', type: 'Metálico'  },
        { name: 'Vermelho Vinho',    hex: '#8A1A22', type: 'Perlizado' },
        { name: 'Azul Deep Blue',    hex: '#1A2E50', type: 'Perlizado' },
        { name: 'Laranja Monarch',   hex: '#D04A18', type: 'Metálico'  },
      ],
    },
  },

  Ford: {
    Ranger: {
      wikiSlug: 'Ford_Ranger_(T6)',
      years: [2024, 2023, 2022, 2021, 2020],
      colors: [
        { name: 'Branco Oxford',     hex: '#F1F0EC', type: 'Sólido'   },
        { name: 'Preto Agate',       hex: '#171717', type: 'Metálico' },
        { name: 'Cinza Magnetic',    hex: '#5A5D60', type: 'Metálico' },
        { name: 'Prata Iconic',      hex: '#BCBEC0', type: 'Metálico' },
        { name: 'Azul Ford',         hex: '#1A3F6F', type: 'Metálico' },
        { name: 'Vermelho Race',     hex: '#C01828', type: 'Metálico' },
        { name: 'Verde Diffused',    hex: '#4E5E50', type: 'Metálico' },
      ],
    },
  },
};
