const humburegerMenu = document.getElementById('humburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeList = document.getElementById('close-list');

humburegerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  closeList.classList.toggle('hidden');
  humburegerMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  closeList.classList.toggle('hidden');
  humburegerMenu.classList.toggle('hidden');
}));

closeList.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  closeList.classList.toggle('hidden');
  humburegerMenu.classList.toggle('hidden');
});

const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('nav ul li a');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      const sectionId = section.id;
      menuLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector(`nav > ul > li > a[href="#${sectionId}"]`).classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll);

const home = document.getElementById('home');

home.innerHTML = `
<img class="images" src="./images/home.jpg" alt="Profile" />
<div class='flex'>
<h3>Hello, <span class="span">there!</span></h3>
<b><span class='span'>I'm</span> Najeeba Qarqin</b><br>
<strong>FrontEnd <span class='span'>Web Developer</span></strong>
<p class='para'>Skilled in HTML, CSS and javaScript languages and Git, GitHub and VS code tools, interested to design and develope great websites.</p>
<div class='btns row'>
<a class='button' href='#about'>Learn More</a>
<a class='button' href='#contact'>Contact Me</a>
</div>
</div>
`;
const about = document.getElementById('about');
const skills = {
  languages: ['HTML', 'CSS', 'javaScript'],
  tools: ['Git', 'GitHUb', 'VS Code'],
  certification: [
    { name: 'Web Design', link: 'www.com', image: './images/webDesign.png' },
    { name: 'JavaScript', link: 'www.com', image: './images/JS.png' },
  ],
};

about.innerHTML = `
  <h2 class="span">About Me</h2>
  <div class='about'>
  <img class="images" src="images/about.jpg" alt="">
  <div class='about-p'>
  <p class='para' id='about-p'>I'm <b class='span'>Najeeba Qarqin</b> a Web Developement student at Kick-Start i learned responsive web design and javaScript programing language and attained the free code camp certifications of Responsive Web Design and JavaScript Algorthms And Data Structure programs.
  Actively i'm increasing my web developing skills to be a profissional web developer and apply my acquired skills and knowlage to real-world projects.</p>
  <p class='para'>Email: <a href='https://najeebaqarqin@gmail.com' class='span' target='_blank'>najeebaqarqin@gmail.com</a></p>
  <p class='para'><b class='span'>Languages</b>: ${skills.languages.join(', ')}</p>
  <p class='para'><b class='span'>Tools</b>: ${skills.tools.join(', ')}</p>
  </div>
  </div>
  <div>
  <p class='myCer'>My <b class='span'>Certifications</b>: </p>
  <div class="certificates-container flex">
  ${skills.certification.map((certificate) => `
  <div>
    <a href='${certificate.link}' target='_blank'>
      <img src='${certificate.image}' alt='${certificate.name}' class="certificates">
      </a>
      <p>${certificate.name}</p>
      <a class='button' href='${certificate.link}' target='_blank'>Visit</a>
      </div>
      `).join('')}
      </div>
      </div>
    `;

const skillsContainer = document.getElementById('skills');

