# Guidelines for Extract, Transfer, Load (ETL) Project

This document contains guidelines, requirements, and suggestions for the Extract, Transfer, Load (ETL) Project.

## Extract, Transform, Load (ETL) Project Purpose
There is a lot of very important and useful data available these days, but it is often dispersed among multiple data sources and not well organized. **Extracting** the data from it's sources, **transforming** it by cleaning or reformatting it, and **loading** or storing the resulting data into a well designed database is a critical process for data-driven organizations. This process is referred to as ETL. 

This project will allow you to demonstrate your ability to gather data, manipulate it, and organize it in into a database. This project does **not** include any data analysis. The purpose of this project is to create a well ordered, useful database that could be utilized by an organization. Databases resulting from ETL are often the starting point for an organization's data analysis.

## Project Process

#### **Project Proposal**

Before you start writing any code, remember that you only have a short time to complete this project. It is designed so that you should be able to complete it during class hours.

In a work setting the main deliverable from an ETL project is the final database. When drafting your project proposal, think about what kind of database might be useful to a hypothetical business or organization. Think about the different data sources that you know how to access. You may create a PostgreSQL, MongoDB or SQLite database.

Your project proposal should contain the following:

* A brief description of your final database
* Why your final database will be useful to a hypothetical organization
* A list your data sources
* A brief summary of the three ETL steps you will take to create this database
* A description of what each team member will be responsible for

Take advantage of your Instructor and TA support during office hours and class project work time. They are a valuable resource and can help you stay on track.

#### **Project Work**

After you have received approval for your project proposal, perform ETL on the data. Make sure to plan and document the following:

* The sources of data that you will extract from.
* The type of transformation needed for this data (cleaning, joining, filtering, aggregating, etc).
* The type of final production database to load the data into (PostgreSQL, MongoDB or SQLite).
* The final tables or collections that will be used in the production database.

You will be required to submit a final technical report with the above information and steps required to reproduce your ETL process.

#### README - Project Report

There is no presentation for this project. Instead, your grade will be based on your GitHub's README. Your README must include, at a minimum:

* Your ETL process:
	* **E**xtract: your original data sources and how the data was formatted (CSV, JSON, pgAdmin 4, etc).
	* **T**ransform: what data cleaning and transformation was required.
	* **L**oad: the final database, tables/collections, and why this was chosen.

* All necessary steps to recreate your database when someone clone's your repository.
  * What dependencies are needed to run the code?
  * What configurations must be made? for PC? for Mac?
  * Is Chrome needed?
  * What files to run in what order?
  * Think of the instructional team as a bunch of toddlers who need step-by-step instructions.

#### **Team Effort**

Due to the short timeline, teamwork will be crucial to the success of this project! Work closely with your team through all phases of the project to ensure that there are no surprises at the end of the week.

Working in a group enables you to tackle more difficult problems than you'd be able to working alone. In other words, working in a group allows you to **work smart** and **dream big**. Take advantage of it!

## Project Requirements

* Your project must use 2 or more sources of data. At least one data source **cannot** be a CSV. The following sites may be good sources of data [data.world](https://data.world/) and  [Kaggle](https://www.kaggle.com/).

* You will create a well organized PostgreSQL, MongoDB or SQLite database. You must include the reasoning for which type of database in your README.

* You must include an erd for a SQL database or a schema for the collection(s) in a MongoDB (ask the instructional staff if you need help).

* You should include example queries that a user could make of your database, demonstrating your use case.

* You must include a comprehensive README detailing your work throughout the three phases of ETL and instructions on how to recreate your process.
 
* Each member of the team is required to make **at least** 20 commits to GitHub.

## Project Schedule

#### Wednesday 6/23/2021
* Introduce ETL Project
* Divide into groups
* Submit Project Proposals to Instructional Staff

#### Saturday 6/26/2021
* Project Proposal discussions with Instructional Staff if needed
* Project work

#### Monday 6/28/2021
* Project work
* Submit project material to Bootcampspot by 11:59 PM, Monday 6/28/2021

