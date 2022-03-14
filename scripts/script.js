/* DOM ELEMENTS */
const navButton = document.getElementById('nav-button');
const closebtn = document.getElementById('closebtn');
const mi = document.getElementById('overlay-content').children;
const menuItems = Array.from(mi);
const body = document.getElementById('body');
const worksSection = document.getElementById('works');
const projectModal = document.getElementById('my-modal');
const form = document.querySelector('.contact-form');
const emailForm = document.getElementById('email');
const nameForm = document.getElementById('fullname');
const messageForm = document.getElementById('message');
const validationMessage = document.querySelector('.validation-message');

/* Portofolio Items */
const portfolioItems = [
  {
    title: 'Kramerica Industries',
    owner: 'Assad Isah',
    type: 'FrontEnd Dev',
    year: 2022,
    description:
      'A company website for the fictional Kramerica Indutries from seinfeld.',
    featuredImages: {
      mob: 'KramericaIndustriesMob.png',
      desk: 'KramericaIndustriesDesk.png',
      def: 'KramericaIndustriesDesk.png',
      altText: 'KramericaIndustries',
    },
    technologies: ['hmtl', 'css', 'javascript'],
    liveLink: 'https://nottherealalanturing.github.io/KramericaIndustries/',
    sourceLink: 'https://github.com/nottherealalanturing/KramericaIndustries',
  },
  {
    title: 'Sparkles',
    owner: 'Idayat Musa',
    type: 'Front End Dev',
    year: 2021,
    description: 'A personal blog.',
    featuredImages: {
      mob: 'sparklesMob.png',
      desk: 'sparklesDesk.png',
      def: 'sparklesDesk.png',
      altText: 'sparkles',
    },
    technologies: [
      'React',
      'GatsbyJs',
      'Javascript',
      'Chakraui',
      'Markdowns',
      'Contentful',
      'Graphql',
    ],
    liveLink: 'https://sparkles.gatsbyjs.io/',
    sourceLink: 'https://github.com/nottherealalanturing/sparkles',
  },
  {
    title: 'Portfolio',
    owner: 'Assad Isah',
    type: 'Front End Dev',
    year: 2021,
    description: 'My Portfolio, first draft.',
    featuredImages: {
      mob: 'portfolioMob.png',
      desk: 'portfolioDesk.png',
      def: 'portfolioDesk.png',
      altText: 'Portfolio site',
    },
    technologies: [
      'React',
      'GatsbyJs',
      'Javascript',
      'Chakraui',
      'Markdowns',
      'Contentful',
      'Graphql',
    ],
    liveLink: 'https://nottherealalanturing.github.io/old-portfolio/',
    sourceLink: 'https://nottherealalanturing.github.io/old-portfolio/',
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
  <div class="showImages">
  <img
    src="./assets/images/${project.featuredImages.desk}"
    alt="flower"
    class="p-item-image mb--12"
  />
  
  </div>
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

/* Form Validation Email */
form.addEventListener('submit', (event) => {
  const strInput = emailForm.value;
  // eslint-disable-next-line operator-linebreak
  const errorText =
    'Your email address should not contain upper case letters or invalid characters';
  if (/[A-Z]/.test(strInput)) {
    event.preventDefault();
    validationMessage.innerHTML = errorText;
    validationMessage.classList.add('shake');
  }
  localStorage.removeItem('form');
});

/* Persist form input across page reloads */

form.addEventListener('input', () => {
  const formdata = {
    name: nameForm.value,
    email: emailForm.value,
    message: messageForm.value,
  };
  localStorage.setItem('form', JSON.stringify(formdata));
});

const formObj = JSON.parse(localStorage.getItem('form'));
nameForm.value = formObj.name;
emailForm.value = formObj.email;
messageForm.value = formObj.message;

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
