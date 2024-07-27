# Portfolio 🚀

## Project Description 📝

> This is my portfolio project i created using HTML, CSS and javaScript it's a responsive webpage.

Examples:

- I learned how to make dynamic webpage using js.
- You can give some information about me.
- You can see and visit my projects that i've done.


#### HTML code sample


```html

  <header class="main-header">
    <header>
      <button id="humburger" class="toggle-btn">|||</button>
      <button id="close-list" class="hidden toggle-btn">X</button>
      <h2 class="logo span">NQ</h2>
    </header>
    <nav>
      <ul class="hidden navbarLinks" id="mobile-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

```

#### CSS code sample


```css

.toggle-btn {
  transform: rotate(90deg);
  border: none;
  background-color: unset;
  font-size: 18px;
  cursor: pointer;
}

nav li {
  list-style: none;
  margin: 15px 30px;
}

nav li a {
  text-decoration-line: none;
  font-size: 10px;
  font-weight: 600;
}


```

#### JS code sample


```js


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
};

popupBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
});


```
## Demo 📸


![Demo](/imgs/Annotation%202024-06-06%20001559.png)


### Live Link

[The_live_link_of_this_project](https://najeeba-qarqin.github.io/Portfolio-JS/)

## Technologies Used 🛠️


- HTML
- CSS
- JS


## Author 👩‍💻


- LinkedIn: [Najeeba Qarqin](https://www.linkedin.com/in/najeeba-qarqin-5419502ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- Email: [Najeeba Qarqin](najeebaqarqin@gmail.com)
- GitHub: [Najeeba Qarqin](https://github.com/Najeeba-Qarqin)
- UI/UX Designers:
  ####  Maryam Yousufi
  ####  Sara Shirzad
  ####  Sadaf Ahmadi
  ####  Farkhunda Raufi