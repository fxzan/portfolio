import project5hero from "../assets/project-05-hero.png";
import project5Img1 from "../assets/project-05-feature1.png";
import project5Img2 from "../assets/project-05-feature2.png";

export function initPortfolio () {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const ariaBody = document.getElementById(btn.getAttribute('aria-controls'));

      document.querySelectorAll('.accordion-trigger').forEach(b => {
        b.setAttribute('aria-expanded','false');
        b.querySelector(".accordion-icon").classList.remove('rotate-45');
        const body = document.getElementById(b.getAttribute('aria-controls'));
        body.setAttribute('inert', '');
        body.style.maxHeight = 0;
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded','true');
        btn.querySelector(".accordion-icon").classList.add('rotate-45');
        ariaBody.removeAttribute('inert');
        ariaBody.style.maxHeight = '30rem';
      }
    });
  });
}


export default function renderPortfolio() {
  return `
    <div class="animate-fade-in-left">
      <section class="pt-20 sm:pt-24 pb-16 main-container flex flex-col">
        <span class="text-overline">// selected work</span>
        <h1 class="text-portfolio-title">Things I've built</h1>
        <p class="text-body-lg max-w-[55ch] mt-6">A selection of projects — from full-scale applications to focused experiments.</p>
      </section>

      <section class="py-24 border-t border-border" hidden>
        <div class="main-container flex flex-col">
          <span class="text-overline">// project 00</span>
          <div class="flex max-sm:flex-col max-sm:gap-5 sm:items-center justify-between">
            <h3>NicheStore</h3>
            <div class="flex gap-3 flex-wrap">
              <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
              <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
            </div>
          </div>
          <p class="text-body-lg max-w-[60ch] my-6">
            
          </p>
          <div class="tech-tag-group mb-8">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4">
            <div class="screenshot screenshot-wide text-placeholder">// screenshot - hero / home </div>
            <div class="screenshot text-placeholder">// screenshot - feature 1 </div>
            <div class="screenshot text-placeholder">// screenshot - feature 2 </div>
          </div>
        </div>
      </section>

      <section class="py-24 border-t border-border" hidden>
        <div class="main-container flex flex-col">
          <span class="text-overline">// project 00</span>
          <div class="flex max-sm:flex-col max-sm:gap-5 sm:items-center justify-between">
            <h3>Trackr</h3>
            <div class="flex gap-3 flex-wrap">
              <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
              <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
            </div>
          </div>
          <p class="text-body-lg max-w-[60ch] my-6">
            
          </p>
          <div class="tech-tag-group mb-8">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4">
            <div class="screenshot screenshot-wide text-placeholder">// screenshot - hero / home </div>
            <div class="screenshot text-placeholder">// screenshot - feature 1 </div>
            <div class="screenshot text-placeholder">// screenshot - feature 2 </div>
          </div>
        </div>
      </section>

      <section class="py-24 border-t border-border" hidden>
        <div class="main-container flex flex-col">
          <span class="text-overline">// project 00</span>
          <div class="flex max-sm:flex-col max-sm:gap-5 sm:items-center justify-between">
            <h3>DevJobs</h3>
            <div class="flex gap-3 flex-wrap">
              <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
              <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
            </div>
          </div>
          <p class="text-body-lg max-w-[60ch] my-6">
            
          </p>
          <div class="tech-tag-group mb-8">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4">
            <div class="screenshot screenshot-wide text-placeholder">// screenshot - hero / home </div>
            <div class="screenshot text-placeholder">// screenshot - feature 1 </div>
            <div class="screenshot text-placeholder">// screenshot - feature 2 </div>
          </div>
        </div>
      </section>

      <section class="py-24 border-t border-border" hidden>
        <div class="main-container flex flex-col">
          <span class="text-overline">// project 00</span>
          <div class="flex max-sm:flex-col max-sm:gap-5 sm:items-center justify-between">
            <h3>Whiteboard</h3>
            <div class="flex gap-3 flex-wrap">
              <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
              <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
            </div>
          </div>
          <p class="text-body-lg max-w-[60ch] my-6">
            
          </p>
          <div class="tech-tag-group mb-8">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">Tailwind CSS</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4">
            <div class="screenshot screenshot-wide text-placeholder">// screenshot - hero / home </div>
            <div class="screenshot text-placeholder">// screenshot - feature 1 </div>
            <div class="screenshot text-placeholder">// screenshot - feature 2 </div>
          </div>
        </div>
      </section>

      <section class="py-24 border-t border-border">
        <div class="main-container flex flex-col">
          <span class="text-overline">// project 01</span>
          <div class="flex max-sm:flex-col max-sm:gap-5 sm:items-center justify-between">
            <h3>Amplidia</h3>
            <div class="flex gap-3 flex-wrap">
              <a href="https://fxzan.github.io/agency-site/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
              <a href="https://github.com/fxzan/agency-site" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
            </div>
          </div>
          <p class="text-body-lg max-w-[60ch] my-6">
            A full marketing agency site built as a single-page application in pure vanilla JavaScript, including a custom router built from scratch with link interception. Features a focus-trapped campaign modal, an auto-advancing carousel, and a dark/light theme system that resolves before first paint.
          </p>
          <div class="tech-tag-group mb-8">
            <span class="tech-tag">Vanilla JS</span>
            <span class="tech-tag">SPA Routing</span>
            <span class="tech-tag">History API</span>
            <span class="tech-tag">Focus trap</span>
            <span class="tech-tag">AbortController</span>
            <span class="tech-tag">IntersectionObserver</span>
            <span class="tech-tag">Dark mode</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr] gap-4">
            <div class="screenshot screenshot-wide text-placeholder"><img src="${project5hero}" alt="Project 01 Screenshot 01" class="w-full h-full object-cover object-top" /></div>
            <div class="screenshot text-placeholder"><img src="${project5Img1}" alt="Project 01 Screenshot 02" class="w-full h-full object-cover object-top" /></div>
            <div class="screenshot text-placeholder"><img src="${project5Img2}" alt="Project 01 Screenshot 03" class="w-full h-full object-cover object-top" /></div>
          </div>
        </div>
      </section>

      <section class="py-20 border-t border-border">
        <div class="main-container flex flex-col">
          <span class="text-overline">// more projects</span>
          <h2>Other work</h2>
          <p class="text-body-sm my-3">Smaller builds, experiments, and things I made to learn something.</p>
          <div class="flex flex-col bg-card border border-border border-b-0">
            <div class="flex flex-col" hidden>
              <button class="accordion-trigger" id="acc-1-trigger" aria-expanded="false" aria-controls="acc-1">
                <div class="flex items-center gap-6">
                  <h4 class="text-feature-title">Kanban Board</h4>
                  <div class="max-sm:hidden tech-tag-group">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">CSS</span>
                  </div>
                </div>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body" role="region" aria-labelledby="acc-1-trigger" id="acc-1" inert>
                <div class="accordion-body-inner">
                  <p class="text-body-sm max-w-[65ch]">
                    
                  </p>
                  <div class="tech-tag-group mb-2">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">Tailwind CSS</span>
                  </div>
                  <div class="flex gap-3 flex-wrap">
                    <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
                    <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col" hidden>
              <button class="accordion-trigger" id="acc-2-trigger" aria-expanded="false" aria-controls="acc-2">
                <div class="flex items-center gap-6">
                  <h4 class="text-feature-title">Country Explorer</h4>
                  <div class="max-sm:hidden tech-tag-group">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">CSS</span>
                  </div>
                </div>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body" role="region" aria-labelledby="acc-2-trigger" id="acc-2" inert>
                <div class="accordion-body-inner">
                  <p class="text-body-sm max-w-[65ch]">
                    
                  </p>
                  <div class="tech-tag-group mb-2">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">Tailwind CSS</span>
                  </div>
                  <div class="flex gap-3 flex-wrap">
                    <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
                    <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <button class="accordion-trigger" id="acc-3-trigger" aria-expanded="false" aria-controls="acc-3">
                <div class="flex items-center gap-6">
                  <h4 class="text-feature-title">Pulse - Pricing Page</h4>
                  <div class="max-sm:hidden tech-tag-group">
                    <span class="tech-tag">Vanilla JS</span>
                    <span class="tech-tag">Currency switcher</span>
                    <span class="tech-tag">Focus trap</span>
                  </div>
                </div>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body" role="region" aria-labelledby="acc-3-trigger" id="acc-3" inert>
                <div class="accordion-body-inner">
                  <p class="text-body-sm max-w-[65ch]">
                    A fully interactive pricing page with monthly/annual billing, multi-currency support, and a live feature comparison table. Built with full keyboard accessibility and a focus-trapped contact modal as an accessibility and interaction design exercise.
                  </p>
                  <div class="tech-tag-group mb-2">
                    <span class="tech-tag">Tailwind CSS</span>
                    <span class="tech-tag">Vanilla JS</span>
                    <span class="tech-tag">Currency switcher</span>
                    <span class="tech-tag">Focus trap</span>
                    <span class="tech-tag">Accordion</span>
                    <span class="tech-tag">Modal</span>
                    <span class="tech-tag">ARIA</span>
                  </div>
                  <div class="flex gap-3 flex-wrap">
                    <a href="https://fxzan.github.io/interactive-pricing-page/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
                    <a href="https://github.com/fxzan/interactive-pricing-page" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <button class="accordion-trigger" id="acc-4-trigger" aria-expanded="false" aria-controls="acc-4">
                <div class="flex items-center gap-6">
                  <h4 class="text-feature-title">Amplidia - Landing Page</h4>
                  <div class="max-sm:hidden tech-tag-group">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">CSS scroll snap</span>
                    <span class="tech-tag">Zero JS</span>
                  </div>
                </div>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body" role="region" aria-labelledby="acc-4-trigger" id="acc-4" inert>
                <div class="accordion-body-inner">
                  <p class="text-body-sm max-w-[65ch]">
                    An agency landing page built entirely in pure CSS — zero JavaScript, including a scroll-snap carousel, checkbox-hack contact form, and automatic dark mode.
                  </p>
                  <div class="tech-tag-group mb-2">
                    <span class="tech-tag">HTML</span>
                    <span class="tech-tag">CSS scroll snap</span>
                    <span class="tech-tag">Zero JS</span>
                    <span class="tech-tag">Checkbox hack</span>
                    <span class="tech-tag">Dark mode</span>
                    <span class="tech-tag">Web3Forms</span>
                  </div>
                  <div class="flex gap-3 flex-wrap">
                    <a href="https://fxzan.github.io/agency-landing-page/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
                    <a href="https://github.com/fxzan/agency-landing-page" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col">
              <button class="accordion-trigger" id="acc-5-trigger" aria-expanded="false" aria-controls="acc-5">
                <div class="flex items-center gap-6">
                  <h4 class="text-feature-title">Personal Portfolio</h4>
                  <div class="max-sm:hidden tech-tag-group">
                  <span class="tech-tag">Vanilla JS</span>
                    <span class="tech-tag">SPA Routing</span>
                    <span class="tech-tag">Focus trap</span>
                  </div>
                </div>
                <span class="accordion-icon">+</span>
              </button>
              <div class="accordion-body" role="region" aria-labelledby="acc-5-trigger" id="acc-5" inert>
                <div class="accordion-body-inner">
                  <p class="text-body-sm max-w-[65ch]">
                    This site — a vanilla JS single-page app with a custom router, permanent dark theme, and full accessibility, including the focus-trapped mobile menu and the very accordion this description lives in.
                  </p>
                  <div class="tech-tag-group mb-2">
                    <span class="tech-tag">Vanilla JS</span>
                    <span class="tech-tag">SPA Routing</span>
                    <span class="tech-tag">History API</span>
                    <span class="tech-tag">Tailwind CSS</span>
                    <span class="tech-tag">Focus trap</span>
                    <span class="tech-tag">Dark mode</span>
                    <span class="tech-tag">ARIA</span>
                  </div>
                  <div class="flex gap-3 flex-wrap">
                    <a href="https://fxzan.github.io/portfolio/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Live <span class="link-ico">↗</span></a>
                    <a href="https://github.com/fxzan/portfolio" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
}