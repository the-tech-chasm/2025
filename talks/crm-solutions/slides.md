---
# You can also start simply with 'default'
# theme: shibainu
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
author: Mumtahin Farabi
# some information about your slides (markdown enabled)
title: "CRM Solutions: Client Management Made Simple"
titleTemplate: '%s - The Tech Chasm'
info: |
  ## Made from Slidev Starter Template
  Presentation slides for the [CRM Solutions: Client Management Made Simple](https://www.meetup.com/the-tech-chasm/events/305383057/) talk hosted by [The Tech Chasm](https://thetechchasm.com).

  Presented by [Jan Mahinda Sri](https://www.linkedin.com/in/jan-mahinda-sri-485472112) and [Mumtahin Farabi](https://www.linkedin.com/in/mfarabi/).

# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
exportfilename: crm-solutions-the-tech-chasm
colorSchema: dark
favicon: "https://avatars.githubusercontent.com/u/193661266?s=200&v=4.svg"
fonts:
  sans: JetBrains Mono
  serif: JetBrains Mono
  mono: JetBrains Mono
---

<h1><span class="text-amber-500"> CRM Solutions:</span> Client Management Made <span class="text-yellow-400">Simple</span></h1>

 By [Jan Mahinda Sri](https://www.linkedin.com/in/jan-mahinda-sri-485472112) and [Mumtahin Farabi](https://www.linkedin.com/in/mfarabi/)

<div class="flex space-x-4 w-full justify-center">
<a href="https://www.meetup.com/the-tech-chasm/events/305383057/" target="_blank" rel="noopener noreferrer" >
<img src="https://cdn.worldvectorlogo.com/logos/meetup-1.svg" class="size-10"/>
</a>

<a href="https://www.instagram.com/thetechchasm/" target="_blank" rel="noopener noreferrer" >
<skill-icons-instagram />
</a>

<a href="https://www.linkedin.com/company/the-tech-chasm/" target="_blank" rel="noopener noreferrer" >
<logos-linkedin-icon />
</a>

<a href="https://www.youtube.com/@thetechchasm" target="_blank" rel="noopener noreferrer" >
<logos-youtube-icon />
</a>

<a href="https://github.com/the-tech-chasm" target="_blank" rel="noopener noreferrer" >
<skill-icons-github-dark />
</a>
</div>


<!-- <div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10"> -->
<!--   Press Space for next page <carbon:arrow-right /> -->
<!-- </div> -->

<!-- <div class="abs-br m-6 text-xl"> -->
<!--   <button @click="$slidev.nav.openInEditor" title="Open in Editor" class="slidev-icon-btn"> -->
<!--     <carbon:edit /> -->
<!--   </button> -->
<!--   <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn"> -->
<!--     <carbon:logo-github /> -->
<!--   </a> -->
<!-- </div> -->

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

<h1 class="text-amber-500"> 👋 Welcome </h1>

About Us

<iframe src="https://thetechchasm.com" class="w-full h-40vh" />

---
transition: fade-out
---

<h1 class="text-amber-500"> 👋 Speakers </h1>

<div class="w-full flex justify-center space-x-4">

<ProfileCard 
  profileImage="https://media.licdn.com/dms/image/v2/D4E03AQH8dPF9DfS60Q/profile-displayphoto-shrink_800_800/B4EZN5PtBEGQAc-/0/1732905980746?e=1743033600&v=beta&t=01GUfNMdLnikADWLRlK4ZsrVdbq6NbQBtl1Je_sEQV0"
  name="Jan Mahinda Sri"
  role="SDR"
  companyLogo="https://www.veem.com/wp-content/themes/veem-theme/public/images/veem-logo.svg"
  companyLink="https://www.veem.com/"
  companyName="Veem"
  description="Founder & Professional Yapper @ The Tech Chasm"
  :socialLinks="[
    { url: 'https://www.linkedin.com/in/jan-mahinda-sri-485472112/', icon: 'logos-linkedin-icon', class: 'text-xl text-blue-600 hover:text-blue-800' },
    { url: 'https://www.veem.com/', icon: 'i-mdi-web', class: 'text-xl hover:text-gray-800' },
    { url: 'https://github.com/janchasm', icon: 'logos-github-icon', class: 'text-xl text-gray-600 hover:text-gray-800' },
    { url: 'https://www.instagram.com/janmahinda', icon: 'logos-instagram-icon', class: 'text-xl text-pink-500 hover:text-pink-600' },
    { url: 'https://thetechchasm.com', icon: 'i-mdi-earth', class: 'text-xl text-green-600 hover:text-green-700' }
  ]"
/>

<ProfileCard 
  profileImage="https://media.licdn.com/dms/image/v2/D4E03AQFpxJLWWAf_Sw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730870018543?e=1743638400&v=beta&t=aWQZ6AO9aK65LoIyp6XHBwuB8RaqrCd4NsyJ1oXGiqo"
  name="Mumtahin Farabi"
  role="SWE"
  companyLogo="https://media.licdn.com/dms/image/v2/D560BAQHO_PK_d28WgA/company-logo_100_100/company-logo_100_100/0/1723738302750?e=1746057600&v=beta&t=aPBu9bHxasv8gLUC5PqgKIFirdE_yQveWZRnOgXrz8k"
  companyLink="https://www.wtconsulting.xyz"
  companyName="ChartHouse Labs"
  description="Intern that made the slides & Guest Speaker"
  :socialLinks="[
    { url: 'https://www.linkedin.com/in/mfarabi', icon: 'logos-linkedin-icon', class: 'text-xl text-blue-600 hover:text-blue-800' },
    { url: 'https://www.veem.com/', icon: 'i-mdi-web', class: 'text-xl hover:text-gray-800' },
    { url: 'https://github.com/mfarabi619', icon: 'logos-github-icon', class: 'text-xl text-gray-600 hover:text-gray-800' },
    { url: 'https://www.instagram.com/farabi.01', icon: 'logos-instagram-icon', class: 'text-xl text-pink-500 hover:text-pink-600' },
    { url: 'https://mfarabi.dev', icon: 'i-mdi-earth', class: 'text-xl text-green-600 hover:text-green-700' }
  ]"
/>
</div>

---
transition: fade-out
---

<h1 class="text-amber-500">Part 1 - The SDR Perspective</h1>

<!-- <iframe src="https://prezi.com/view/4CZtcnqXFwMk5qy5johd/" title="Prezi Slides"></iframe> -->

[Presented by Jan](https://prezi.com/view/4CZtcnqXFwMk5qy5johd/)

---
transition: fade-out
---

<h1 class="text-amber-500">Part 2 - Cracking the Sales Code ⚙️</h1>

Presented by Farabi

---
transition: fade-out
---

<h1 class="text-amber-500">👋 Background</h1>

<span class="text-center flex items-center space-x-2">
    <p class="text-lg text-gray-300 font-medium">2nd year CS @</p>
<a href="https://carleton.ca/" target="_blank" rel="noopener noreferrer" >
  <img src="https://github.com/user-attachments/assets/3c1609c5-f47f-4e9f-9003-372c7b82a6dd" class="h-auto w-20">
  </a>, Minor in Business
</span>

<span class="text-center flex items-center space-x-2">
Tech entertainer -&nbsp; 
<a href="https://www.instagram.com/techwithfarabi/" target="_blank" rel="noopener noreferrer" >
<skill-icons-instagram/> @techwithfarabi
</a>
</span>

<div class="flex flex-wrap gap-2 mt-2">
  <img src="https://github.com/user-attachments/assets/886d17ad-a25c-4f31-b39d-512753f78920" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/b1233166-829f-45d2-a792-47fe259b4168" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/c47f8369-b5b9-40d4-b730-c22116744996" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/0ba6cd55-2dc9-49b4-9699-c13769e45f99" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/5d84d918-ef2f-461a-a0ec-c618fbf4c166" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/aa2f8f96-4774-4617-bcb4-ab967ab08c88" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/7d3cb417-33e2-4eb7-a3bd-910eff87010c" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/b4962240-c274-46e8-bd7d-1cfc0fd38225" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/7cab75e8-167b-4d35-964f-cebef4258b49" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/9630c715-e3d6-4f07-9e3d-7292cad37074" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/3e96634d-c09f-4be8-ab95-05194ba9bd37" alt="image" class="w-32 h-auto">
  <img src="https://github.com/user-attachments/assets/2cf16316-91a1-4329-aa4a-a5d6f3822e6c" alt="image" class="w-32 h-auto">
</div>

---
transition: fade-out
---

<h1 class="text-amber-500">👋 Background</h1>
  
<div class="grid grid-cols-2 gap-4 items-start w-full">
  <div class="flex flex-col items-center space-y-6">
    <a href="https://ciena.com/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/4/45/Ciena_logo.svg"
        alt="Ciena Logo"
        class="w-full max-w-xs h-auto"
      />
    </a>
    <img
      src="https://github.com/user-attachments/assets/7f2ff050-d4ec-4e77-8651-2b9adcdb0b2b"
      alt="Additional Image 1"
      class="w-full max-w-xs h-20"
    />
    <img
      src="https://github.com/user-attachments/assets/d758f49e-f78e-46fb-a57f-07210ecd734b"
      alt="Additional Image 2"
      class="w-full max-w-xs h-auto"
    />
  </div>

  <div class="flex flex-col items-center space-y-6">
    <a href="https://www.blueplanet.com/" target="_blank" rel="noopener noreferrer">
      <img
        src="https://github.com/user-attachments/assets/b223b59f-ed21-4e40-bdb0-04ad7a340b76"
        alt="Blue Planet Logo"
        class="w-full max-w-xs h-30"
      />
    </a>
    <img
      src="https://github.com/user-attachments/assets/916a45dd-b8d6-423d-acfa-498e525cc643"
      alt="Additional Image 3"
      class="w-full max-w-xs h-auto"
    />
  </div>
</div>

---
transition: fade-out
---

<h1 class="text-amber-500">👋 Background</h1>

<div class="space-y-4">
<a href="https://www.emids.com/" target="_blank" rel="noopener noreferrer" >
  <img src="https://www.emids.com/wp-content/themes/emids/img/emids-white-teal.svg" class="h-auto w-40">
  </a>
  
  <iframe src="https://www.emids.com/insights/digital-front-door-solution-for-a-rapid-access-addiction-medicine-clinic/" class="w-full h-40vh"/>
</div>

---
transition: fade-out
---

<h1 class="text-amber-500">Student Clubs & Not-for-Profits</h1>

<div class="flex justify-center items-center space-x-12">
  <div class="flex flex-col space-y-3 items-center">
    <a href="https://scesoc.ca" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://www.scesoc.ca/wp-content/uploads/2020/05/cropped-SCESoc_Logo_Design_Yellow_2.png" alt="SCESoc Logo">
    </a>
    <a href="https://2023.hackthehill.com/" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://2023.hackthehill.com/Logos/hackthehill-logo.svg" alt="Hack the Hill 2023 Logo">
    </a>
    <a href="https://2024.cusec.net/" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://2024.cusec.net/_next/static/media/primary_logo_white.ef348b7d.svg" alt="CUSEC 2024 Logo">
    </a>
    <a href="https://2024.hackthehill.com/" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://2024.hackthehill.com/Logos/hackthehill-logo.svg" alt="Hack the Hill 2024 Logo">
    </a>
    <a href="https://www.ieeespac.ca/" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://www.ieeespac.ca/assets/twilight-design-system/ieee_spac_logo_vertical_no_year.svg" alt="IEEE SPAC Logo">
    </a>
    <a href="https://ieeecanada.org" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://ieeecanada.org/wp-content/uploads/2024/02/ieee_ca_logo-1.png" alt="IEEE Canada Logo">
    </a>
    <a href="https://cuhacking.ca" target="_blank" rel="noopener noreferrer">
      <img class="h-10" src="https://cuhacking.ca/assets/cuhacking-logo-1-DgcuCcxm.svg" alt="CU Hacking Logo">
    </a>
  </div>

  <div class="flex flex-col space-y-3 items-center">
    <img class="h-12" src="https://github.com/user-attachments/assets/e53acbc4-b823-4d1d-a0a9-7ac051fab881" alt="Image 1">
    <img class="h-12" src="https://github.com/user-attachments/assets/59229067-1021-4066-9bc3-547159e508f5" alt="Image 2">
    <img class="h-12" src="https://github.com/user-attachments/assets/559d7408-cb72-4833-b59e-a5cbcbc0be22" alt="Image 2">
    <img class="h-12" src="https://github.com/user-attachments/assets/b229f31c-f783-49f4-845b-b2c840997ee1" alt="Image 2">
    <img class="h-12" src="https://github.com/user-attachments/assets/c1e4539c-62e3-4c5f-a6c7-a391b4205c96" alt="Image 2">
    <img class="h-12" src="https://github.com/user-attachments/assets/c9ad7c45-e053-41e1-a8d7-e82a5f242398" alt="Image 3">
    <img class="h-12" src="https://github.com/user-attachments/assets/4aed2588-6579-466d-963e-2331aba51b27" alt="Image 3">
  </div>
</div>

---
transition: fade-out
---

<!-- # 👋 Background -->

<!-- <div class="flex"> -->

<!-- <a href="https://www.linkedin.com/posts/ceox1day-canada_ceox1day-mentorship-leadership-activity-7253087439697719296-aHpH/?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" > -->
<!--   <img src="https://github.com/user-attachments/assets/451dde6c-a5db-4775-aa7e-0c4cbde220a3"> -->
<!--   </a> -->
  
<!--   - Won both of Ottawa's largest Hackathons -->

<!--   <div class="flex"> -->
<!-- <a href="https://gadget.dev/blog/uottahack-the-gadget-challenge" target="_blank" rel="noopener noreferrer" > -->
<!--   <img src="https://github.com/user-attachments/assets/0a706da9-bb72-47ab-9adc-9f970306a46a"> -->
<!--   </a> -->
<!-- <a href="https://www.figma.com/deck/1Xgt3GlpPbU4oiCLFxOSef/Snhack-Rover-Slide-Deck?node-id=1-23&node-type=slide&t=qNboMIT3egTQbHiB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer" > -->
<!--   <img src="https://github.com/user-attachments/assets/a1ebd984-d80a-4d7a-ba7f-5f3e392e338c"> -->
<!--   </a> -->
<!--   </div> -->
<!-- </div> -->

<!-- --- -->
<!-- transition: fade-out -->
<!-- --- -->

# 🤔 Motivation

  - Faced the same problems everywhere
- Needed to go from 🪙 to 💰
- Put technical ability to use
- How?

| Strategy |              Difficulty                                       |         Quality          | 
|---- | --------------------------------------------------- | --------------------------- |
| 1. 🤖 Browser Automation| 😭 |  🗑️  |
| 2. 🧑‍💻 Create Your Own | 🤨 | ⚙️ |
| 3. 🛖 Self-Host Open-Source Alternative | 🤗 | ✨ |

---
transition: fade-out
---

# 🤖 Browser Automation

<span class="text-center flex items-center space-x-2">
<a href="https://playwright.dev" target="_blank" rel="noopener noreferrer" >
  <img src="https://playwright.dev/img/playwright-logo.svg" class="w-20 h-auto">
  </a>
    <p class="text-lg text-gray-300 font-medium">Playwright</p>
</span>

- Works on all browsers
- Made by the team behind Google Chrome
  
- Alternatives
  - [Cypress](https://www.cypress.io/)
  - [Selenium](https://www.selenium.dev/)
  - [Robot](https://robotframework.org/)

---
transition: fade-out
---

# 🧑‍💻 Create Your Own 
<div class="flex justify-around items-start space-x-12">
  <!-- First Column -->
  <div class="flex flex-col items-center space-y-4">
<span class="text-center flex items-center space-x-2">
<a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" >
  <img src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" class="w-20 h-auto">
  </a>
    <p class="text-lg text-gray-300 font-medium">Jira</p>
</span>
    <img src="https://github.com/user-attachments/assets/b766b28c-38fc-4df2-81b9-9eb7d86dda28" alt="Jira Logo" class="w-full h-auto">
  </div>

  <!-- Second Column -->
  <div class="flex flex-col items-center space-y-4">
<span class="text-center flex items-center space-x-2">
<a href="https://notion.so" target="_blank" rel="noopener noreferrer" >
  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" class="w-20 h-auto">
  </a>
    <p class="text-lg text-gray-300 font-medium">Notion</p>
</span>
    <img src="https://github.com/user-attachments/assets/5c53de2e-1314-460c-bcdf-d92c02524715" alt="Notion Logo" class="w-full h-auto">
  </div>
</div>

---
transition: fade-out
---


# 🧑‍💻 Create Your Own 

- [Google Sheets + Apps Script API](https://developers.google.com/apps-script/overview)

  <iframe className="mt-4 w-full h-[400px]" allowFullScreen src="https://drive.google.com/file/d/1frqbRzHBwET4g3jsmSzhFMZZMJhfmd9m/preview" width="640" height="480" allow="autoplay"/>
  
---
transition: fade-out
---


# 🧑‍💻 Create Your Own - Feature Comparisons


| Feature                           | Jira Software (Cloud) | Jira Work Management (Cloud) | Jira Software (Data Center) | Trello   | ClickUp  | Monday   | Notion   | OpenProject |
|-----------------------------------|-----------------------|------------------------------|-----------------------------|----------|----------|----------|----------|-------------|
| User limit                        | ❌ 10                   | ❌ 10                          | ✅                          | ✅       | ✅       | ❌ 2       | ✅       | ✅          |
| Customizable card fields          | ✅                    | ✅                           | ⚠️ Max 3                    | ✅       | ✅       | ✅       | ✅       | ✅          |
| Easily add columns and statuses   | ✅                    | ✅                           | ❌                          | ✅       | ✅       | ✅       | ✅       | ✅          |
| Card is easy to create            | ✅                    | ✅                           | ❌                          | ✅       | ✅       | ✅       | ✅       | ✅          |
| GitHub Integration                | ✅                    | ✅                           | ✅                          | ❌       | ✅       | ❌       | ✅       | ✅          |
| Dashboard                         | ✅                    | ⚠️ Poor quality             | ❌                          | ✅       | ✅       | ⚠️ Configuration required | ⚠️ Configuration required | ✅ |
| Calendar                          | ✅                    | ✅                           | ❌                          | ✅       | ✅       | ✅       | ✅       | ✅          |
| Table/List View                   | ✅                    | ✅                           | ❌                          | ✅       | ✅       | ✅       | ✅       | ✅          |
| Timeline View/Gantt Chart         | ✅                    | ✅                           | ❌                          | ✅       | ✅       | ✅       | ✅       | ✅          |
| Mobile App                        | ✅                    | ✅                           | ✅                          | ✅       | ✅       | ❌       | ✅       | ✅          |
| Desktop App                       | ✅                    | ✅                           | ✅                          | ✅       | ✅       | ❌       | ✅       | ✅          |

---
transition: fade-out
---

# 🧑‍💻 Create Your Own - Price Comparisons 



| Feature                                | Jira Software (Cloud) | Jira Work Management (Cloud) | Trello         | ClickUp  | Monday            | Notion | OpenProject                    |
|----------------------------------------|-----------------------|------------------------------|----------------|----------|-------------------|--------|--------------------------------|
| Pricing link                           | Jira Software pricing | Jira Work Management Pricing | Trello pricing | Pricing  | Pricing           | Pricing| Enterprise Edition             |
| Annual billed price (70 users)         | $8150                | $5000                        | N/A            | $7.00    | $13               | N/A    | Enterprise Edition must be requested |
| Monthly billed price (70 users)        | $8.15                | $5.00                        | $13.26         | $10.00   | $17               | $8     | Enterprise Edition must be requested |
| Discount (%)                           | 75                   | 75                           | 75             | TBD      | First 10 users free + rest 70% off | 100%   | N/A                            |
| (Discounted) Annual billed price (70 users)| $2037.50            | $1250                        | N/A            | TBD      | $2340             | N/A    | TBD                            |
| (Discounted) Monthly billed price (70 users)| $2.04             | $1.25                        | $3.32          | TBD      | $3060             | $0     | TBD                            |
| User limit                             | Unlimited            | Unlimited                    | Unlimited      | Unlimited| 100               | Unlimited | Unlimited                   |
| Customizable card fields               | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Easily add columns and statuses        | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Card is easy to create                 | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| GitHub Integration                     | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Dashboard                              | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Calendar                               | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Table/List View                        | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Timeline View/Gantt Chart              | ✅                   | ✅                           | ✅             | ✅       | ✅                | ✅     | ✅                             |
| Mobile App                             | ✅                   | ✅                           | ✅             | ✅       | ✅                | ❌     | ✅                             |
| Desktop App                            | ✅                   | ✅                           | ✅             | ✅       | ✅                | ❌     | ✅                             |

---
transition: fade-out
---

# 🛖 Self-Host Open-Source Alternative

- [Twenty](https://twenty.com/)

<iframe src="https://twenty.com/" class="w-full h-40vh"/>

---
transition: fade-out
---

# 🛖 Self-Host Open-Source Alternative

- [Dolibarr](https://www.dolibarr.org/)

---
transition: fade-out
---

# 🚀 Bonus: Make your own but easier
- [Appsmith](https://www.appsmith.com/)

---
transition: fade-out
---

<h1 class="text-amber-500">🙏 Special Thanks</h1>

<div class="w-full flex justify-center space-x-4">


<ProfileCard 
profileImage="https://media.licdn.com/dms/image/v2/D4E03AQFJq3sdEu_QoA/profile-displayphoto-shrink_800_800/B4EZRHgBZJHgAc-/0/1736366366436?e=1743638400&v=beta&t=6MWYqr8jbSPwo43NRzBGuSVKs5Fob9ieZUjckMtyVOM"
  name="Barento Muhedin"
  role="Software Developer"
  companyLogo="https://avatars.githubusercontent.com/u/193661266?s=200&v=4.svg"
  companyLink="https://www.thetechchasm.com/"
  companyName="The Tech Chasm"
  description="Co-Host"
  :socialLinks="[
    { url: 'https://www.linkedin.com/in/barento/', icon: 'logos-linkedin-icon', class: 'text-xl text-blue-600 hover:text-blue-800' },
    { url: 'https://www.thetechchasm.com/', icon: 'i-mdi-web', class: 'text-xl hover:text-gray-800' },
    { url: 'https://github.com/builtbybarento', icon: 'logos-github-icon', class: 'text-xl text-gray-600 hover:text-gray-800' },
    { url: 'https://www.instagram.com/', icon: 'logos-instagram-icon', class: 'text-xl text-pink-500 hover:text-pink-600' },
    { url: 'https://builtbybarento.com', icon: 'i-mdi-earth', class: 'text-xl text-green-600 hover:text-green-700' }
  ]"
/>

<ProfileCard  profileImage="https://media.licdn.com/dms/image/v2/D5603AQEu4O1s2wLtWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675632036641?e=1743638400&v=beta&t=Eit5AyUd7sZJUthubNcR_6LN57m7TLnxhQSsX9tS4SI"
  name="Raiyan Aziz"
  role="Big Data Engineer" companyLogo="https://media.licdn.com/dms/image/v2/D4E0BAQHKZq0MwGlMlw/company-logo_200_200/company-logo_200_200/0/1735050831467/health_canada_logo?e=1746057600&v=beta&t=E6luBHnYQ4oPOirXhvUKZG3qqg315kOmx_8nHkvii2c"
  companyLink="https://www.canada.ca/en/health-canada.html"
  companyName="Health Canada"
  description="Photography & Videography for the event"
  :socialLinks="[
    { url: 'https://www.linkedin.com/in/barento/', icon: 'logos-linkedin-icon', class: 'text-xl text-blue-600 hover:text-blue-800' },
    { url: 'https://www.thetechchasm.com/', icon: 'i-mdi-web', class: 'text-xl hover:text-gray-800' },
    { url: 'https://github.com/builtbybarento', icon: 'logos-github-icon', class: 'text-xl text-gray-600 hover:text-gray-800' },
    { url: 'https://www.instagram.com/', icon: 'logos-instagram-icon', class: 'text-xl text-pink-500 hover:text-pink-600' },
    { url: 'https://thetechchasm.com', icon: 'i-mdi-earth', class: 'text-xl text-green-600 hover:text-green-700' }
  ]"
/>


<ProfileCard  profileImage="https://media.licdn.com/dms/image/v2/D4E03AQFGMctfcqqjRg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730779698898?e=1743638400&v=beta&t=EvY0_F8BYovZPOQabz9GRmZKV-MF4OEcGZPWZNzLSw0"
  name="Altin Rexhepaj"
  role="Senior Software Engineer"
  companyLogo="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  companyLink="https://www.cisco.com/"
  companyName="Cisco"
  description="Providing valuable feedback for presentation rehearsals."
  :socialLinks="[
    { url: 'https://www.linkedin.com/in/altinrexhepaj/', icon: 'logos-linkedin-icon', class: 'text-xl text-blue-600 hover:text-blue-800' },
    { url: 'https://www.thetechchasm.com/', icon: 'i-mdi-web', class: 'text-xl hover:text-gray-800' },
    { url: 'https://github.com/', icon: 'logos-github-icon', class: 'text-xl text-gray-600 hover:text-gray-800' },
    { url: 'https://www.instagram.com/', icon: 'logos-instagram-icon', class: 'text-xl text-pink-500 hover:text-pink-600' },
    { url: 'https://thetechchasm.com', icon: 'i-mdi-earth', class: 'text-xl text-green-600 hover:text-green-700' }
  ]"
/>

</div>

<!-- --- -->
<!-- src: ./pages/starters/slides.md -->
<!-- hide: false -->
<!-- --- -->
