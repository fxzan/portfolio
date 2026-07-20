(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/portfolio/assets/profile_pic-BEtmDGKq.jpg`;function t(){return`
    <div class="animate-fade-in-left">
      <section class="main-container pt-20 sm:pt-32 pb-24 flex items-center max-sm:flex-col gap-12">
        <div class="flex-1 flex flex-col">
          <span class="text-overline">// full-stack developer</span>
          <h1 class="text-hero">Faizan<br/>Baig</h1>
          <p class="max-w-[42ch] mt-8">Full-stack developer, top to bottom.<br/>Building clean, considered experiences for the web.</p>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <img src=${e} class="max-w-2xs w-full aspect-square rounded-sm" alt="Faizan Baig" />
        </div>
      </section>

      <section class="py-20 border-t border-border">
        <div class="main-container grid grid-cols-1 sm:grid-cols-[1fr_2fr] sm:gap-16">
          <span class="text-overline">// about</span>
          <div class="text-body-lg">
            <p class="max-w-[65ch]">
              I'm a full-stack developer who cares about the details — typography, spacing, interaction — the parts of a product that people feel before they can name.
            </p>
            <p class="max-w-[65ch] mt-4">
              My hands-on experience comes from building full-stack projects independently — architecting the data layer, wiring the API, and owning the UI end to end, working with React, Next.js, Node.js, Express, and PostgreSQL.
            </p>
            <p class="max-w-[65ch] mt-4">
              Professionally, my background is in technical support, working closely with engineering and product teams to debug platform issues at scale — work that's shaped how I think about reliability and edge cases as a developer.
            </p>
            <p class="max-w-[65ch] mt-4">
              Currently open to full-time roles and select freelance projects where the brief is interesting and the standard is high.
            </p>
          </div>
        </div>
      </section>

      <section class="py-20 border-t border-border">
        <div class="main-container flex flex-col">
          <span class="text-overline">// work</span>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 border-t border-border py-8">
            <div class="flex flex-col">
              <h4 class="text-feature-title">NOVA</h4>
              <p class="text-body-sm mt-[0.2rem] text-text-3">Product Support Engineer</p>
              <ul class="text-body-sm mt-[0.35rem] list-disc list-inside">
                <li class="mt-1">Debugged platform issues — gaps, bugs, unsynced data and failing API calls — including live client troubleshooting on intermittent issues.</li>
                <li class="mt-1">Investigated order and payment related issues using Postman, GCP Cloud Logging, New Relic, and MongoDB.</li>
                <li class="mt-1">Configured platform settings per client requirements, from business rules and integrations to account permissions and client-specific data.</li>
                <li class="mt-1">Maintained documentation and troubleshooting guides, collaborated with Engineering and Product to resolve recurring issues, and built trusted client relationships through proactive updates.</li>
              </ul>
            </div>
            <span class="text-work-dates">2026 - Present</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 border-y border-border py-8">
            <div class="flex flex-col">
              <h4 class="text-feature-title">Sprinklr</h4>
              <p class="text-body-sm mt-[0.2rem] text-text-3">Technical Support Engineer</p>
              <ul class="text-body-sm mt-[0.35rem] list-disc list-inside">
                <li class="mt-1">Resolved complex, cross-team platform issues — identifying gaps, debugging, and analyzing logs and databases alongside Engineering and Product teams.</li>
                <li class="mt-1">Worked directly with clients across 100+ unique cases, building and integrating custom solutions into their systems.</li>
                <li class="mt-1">Automated recurring support queries, reducing similar cases by over 20% and helping clients build user-friendly reporting dashboards.</li>
                <li class="mt-1">Optimized data reporting and dashboarding spanning UI, backend, and data collection.</li>
              </ul>
            </div>
            <span class="text-work-dates">2022 - 2025</span>
          </div>
        </div>
      </section>

      <section id="contact" class="pt-20 pb-24 border-t border-border">
        <div class="main-container flex flex-col">
          <span class="text-overline">// contact</span>
          <h2>Get in touch</h2>
          <p class="text-body-lg max-w-[48ch] mt-4">Open to full-time roles and freelance projects. The best way to reach me is by email.</p>
          <div class="flex gap-3 flex-wrap mt-8">
            <a href="mailto:baig.faizan1999@gmail.com" class="btn btn-secondary">Email <span class="link-ico">↗</span></a>
            <a href="https://github.com/fxzan" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub <span class="link-ico">↗</span></a>
            <a href="https://www.linkedin.com/in/faizan-baig-a5231518b/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn <span class="link-ico">↗</span></a>
          </div>
        </div>
      </section>
    </div>
  `}var n=`/portfolio/assets/project-05-hero-C9SulkEN.png`,r=`/portfolio/assets/project-05-feature1-CVgq8rmg.png`,i=`/portfolio/assets/project-05-feature2-DLx9dZld.png`;function a(){document.querySelectorAll(`.accordion-trigger`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`aria-expanded`)===`true`,n=document.getElementById(e.getAttribute(`aria-controls`));document.querySelectorAll(`.accordion-trigger`).forEach(e=>{e.setAttribute(`aria-expanded`,`false`),e.querySelector(`.accordion-icon`).classList.remove(`rotate-45`);let t=document.getElementById(e.getAttribute(`aria-controls`));t.setAttribute(`inert`,``),t.style.maxHeight=0}),t||(e.setAttribute(`aria-expanded`,`true`),e.querySelector(`.accordion-icon`).classList.add(`rotate-45`),n.removeAttribute(`inert`),n.style.maxHeight=`30rem`)})})}function o(){return`
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
            <div class="screenshot screenshot-wide text-placeholder"><img src="${n}" alt="Project 01 Screenshot 01" class="w-full h-full object-cover object-top" /></div>
            <div class="screenshot text-placeholder"><img src="${r}" alt="Project 01 Screenshot 02" class="w-full h-full object-cover object-top" /></div>
            <div class="screenshot text-placeholder"><img src="${i}" alt="Project 01 Screenshot 03" class="w-full h-full object-cover object-top" /></div>
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
  `}function s(){return`
  <div class="animate-fade-in">
    <div class="main-container flex flex-col justify-center pt-24 pb-16">
        <span class="text-overline">
          // page not found
        </span>
        <h1 class="text-portfolio-title">
          404
        </h1>
        <p class="text-body-lg max-w-[55ch] mt-6">
          The page you are trying to reach doesn't exist.
        </p>
        <a href="/" class="btn btn-secondary self-start mt-8">Go to home <span class="link-ico">↗</span></a>
      </div>
    </div>
  </div>
  `}var c=`/portfolio/`.replace(/\/$/,``),l=document.querySelector(`header`),u=document.getElementById(`app-container`),d=document.getElementById(`burger-button`),f=document.getElementById(`close-burger-button`),p=document.getElementById(`burger-nav-links`),m=document.getElementById(`overlay`),h=null,g=null;function _(e,t){let n=e.querySelectorAll(`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`),r=n[0],i=n[n.length-1];r?.focus(),e.addEventListener(`keydown`,e=>{e.key===`Escape`&&y(),e.key===`Tab`&&(e.shiftKey?document.activeElement===r&&(e.preventDefault(),i?.focus()):document.activeElement===i&&(e.preventDefault(),r?.focus()))},{signal:t}),e.addEventListener(`mousedown`,t=>{t.target===e&&t.preventDefault()},{signal:t})}function v(){g=new AbortController;let{signal:e}=g;p.classList.remove(`max-sm:invisible`),p.classList.add(`max-sm:-translate-x-52`),d.setAttribute(`aria-expanded`,`true`),d.classList.add(`opacity-0`),m.classList.remove(`pointer-events-none`,`opacity-0`,`invisible`),document.body.classList.add(`overflow-hidden`),_(p,e)}function y(){p.classList.remove(`max-sm:-translate-x-52`),p.classList.add(`max-sm:invisible`),d.setAttribute(`aria-expanded`,`false`),d.classList.remove(`opacity-0`),m.classList.add(`pointer-events-none`,`opacity-0`),setTimeout(()=>{m.classList.add(`invisible`)},300),document.body.classList.remove(`overflow-hidden`),d.focus(),g?.abort()}d.addEventListener(`click`,v),f.addEventListener(`click`,y),m.addEventListener(`click`,y),p.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,y)});var b={"/":t,"/portfolio":o},x={"/":`About | fxzan`,"/portfolio":`Portfolio | fxzan`};function S(){return window.location.pathname.replace(c,``)||`/`}function C(e){let t=e===`/`?`about`:e.replace(`/`,``);document.querySelectorAll(`.nav-link`).forEach(e=>{e.dataset.page===t?e.setAttribute(`aria-current`,`page`):e.removeAttribute(`aria-current`)})}function w(){let e=S();h=e,C(e);let t=b[e]??s;document.title=x[e]??`404 | fxzan`,u.innerHTML=t(),e===`/portfolio`&&a(),window.location.hash?document.querySelector(window.location.hash)?.scrollIntoView():window.scrollTo(0,0),document.getElementById(`initial-loader`)?.remove()}document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);t.target!==`_blank`&&(t.href&&!t.href.startsWith(window.location.origin)||n.startsWith(`#`)&&(n!==`#contact`||h===`/`)||(e.preventDefault(),h!==n&&(n===`#contact`?history.pushState(null,``,c+`/`+n):history.pushState(null,``,c+n),w())))}),window.addEventListener(`popstate`,()=>{h!==S()&&w()}),window.addEventListener(`scroll`,()=>l.classList.toggle(`hdr-scrolled`,scrollY>10),{passive:!0}),w();