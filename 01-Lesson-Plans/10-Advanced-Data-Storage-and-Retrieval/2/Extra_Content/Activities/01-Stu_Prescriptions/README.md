# Prescriptions

This activity allows students to practice using the SQLAlchemy ORM by defining a `Prescription` class.

## Instructions

* Your tasks for this activity are to use the SQLAlchemy ORM to define a `Prescription` class, and then use a `session` to commit prescription data to an in-memory SQLite database.

* Start by writing the necessary imports and boilerplate.

  * Be sure to create

* Next, create a `Prescription` class. It should keep track of the following information:

  * The **name** of the drug the script is for. E.g.: `"Amoxicillin"`

  * The **strength** of each dose in milligrams. E.g.: `25.5`

  * The number of **doses per administration**. This is the "number of pills" a patient would take at each administration of the drug.

    * For example, `2` doses per administration implies the patient is to take two pills whenever the drug is administered.

  * The **route of administration**. E.g.: `"Oral"`, `"Intravenous"`, etc.

  * The number of **administrations per day**. This is how many times the patient is to take the drug over the course of the day. E.g.: `"Twice daily"`.

  * The **total quantity to dispense**. This is the total number of pills/volume of solution the pharmacist filling the prescription is supposed to dispense. E.g: `"120"`.

  * The **refill limit**. This is the number of times the patient can use this prescription. E.g.: `3`.

  * The **refill frequency**. This is the frequency with which the patient can seek refills. E.g.: `"Monthly"`.

* Once you've created your `Prescription` class, instantiate it, and use a `session` to save the new instance to the database.

  * Remember that this requires you to create an engine; create a `Prescriptions` table; and use a `session` object to add and commit your script object to the database.

## Hints

* For help creating the `Prescription` class, refer to the documentation on [Declaring a Mapping](http://docs.sqlalchemy.org/en/latest/orm/tutorial.html#declare-a-mapping).

* For help interacting with the database, refer to the documentation on [Creating a Session](http://docs.sqlalchemy.org/en/latest/orm/tutorial.html#creating-a-session).
