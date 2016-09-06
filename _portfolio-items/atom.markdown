---
layout: portfolio-item
title:  "Usability Improvements for Atom.io"
date:   2016-07-25 11:39:32 -0400
categories: ux design atom
img: images/portfolio/atom/atom.jpg
excerpt: While the text editor of choice is a fierce topic of discussion for developers, Atom is one I've come to love and use (even as I type this case study right now).  You can [find out more about Atom here](http://www.atom.io).  For this case study, I take a look at Atom's official site and hopefully uncover some difficult-to-spot usability problems, while making the site better and more accesible through my contributions.  What's better than helping improve platforms you love?
---

![Atom Logo]( {{site.baseurl}}/images/portfolio/atom/atom.jpg )

## Description:

While the text editor of choice is a fierce topic of discussion for developers, Atom is one I've come to love and use (even as I type this case study right now).  You can [find out more about Atom here](http://www.atom.io).  For this case study, I take a look at Atom's official site and hopefully uncover some difficult-to-spot usability problems, while making the site better and more accesible through my contributions.  What's better than helping improve platforms you love?

## Disclaimer:

This case study is representative of the atom.io site as it exists in the Fall of 2016.  I plan on taking some of the findings of the case study and submitting them to the Atom team for consideration for future implementations.  But the shape their site may take in the future could be totally different than what they have now.  Lastly, no case study is intended to be a "gotcha" form of negativity.  I use Atom all the time, and their team has made a beautiful website that works very well.  But, as with anything else, all sites need improvements constantly, including mine.  I want to foster a community that can make suggestions for improvements to each other without negativity.  All right, my speech is over, now for the case study:

## Challanges:

1. Take the current Atom.io page and attempt to understand the goals and aesthetic desisions made by design team (who are awesome, by the way).
2. With the current design in mind, make small usability and accessibility improvements without compromising the vision of the site.
3. Attempt to promote cross-site consistency with simple solutions, and bring more functionality to more users.

## State of the Homepage

Part of what makes this UX audit intersting is that the issues are subtle.  Some would probably argue that they are even negligable.  But, to me, **good usability lives in studying the negligable**.  You know, those little features or interactions that subtly drive you crazy each time they happen, but are not big enough to make you delete the app or find a different favorite site.  The overall design and aesthetic of this site is beautiful (like most of the things GitHub does). Also, in terms of speed and mobile friendliness, the atom.io homepage acheives great scores.  So, what's the problem?  I think making a few small (and a few big) changes could result in a drastic improvement to the site that I have already come to love so much.

## Global Consistency

From my analysis of atom.io, I feel that the single biggest improvement would come from global consistency across the various pages of their site.  Currently, the homepage exists as a mobile friendly site that is great to use, and consistent in look and feel to the desktop version.

**Take a look at the current mobile homepage:**

![Example of missing labels on Atom.io]( {{site.baseurl}}/images/portfolio/atom/atom-mobile.png )

**And Compare that to the desktop homepage:**

![Example of missing labels on Atom.io]( {{site.baseurl}}/images/portfolio/atom/current-homepage.png )

As you can see, the homepage is elegantly responsive and well designed.  The feel is consistent enough between mobile and desktop views to provide a great user experience.  But, when I pulled up atom.io on my mobile phone to search for a package, I was suprised to find that when I left the homepage and went deeper, the experience did not feel quite as consistent or responsive.

**The atom.io packages page on mobile:**

![Example of non-responsive package page design from atom.io.]( {{site.baseurl}}/images/portfolio/atom/atom-mobile-packages-mockup.png )

While this screenshot is not exactly a 1/1 ratio, you can hopefully notice how difficult it is to see and interact with certain elements on the screen.  The page ceases to be truly responsive.  I am not sure why there is this departure from the mobile-friendliness of the homepage.  Maybe it was because the search and result system was built elsewhere or with a different codebase and it was problematic to simply move it into the mobile theme - or maybe there is another justification that I am unaware of.  Even if the reason is 100% justifiable, it is also 100% true that the inconsistency between the packages page and the homepage is not ideal for usability.  And practically, when analyzed for mobile friendliness, these pages got only a 75/100 and a 58/100 for mobile speed, while the homepage got 100/100 for mobile-friendliness.

Improving the packages page would be as "simple" as collapsing the collumns of search results into a single column on small screens.  This would improve readability greatly.  It is the small steps and considerations like this that help make sites usabile for everyone.  Even though packages can't be installed using the mobile phone, I still enjoy browsing available packages on my phone and would benefit from a more responsive experience.  Here are some tips to consider when attempting to make a page more mobile-friendly:

