# Cypress-Test-Automation

Use the below command to run the test ->
Open your git-bash and type in given command
node_modules/.bin/cypress run --spec cypress/integration/Tests/*.js --browser chrome

Running above command will run all the test cases inside Tests folder and save the reports in report folder.
Mochawesome is used for generating the reports (test-run-report.html is the final report)
Chrome is used for running test

Test Summary and Test Execution Report has been added in the project.

Design Pattern for the project is Page Object Model. PageLayer/Object Reportoire class and TestLayer classes are separated.
Build done on Jenkins passing the git url in source git.

Test cases automated as part of Web Automation using Cypress are listed below.

1. Category Test:
 Steps : 
  Open https://www.amazon.com/
  Go to Categories list
  Choose category 'Smart Home'
  Choose sub-category category 'Home Entertainment'
  Choose sub-category 'Televisions'
  Verify the total number of results match the total displayed products.
   
2. Product Details Test:
 Steps : 
  Navigate to https://www.amazon.com/
  From Search bar, chose "Electronics" and Search for "Apple"
  Click on particular product displayed
  Verify stock, price, rating, and shipping details for the product
  Click and verify add to cart feature.
  
  
   
  
