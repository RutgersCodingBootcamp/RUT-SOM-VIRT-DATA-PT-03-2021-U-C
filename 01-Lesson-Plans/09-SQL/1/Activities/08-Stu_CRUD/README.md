## Using CRUD: Seek, Create, Update, and Destroy

In this activity, you will be utilizing CRUD operations (Create, Read, Update, Destroy) on the provided data.

### Instructions

* Create a new database named `GlobalFirePower` in pgAdmin.

* Create a table called `firepower` in the `GlobalFirePower` database by copying the code provided in `schema.sql` into a new query window in pgAdmin. Import the data from `GlobalFirePower.csv` using the Import/Export tool.

* Find the rows that have a `ReservePersonnel` of 0 and remove these rows from the dataset.

* Let's find which country only has one `FighterAircraft`, and take note of it.

* Every country in the world at least deserves one `FighterAircraft`—it only seems fair. Let's add one to each nation that has none.

* Oh no! By updating this column, the values within `TotalAircraftStrength` column are now off for those nations! We need to [add 1](https://stackoverflow.com/a/2680352) to the original number but not for the country that already had 1 `FighterAircraft`.

* Find the [Averages](https://www.w3schools.com/sql/sql_count_avg_sum.asp) for `TotalMilitaryPersonnel`, `TotalAircraftStrength`, `TotalHelicopterStrength`, and `TotalPopulation`, and rename the columns with their designated average.

### Bonus

After creating your new nation and some parts of your military strategy, add the average values you calculated to the appropriate columns in the newly created rows. Update their values in any way you wish!
