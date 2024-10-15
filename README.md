   # My First Playwright Project

   **WORK IN PROGRESS**

## Purpose
This is my first Playwright automation which I created based on a job application exercise. The goal of this automation is to interact with Stack Overflow's Questions page and extract relevant data while applying specific filters.

## Project Description

The automation script performs the following steps:

1. Navigate to the [Stack Overflow](https://stackoverflow.com/questions) Questions page.
2. Apply Filters:
   - Sort the questions by "Newest" using the sort options.
   - Filter the questions to only include those tagged with "javascript".
3. Extract the following data for the first 100 questions:
   - Title of the question.
   - The tags associated with the question.
   - Number of votes.
   - Timestamp indicating when the question was asked.
4. Validate the following:
   - The questions are sorted from newest to oldest based on the timestamp.
   - Each question includes the "javascript" tag.
5. Handle any dynamic content loading, delays, or pagination that Stack Overflow uses to display the questions.

## Thoughts and Actions
### Why this project
I decided to take a Udemy course to learn Playwright as it is a skill many jobs require. Plus, I wanted to learn something new. 
I found the following Udemy course which I highly recommend (and I got it at a discounted price):
[Playwright: Web Automation Testing from Zero to Hero] (https://www.udemy.com/share/109tU03@hDYYlwuBNm0yDaHrBBs4cRvqapfX8OcTH7O6YSsxBCzKugGHSFOjZETP6a51qTfp6Q==/)

While taking the course and applying for jobs, I came across a job that required the applicant to complete and submit a Playwright exercise prior to applying for the job. The gist of the exercise is listed in the Project Description section above. However, I had not completed enough of the course to be comfortable in completing the exercise until now. This project does not address that exercise as there is a part that I have not yet encountered in the course. However, I believe that I have enough knowledge now to get started, thus this project.

### The Process
I started out taking what I now feel was the wrong initial steps for this project. I started the test file and then multiple page object files to support classes without yet knowing what those classes needed to be. I think this was because creating and using classes was the most recent thing I learned from the class. However, the files had errors and no links to the actual tests yet. Once I addressed the errors in the initial classes I created, I decided to change course and get the basic test code created.
The next step with the initial test code was to write it with minimal constants and no use of page object classes. As I wrote the code I could see where the code could be cleaned up by use of additional constants.

-Step 1 - Setup intial framework
-Step 2 - Create code to access the URL, select the Questions, select filter and sorting.
-Step 3 - Extract the data from the first 50 records.
*Done to this point*
-Step 4 - Validate the information for the first 50 records.
-Step 5 - Change to get the information frmo first 00 records. (note that this may be easier to get all records before validating the data.
-Step 6 - Clean up the code and incorporate page Objects as appropriate.

### Notes and observations
Steps 1 & 2 were simple and I was quickly able to resolve the errors within the files in the page-objects folder. 

Step 3 was hard and after about 1/2 day, I decided to see if ChatGPT could help.  It was able to give me the context of how to do it and I incorporated the code from ChatGPT into my code. However I had to ask for additional clarifications and refine my question. 
-The first result provided me with code that returned one record.
-I adjusted the question and got code that returned 4 questions.
-The third adjustment to the question addressed the need to scrol down to get all 50 questions.
-In this process I had to ask where 'querySelector' came from and found out it comes from the DOM. I learned something new there.
-After finally getting the data from the first 50 questions I realized that the time stamp information was being returned as blank. After some investigation (without ChatGPT) I was able to adjust the code to get the time stamp.
At this point, step 3 was done.