---
layout: portfolio-item
title:  "Usability Improvements for Atom.io"
date:   2016-07-25 11:39:32 -0400
categories: ux design atom
img: images/portfolio/atom/atom.jpg
excerpt: While the text editor of choice is a fierce topic of discussion for developers, Atom is one I've come to love and use.  You can [find out more about Atom here](http://www.atom.io).  For this case study, I take a look at Atom's official site and hopefully uncover some difficult-to-spot usability problems, while making the site better and more accesible though my contributions.  What's better than helping improve platforms you love?  
---

![Atom Logo]( {{site.baseurl}}/images/portfolio/atom/atom.jpg )

## Description:

While the text editor of choice is a fierce topic of discussion for developers, Atom is one I've come to love and use.  You can [find out more about Atom here](http://www.atom.io).  For this case study, I take a look at Atom's official site and hopefully uncover some difficult-to-spot usability problems, while making the site better and more accesible though my contributions.  What's better than helping improve platforms you love?

## Challanges:

1. Take the current Atom.io page and attempt to understand the goals and aesthetic desisions.
2. With the current design in mind, make usability and accessibility improvements without compromising the vision of the site.
3. Attempt to promote cross-site consistency with simple solutions.

## State of the Homepage

Part of what makes this UX audit intersting is that the issues are subtle.  Some would probably argue that they are even negligable.  But, to me, **good usability lives in studying the negligable**.  You know, those little features or interactions that subtly drive you crazy each time they happen, but are not big enough to make you delete the app or find a different favorite site.  The overall design and aesthetic of this site is beautiful (like most of the things GitHub does). Also, in terms of speed and mobile friendliness, the atom.io homepage scores very highly.  So, what's the problem?  I think making a few small (and a few big) changes could result in a drastic improvement to the site that I have already come to love so much.   

## Homepage Accessibility Problems

**[Severe] Controls and media elements should have labels (1)**

Labels sort of represent perceived tension between "good design" and "accessible web sites."  A lot of designers I talk to sometimes feel limited in what they are able to do creatively because of usability restrictions.  While I understand that feeling in some ways, I think that **if design is meant to impact people, then good web design should be usable for everyone, in order to impact the largest possible audience.  Good design and accessibility are not mutually exclusive.**  Not having a label on a media or form element is bad for users who rely on screen readers, because it might make it difficult to understand what the element does, or how it functions in the larger context of the site.  But sometimes, a label might get in the way of the design you want to create.  Take this example from Atom.io:

![Example of missing labels on Atom.io]( {{site.baseurl}}/images/portfolio/atom/atom-missing-labels.png )

The element that is missing the label is the play button in the circle on the right of the image.  When you examine this page with a screen reader (in my case, I did a test with ChromeVox) all you hear it say is, "button," which creates obvious confusion.  Now, I agree completely with the instinct of the designer to not have a visible text label because it would ruin the cool effect that the circle creates in the layout.  A good fix for something like this would be to have a label, but only make it visible for screen readers.  For more information on how to create a fix this, [check out this article on invisible text for screen readers](http://webaim.org/techniques/css/invisiblecontent/).     

**[Warning] Text elements should have a reasonable contrast ratio (14)**

This is a big one! [According to the World Health Organization](http://www.who.int/mediacentre/factsheets/fs282/en/), "285 million people are estimated to be visually impaired worldwide: 39 million are blind and 246 million have low vision." Furthermore, colorblindess and related disorders make up an even larger segment of the population. Achromatopsia, for example, is a visual impairment that effects about 1 in every 33,000 people. That might not seem like many, but for a user who has that disorder (or a similar one), proper contrast makes a tremendous difference.  One of the biggest ways I see this come up is in contrast between backgrounds and text elements.  If the contrast is not significant enough, it can become very difficult for some user to distinguish.  Here is an example from the homepage of atom.io as it currently exists:

![The current color contrast of atom.io's homepage]( {{site.baseurl}}/images/portfolio/atom/current-homepage.png )

You can see (especially as the image is a bit smaller than the actual dimension of the site), that some of the text can be difficult to distinguish from the background.  Now, take this example when the same page is run though a Chrome extension that simulates visual impairments:

![The current atom.io page run though a filter that simulates color-impaired vision]( {{site.baseurl}}/images/portfolio/atom/homepage-modified.png )

You can see, that while the difference is subtle, some of the text elements disappear a bit more into the background.  So, what is the correct contrast ratio? Fear not!  [You can just go to this site to check your site's contrast](http://webaim.org/resources/contrastchecker/) to see if it meets the reccomended guidelines.

**[Warning] The web page should have the content's human language indicated in the markup (1)**

This one is great, because sometimes one line of code can fix it! That's right, only one line:

```html
<html lang="en">
```
The human language is important for many reasons, but for accessibility, it can effect the way certain readers like braille readers interact with the content of the page.  This is probably the simplest problem on this list to fix, so build it into your workflow and it will likely come in handy in the future.

**Wrapping Up Accessibility:**

While there were a few more accessibility issues I discovered, I think those were the most noteworthy.  Sometimes with accessibility checking software, you'll get errors that don't actually have an impact on the end user, but that the software flags none-the-less.  I heard it said once by someone (I deeply wish I remembered who) that there is no accessibility promised land.  That is so true, as with so much in this field.  It is up to us to make difficult decisions with the best infomation we have and the best stack for the job.  And that is often vastly different between projects.



**[Severe] An element's ID must be unique in the DOM**
This is a simple one, but I've found that a lot of new designers and developers (and even some experienced ones as well) simply miss it in their education.  IDs are for a single, unique element in the DOM, while classes can be for multipe items.  So, if you give an item an ID, you should only have one instance of that ID, even if the duplicate is essentially the same.

![Example of duplicate IDs on Atom.io]( {{site.baseurl}}/images/portfolio/atom/atom-duplicate-id.png )

In the homepage's case it appears that the duplicate ID is actually a duplicate overlay element, probably just for design purposses - and it is not apparently clear if it is intentional or not.  But whether duplicating the ID was a concious choice to fix a problem, or simply a duplicate in code - it still would be best to stick to the unique element rule.
