# Vote Star Wars

In this activity, you will use D3 to create click handlers for upvotes and downvotes.

![vote-star-wars.gif](Images/vote-star-wars.gif)

## Instructions

* Use d3 to select the `upvote` and `downvote` buttons on the page.

* Create click handlers for the upvote and downvote buttons.

* The click handlers should do the following:

  * Select the current vote count from the h3 tag.

  * Increment or decrement the count depending on which button was selected.

  * Update the vote count h3 tag using D3.

## Bonus

* Use an array to save information about each vote:

  * Store whether it was an "upvote" or "downvote".

  * Store the current count at each click.

  * Use an array of arrays or an array of objects to store the data.

## Hints

* Don't forget to use the `.on` function to attach the click handlers to the buttons.

* You will need one click handler for each button.

* You will need to use `parseInt` to convert the h3 vote count to a number before you can add or subtract from it.

------

© 2021 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

