/* DOM ELEMENTS */
const navButton = document.getElementById('nav-button');
const closebtn = document.getElementById('closebtn');
const mi = document.getElementById('overlay-content').children;
const menuItems = Array.from(mi);
const body = document.getElementById('body');
const worksSection = document.getElementById('works');
const projectModal = document.getElementById('my-modal');

/* Portofolio Items */
const portfolioItems = [
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
    technologies: ['hmtl', 'css', 'javascript', 'BootStrap'],
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

// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  body.style.overflow = 'auto';
  projectModal.style.display = 'none';
};

function seeProject(project) {
  let techList = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    techList += `<li class="p-item_tl-item"><p class="p-item_tl-item_text">${project.technologies[i]}</p></li>`;
  }
  const projectString = `<div class="my-modal-content">
  <div class="p-item_details mb--12">
    <div class="p-item_details-1">
      <h5>${project.title}</h5>
      <a
        href="javascript:void(0)"
        id="closeModal"
        onclick="closeModal()"
        >&times;</a
      >
    </div>
    <div class="p-item_details-2">
      <p class="project-owner">${project.owner}</p>
      <img src="./assets/Icons/Counter.svg" alt="seperator" />
      <p class="project-type">${project.type}</p>
      <img src="./assets/Icons/Counter.svg" alt="seperator" />
      <p class="year">${project.year}</p>
    </div>
  </div>
  <img
    src="./assets/images/${project.featuredImages.mob}"
    alt="flower"
    class="p-item-image mb--12"
  />
  <div class="p-item_dt mb--12">
    <p class="p-item_desc">
    ${project.description}
    </p>
    <div class="p-item_tl-container">
      <ul class="p-item_tl">
      ${techList}
      </ul>
      <ul class="p-item_sl">
        <li class="p-item_sl-item">
          <a href="${project.liveLink}" class="p-item_sl-live">See Live</a>
          <img
            src="./assets/Icons/live-icon.svg"
            alt="Live Button icon"
          />
        </li>
        <li class="p-item_sl-item">
          <a href="${project.sourceLink}" class="p-item_sl-source">See Source</a>
          <img
            src="./assets/Icons/source-icon.svg"
            alt="See Source Icon"
          />
        </li>
      </ul>
    </div>
  </div>
</div>`;
  projectModal.innerHTML += projectString;
  projectModal.style.display = 'block';
  body.style.overflow = 'hidden';
}

/* Porfolio Section */
/* IIFE loads and populate work section */
(() => {
  /* Loads Portfolio Items */
  for (let i = 0; i < portfolioItems.length; i += 1) {
    let techList = '';
    for (let j = 0; j < portfolioItems[i].technologies.length; j += 1) {
      techList += `<li class="tech-tags__name"><span class=".tech-tags__text">${portfolioItems[i].technologies[j]}</span></li>`;
    }
    const articleTemplate = `<article class="portfolio-item" data-item="${i}">
    <picture>
      <source
        srcset="./assets/images/${portfolioItems[i].featuredImages.mob}"
        media="(max-width: 670px)"
        class="mt--12"
      />
      <source srcset="./assets/images/${portfolioItems[i].featuredImages.desk}" class="mt--12" />
      <img
        src="./assets/images/${portfolioItems[i].featuredImages.def}"
        alt="${portfolioItems[i].featuredImages.altText}"
        class="mt--12 portfolio-item__image"
      />
    </picture>
    <div class="portfolio-item__card-details">
      <div class="portfolio-item__title-block mt--12">
        <h2 class="portfolio-item__title">${portfolioItems[i].title}</h2>
        <div class="portfolio-item__det">
          <p class="project-owner">${portfolioItems[i].owner}</p>
          <img src="./assets/Icons/Counter.svg" alt="seperator" />
          <p class="project-type">${portfolioItems[i].type}</p>
          <img src="./assets/Icons/Counter.svg" alt="seperator" />
          <p class="year">${portfolioItems[i].year}</p>
        </div>
      </div>
      <p class="portfolio-item__description">
      ${portfolioItems[i].description}
      </p>
      <ul class="tech-tags">
    ${techList}
      </ul>
      <div class="btn-container">
        <button type="button" class="view-project-btn data-item-${i}">See Project</button>
      </div>
    </div>
  </article>`;
    worksSection.innerHTML += articleTemplate;
  }

  /* Add event listener to open Modal */
  for (let i = 0; i < portfolioItems.length; i += 1) {
    document.querySelector(`.data-item-${i}`).addEventListener('click', () => {
      seeProject(portfolioItems[i]);
    });
  }
})();

/* Mobile Menu */
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
