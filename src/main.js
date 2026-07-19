import './style.css'
import renderAbout from './pages/about';
import renderPortfolio, { initPortfolio } from './pages/portfolio';
import render404 from './pages/404';

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const hdr = document.querySelector('header');
const appContainer = document.getElementById('app-container');
const burgerButton = document.getElementById("burger-button");
const closeBurgerButton = document.getElementById("close-burger-button");
const burgerNavLinks = document.getElementById("burger-nav-links");
const overlay = document.getElementById("overlay");

let currentPath = null;
let controller = null;

function trapFocus(container, signal) {
  const focusable = container.querySelectorAll(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  first?.focus();

  container.addEventListener(
    "keydown",
    (e) => {
      if (e.key === 'Escape') closeBurgerMenu();
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    { signal },
  );

  container.addEventListener('mousedown', (e) => {
    if (e.target === container)
      e.preventDefault();
  }, { signal });
}

// Open navbar menu
function openBurgerMenu() {
  controller = new AbortController();
  const { signal } = controller;

  burgerNavLinks.classList.remove("max-sm:invisible");
  burgerNavLinks.classList.add("max-sm:-translate-x-52");
  burgerButton.setAttribute('aria-expanded', 'true');
  burgerButton.classList.add("opacity-0");
  overlay.classList.remove("pointer-events-none", "opacity-0", "invisible");
  document.body.classList.add("overflow-hidden");

  trapFocus(burgerNavLinks, signal);
}

// Close navbar menu
function closeBurgerMenu() {
  burgerNavLinks.classList.remove("max-sm:-translate-x-52");
  burgerNavLinks.classList.add("max-sm:invisible");
  burgerButton.setAttribute('aria-expanded', 'false');
  burgerButton.classList.remove("opacity-0");
  overlay.classList.add("pointer-events-none", "opacity-0");
  setTimeout(() => {
    overlay.classList.add('invisible');
  }, 300);
  document.body.classList.remove("overflow-hidden");
  burgerButton.focus();
  controller?.abort();
}

// Event listeners
burgerButton.addEventListener("click", openBurgerMenu);
closeBurgerButton.addEventListener("click", closeBurgerMenu);
overlay.addEventListener("click", closeBurgerMenu);
burgerNavLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeBurgerMenu);
});

const routes = {
  '/': renderAbout,
  '/portfolio': renderPortfolio
};

const titles = {
  '/': 'About | fxzan',
  '/portfolio': 'Portfolio | fxzan'
};

function getPath(){
  return window.location.pathname.replace(base, '') || '/';
}

function updateActiveLink(path) {
  const pageName = path === '/' ? 'about' : path.replace('/', '');
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === pageName) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function navigate() {
  const path = getPath();
  currentPath = path;
  
  updateActiveLink(path);

  const renderPage = routes[path] ?? render404;
  document.title = titles[path] ?? '404 | fxzan';

  appContainer.innerHTML = renderPage();

  if (path ==='/portfolio') initPortfolio();

  if (!window.location.hash) {
    window.scrollTo(0, 0);
  } else {
    document.querySelector(window.location.hash)?.scrollIntoView();
  }

  document.getElementById("initial-loader")?.remove();
}

document.addEventListener('click', e => {
  const link = e.target.closest('a');

  if (!link) return;

  const href = link.getAttribute('href');

  if (link.target === "_blank") return;
  if (link.href && !link.href.startsWith(window.location.origin)) return; // External links
  if (href.startsWith("#") && (href !== '#contact' || currentPath === '/')) return;

  e.preventDefault();
  if (currentPath === href) return;

  if (href === '#contact') {
    history.pushState(null, "", base + '/' + href);
  }
  else history.pushState(null, "", base + href);

  navigate();
});

window.addEventListener("popstate", () => {
  if (currentPath === getPath()) return; // guard against #links
  navigate();
});

window.addEventListener('scroll', () => hdr.classList.toggle('hdr-scrolled', scrollY > 10), { passive: true });

navigate();