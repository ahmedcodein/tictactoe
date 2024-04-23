# Tic Tac Toe

## 1. Introduction

Tic Tac Toe game is an ancient board game. According to Wikipedia, the game goes back to 1300 BC [Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe). The game board is divided into 3-by-3 boxes. The game is designed to be played by two persons. Each person is designated either of two characters/symbols to play with, conventionally, these are O and X. The players then take turns by placing the symbols in one of the nine boxes. Either player is able to place the player's designated symbol on three boxes arranged horizontally, vertically or diagonally is considered the game winner. In case none of the players is unable to do so, the game is then a tie.

![Introduction image, the website presentation on different view screens](documentation/images/introduction.png)

## 2. Development Process

The process followed by the author consists of five phases. These phases are presented below with a detailed account is presented in the subsequent sections.

### 2.1.Research and Selection Criteria

In the research phase the author has conducted a brief search on easy to implement games for the purpose of learning HTML, CSS and JavaScript together. Many resources can be found, the author however settled on the following [Article](https://www.codingnepalweb.com/best-javascript-games-for-beginners/). 
Among the 10 candidates presented in the article, the author chooses to move with Tic Tac Toe game due to three main reasons:
1.	Simple User Interface with minimum graphics
2.	Average logic complexity
3.	Good enough of interactions between the DOM and the JavaScript to become familiar with the concept of DOM manipulation.

### 2.2. Project Objective

From the author's perspective, the main goal of developing this game is to become familiar with JavaScript programming and its interactions with HTML DOM.

#### 2.2.1. Website Owner Objectives

The owner objective is to build an online game that is easy to understand, interface with and play combined with some sort of challenge presented by score accumulation.

#### 2.2.2. Website Visitor Objectives

User objective converges with the site owner's in the sense of finding an online game that is easy to interact with in addition to the provision of some challenge while playing the game by accumulating score when played with a friend. 

### 2.3. Website Requirements

This section describes the general requirements of the game. The author constructs these requirements by translating the aspects briefly reviewed in the previous sections. Subsequently, the author constructs five general design requirements, summarized below:

1. The game design must signal some ancient historical characteristics to reflects a general feeling about it origin
2. The game design consists of three major parts: 
    - Two players each has a symbole of either X or O.
    - A 3-x-3 boxes represents the game board
    - A players' score board to track the records of winning
3. The game design must be simple and easy to navigate as much as possible.
4. The game design must record the score of winning and present it to the user
5. A section in the game page that leads to the author online pages[^1]

[^1]: Although, the last design requirement is not related to the owner’s or visitor’s objective nor to the game design requirements, it is related to sole purpose of pursuing this course, see Project Objective section. That is to connect with people who share the same interests with author in order to exchange ideas, pursue future project collaborations or simply get feedback for improvement on the author’s work.

### 2.4. Planning

This section intents to describe the planning phase of the project. The planning phase consisits of three sub-phases:
- Wireframes/HTML structure
- Styling
- Game Logic

These sub-phases is desicribed in the following subsections. One can think of the subsequent discriptions as a detailed path as to how each of the 5 requirements presented in the previous section is trasformed into a tangable object, i.e the game website.

==During the execution phase of this project, the author deviated a bit from the presented plan in this section. The pivot is related to converting the confirm method when a user presses the reset button to a modal dialog box. As such, the following subsections does not cover this issue since it was not part of the planning. However, the author provides some details on this in the feature section of this report==.  

#### 2.4.1. Wireframes

This section is designed to provide a high-level overview about the early design thinking of the Game website. The main purpose of these wireframes is to aid the design of the HTML website without delving into what style or how the JavaScript interacts with the HTML. The main expected outputs of these wireframes are:

- What is the preliminary layout of the website?
- What is the preliminary structure of the HTML page?
- What is the preliminary naming used for HTML elements IDs and Classes?

##### 2.4.1.1 Preliminary layout of the website

Using Balsamiq Wireframes, the Game page is presented in three different viewing senarios. These are Smartphone, Tablet and Desktop. 

- Smartphone Layout

![Website's layout on smartphone screen](documentation/images/mobile-layout.png)

- Tablet or Desktop Layout

![Website's layout on Tablet or Desktop screens](documentation/images/pc-layout.png)

##### 2.4.1.2 Preliminary structure of the HTML page

Following the wireframes' layout presented on section 2.3.3., the high-level html structure is constructed. The structure is shown in the image below. 

![Website's HTML structure](documentation/images/html-structure.png)

As shown in the figure above, the HTML structure is divided into three parts:

- Header: The header contains the title of the game.
- Main: The main contains three sections, these are: Setup Board, Game Board and Score board.
- Footer: The footer contains two types of information; these are links to the author's LinkedIn and GitHub websites.

##### 2.4.1.3. Preliminary naming used for HTML elements IDs and Classes

The following image is devoted to give additional resolution to the previous subsection by elaborating further on the elements contained in the body of the HTML page. In addition, the image provides further color on the IDs and Classes naming strategy that the author intends to implement to develop the HTML page and subsequently will be used for the page styling and to manipulate the page by the JavaScript code.

![Website's HTML structure](documentation/images/ids-classes-naming.png)

#### 2.4.2. Styling

One of the website requements is to present the game with an ancient charactertic touch. This is to refelct the history of the game origin. Towards achieving this, the author opts to present the game as it is played on an old paper or leather scroll background. To constuct such background, the author uses [ChatGPT](https://chat.openai.com/auth/login?sso) to create the background. The players then use black ink to handright the game board and later the score as the game goes.

##### 2.4.2.1 Color

As you might have already guessed, the background image is used as the basis for color extraction. The process of selection is described below:

1. Color Candidates

The first step is to extract a pallet of candidate colors from the background image. The author used [Coolors](https://coolors.co/fdf6da-dcbf87-dcb36f-ac8144-744b1e-704116-6b350f-210e03) for that matter. The result is presented in the image below.

![Color Candidate](documentation/images/coolors-pallete.png).

2. Color Contrast Evaluation

In order to select the most valid color combination, the author uses [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23fdf6daff%3B%0D%0A%23dcbf87ff%3B%0D%0A%23dcb36fff%3B%0D%0A%23ac8144ff%3B%0D%0A%23744b1eff%3B%0D%0A%23704116ff%3B%0D%0A%236b350fff%3B%0D%0A%23210e03ff%3B%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) to achieve the result. The figure below shows the result of the evaulation[^2].

[^2]: The author add the black color (#000000) to the contrast evaluation to account for the color of the text (the bank ink).

![Contrast Evaluation Resutl](documentation/images/contrast-grid.png)

3. Color Selection

The selection of the color is choosen based on the contrast result. The author choose to select the most reliable result that is going with Cornsilk for font and border lines and Licorice for the footer background.

##### 2.4.2.2 Fonts

Since the intention is to use the a handwriting font style to foster the historical characteristic feeling of the game. The author selects Salsa font. [Google fonts](https://fonts.google.com/specimen/Salsa?query=Salsa) is used to find the aforementioned font and import it to the style sheet.

#### 2.4.3. Game Logic

This subsection describes in abstract terms the process followed by the author to construct the initial plan of creating the JavaScript code. 

The process begins with reviewing the Wireframes to extract the following information:

1. Game Inputs 
2. Game Outputs
3. Game Functions

The author then combins these basic constracts with the general logic of the game to create a step wise explanation as to how the code should be constructed.

### 2.5. Execution

This section is devoted to describing the execution phase of the project. The section starts with listing the technologies used to develop the website. Then it presents the result of conducted tests using different test tools. Another subsection is included to explains some of the bugs found during the execution phase. This subsection also presents some of the issues that are identified which deserve some explanations. The section then concludes with a brief deployment procedure followed by the author to deploy the website.  

#### 2.5.1. Technologies Used

The list of techologies used to develop the Tic Tac Toe game of this project are as follows:

1. Hypertext Markup Language (HTML): markup language
2. Cascading Style Sheets (CSS): Style Sheet language
3. JavaScript: Programming language
4. GitHub: Development Platform 
5. Gitpod: Cloud Development Environment
6. Chrome DevTools: Web Development Tools for testing and debugging
7. Other testing tools: Wave, Lighthouse, W3C and JSHint

#### 2.5.2 Test Resutls

The test results is summrized here in the table below. For detailed disscusions of the test please visit the [test.md](test.md) file. 

| Test ID No. | Test Name | Test Result | Test Comment|
| ----------- |---------- |------------ |------------ |
| 1 | Google Lighthouse | No Errors/Warnings | Mobile and Desktop|
| 2 | Web Accessibility Evaluation (Wave) Tool | No Errors/Warnings | NO Comment|
| 3 | W3C Markup Validation Service | No Errors/Warnings | No Comment|
| 4 | W3C CSS Validation Service | No Errors/Warnings | No Comment|
| 5 | JSHint | Unresolved Warning | "Functions declared within loops referencing an outer scoped variable" is not resolved due to time contraint|
| 6 | Device Test | No Errors/Warnings | Test conducted on Mobiles, Laptops and Desktop, Windows 10 and Android and where applicable: landscape and portrait modes|
| 7 | Browser Test | No Errors/Warnings | Google Chrome, Firefox and Edge|

#### 2.5.3. Bugs

##### 2.5.3.1. Fixed Bugs

List the bugs that were identified and fixed.

##### 2.5.3.2. Unfixed Bugs

Mention any bugs that have not yet been fixed.

## 4. Deployment, Clone and Fork Procedures

The author follows the following procedure for deployment:

1. In the project repository go to settings
2. Under Code and Automation, go to pages
3. Under Build and deployment, choose to deploy from branch
4. Under branch, select main
5. Now select save
6. Wait for couple of minutes to the website to go online

The author follows the following procedure to clone from the GiTHub repo into Gitpod:

1. Go to your repositories 
2. Click on the new created project repository
3. Go to the code in the upper right corner
4. Click on the Code dropdown menu
5. Select local 
6. Select Clone/HTTPs
7. Copy the url provided
8. Open new browser tap
9. Open your Gitpod Workspace
10. Create new workspace
12. Click on select new Repository
13. Paste the url in input window
13. Click continue

For any person who is interest to work on the source code of this project, here is the procedure that needs to be followed to make a fork.

1. Go to ahmedcodein repositories
2. Click on TicTacToc repo
3. In the upper right corener, click of fork drop down menu
4. Click on create new fork
5. Create new fork window opens
6. Select the owner of the repo
7. Add a repo name
8. Add a discription if needed
9. Click create fork 

## 5. Features

This section summarizes the final look of the game website. It discusses each part of the website and provides some colors to its purpose.

### 5.1. Header

This first part of the game website is the header. The header presents with black font the name of the game. See the figure below:

![The header of the website](documentation/images/header.png)

### 5.2. Main Content

The main contains three parts. Each part contains specific functionality trigged either directly by the user or by an event resulted from the user previous action.
#### 5.2.1. The Setup Board

The setup board is divided into two parts. The dashboard and the players characters. See the screenshot below.

![Player character buttons](documentation/images/setupboard.png)

 ##### 5.2.1.1  The Dashboard

 The dashboard is responsible for leading the user as to what needs to be done or where the game is in any moment during the game play. For example, when the website is loaded, the dashboard informs the user that choosing a character is needed to start the game. See the screen shot below.

 ![Dash Board Status before the game starts ](documentation/images/setupboard-dashboard-one.png)

 Once the game starts the dashboard present whose turn and continue to do so until the round is concluded. See the screenshot below.

  ![Dash Board Status during the game ](documentation/images/setupboard-dashboard-two.png)

If either of the players wins or a tie event happens, the dashboard will present the announce the game final status. See the two screenshots below.

![Dash Board Status if one of the players wins](documentation/images/setupboard-dashboard-three.png)

![Dash Board Status if the game is tie](documentation/images/setupboard-dashboard-four.png)

 ##### 5.2.1.2  The Players Characters

 The second part consists of two buttons each represents a character to be chosen by the users. Once a user pick one of the characters the second user will automatically assign the other character. A screenshot is included her to show the first part of the setup board.

 ![Players containers contains two buttons each with either X or O character](documentation/images/setupboard-playerscontainer.png)

#### 5.2.2. The Game Board
The game board contains the nine spots that shall be populated by the users with their assigned characters. See the screen shot below.

 ![The game board showing the nine spots](documentation/images/gameboard.png)

#### 5.2.3. The Score Board

The score board consists of three parts. The first part is responsible for showing the score of each player. The second part provides a way for the user to reset the game or the round. The third part contains a hidden message that popups only when user wants to reset the game. See the screen below, the third part is hidden here.

 ![The score board with its two components](documentation/images/scoreboard.png)

##### 5.2.3.1 Scores

Each player has its own counter to count the number of rounds a user won. This information is provided in the scores part of the score board. See the screen shot below.

 ![The score counters of the scores part of the score board](documentation/images/scoreboard-scores.png)

##### 5.2.3.2 Rest Buttons

The second part consists of two buttons. One provides the user with possibility of resetting the game, while the other provides the players with the possibility of resetting the round without setting back the total score to zeros. See the screen shot below.

 ![The round and the resetting buttons](documentation/images/scoreboard-resetbuttons.png)

##### 5.2.3.3 The Reset Message

The final part of the score board is the reset message. This message only appears when either of the players press the game reset buttons. It is there to make sure no player is accidently press the game reset. See the screen shot below.

 ![The reset message](documentation/images/scoreboard-resetmessage.png)

### 5.3. Footer

The last part of the website is the footer. It contains two components. The first component provides links to the author’s online pages. It is put there to facilitate a communication media for those how are interested to connect with the author to exchange ideas, collaborate on future project.
The second component is a disclaimer stating the context within which the author develops this website. See the screen shot below.

 ![The footer of the website](documentation/images/footer.png)

 ### 5.4. Favicon

 The last part of the page is the Favicon. The figure below shows the favicon. The original image is a screenshot of two spots filled with players characters. Then the image is converted into a favicon by using [Favicon Generator](https://www.favicon.cc/?).

   ![The image of the favicon](documentation/images/favi.png)

## 6 Credits

### 6.1 References

1. Code institute Learning Materials.
2. Code Institute Walkthrough projec: Loving Math.
3. [ChatGPT](https://chat.openai.com/auth/login?sso)
4. Create a Simple Tic Tac Toe Game with JavaScript, HTML & CSS for Beginners | 2022 Tutorial, [Coding With Siphiwo](https://www.youtube.com/watch?v=oZrp3Atkz18).
5. 10 Easy JavaScript Games for Beginners with Source Code, [CodingNepal](https://www.codingnepalweb.com/best-javascript-games-for-beginners/).
6. JavaScript Tutorial | Creating a Modal with JavaScript | Part 1, [
Academind
](https://www.youtube.com/watch?v=o5ffh3KUaTM).
7. David Bowers, BlackJack game, [BlackJack GitHub Repo](https://github.com/dnlbowers/blackjack).
8. [W3 School](https://www.w3schools.com/css/).
9. [Wikipedia](https://en.wikipedia.org).

### 6.2. Content and Tools

1. The Background image is generated by [ChatGPT](https://chat.openai.com/auth/login?sso)
2. The icons of the footer is downloaded from Font Awesome, [Font Awesome](https://fontawesome.com/).
3. Google fonts is imported to the stylesheet, [Google fonts](https://fonts.google.com/).
4. Wordcounter is used to track the number of characters of each git commit, [Wordcounter](https://wordcounter.net/character-count).
5. [Coolors](https://coolors.co/fdf6da-dcbf87-dcb36f-ac8144-744b1e-704116-6b350f-210e03).
6. [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23fdf6daff%3B%0D%0A%23dcbf87ff%3B%0D%0A%23dcb36fff%3B%0D%0A%23ac8144ff%3B%0D%0A%23744b1eff%3B%0D%0A%23704116ff%3B%0D%0A%236b350fff%3B%0D%0A%23210e03ff%3B%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp).
7. [Favicon Generator](https://www.favicon.cc/?).
8. [Balsamiq Wireframes](https://balsamiq.com/wireframes/desktop/).
9. [Image Resizer](https://redketchup.io/image-resizer).
10. [Markdown Guide](https://www.markdownguide.org/cheat-sheet/).
11. [Am I Responsive?](https://ui.dev/amiresponsive).


### 6.4. Acknowledgement

I would like to express my gratitude to Mr. David Bowers for his outstanding mentorship. His inputs, feedback and guidance are invaluable. I am looking forward to continuing working with him on the upcoming projects.
I would like also to pass my sincere appreciations to all CI students who have reviewed my project and saved some of their valuable time to write me their views and improvement suggestions. The same sentiment goes to all my friends and family who have provided their suppot and reviewed the project and for the provision of their feedback on the website.

