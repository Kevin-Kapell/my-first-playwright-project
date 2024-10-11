This is my first playwright automation which I creaed based on a job application exercise.

This automation will perform the following steps:

   1. Navigate to the [Stack Overflow](https://stackoverflow.com/questions) Questions page.
   2. Apply Filters:
      - Sort the questions by "Newest" using the sort options.
      - Filter the questions to only include those tagged with "javascript".
   3. Extract the following data for the first 100 questions:
      - Title of the question.
      - The tags
      - Number of votes.
      - Timestamp indicating when the question was asked.
   4. Validate the following:
      - The questions are sorted from newest to oldest based on the timestamp.
      - Each question includes the "javascript" tag.
   5. Handle any dynamic content loading, delays, or pagination that Stack Overflow uses to display the questions.
