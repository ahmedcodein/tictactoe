# Tic Tac Toe

## 1. Introduction

Tic Tac Toe game is an ancient board game. According to Wikipedia, the game goes back to 1300 BC [Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe). The game board is divided into 3-by-3 boxes. The game is designed to be played by two persons. Each person is designated either of two characters/symbols to play with, conventionally, these are O and X. The players then take turns by placing the symbols in one of the nine boxes. Either player is able to place the player's designated symbol on three boxes arranged horizontally, vertically or diagonally is considered the game winner. In case none of the players is unable to do so, the game is then a tie.

## 2. Development Process

The process followed by the author consists of five phases. These phases are presented below with a detailed account is presented in the subsequent sections.

### 2.1. Project research and selection criteria

In the research phase the author has conducted a brief search on easy to implement games for the purpose of learning HTML, CSS and JavaScript together. Many resources can be found, the author however settled on the following [article](https://www.codingnepalweb.com/best-javascript-games-for-beginners/). 
Among the 10 candidates presented in the article, the author chooses to move with Tic Tac Toe game due to three main reasons:
1.	Simple User Interface with minimum graphics
2.	Average logic complexity
3.	Good enough of interactions between the DOM and the JavaScript to become familiar with the concept of DOM manipulation.

### 2.2. Project Objective {#project-objective}

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

[^1]: Although, the last design requirement is not related to the owner’s or visitor’s objective nor to the game design requirements, it is related to sole purpose of pursuing this course, see {project-objective}. That is connect with people who are sharing the same interests to exchange ideas, pursue future project collaborations or simply get feedback for improvement on the author’s work.

### 2.4. Planning

This section intents to describe the planning phase of the project. The planning phase consisits of three sub-phases:
- Wireframes/HTML structure
- Styling
- Game Logic

These sub-phases is desicribed in the following subsections. One can think of the subsequent discriptions as a detailed path as to how each of the 5 requirements presented in the previous section is trasformed into a tangable object, i.e the game website.

#### 2.4.1. Wireframes

This section is designed to provide a high-level overview about the early design thinking of the Game website. The main purpose of these wireframes is to aid the design of the HTML website Without delving into what style or how the JavaScript interacts with the HTML. The main expected outputs of these wireframes are:

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

##### 2.4.1.3. preliminary naming used for HTML elements IDs and Classes

The following image is devoted to give additional resolution to the previous subsection by elaborating further on the elements contained in the body of the HTML page. In addition, the image provides further color on the IDs and Classes naming strategy that the author intends to implement to develop the HTML page and subsequently will be used for the page styling and to manipulate the page by the JavaScript code.

![Website's HTML structure](documentation/images/ids-classes-naming.png)

#### 2.4.2. Styling

One of the website requements is to present the game with an ancient charactertic touch. This is to refelct the history of the game origin. Towards achieving this, the author opts to present the game as it is played on an old paper or leather scroll background. To constuct such background, the author uses [ChatGPT](https://chat.openai.com/auth/login?sso) to create the background. The players then use black ink to handright the game board and later the score as the game goes.

##### 2.4.2.1 Color

As you might have already guessed, the background image is used as the basis for color extraction. The process of selection is described below:

1. Color Candidates

The first step is to extract a pallet of candidate colors from the background image. The author used [Coolors](https://coolors.co/fdf6da-dcbf87-dcb36f-ac8144-744b1e-704116-6b350f-210e03) for that matter. The result is presented in the image below.

![Color Candidate](documentation/images/coolors-pallete.PNG).

2. Color Contrast Evaluation

In order to select the most valid color combination, the author uses [Contrast Grid](https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23fdf6daff%3B%0D%0A%23dcbf87ff%3B%0D%0A%23dcb36fff%3B%0D%0A%23ac8144ff%3B%0D%0A%23744b1eff%3B%0D%0A%23704116ff%3B%0D%0A%236b350fff%3B%0D%0A%23210e03ff%3B%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp) to achieve the result. The figure below shows the result of the evaulation[^2].

[^2]: The author add the black color (#000000) to the contrast evaluation to account for the color of the text (the bank ink).

![Contrast Evaluation Resutl](documentation/images/contrast-grid.PNG)

3. Color Selection

The selection of the color is choosen based on the contrast result. The author choose to select the most reliable result that is going with Cornsilk for font and border lines and Licorice for the footer background.

##### 2.4.2.2 Fonts

Since the intention is to use the a handwriting font style to foster the historical characteristic feeling of the game. The author selects Salsa font. [Google fonts](https://fonts.google.com/specimen/Salsa?query=Salsa) is used to find the aforementioned font and import it to the style sheet.

## 3. Execution

### 3.1. Technologies Used

List the technologies and tools used in the project.

### 3.2. Website Verification and Validation

#### 3.2.1. Verification Test

Describe the verification tests conducted.

#### 3.2.2. Validation Test

List the validation tests and their outcomes.

#### 3.2.3. HTML Validation

Explain the process and results of HTML validation.

#### 3.2.4. CSS Validation

Detail CSS validation process and results.

#### 3.2.5. JavaScript Validation

Discuss JavaScript validation.

#### 3.2.6. Accessibility

Describe how accessibility was ensured.

#### 3.2.7. Lighthouse Validation

Provide details and results of Lighthouse validation.

#### 3.2.8. Device Testing

Explain how device testing was conducted and the results.

#### 3.2.9. Browser Compatibility

Detail the browser compatibility checks that were performed.

### 3.3. Bugs

#### 3.3.1. Fixed Bugs

List the bugs that were identified and fixed.

#### 3.3.2. Unfixed Bugs

Mention any bugs that have not yet been fixed.

## 4. Deployment

Explain how the website is deployed and any steps needed to deploy it to a new environment.

## 5. Features

### 5.1. Header

Describe the header component of the website.

### 5.2. Main Content

Detail the main content area of the website.

### 5.3. Footer

Describe the footer component.

## 6 Credits

### 6.1 References

List any references used in the development of the project.

### 6.2. Content

Credit the sources of website content.

### 6.3. Tools

List the tools used in the project.

### 6.4. Acknowledgement

Acknowledge any help received during the project.
