# Doctor Decoder

In this activity, you will use `read_html` from Pandas to scrape a Wikipedia article. You will then use the resulting DataFrame to convert a list of medical abbreviations to their full description.

## Instructions

* Use Panda's `read_html` to parse the URL.

* Find the medical abbreviations DataFrame in the list of DataFrames as assign it to `df`.

  * Assign the columns `['abb', 'full_name', 'other']`

* Drop the `other` column from the DataFrame.

* Drop the header row (the first row) and set the index to the `abb` column.

* Loop through the list of medical abbreviations and print the abbreviation along with the full description.

  * Use the DataFrame to perform the lookup.

- - -

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
