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

**Planned Steps**

Step 1 - Setup intial framework

Step 2 - Create code to access the URL, select the Questions, select filter and sorting.

Step 3 - Extract the data from the first 50 records.

Step 4 - Validate the information for the first 50 records.

Step 5 - Change to get the information frmo first 100 records. (note that this may be easier to get all records before validating the data.

*Done to this point*

Step 6 - Clean up the code and incorporate page Objects as appropriate.

Step 7 - Add code to export extracted data to a text file. 

Step 8 - Add code to add a debug utility that will output information to the console when running in debug mode. 


### Thoughts, notes, and observations
Steps 1 & 2 were simple and I was quickly able to resolve the errors within the files in the page-objects folder. 


Step 3 was hard and after about 1/2 day, I decided to see if ChatGPT could help.  It was able to give me the context of how to do it and I incorporated the code from ChatGPT into my code. However I had to ask for additional clarifications and refine my question. 

   *The first result provided me with code that returned one record.

   *I adjusted the question and got code that returned 4 questions.

   *The third adjustment to the question addressed the need to scrol down to get all 50 questions.

   *In this process I had to ask where 'querySelector' came from and found out it comes from the DOM. I learned something new there.

   *After finally getting the data from the first 50 questions I realized that the time stamp information was being returned as blank. After some investigation (without ChatGPT) I was able to adjust the code to get the time stamp.

**At this point, step 3 was done.**


Step 4 wasn't too bad to accomplish. i used a combination of playwright documents and chatGPT in order to accomplish this step. While doing the work I decided that I need to add code to output the extracted data to a text file. I also have some debug lines that would be useful to output when in debug mode but are currently commented out. This resulted in me adding 2 more steps to this project but I did not implement at this point.


Step 5 appears to address the project objectives but the **CODE IS UGLY!!!!** And it does not output to file. That will be done in step 7.

I made a copy of the code after step 5 and saved it as 'stackoverflowTestOriginal.spec.ts.

If I was limited in time and had to move on in order to get a release out, this would be good enough; but for long term usage and maintenance it is not good. There are all kinds of improvements that could be made in order to exercise the filters and pagnation by using variables. I will try and keep that in mind as I clean up the code in the next steps.
