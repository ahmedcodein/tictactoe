# 1. Test Result

This document is devoted to provide a detailed test summary conducted for the Tic Tac Toe project.
The website went through multiple tests through out the development stage. The results of this file, however, cover only the final round of tests. 

##### 1.1 Google Lighthouse

The result of Lighthouse tool tests for both mobile and screen are presented below.

###### Mobile Test
![Lighthouse tool mobile test resutl](documentation/images/lighthouse-mobile.png)

###### Disktop Test
![Lighthouse tool desktop test resutl](documentation/images/lighthouse-desktop.png)

##### 1.2. Web Accessibility Evaluation (Wave) Tool

The result of the Wave Evaluation Tool test is presented in the figure below:

![Wave Evaluation Tool test resutl](documentation/images/wave-evaluation.png)

##### 1.3. W3C Markup Validation Service

The result of W3C Markup Validation Service for the HTML file is shown below:

![W3C Markup Validation Service test resutl](documentation/images/html-w3c.png)

##### 1.4. W3C CSS Validation Service

The result of W3C CSS Validation Service for the CSS file is shown below:

![W3C CSS Validation Service test resutl](documentation/images/css-w3c.png)

##### 1.5. JSHint

The following captures show the result of jshint test result before fixing the warnings.

- JSHint test result before the fixing the warnings

![JShint test result](documentation/images/jshint.png)

- JSHint test result after fixing the warnings

![JShint test result](documentation/images/jshint2.png)

###### Resolved Warnings

1. The undefined variables warnings are solved by declaring the variables using LET keyward for variable declaration.
2. The first warrning of ""Functions declared within loops referencing an outer scoped variable" is resolved using forEach loop instead of for loop. The solution is adapted from [BlackJack GitHub Repo](https://github.com/dnlbowers/blackjack).
3. Expected an assignment or functin call warning is solved by using if statement.

###### Unresolved Warning:

The second warning of "Functions declared within loops referencing an outer scoped variable" is not resolved due to the complexty of this function. The solution would require more time than what is availble to the author for project submission. Hence, this is left for future task. Nevertheless, the starting point is to replace the for loop to forEach loop.

##### 1.6. Device Test

The game is tested in different devices (Mobiles, Laptops and Desktop) and different operating systems (Windows 10 and Android). The presentation on all those devices shows no apparent issue. Where applicable, the game is also tested on those devices in landscape and portrait modes.

##### 1.7. Browser Test

The game is tested in the following browsers:

1. Google Chrome
2. Firefox
3. Edge

No issue is reported.

Return to [readme.md](readme.md).