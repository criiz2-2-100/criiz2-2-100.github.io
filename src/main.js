import './style.css'

const toggle = document.querySelector('.nav-toggle')
const links = document.getElementById('navLinks')

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(open))
  })
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}

// Work page tag filtering.
const workGrid = document.getElementById('workGrid')
const workFilters = document.getElementById('workFilters')
if (workGrid && workFilters) {
  const cards = Array.from(workGrid.querySelectorAll('.project'))
  const tags = ['All', ...new Set(cards.map((c) => c.querySelector('.tag')?.textContent?.trim()).filter(Boolean))]
  let active = 'All'
  const render = () => {
    cards.forEach((c) => {
      const t = c.querySelector('.tag')?.textContent?.trim()
      c.style.display = active === 'All' || t === active ? '' : 'none'
    })
  }
  tags.forEach((tag) => {
    const btn = document.createElement('button')
    btn.textContent = tag
    btn.className = tag === active ? 'active' : ''
    btn.addEventListener('click', () => {
      active = tag
      workFilters.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === btn))
      render()
    })
    workFilters.appendChild(btn)
  })
  render()
}

// Contact form -> mailto
const contactForm = document.getElementById('contactForm')
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(contactForm)
    const subject = encodeURIComponent(`New project inquiry: ${data.get('type')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nType: ${data.get('type')}\n\n${data.get('message')}`)
    window.location.href = `mailto:tidallchris2@gmail.com?subject=${subject}&body=${body}`
    const status = document.getElementById('formStatus')
    if (status) status.textContent = 'Opening your email client…'
  })
}

// Highlight the active nav link for the current page.
const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase()
links?.querySelectorAll('a').forEach((a) => {
  const href = (a.getAttribute('href') || '').split('/').pop().toLowerCase()
  if (href === path || (path === '' && href === 'index.html') || (path === 'index.html' && href === '')) {
    a.classList.add('active')
  }
})
