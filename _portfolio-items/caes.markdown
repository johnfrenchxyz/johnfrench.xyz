---
layout: portfolio-item
title:  "UGA CAES Redesign"
date:   2016-07-25 11:39:32 -0400
categories: design UGA CAES
img: images/portfolio/caes/UGA-CAES-portfolio.png
excerpt: The web presence of the College of Agricultural & Environmental Sciences at the University of Georgia is a complex network of sites, pages, and databases that was in dire need of a massive overhaul.  Through in-depth research audits, UI/UX redesign, thoughtful web development choices in line with modern standards, and extensive testing, we were able to completely repackage and re-deliver both the public facing site as well as the internal CMS.
---

![Growing grapes advertising the UGA College of Ag and Environmental Sciences]( {{site.baseurl}}/images/portfolio/caes/UGA-CAES-portfolio.png )

## Description:

As the lead web developer, my responsibility was to take the initial template created by the design team and make recommendations about adherence to modern web development standards.  Once the design was finalized, I was responsible for converting the PDF mockups into functional HTML/CSS/JS pages.  Lastly, I assisted in converting those pages into our Java-based CMS, Adobe Experience Manager and assisted with testing, bug fixes and maintenance.  

*Status: The site is currently in internal use only and is scheduled for launch at the beginning of November. The final stages of mockups can be showed below.  Additional, because of policies of the University of Georgia I am unable to directly share the GitHub repository, but the compiled mock ups can be viewed.*

<a href="http://johnfrenchxyz.github.io/UGA/" class="portfolio-button">View the CAES Redesign Elements (Mockups)</a>

## Challenges:

1.  Sheer volume.  As with many large-scale websites, the UGA CAES network has thousands upon thousands of pages and individual users, some of whom rely on daily access to our site in order to do their jobs.  Our update, therefore, had to be pushed out without interrupting current services. It was also imperative that we provided thorough documentation and training to our internal staff.
2.  After the audit, we had to develop a new template that met all the guidelines of a modern web platform.  Once the design was in place, I was responsible for taking the mockups and converting them into a function HTML/CSS/JS template for review.  It was my responsibility to make sure everything was usable and accessible, and could fit clearly into the responsive nature of the new site.
3.  Once the template was completed, we had to develop dozens of individual page components that would eventually be used by admins to add content to their sites and pages.

## The Starting Point:

To understand the effectiveness of the update, it is important to understand what we were updating. While it was advanced at the time, the template has become wildly outdated in every way.  

![The old CAES hompage]( {{site.baseurl}}/images/portfolio/caes/current-caes-homepage.png)

The template was not responsive and it did not reflect a modern aesthetic that users expect when they visit a website.  Many of the techniques used in the development of the old site are also currently obsolete, such as image mapping for header links.  While the site was accessible, even by modern standards, the user experience of using an outdated site was poor, and it was a concern that the design would be unappealing to new or prospective students thinking about attending the university.

## Our Progress:

The new site achieves a much cleaner and aesthetically pleasing design.  It was also crafted to give users immediate access to information that would be relevant to them, such as news and events.

![The new CAES homepage]( {{site.baseurl}}/images/portfolio/caes/new-caes-homepage.png ){: .center-img}

From the faculty's perspective the site is also significantly more conducive to a productive workflow.  Previously, nothing about the web presence was centralized or unified.  This meant that if an employee moved from one department to another, the fragmentation may cause there to be two records of the employee in two different departments.  Rather than assigning the tedious task of maintenance to the web managers in each department, we built our site’s architecture around our centralized databases.  For personnel, this means a change will immediately be reflected across all pages.

From the faculty's perspective the site is also significantly more conducive to a productive workflow.  Previously, nothing about the web presence was centralized or unified.  This meant that if an employee moved from one department to another, the fragmentation may cause there to be two records of the employee in two different departments.  Rather than assigning the tedious task of maintenance to the web managers in each department, we built our site’s architecture around our centralized databases.  For personnel, this means a change will immediately be reflected across all pages.

Lastly, we solved another architectural problem related to the storage of images and documents.  If several departments needed a PDF to make available to users, there would be separate instances of the PDF across all of their websites. If one department noticed a typo, corrected it, and then re-uploaded it to their site - the other instances of the PDF would still have the same error.  This was obviously unacceptable.  By carefully designing the infrastructure within our CMS, we were able to create an environment where files can be stored, shared, and pushed to all of our sites.  If a change is made to that document, it is instantly pushed to all sites without any additional work to be done.

## Modular Component Design:

We wanted to make creating new sites, pages, and content as easy as possible for content managers.  Due to the nature of the faculty/staff at the University of Georgia, most of the people who are in charge of maintaining a web page have had no formal web design training.  With  the use of Adobe Experience Manager, we thoughtfully designed an entire toolset for our content managers so that they can simply drag, drop, and customize components to create pages.  We have designed and implemented everything from layout and column control components to lists that display personnel or a simple YouTube component.  [A complete list of the components can be found here](http://www.johnfrenchxyz.github.io/UGA/).

![A screenshot of the CAES Event Sidebar Component]( {{site.baseurl}}/images/portfolio/caes/caes-components.png ){: .center-img }
