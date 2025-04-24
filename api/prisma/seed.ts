import { PrismaClient } from '../generated/prisma';
import { CreateHeroDto } from 'src/hero/dtos/create.dto';

const prisma = new PrismaClient();

const heroes: CreateHeroDto[] = [
  {
    name: 'Clark Kent',
    nickname: 'Superman',
    main_power: 'Super força, voo, visão de calor, invulnerabilidade',
    date_of_birth: new Date('1938-06-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/superman.jpg',
    is_active: true,
  },
  {
    name: 'Ronnie Raymond',
    nickname: 'Firestorm',
    main_power: 'Manipulação de matéria, voo, projeção de energia',
    date_of_birth: new Date('1978-03-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/firestorm.jpg',
    is_active: true,
  },
  {
    name: 'Bruce Banner',
    nickname: 'Hulk',
    main_power: 'Força descomunal, regeneração, resistência sobre-humana',
    date_of_birth: new Date('1962-05-01'),
    universe: 'Marvel',
    avatar_url: 'https://curitibaweb.com/heroes/hulk.jpg',
    is_active: true,
  },
  {
    name: 'Bruce Wayne',
    nickname: 'Batman',
    main_power: 'Intelecto genial, artes marciais, equipamentos avançados',
    date_of_birth: new Date('1939-05-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/batman.jpg',
    is_active: true,
  },
  {
    name: 'Hal Jordan',
    nickname: 'Lanterna Verde',
    main_power: 'Anel de poder com criação de construtos de energia',
    date_of_birth: new Date('1959-10-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/lanterna-verde.jpg',
    is_active: true,
  },
  {
    name: 'Scott Summers',
    nickname: 'Ciclope',
    main_power: 'Raios ópticos de energia concussiva',
    date_of_birth: new Date('1963-09-01'),
    universe: 'Marvel',
    avatar_url: 'https://curitibaweb.com/heroes/ciclops.jpg',
    is_active: true,
  },
  {
    name: 'James Howlett',
    nickname: 'Wolverine',
    main_power: 'Fator de cura, sentidos aguçados, garras de adamantium',
    date_of_birth: new Date('1974-10-01'),
    universe: 'Marvel',
    avatar_url: 'https://curitibaweb.com/heroes/wolverine.jpg',
    is_active: true,
  },
  {
    name: 'Wade Wilson',
    nickname: 'Deadpool',
    main_power: 'Fator de cura acelerado, combate armado e desarmado',
    date_of_birth: new Date('1991-02-01'),
    universe: 'Marvel',
    avatar_url: 'https://curitibaweb.com/heroes/deadpool.jpg',
    is_active: true,
  },
  {
    name: 'Steve Rogers',
    nickname: 'Capitão América',
    main_power: 'Força aprimorada, estratégia militar, escudo indestrutível',
    date_of_birth: new Date('1941-03-01'),
    universe: 'Marvel',
    avatar_url: 'https://curitibaweb.com/heroes/capitao-america.jpg',
    is_active: true,
  },
  {
    name: 'Barry Allen',
    nickname: 'Flash',
    main_power: 'Super velocidade, viagem no tempo, reflexos acelerados',
    date_of_birth: new Date('1956-10-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/flash.jpg',
    is_active: true,
  },
  {
    name: 'Nathaniel Adam',
    nickname: 'Capitão Átomo',
    main_power: 'Manipulação de energia, voo, força sobre-humana',
    date_of_birth: new Date('1960-01-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/capitao-atomo.jpg',
    is_active: true,
  },
  {
    name: 'Dick Grayson',
    nickname: 'Robin',
    main_power: 'Acrobacia, artes marciais, liderança, gadgets',
    date_of_birth: new Date('1940-04-01'),
    universe: 'DC',
    avatar_url: 'https://curitibaweb.com/heroes/robin.jpg',
    is_active: true,
  },
];

async function main() {
  const response = await prisma.hero.findMany();

  if (response.length < 10) {
    await prisma.hero.createMany({
      data: heroes,
    });
  }
}
main()
  .then(async () => {
    console.log('Seed Ok!');
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
