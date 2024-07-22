const humburegerMenu = document.getElementById('humburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeList = document.getElementById('close-list');

humburegerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  closeList.classList.toggle('hidden');
  humburegerMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach((link) =>
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    closeList.classList.toggle('hidden');
    humburegerMenu.classList.toggle('hidden');
  }
  ));

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
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  sections.forEach(section => {
    if (isInViewport(section)) {
      const sectionId = section.id;
      menuLinks.forEach(link => {
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
<h3>Hello, <span class="span">there!</span></h3>
<b><span class='span'>I'm</span> Najeeba Qarqin</b>
<strong>FrontEnd <span class='span'>Web Developer</span></strong>
<p class='para'>Skilled in HTML, CSS and javaScript languages and Git, GitHub and VS code tools, interested to design and develope great websites.</p>
<div>
<a class='button' href='#about'>Learn More</a>
<a class='button' href='#contact'>Contact Me</a>
</div>
`

const about = document.getElementById('about-content');

const skills = {
  languages: ['HTML', 'CSS', 'javaScript'],
  tools: ['Git', 'GitHUb', 'VS Code'],
  certification: [
    { name: 'Web Design', link: 'www.com', image: './images/webDesign.png' },
    { name: 'JavaScript', link: 'www.com', image: './images/JS.png' },
  ],
};

about.innerHTML = `
  <img class="images" src="images/about.jpg" alt="">
  <p class='para' id='about-p'>I'm <b class='span'>Najeeba Qarqin</b> a Web Developement student at Kick-Start i learned responsive web design and javaScript programing language and attained the free code camp certifications of Responsive Web Design and JavaScript Algorthms And Data Structure programs.
  Actively i'm increasing my web developing skills to be a profissional web developer and apply my acquired skills and knowlage to real-world projects.</p>
  <p class='para'>Email: <a href='https://najeebaqarqin@gmail.com' class='span'>najeebaqarqin@gmail.com</a></p>
  <p class='para'><b class='span'>Languages</b>: ${skills.languages.join(', ')}</p>
  <p class='para'><b class='span'>Tools</b>: ${skills.tools.join(', ')}</p>
  <p>My <b class='span'>Certifications</b>: </p>
  <div class="certificates-container flex">
  ${skills.certification.map((certificate) =>
  `
  <div>
    <a href='${certificate.link}' target='_blank'>
      <img src='${certificate.image}' alt='${certificate.name}' class="certificates">
      </a>
      <p>${certificate.name}</p>
      </div>
      `
).join('')}
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
      <svg class="svg"><circle class='html'  cx="75" cy="75" r="67" stroke-linecap="round" /></svg>
      <p class='para'>HTML</p>
    </div>
        <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="css">90%</div>
        </div>
      </div>
      <svg class="svg"><circle class='css' cx="75" cy="75" r="67" stroke-linecap="round" /></svg>
      <p class='para'>CSS</p>
    </div>
        <div class="skill">
      <div class="outer">
        <div class="inner">
          <div id="js">70%</div>
        </div>
      </div>
      <svg class="svg"><circle class='js'  cx="75" cy="75" r="67" stroke-linecap="round" /></svg>
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
