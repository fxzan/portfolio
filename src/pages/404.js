export default function render404() {
  return `
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
  `;
}