skillsContainer.innerHTML = `
    <h2 class='skills-title span'>Skills</h2>
    <h4>Technical Skills <img width='15px' src='./images/skills.png'/></h4><br>
    <div class='skills-container row small'>
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="html">95%</div>
        </div>
      </div>
      <svg class="svg"><circle class='html'  cx="40" cy="40" r="36" stroke-linecap="round" /></svg>
      <p>HTML</p>
    </div>
        <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="css">90%</div>
        </div>
      </div>
      <svg class="svg"><circle class='css' cx="40" cy="40" r="36" stroke-linecap="round" /></svg>
      <p>CSS</p>
    </div>
        <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="js">70%</div>
        </div>
      </div>
      <svg class="svg"><circle class='js'  cx="40" cy="40" r="36" stroke-linecap="round" /></svg>
      <p>javaScript</p>
    </div>
    </div>


    
    <div class='skills-container row large'>
    <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="html">95%</div>
        </div>
      </div>
      <svg class="svg"><circle class='html'  cx="115" cy="115" r="105" stroke-linecap="round" /></svg>
      <p class='para'>HTML</p>
    </div>
        <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="css">90%</div>
        </div>
      </div>
      <svg class="svg"><circle class='css'   cx="115" cy="115" r="105" stroke-linecap="round" /></svg>
      <p class='para'>CSS</p>
    </div>
        <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="js">70%</div>
        </div>
      </div>
      <svg class="svg"><circle class='js'  cx="115" cy="115" r="105" stroke-linecap="round" /></svg>
      <p class='para'>javaScript</p>
      </div>
    </div>
    <br><br><br>
    <h4 class='title'>Soft Skills <img width='15px' src='./images/skills.png'/></h4>
    <div class='row'>
    <div class='flex'>
    <div class='soft'>
    <img class='skills-img' src='./images/teamWork.png'/>
    </div><br>
    <p class='para'>Team Work</p>
    </div>
    <div class='flex'>
    <div class='soft'>
    <img class='skills-img' src='./images/codeReveiw.png'/>
    </div><br>
    <p class='para'>Code Reveiw</p>
    </div>
    <div  class='flex'>
    <div class='soft'>
    <img class='skills-img' src='./images/cleanCode.png'/>
    </div><br>
    <p class='para'>Clean Code</p>
    </div>
`;

const projectsContainer = document.getElementById('projects-container');
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-content');
const popupBtn = document.getElementById('close-popup');

const projects = [
  {
    title: 'Tribute Page',
    shortDescription: 'Tribute Page project about Mark Zuker Berg one of certification projects in freeCodeCamp Responsive Web ...',
    longDescription: 'Tribute Page project about Mark Zuker Berg one of certification projects in freeCodeCamp Responsive Web Design program build in HTML and designed in CSS.',
    image: './images/TributePage.png',
    technology: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/TributePage',
    sourceLink: 'https://github.com/Najeeba-Qarqin/TributePage',
  },
  {
    title: 'Product Landing Page',
    shortDescription: 'Product Landing Page project about a coffee shop one of certification projects in freeCodeCamp ...',
    longDescription: 'Product Landing Page project about a coffee shop one of certification projects in freeCodeCamp Responsive Web Design program build in HTML and designed in CSS.',
    image: './images/ProductLandingPage.png',
    technology: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/ProductLandingPage',
    sourceLink: 'https://github.com/Najeeba-Qarqin/ProductLandingPage',
  },
  {
    title: 'Portfolio',
    shortDescription: 'Portfolio project a simple personal portfolio website one of certification projects in freeCodeCamp...',
    longDescription: 'Portfolio project a simple personal portfolio website one of certification projects in freeCodeCamp Responsive Web Design program build in HTML and designed in CSS.',
    image: './images/Portfolio.png',
    technology: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/Prtfolio',
    sourceLink: 'https://github.com/Najeeba-Qarqin/Portfolio',
  },
  {
    title: 'Palindrome Checker',
    shortDescription: 'Palindrome Checker project an app can check for palindrome one of certification projects in freeCode ...',
    longDescription: 'Palindrome Checker project a webpage can check for palindrome one of certification projects in freeCodeCamp Jvacript Algorithms And Data Structure program build in HTML, CSS and JavaScript.',
    image: './images/PalindromeChecker.png',
    technology: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/palindromeChecker',
    sourceLink: 'https://github.com/Najeeba-Qarqin/palindromeChecker',
  },
  {
    title: 'Numeral Converter',
    shortDescription: 'Roman Numeral Converter project an simple app can convert number to roman numeral one of certification ...',
    longDescription: 'Roman Numeral Converter project an simple app can convert number to roman numeral one of certification projects in freeCodeCamp JavaScript Algorithms And Data Structure program build in HTML, CSS ans JavaScript.',
    image: './images/RomanNumeralConverter.png',
    technology: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/romanNumeralConverter',
    sourceLink: 'https://github.com/Najeeba-Qarqin/romanNumeralConverter',
  },
  {
    title: 'Phone Number Validator',
    shortDescription: 'Telephone Number Validator project an simple app can check the for valid phone numbers one of certification ...',
    longDescription: 'Telephone Number Validator project an simple app can check the for valid phone numbers one of certification projects in freeCodeCamp JavaScript Algorithms And Data Structure program build in HTML, CSS and JavaScript.',
    image: './images/TelephoneNumberValidator.png',
    technology: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/Telephone-number-validator-',
    sourceLink: 'https://github.com/Najeeba-Qarqin/Telephone-number-validator-',
  },
  {
    title: 'Cash Register App',
    shortDescription: 'Cash Register App project an simple app can check and calculate the cash from customer one of certification ...',
    longDescription: 'Cash Register App project an simple app can check and calculate the cash from customer, one of certification projects in freeCodeCamp Algorithms And Data Structure program build in HTML, CSS and JavaScript.',
    image: './images/CashRegister.png',
    technology: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/CashRegister',
    sourceLink: 'https://github.com/Najeeba-Qarqin/CashRegister',
  },
  {
    title: 'Pokemon Search App',
    shortDescription: 'Pokemon Search App project a simple app can show data and information about any pokemon from their ID ...',
    longDescription: 'Pokemon Search App project a simple app can show data and information about any pokemon from their ID or name, one of certification projects in freeCodeCamp Algorithms And Data Structure program build in HTML, CSS and JavaScript.',
    image: './images/PokemonSearch.png',
    technology: ['HTML', 'CSS', 'Git', 'GitHub'],
    liveLink: 'https://najeeba-qarqin.github.io/Prtfolio',
    sourceLink: 'https://github.com/Najeeba-Qarqin/Portfolio',
  },
];

