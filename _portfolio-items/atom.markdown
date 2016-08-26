---
layout: portfolio-item
title:  "Usability Improvements for Atom.io"
date:   2016-07-25 11:39:32 -0400
categories: ux design atom
img: images/portfolio/atom/atom.jpg
excerpt:  While the text editor of choice is a fierce topic of discussion for developers, Atom is I've come to love and use. For this case study, I take a look at the site that promotes Atom and hopefully uncover some difficult-to-spot usability problems, while making the site better and more accesible though my contributions.
---

![Atom Logo]( {{site.baseurl}}/images/portfolio/atom/atom.jpg )

## Description:

While the text editor of choice is a fierce topic of discussion for developers, Atom is I've come to love and use. For this case study, I take a look at the site that promotes Atom and hopefully uncover some difficult-to-spot usability problems, while making the site better and more accesible though my contributions.

## Challanges:

1. Take the current Atom.io page and attempt to understand the goals and aesthetic desisions.
2. With the current design in mind, make usability and accessibility improvements without compromising the vision of the site.
3. Attempt to promote cross-site consistency with elegant solutions.

## State of the Homepage

Part of what makes this UX audit intersting is that the issues are subtle.  The overall design and aesthetic of this site is beautiful (like most of the things GitHub does). Also, in terms of speed and mobile friendliness, the atom.io homepage scores very high.  

## Homepage Accessibility Problems

**[Severe] An element's ID must be unique in the DOM**
This is a simple one, but I've found that a lot of new designers and developers (and even some experienced ones as well) simply miss this.  IDs are for a single, unique element in the DOM, while classes can be for multipe items.  So, if you give an item an ID, you should only have one instance of that ID, even if the duplicate is essentially the same.

In the homepage's case it appears that the duplicate ID is actually a duplicate element - and it is not apparently clear if it is intentional or not.  But whether duplicating the ID was a concious choice to fix a problem, or simply a duplicate in code - it still would be best to stick to the unique element rule.
**[Severe] Controls and media elements should have labels (1)**
These buttons don't have labels, which can make things tricky with a screen reader.  Can labels be set to be invisible and still be accessible for screen readers?
**[Warning] Text elements should have a reasonable contrast ratio (14)**
This is a big one! Can I get a stat about visual impairments? Achromatopsia, for example, is a visual impairment that effects about 1 in every 33,000 people. That might not seem like many, but for a user who has that disorder (or a similar one), proper contrast makes a tremendous difference.  
INCLUDE PICTURE WITH DISABILITY, CURRENT DESKTOP, AND ONE WITH IMPROVED CONTRAST
**[Warning] The web page should have the content's human language indicated in the markup (1)**

While there were a few more accessibility issues I discovered, I think those were the most noteworthy.  Sometimes with accessibility checking software, you'll get errors that don't actually have an impact on the end user, but that the software flags none-the-less.  I heard it said once by someone (I deeply wish I remembered who) that there is no accessibility promised land.  That is so true, as with so much in this field.  It is up to us to make difficult decisions with the best infomation we have and the best stack for the job.  And that is often vastly different between projects.
