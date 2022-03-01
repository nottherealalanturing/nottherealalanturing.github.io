const navButton = document.getElementById('nav-button');
const closebtn = document.getElementById('closebtn');
const mi = document.getElementById('overlay-content').children;
const menuItems = Array.from(mi);
const works = [
  {
    title: 'Tonic',
    owner: 'Canopy',
    type: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImages: {
      mob: 'tonic-mob.png',
      desk: 'tonic-dsk.png',
      def: 'tonic.png',
      altText: 'Flowers',
    },
    technologies: ['hmtl', 'css', 'javascript'],
    liveLink: 'https://nottherealalanturing.github.io/Portfolio/',
    sourceLink: 'https://nottherealalanturing.github.io/Portfolio/',
  },
  {
    title: 'Multi-Post Stories',
    owner: 'Canopy',
    type: 'Back End Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImages: {
      mob: 'multi-mob.png',
      desk: 'multi-dsk.png',
      def: 'multi-dsk.png',
      altText: 'Flowers',
    },
    technologies: ['hmtl', 'css', 'javascript'],
    liveLink: 'https://nottherealalanturing.github.io/Portfolio/',
    sourceLink: 'https://nottherealalanturing.github.io/Portfolio/',
  },
  {
    title: 'Facebook 360',
    owner: 'Facebook',
    type: 'FullStack Dev',
    year: 2015,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImages: {
      mob: 'facebook360-mob.png',
      desk: 'facebook360-dsk.png',
      def: 'facebook360-dsk.png',
      altText: 'Flowers',
    },
    technologies: ['hmtl', 'css', 'javascript'],
    liveLink: 'https://nottherealalanturing.github.io/Portfolio/',
    sourceLink: 'https://nottherealalanturing.github.io/Portfolio/',
  },
  {
    title: 'Uber Navigation',
    owner: 'Uber',
    type: 'Lead Developer',
    year: 2018,
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImages: {
      mob: 'uber-mob.png',
      desk: 'uber-dsk.png',
      def: 'uber-dsk.png',
      altText: 'Flowers',
    },
    technologies: ['hmtl', 'css', 'javascript'],
    liveLink: 'https://nottherealalanturing.github.io/Portfolio/',
    sourceLink: 'https://nottherealalanturing.github.io/Portfolio/',
  },
];
menuItems.forEach((li) => {
  li.addEventListener('click', () => {
    document.getElementById('myNav').style.width = '0%';
    document.getElementById('body').style.overflow = 'auto';
    document.getElementById('headline').classList.remove('blur');
    document.getElementById('container').classList.remove('blur');
  });
});

closebtn.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '0%';
  document.getElementById('body').style.overflow = 'auto';
  document.getElementById('headline').classList.remove('blur');
  document.getElementById('container').classList.remove('blur');
});

navButton.addEventListener('click', () => {
  document.getElementById('myNav').style.width = '100%';
  document.getElementById('body').style.overflow = 'hidden';
  document.getElementById('headline').classList.add('blur');
  document.getElementById('container').classList.add('blur');
});