projectsContainer.innerHTML = projects.map(
  (projects, index) => `
  <div class='project-cart flex cards'>
    <h3 class='span'>${projects.title}</h3>
    <img class="projects-images" src='${projects.image}' />
    <p class='para'>${projects.shortDescription}</p>
    <button class='project-popup-btn span' onclick='showPopup(${index})'>See More<span class='white'> <img width='10px' src='./images/submit.png'/></span></button>
  </div>
  `,
).join('');

function showPopup(index) {
  const project = projects[index];
  popupContent.innerHTML = `
  <h3 class='span'>${project.title}</h3>
  <div class='project-popup flex'>
    <img class="projects-images" id='popup-image' src='${project.image}' alt='project-img' />
    <p class='para'>${project.longDescription}</p>
    </div>
    <h2 class='para'><span class='span'>Technologies</span>: ${project.technology.join(', ')}</h2>
    <div id='popup-btns'>
    <a class='button' href='${project.liveLink}' target='_blank'>Live Demo</a>
    <a class='button' href='${project.sourceLink}' target='_blank'>Source</a>
    </div>
  `;
  popup.classList.remove('hidden');
  showPopup();
};

popupBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});

const form = document.getElementById('myform');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const nameError = document.getElementById('name_error');
const emailError = document.getElementById('email_error');
const messageError = document.getElementById('message-error');
form.addEventListener('submit', (e) => {
  const emailChecker = /^([A-Za-z0-9_\-.])+([A-Za-z0-9_])+\.com$/;
  if (name.value === '' || name.value === null) {
    e.preventDefault();
    nameError.innerHTML = 'Name is required!';
  } else {
    nameError.innerHTML = '';
  }
  if (!email.value.match(emailChecker)) {
    e.preventDefault();
    emailError.innerText = 'Please enter a valid email address!';
  } else {
    emailError.innerText = '';
  }
  if (message.value.length <= 25) {
    e.preventDefault();
    messageError.innerHTML = 'Please write a message!';
  } else {
    messageError.innerHTML = '';
  }
});
const formFields = ['name', 'email', 'message'];
formFields.forEach((field) => {
  const input = document.getElementById(field);
  input.value = localStorage.getItem(field) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(field, input.value);
  });
});