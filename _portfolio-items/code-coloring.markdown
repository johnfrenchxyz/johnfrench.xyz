---
layout: portfolio-item
title:  "Accessible Code Coloring for Jekyll"
date:   2016-07-25 11:39:32 -0400
categories: ux design atom
img: images/portfolio/code/code-coloring.png
excerpt: Sharing code is important. Whether it is a blog post or documentation, having clear code examples is fundamentally important to communication in the developer ecosystem.  That is why I feel it is paramount that these code samples meet modern accessibility standards.  For code samples, contrast is particularly important.  That is why I developed a CSS code theme that meets contrast standards.
---

![Color swatches]( {{site.baseurl}}/images/portfolio/code/code-coloring.png )

## Description:

Sharing code is important. Whether it is a blog post or documentation, having clear code examples is fundamentally important to communication in the developer ecosystem.  That is why I feel it is paramount that these code samples meet modern accessibility standards.  For code samples, contrast is particularly important.  That is why I developed a CSS code theme that meets contrast standards.

<a href="https://github.com/johnfrenchxyz/accessiblecode" class="portfolio-button">View on GitHub</a>

Color often gives meaning and clarity to the different elements of code.  If the colors are too similar, then it might be difficult to find meaning in the code you’re looking at.  Similarly, if the background to foreground contrast ratio is too low, it can become very difficult to read, especially for users that might have visual impairments.

The kicker here is that there is no easy or global solution to this problem because most web platforms have their own way of styling and displaying code.  But I built this one in order to educate and ask yourself if the code snippets on your site are meeting the proper contrast ratios.

Below are some samples of my code coloring theme at work in Jekyll.

### Python:

```python
# Python Code Coloring

import os, copy
n = 8 # board size (even)
board = [['0' for x in range(n)] for y in range(n)]
# 8 directions
dirx = [-1, 0, 1, -1, 1, -1, 0, 1]
diry = [-1, -1, -1, 0, 0, 1, 1, 1]

def InitBoard():
    if n % 2 == 0: # if board size is even
        z = (n - 2) / 2
        board[z][z] = '2'
        board[n - 1 - z][z] = '1'        
        board[z][n - 1 - z] = '1'
        board[n - 1 - z][n - 1 - z] = '2'

def PrintBoard():
    m = len(str(n - 1))
    for y in range(n):
        row = ''
        for x in range(n):
            row += board[y][x]
            row += ' ' * m
        print row + ' ' + str(y)
    print
    row = ''
    for x in range(n):
        row += str(x).zfill(m) + ' '
    print row + '\n'
```

### HTML:

```html
<!-- HTML Code Coloring -->
<html lang="en">
    <head>
        <title>My Awesome Title</title>
    </head>
    <body>
        <div class="test-class">
            <ul>
                <li>List 1</li>
                <li>List 2</li>
            </ul>
            <p>This is a sample paragraph</p>
        <div>
    </body>
</html>
```

### CSS:

```css
/* CSS Code Coloring */
ul {
    list-style: none;
    background: #000000;
    padding: 1em;
    margin: 2em;
}

ul li {
    font-family: sans-serif;
}

ul li:hover {
    background: #2690f4;
}

```

### JavaScript:

```javascript
// JavaScript Code Coloring
function* range(start, end, step) {
	while (start < end) {
		yield start;
		start += step;
	}
}

for (let i of range(0, 10, 2)) {
	console.log(i);
}
```
