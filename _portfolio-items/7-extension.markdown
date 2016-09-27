---
layout: portfolio-item
title:  "UGA Extension Redesign"
date:   2016-07-25 11:39:32 -0400
categories: design atom
img: images/portfolio/extension/extension-portfolio.png
excerpt: UGA Extension is a branch of the University of Georgia that focuses primarily on community outreach and research.  With over a hundred different offices all over the state, Extension is a massive organization with a large online presence.  The needs of each office were sometimes vastly different, and my team and I had to develop a template and web platform that would work well for all users and all faculty and staff to increase overall productivity and help keep the budget stable.

---

![the extension logo above an image of cows]( {{site.baseurl}}/images/portfolio/extension/extension-portfolio.png )

## Desctiption:

UGA Extension is a branch of the University of Georgia that focuses primarily on community outreach and research.  With over a hundred different offices all over the state, Extension is a massive organization with a large online presence.  The needs of each office were sometimes vastly different, and my team and I had to develop a template and web platform that would work well for all users and all faculty and staff to increase overall productivity and help keep the budget stable.

In a short study we conducted after the completion of redesign, we discovered that almost all offices saw an increase in community engagement through the website because of design decisions we made.  In particular, highlighting the office contact information and making it easier for users to get in touch with their office has led to an increase in services across Extension.


## The Challenges:

1.  Design a template within the parameters of the Extension style guidelines that would serve the diverse needs of each county office.
2.  Develop centrally controlled “starter” content, in the event that a county office doesn’t have the content of their own, or the staff to be updating content frequently.
3.  Design the CMS experience to be as user-friendly as possible, especially for people who have no web design or development experience.

![the UGA extension county template]( {{site.baseurl}}/images/portfolio/extension/county-template.png )

## Flexible Templating:

The size and scale of each Extension county office can be drastically different.  One county could have ten employees and have a massive outreach program, master gardening school, 4-H Youth programs, and more - while a different county office might be made up of only two people doing community outreach.

Similarly, the web presence of each of the county sites varied from five pages to five hundred pages.  Both needed to fit seamlessly into the same consistent template.  This presented a particular difficulty when it came to the navigational structure of our design.  We decided to go with a vertical side-navigation, because there was no way for us to determine the number of top-level pages the counties would need.  With a horizontal menu, you quickly run out of screen real-estate, but a vertical menu can continue indefinitely, and is easily supplemented by off-canvas mobile navigation, or something of the sort. The vertical navigation also allowed us to greatly increase the amount of sub-pages we could allow users to create.  With a horizontal navigation (especially using dropdowns), you can only show one or two child-level pages before it starts to create a very frustrating user experience.  

So, for our navigation design, we made clear and distinct parent and children levels to help users navigation and to help the content managers understand the structure of their content visually.

![the progression of navigation items from parent to child pages]( {{site.baseurl}}/images/portfolio/extension/nav-progression.png )

## Dynamic Components:

With the Extension redesign, one of the biggest problems we faced was the difficulty for our web managers to generate new content.  While some of the larger Extension offices had a dedicated web manager, most of the offices around the state don’t have the resources to hire a new employee.  The responsibility of maintaining the website would then fall to someone who had little or no experience doing so, which makes it hard to generate content, especially with all the other responsibilities each employee had.

We wanted to try and alleviate this stress from the offices with less resources, without limiting the functionality of the offices who had a dedicated web manager.  We accomplished this task through the use of dynamic components and some centrally managed content.

When a county created their new site for the first time, it was preloaded with relevant and helpful content we would pull from various University and Extension databases.  The content was deemed relevant and helpful by leadership from each department, and a county could have a fully functional site, with new and dynamic content coming in every day, without having to touch their site at all.  We could pull content from blogs, online Extension publications, new articles, events, and more.  Lastly, since a portion of this content was centrally maintained, any update or change would immediately get pushed to all sites that pulled the information, increasing the freshness and adoption of content.

For offices who had their own content that they wanted to update regularly, it was as simple as dragging and dropping their own components in place of our pre-populated ones.  They still had access to all of the same features and tools, such as pulling from databases and blogs, but they are able to choose the source from which it came and have more control over the filtering options, etc.  Below is an example of how userss could simply drag and drop a "Personnel" component to have a list of their current staff load on whatever page their choose, without any coding or typing whatsoever.

![a dynamic contact information component showing the employees of the office]( {{site.baseurl}}/images/portfolio/extension/component.png ){: .center-img }

Furthermore, if an employee's position changes or they are transferred to a different office, as soon as their official status is changed in the central database, the update is immediately pushed to all sites and all pages with instances of that employee.  This is a tremendous time-saving managemnt tool.  Our web managers no longer have to worry about details like this and can focus on creating the content that is important to their user.

## Designing for CMS:

Instead of simply designing and laying out all content in the traditional sense, we had to design modular components that would look good in any order, on any screen or column size, and with any content inside them.

This presents interesting challenges, like building containers that can handle images of any aspect ratio, without becoming to wide or tall, creating buttons or title bars that would work well if the title was one word or two sentences, and more.  We have used Adobe Experience Manager as our primary CSM.  While I would have advised going with an open source CMS, working with this Java-based platform definitely taught me a lot about what I like in a CMS and what drives me crazy.  But most importantly, I think it taught me that user experience design does not simply exist in the realm of the public facing features.  A lot of the work I did on this project was improving the tools and settings and control panels of various components to make them more intuitive for our web managers, which, in turn helped produce better content for the users themselves.

*Note: because of policies of the University of Georgia I am unable to directly share the GitHub repository, but the compiled mock ups can be viewed.*

<a href="http://johnfrenchxyz.github.io/UGA/Extension/county-template/" class="portfolio-button">View Homepage Mockup</a>
