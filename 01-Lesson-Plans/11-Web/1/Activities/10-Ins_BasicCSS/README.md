# Live Code Basic CSS

## Instructions

* When prompted by the slide deck, create a new HTML file and show the class some examples of how CSS can be used to change a page's styling.

  * **Stick with very simple styling for now!** Show your class how to change coloring, size, font boldness/italics, and alignment. We will delve into more complex CSS styling soon enough.

  * An example of an HTML page with some CSS styling has been provided within [04-BasicCSS](Solved/quick-example-internal-css.html) for you to use, but it is recommended that you live code all of the CSS so that your students get a good example of its usage.

    * The same file minus the CSS styling can be found in [04-BasicCSS](Unsolved/quick-example-no-CSS.html) as well.

* To start, alter the style of the page within a pair of `<style>` tags that are contained within the HTML file.

  * Show them how you can create a "stylesheet" which contains CSS rules that can then be applied to multiple tags/elements.

  * Make certain to point out the syntax of CSS once more
    ![CSS Syntax](Images/CSS-Syntax.gif)
    * Selector points to the HTML element you would like to style
    * Declaration blocks are bounded by curly-brackets
    * Each declaration block is separated by semicolons
    * Each declaration includes a CSS property and a value that is separated by a colon

* Explain and show your students how they can also change the style of specific elements within the HTML tags themselves using "inline styling".

  * Point out that this is more tedious than just having a separate stylesheet, as inline styling applies only to the individual tags the `style=""` attribute is placed inside. It also takes away the benefits you get from having your content and presentation separate from one another, making the code that much harder to maintain.

* Once you have described the syntax of CSS and shown off how CSS stylesheets work, open up a new file, save it as `stylesheet.CSS`, place all of the CSS you have written into this file, and then explain how you can reference external stylesheets in HTML using a `<link>` tag.

  * Ask the class why it might be better to have an external stylesheet as opposed to having all of your CSS styling contained within the HTML file.

  * External stylesheets can be changed out more easily than having to rewrite every CSS rule
