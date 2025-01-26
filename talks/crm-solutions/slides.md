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

# CRM Solutions: Client Management Made Simple
Presented by [Jan Mahinda Sri](https://www.linkedin.com/in/jan-mahinda-sri-485472112) and [Mumtahin Farabi](https://www.linkedin.com/in/mfarabi/)

<div class="flex space-x-4 w-full justify-center">
<a href="https://www.meetup.com/the-tech-chasm/events/305383057/" target="_blank" rel="noopener noreferrer" >
<img src="https://cdn.worldvectorlogo.com/logos/meetup-1.svg" class="size-10"/>
</a>

<a href="https://www.instagram.com/thetechchasm/" target="_blank" rel="noopener noreferrer" >
<logos-instagram-icon/>
</a>

<a href="https://www.linkedin.com/company/the-tech-chasm/" target="_blank" rel="noopener noreferrer" >
<logos-linkedin-icon />
</a>

<a href="https://www.youtube.com/@thetechchasm" target="_blank" rel="noopener noreferrer" >
<logos-youtube-icon />
</a>

<a href="https://github.com/the-tech-chasm" target="_blank" rel="noopener noreferrer" >
<logos-github-icon />
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

# 👋 Welcome

Overview of what we'll be covering.

<Toc text-sm minDepth="1" maxDepth="2" />

<!--
Here is another comment.
-->

---
transition: fade-out
---

# 👋 Introduction


## Jan Mahinda Sri

- Sales Development Representative (SDR) @ [Veem](https://www.veem.com/)
- Professional Yapper

## Mumtahin Farabi
- 2nd year CS @ Carleton University - Minor in Business
- Interned @ Ciena, and Emids
- Currently at ChartHouse Labs
- Tech Entertainer 
  - [@techwithfarabi](https://www.instagram.com/techwithfarabi/)

---
transition: fade-out
---

# 🤔 Motivation
- Involved with student clubs, not-for-profits, and startups
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
- [Playwright](https://playwright.dev/)
  - Works on all browsers
  - Made by the team behind Google Chrome
  
- Alternatives
  - [Cypress](https://www.cypress.io/)
  - [Selenium]()
  - [Robot]()

---
transition: fade-out
---

# 🧑‍💻 Create Your Own 

- [Jira]()

![Image](https://github.com/user-attachments/assets/b766b28c-38fc-4df2-81b9-9eb7d86dda28)
- [Notion]()
- [Google Sheets + Apps Script API]()

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


transition: fade-out
---

# 🛖 Self-Host Open-Source Alternative

- [Twenty](https://twenty.com/)
- [Dolibarr](https://www.dolibarr.org/)
- []

# 🚀 Bonus: Make your own but easier
- [Appsmith](https://www.appsmith.com/)
- []()

<!-- --- -->
<!-- src: ./pages/starters/slides.md -->
<!-- hide: false -->
<!-- --- -->
