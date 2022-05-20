const socialMediaContainer = document.getElementById('hero-social-media-container')
const leftArrowButton = document.getElementById('left-arrow')
const currentProjectPage = document.getElementById('current-project')

const rightArrowButton = document.getElementById('right-arrow')
const projectTitle = document.getElementById('project-title')
const projectTechnologies = document.getElementById('project-use-technologies-container')

const projectDescription = document.getElementById('project-description')
const projectImg = document.getElementById('project-img')




const socialMediaContent = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="45" height="40" viewBox="0 0 24 24" stroke-width="1.4" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="15" y1="16" x2="19" y2="12" />
  <line x1="15" y1="8" x2="19" y2="12" />
</svg>

<p class='hero-contact' >Contactame</p>

<a href='https://www.linkedin.com/in/mariolemus021dev/' target="_blank" title='LinkedIn' class='hero-icon'>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-brand-linkedin" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <line x1="8" y1="11" x2="8" y2="16" />
  <line x1="8" y1="8" x2="8" y2="8.01" />
  <line x1="12" y1="16" x2="12" y2="11" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
</a>


<a href='https://github.com/MarioLemus' target="_blank" title='Github' class='hero-icon'>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
</svg>
</a>
`

socialMediaContainer.innerHTML = socialMediaContent

const left = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.7" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="5" y1="12" x2="9" y2="16" />
  <line x1="5" y1="12" x2="9" y2="8" />
</svg>
`
const right = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.7" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="5" y1="12" x2="19" y2="12" />
  <line x1="15" y1="16" x2="19" y2="12" />
  <line x1="15" y1="8" x2="19" y2="12" />
</svg>
`

const createTechContainer = (value) => `<div class='project-tech'>${value}</div>`


leftArrowButton.innerHTML = left
rightArrowButton.innerHTML = right

const setProjectData = (title, desc, techArray = [], imgPath) => {
  projectTitle.innerHTML = `${title}`
  projectDescription.innerHTML = `${desc}`
  techArray.forEach(tech => {
    projectTechnologies.innerHTML += createTechContainer(tech)
  })
  projectImg.src = imgPath
}


const project = [
  {
    id: 1,
    projectData: () => setProjectData('Allnovelist', 'Plataforma de entretenimiento, cuyo nicho principal es la literatura amateur.', ['React', 'Html5', 'Css3', 'Strapi'], './img/projects/allnovelist.png'),
  },
  {
    id: 2,
    projectData: () => setProjectData('JsMethodLearner', 'Aplicación en la que se busca explicar los métodos más utilizados de JavaScript de una manera más simple y sencilla de entender.', ['Next js', 'Html5', 'Css3'], './img/projects/js-method-learner.png')
  },
  {
    id: 3,
    projectData: () => setProjectData('Si-Ham landing page', 'Página de bienvenida para un negocio de comida, local.', ['React js', 'Html5', 'Css3'], './img/projects/si-ham-landing.png')
  },
  {
    id: 4,
    projectData: () => setProjectData('Automata', 'Aplicación de consola cuyo propósito principal es, automatizar procesos repetitivos y almacenarlos de una manera simple he intuitiva. <br/><br/>' + '(Actualmente, en fase de planeación)', ['Node js'], './img/projects/automata-hub-temp.png')
  }
]

currentProjectPage.innerHTML = 1

window.addEventListener('load', () => {
  project[0].projectData()
})

/* 
 * these functions change the state of the current project page (pagination state),
 * and the project data (general project info -> title, description, tech etc.)
*/
leftArrowButton.addEventListener('click', () => {
  if (currentProjectPage.innerHTML > 1) {
    projectTechnologies.innerHTML = ''
    currentProjectPage.innerHTML--
    project[currentProjectPage.innerHTML - 1].projectData()
  }
})

rightArrowButton.addEventListener('click', () => {
  if (currentProjectPage.innerHTML < project.length) {
    projectTechnologies.innerHTML = ''
    currentProjectPage.innerHTML++
    project[currentProjectPage.innerHTML - 1].projectData()
  }
})
