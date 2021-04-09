# 09 Node.js Homework: Professional README Generator

## Your Task

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Your task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
G̶I̶V̶E̶N̶ a̶ c̶o̶m̶m̶a̶n̶d̶-̶l̶i̶n̶e̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ t̶h̶a̶t̶ a̶c̶c̶e̶p̶t̶s̶ u̶s̶e̶r̶ i̶n̶p̶u̶t̶
W̶H̶E̶N̶ I̶ a̶m̶ p̶r̶o̶m̶p̶t̶e̶d̶ f̶o̶r̶ i̶n̶f̶o̶r̶m̶a̶t̶i̶o̶n̶ a̶b̶o̶u̶t̶ m̶y̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ r̶e̶p̶o̶s̶i̶t̶o̶r̶y̶
T̶H̶E̶N̶ a̶ h̶i̶g̶h̶-̶q̶u̶a̶l̶i̶t̶y̶,̶ p̶r̶o̶f̶e̶s̶s̶i̶o̶n̶a̶l̶ R̶E̶A̶D̶M̶E̶.̶m̶d̶ i̶s̶ g̶e̶n̶e̶r̶a̶t̶e̶d̶ w̶i̶t̶h̶ t̶h̶e̶ t̶i̶t̶l̶e̶ o̶f̶ m̶y̶ p̶r̶o̶j̶e̶c̶t̶ a̶n̶d̶ s̶e̶c̶t̶i̶o̶n̶s̶ e̶n̶t̶i̶t̶l̶e̶d̶ D̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶,̶ T̶a̶b̶l̶e̶ o̶f̶ C̶o̶n̶t̶e̶n̶t̶s̶,̶ I̶n̶s̶t̶a̶l̶l̶a̶t̶i̶o̶n̶,̶ U̶s̶a̶g̶e̶,̶ L̶i̶c̶e̶n̶s̶e̶,̶ C̶o̶n̶t̶r̶i̶b̶u̶t̶i̶n̶g̶,̶ T̶e̶s̶t̶s̶,̶ a̶n̶d̶ Q̶u̶e̶s̶t̶i̶o̶n̶s̶
W̶H̶E̶N̶ I̶ e̶n̶t̶e̶r̶ m̶y̶ p̶r̶o̶j̶e̶c̶t̶ t̶i̶t̶l̶e̶
T̶H̶E̶N̶ t̶h̶i̶s̶ i̶s̶ d̶i̶s̶p̶l̶a̶y̶e̶d̶ a̶s̶ t̶h̶e̶ t̶i̶t̶l̶e̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶
W̶H̶E̶N̶ I̶ e̶n̶t̶e̶r̶ a̶ d̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶,̶ i̶n̶s̶t̶a̶l̶l̶a̶t̶i̶o̶n̶ i̶n̶s̶t̶r̶u̶c̶t̶i̶o̶n̶s̶,̶ u̶s̶a̶g̶e̶ i̶n̶f̶o̶r̶m̶a̶t̶i̶o̶n̶,̶ c̶o̶n̶t̶r̶i̶b̶u̶t̶i̶o̶n̶ g̶u̶i̶d̶e̶l̶i̶n̶e̶s̶,̶ a̶n̶d̶ t̶e̶s̶t̶ i̶n̶s̶t̶r̶u̶c̶t̶i̶o̶n̶s̶
T̶H̶E̶N̶ t̶h̶i̶s̶ i̶n̶f̶o̶r̶m̶a̶t̶i̶o̶n̶ i̶s̶ a̶d̶d̶e̶d̶ t̶o̶ t̶h̶e̶ s̶e̶c̶t̶i̶o̶n̶s̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶ e̶n̶t̶i̶t̶l̶e̶d̶ D̶e̶s̶c̶r̶i̶p̶t̶i̶o̶n̶,̶ I̶n̶s̶t̶a̶l̶l̶a̶t̶i̶o̶n̶,̶ U̶s̶a̶g̶e̶,̶ C̶o̶n̶t̶r̶i̶b̶u̶t̶i̶n̶g̶,̶ a̶n̶d̶ T̶e̶s̶t̶s̶
W̶H̶E̶N̶ I̶ c̶h̶o̶o̶s̶e̶ a̶ l̶i̶c̶e̶n̶s̶e̶ f̶o̶r̶ m̶y̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ f̶r̶o̶m̶ a̶ l̶i̶s̶t̶ o̶f̶ o̶p̶t̶i̶o̶n̶s̶
T̶H̶E̶N̶ a̶ b̶a̶d̶g̶e̶ f̶o̶r̶ t̶h̶a̶t̶ l̶i̶c̶e̶n̶s̶e̶ i̶s̶ a̶d̶d̶e̶d̶ n̶e̶a̶r̶ t̶h̶e̶ t̶o̶p̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶ a̶n̶d̶ a̶ n̶o̶t̶i̶c̶e̶ i̶s̶ a̶d̶d̶e̶d̶ t̶o̶ t̶h̶e̶ s̶e̶c̶t̶i̶o̶n̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶ e̶n̶t̶i̶t̶l̶e̶d̶ L̶i̶c̶e̶n̶s̶e̶ t̶h̶a̶t̶ e̶x̶p̶l̶a̶i̶n̶s̶ w̶h̶i̶c̶h̶ l̶i̶c̶e̶n̶s̶e̶ t̶h̶e̶ a̶p̶p̶l̶i̶c̶a̶t̶i̶o̶n̶ i̶s̶ c̶o̶v̶e̶r̶e̶d̶ u̶n̶d̶e̶r̶
W̶H̶E̶N̶ I̶ e̶n̶t̶e̶r̶ m̶y̶ G̶i̶t̶H̶u̶b̶ u̶s̶e̶r̶n̶a̶m̶e̶
T̶H̶E̶N̶ t̶h̶i̶s̶ i̶s̶ a̶d̶d̶e̶d̶ t̶o̶ t̶h̶e̶ s̶e̶c̶t̶i̶o̶n̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶ e̶n̶t̶i̶t̶l̶e̶d̶ Q̶u̶e̶s̶t̶i̶o̶n̶s̶,̶ w̶i̶t̶h̶ a̶ l̶i̶n̶k̶ t̶o̶ m̶y̶ G̶i̶t̶H̶u̶b̶ p̶r̶o̶f̶i̶l̶e̶
W̶H̶E̶N̶ I̶ e̶n̶t̶e̶r̶ m̶y̶ e̶m̶a̶i̶l̶ a̶d̶d̶r̶e̶s̶s̶
T̶H̶E̶N̶ t̶h̶i̶s̶ i̶s̶ a̶d̶d̶e̶d̶ t̶o̶ t̶h̶e̶ s̶e̶c̶t̶i̶o̶n̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶ e̶n̶t̶i̶t̶l̶e̶d̶ Q̶u̶e̶s̶t̶i̶o̶n̶s̶,̶ w̶i̶t̶h̶ i̶n̶s̶t̶r̶u̶c̶t̶i̶o̶n̶s̶ o̶n̶ h̶o̶w̶ t̶o̶ r̶e̶a̶c̶h̶ m̶e̶ w̶i̶t̶h̶ a̶d̶d̶i̶t̶i̶o̶n̶a̶l̶ q̶u̶e̶s̶t̶i̶o̶n̶s̶
W̶H̶E̶N̶ I̶ c̶l̶i̶c̶k̶ o̶n̶ t̶h̶e̶ l̶i̶n̶k̶s̶ i̶n̶ t̶h̶e̶ T̶a̶b̶l̶e̶ o̶f̶ C̶o̶n̶t̶e̶n̶t̶s̶
T̶H̶E̶N̶ I̶ a̶m̶ t̶a̶k̶e̶n̶ t̶o̶ t̶h̶e̶ c̶o̶r̶r̶e̶s̶p̶o̶n̶d̶i̶n̶g̶ s̶e̶c̶t̶i̶o̶n̶ o̶f̶ t̶h̶e̶ R̶E̶A̶D̶M̶E̶
```

## Getting Started

Here are some guidelines to help you get started:

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

## Grading Requirements

This homework is graded based on the following criteria: 

### Deliverables: 20%

* A sample README generated using the application must be submitted.

* Your GitHub repository containing your application code.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality README with description and a link to walkthrough video.


## Review

You are required to submit the following for review:

* A walkthrough video demonstrating the functionality of the application.

* A sample README.md file for a project repository generated using your application

* The URL of the GitHub repository, with a unique name and a README describing the project

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
