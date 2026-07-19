import profilePic from "../assets/profile_pic.jpg";

export default function renderAbout() {
  return `
    <div class="animate-fade-in-left">
      <section class="main-container pt-20 sm:pt-32 pb-24 flex items-center max-sm:flex-col gap-12">
        <div class="flex-1 flex flex-col">
          <span class="text-overline">// full-stack developer</span>
          <h1 class="text-hero">Faizan<br/>Baig</h1>
          <p class="max-w-[42ch] mt-8">Full-stack developer, top to bottom.<br/>Building clean, considered experiences for the web.</p>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <img src=${profilePic} class="max-w-2xs w-full aspect-square rounded-sm" alt="Faizan Baig" />
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
  `
}