- Always remember to [configure the viewport](http://www.w3schools.com/css/css_rwd_viewport.asp).  This can make a big difference for your mobile users, as the viewport will be properly scaled to their device.
- Use legible font sizes. [Read up on font-size best practices here](http://webaim.org/techniques/fonts/#font_size).
- Enable gzip compression for all HTTP requests on your server.  This can be particularly helpful to users on mobile devices, because the faster you are able to load elements of your site, the better the experience will be.  [Read about how to enable compression on your server here](https://developers.google.com/speed/docs/insights/EnableCompression).


## Homepage Accessibility Problems

I read a quote once, and I am embarrased to say I did not write down it's author, but the summary of the thought was, "There is no accessibility promised land in software."  While it is our responsibility as developers to help **all users** access our software, the best-practices of accessibility will always be changing because technology is always changing.  So, the best thing we can do is familiarize ourselves with the current standards to the best of our ability, and then take small steps to push our code and our interfaces to meet those standards.  As they change and adapt, so should we, because everyone deserves fair and equal access to content.  Atom.io, has definitely taken steps to be an accessible site, and I don't want to give the impression that they haven't - but I have identified some room for improvement, and I hope to use those as an educational exercise in this case study.

**[Severe] Controls and media elements should have labels (1)**

In a way, HTML labels represent an abstract tension between "good design" and "accessible web sites."  A lot of designers I talk to sometimes feel limited in what they are able to do creatively because of usability restrictions.  While I understand that feeling in some ways, I think that **if design is meant to impact people, then good web design should be usable for everyone, in order to impact the largest possible audience.  Good design and accessibility are not mutually exclusive.**  Not having a label on a media or form element is bad for users who rely on screen readers, because it might make it difficult to understand what the element does, or how it functions in the larger context of the site.  But sometimes, a label might get in the way of the design you want to create.  Take this example from Atom.io:

![Example of missing labels on Atom.io]( {{site.baseurl}}/images/portfolio/atom/atom-missing-labels.png )

The element that is missing the label is the play button in the circle on the right of the image above.  When you examine this page with a screen reader (in my case, I did a test with ChromeVox) all you hear it say is, "button," which creates obvious confusion and a lack of context.  Now, I agree completely with the instinct of the designer to not have a visible text label because it would ruin the aesthetic effect that the circle creates in the layout.  A good fix for something like this would be to have a label, but only make it "visible" (or readable) for screen readers.  For more information on how to create a fix this, [check out this article on invisible text for screen readers](http://webaim.org/techniques/css/invisiblecontent/).     

**[Warning] Text elements should have a reasonable contrast ratio (14)**

This is a big one! [According to the World Health Organization](http://www.who.int/mediacentre/factsheets/fs282/en/), "285 million people are estimated to be visually impaired worldwide: 39 million are blind and 246 million have low vision." Furthermore, colorblindness and related disorders make up an even larger segment of the population. Achromatopsia, for example, is a visual impairment that effects about 1 in every 33,000 people. That might not seem like many, but for a user who has that disorder (or a similar one), proper contrast makes a tremendous difference.  One of the biggest ways I see this come up is in contrast between backgrounds and text elements.  If the contrast is not significant enough, it can become very difficult for some user to distinguish.  Here is an example from the homepage of atom.io as it currently exists:

![The current color contrast of atom.io's homepage]( {{site.baseurl}}/images/portfolio/atom/current-homepage.png )

You can see (especially as the image is a bit smaller than the actual dimension of the site), that already some of the text can be difficult to distinguish from the background.  Now, take this example when the same page is run through a Chrome extension that simulates visual impairments:

![The current atom.io page run though a filter that simulates color-impaired vision]( {{site.baseurl}}/images/portfolio/atom/homepage-modified.png )

Without the help of color to distinguish elements, the contrast alone is not sufficient to be truly visible.  This is another example of how "good design" and "web accessibility" can be at odds.  So often, I see designs that don't have proper contrast ratios, and understand that the "best design" in terms of aesthetics may not match up with the "best design" in terms of proper contrast.  But can we truly say a design is successful, if a user is not able to read all text elements effecticely. So, what is the correct contrast ratio? Fear not!  [You can just go to this site to check your site's contrast](http://webaim.org/resources/contrastchecker/) to see if it meets the reccomended guidelines.

I beleive that it is best-practice to start mocking up your designs with proper contrast ratios in mind, as it will save you from having to fix these problems later.  I've seen some suggestions of developers providing an alternate version of their page, with a more accessible color palate or a text-only version of the content.  While I can't argue that this solution may be effective in many cases, I would ask that developers include people with visual disabilities or impairments in their user testing for making these decisions.  Sometimes, if accessibility is not a priority, these alternate versions of sites can fall behind in maintenence, and the message the user would subconsciously receive in visiting a poorly maintained version of a site, is that their experience is less important than the average user.  It is absolutely imperative that we consider the emotional implications of our design for all users.

**[Warning] The web page should have the content's human language indicated in the markup (1)**

Declaring the human language on your page is important for many reasons, but for accessibility, it can effect the way certain readers like braille readers interact with the content of the page.  This is probably the simplest problem on this list to fix, so build it into your workflow and it will likely come in handy in the future. It can be remedied by adding a single attribute to the HTML tag.

```html
<html lang="en">
```

The "en" stands for "English," but you should obviously use the language code that matches your page's language.


**Wrapping Up:**

While there were a few more accessibility issues I discovered, I think these were the most noteworthy.  Sometimes with accessibility checking software, you'll get errors that don't actually have an impact on the end user, but that the software flags none-the-less.  And therein lies what I beleive to be the overarching theme of this case study:

**Building a usable site is an ongoing process, even after a site is launched.**

While we as designers and developers can do a lot to ensure that our sites will be useable for everyone, we will inevitably make mistakes, technology will change and present new challanges, and we will constantly be learning techniques.  So, if accessibility isn't a part of your initial design process, start to think about ways in which it can be implemented.  If usability audits or testing don't happen until after you're site is launched, maybe consider doing them much, much sooner.  I find it is the small, ongoing changes that can really make a difference.  In the same way that you might be constantly tweaking code to make it faster, or constantly altering a design to get it pixel-perfect, I encourage everyone to tinker frequently with usability and accessibility in their site.
