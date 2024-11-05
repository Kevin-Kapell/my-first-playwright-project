# My First Playwright Project

   **WORK IN PROGRESS**

## Purpose
This is my Playwright automation which I created based on a job application exercise. The goal of this automation is to interact with Stack Overflow's Questions page and extract relevant data while applying specific filters.

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

While taking the course and applying for jobs, I came across a job that required the applicant to complete and submit a Playwright exercise prior to applying for the job. The gist of the exercise is listed in the Project Description section above. This project does not address that exercise in detail but provides me with a project starting point to practice what I learned in the course and to expand upon that learning.


### The Process Plan


**Planned Steps**

Step 1 - Setup initial framework

Step 2 - Create code to access the URL, select the Questions, select filter and sorting.

Step 3 - Extract the data from the first 50 records.

Step 4 - Validate the information for the first 50 records.

Step 5 - Change to get the information from first 100 records. Note that this may be easier to get all records before validating the data.

*Done to this point*

Step 6 - Clean up the code and incorporate page Objects as appropriate.

Step 7 - Add code to export extracted data to a text file. 

Step 8 - Add code to add a debug utility that will output information to the console when running in debug mode. 

Step 9 - Get this code running using an index file as the point of entry in running the code.


### Thoughts, notes, and observations

Steps 1 & 2 were simple, and I was quickly able to resolve the errors within the files in the page-objects folder. 

I started out taking what I now feel was the wrong initial steps for this project. I started the test file and then multiple page object files to support classes without yet knowing what those classes needed to be. This presented some errors in the POMs and other areas of the code. I decided it is best to change course and get the basic test code created and running, then use the POM files as part of the code cleanup. I believe the initial structure is still good and ready for me to use as the project progresses.
The next step with the initial test code was to write it with minimal constants and no use of page object classes. As I wrote the code I could see where the code could be cleaned up by use of additional constants.


Step 3 was hard and after about 1/2 day, I decided to see if ChatGPT could help. I am new to using the various AI tools available so this also provides a chance for me to see how it can help speed automation development. ChatGTP was able to give me the context of how to do it and I incorporated the code from ChatGPT into my code. However, I had to ask for additional clarifications and refine my questions. Submitting questions to AI is almost like writing code for it in order to get all of the information I want. 

The following is my progress using ChatGTP.

   *The first result provided me with code that returned one record.

   *I adjusted the question and got code that returned 4 questions.

   *The third adjustment to the question addressed the need to scroll down to get all 50 questions.

   *In this process the code had a call to 'querySelect' which I wanted to understand what it does. I determined that it was not part of Playwright. I queried ChatGTP for where the command originates from and learned it is a built-in JavaScript method for selecting elements from the DOM (Document Object Model) using CSS selectors. 

   *After finally getting the data from the first 50 questions I realized that the time stamp information was being returned as blank. After some investigation (without ChatGPT) I was able to adjust the code to get the time stamp.

**At this point, step 3 was done.**


Step 4 wasn't too bad to accomplish. I used a combination of playwright documents and chatGPT to accomplish this step. While doing the work I realized it would be better to output the extracted data to a text file. I also have some debug lines that would be useful to output when in debug mode but are currently commented out. This resulted in me adding 2 more steps to this project, but I did not implement at this point.


Step 5 appears to address the project objectives, but the **CODE IS UGLY!!!!** I see several places that I could clean up by adding functions and moving some code to POMs.

I made a copy of the code after step 5 and saved it as 'stackoverflowTestOriginal.spec.ts so I had a comparison for the future.

If I was limited in time and had to move on to get a release out, this would be good enough; but for long term usage and maintenance it is not good. There are several improvements that could be made to exercise the filters and pagination by using variables and make this better suited for testing the various filter options. I will try and keep that in mind as I clean up the code in the next steps.


After chatting with a developer friend of mine, I learned the value of using an Index file as a single point of entry into running the code. This is new to me as this is typically used for continuous integration (CI) pipelines, which I had not previously created automation for. This sent me into brief side activity to get what I had running via the index.ts file. I again created a copy of the original code, and I made the changes to use the Index.ts file in this new code file (stackoverflowTestCopy.spec.ts). I could have created a new branch for this work instead of making a copy of the file, but I like the easy access of having both files for now. 
Unfortunately, I ran into a snag. When running via the Index.ts file, it opens the URL but then hangs. Something new to learn and figure out. Added this as step 9 in my process but it may move to being the next step.

I then jumped into trying to clean up the warnings for some areas of the code that did not stop it from running but showed the annoying red underlines in Visual Code. ChatGPT to the rescue again to educate me as to the cause and solutions. The advantage of not having a deadline enables me to jump around to doing work that grabs my interest and furthers my knowledge now. 
