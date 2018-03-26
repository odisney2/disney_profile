# CodeLou_FrontEnd

## Description
```
A brief description of your project

    Orris Disney II
    Spring 2018 Front End Web Development Class
    Code Louisville Personal Project 
    Disney Profolio

I decided to create my personal Profolio as the project.   Here are a few notes about this project

1.  Tried to group a lot of the layout design together to be able to customizer the layout a little better.  For example,   in the header,   
    a.  There is a mainHeader div - inside the mainHeader div there are
        i.    mainHeaderInfo  (which is the title of the web page)
        ii.   mainHeaderContent -  containing the following info
            A.  mainHeaderIcon 
            B.  mainHeaderContent

    b.  There is a mainContent div - Where all the containers will be located. and where all the content about the web page will be.
        i.   container_one,  container_two, and container_three.   Will show the web page is responsive based on size.


2.  There will be some light background color so that you can see where the grouping happens. For example the following area will have their own background color.    It will also be different based on the display view screen
    a.  Background color
    b.  Container 
    c.  The navigation button at top of page

3.  There is a game using javascript.    This is a very simple Tic Tac Toe game.   The computer would radomonly pick a number between 1 and 9, and if it is available put the "O" in it.   If it is not available, it will search for another number and see if it is available.   Then the user can select an empty box.    If there is something already there, it will not let you click it.   
It will check each time the computer or user select a cell to see if there is a winner.   If there is, it will indicate it by orange background
and announce winner in the winner box



```
## Custom CSS Classes
```
The class(es) I created are:

example. class name ex( .main-info-section )
.. what class does, ex( adds padding & changes background color of .main-info-section )

1.  .mainBodyWrapper
    this is the container of the entire website (including header and footer)

2.  .mainHeader
    container for everything inside the header section

3.  .mainHeaderInfo
    container for the title of the web page.   

4.  .mainHeaderContent
    container for the Icon and navigation button.   This is where depending on the size of the screen, the Navigation button will change from horizontal to vertical and the size of the button will change as well.  I used the float to display the layout.

5.  .mainHeaderIcon
    currently it is a letter D being supersized, but with the idea that it could be an Icon, or business logo.   Right now it is making the letter larger.

6.  .mainHeaderNav
    The navigation to other web pages which is currently a block element so that user can click anywhere on the block to get to the web page it wants to

7.  .mainContentTitle
    this is what the body of the web page is actually about.   The title is centered. 

8.  .mainContent
    this container has the all three of the sub containers that will be modified in size and how many will show across the screen depending on the width of the viewport.   I am currently using the Flexbox for this layout.

9.  .container_all 
    this is a "master" container which is for all up to three of the containers and to help keep the container centered on the web page.  this is where i would put what i want all three containers to look like (font, color, size, etc)

10. .container_one, 
    .container_two,
    .container_three
    these containers includes a title and content.   The width of these containers depend on the size of the viewport.    
        a.  if small viewport, the containers will all be listed vertical 
        b.  if viewport between 600 and 930px wide, it will show container one and container three on first row (because only have one paragraph currently) and container two will be the second row
        c.  if viewport over 930px, then it will show all three containers horizontally

11. .container_all_title
    For all of the sub container titles, which is currently set for italic, a little bigger, and centered at that specific container

12. .container_one_title,
    .container_two_title,
    .container_three_title
    Currently only the background of the container is different between the three

13. .container_all_content

    For all of the sub container content area.   Currently there is nothing happening with this, but this is here for future reference when i want to change the font, color, etc for all three in one place

14. .container_one_content,
    .container_two_content,
    .container_three_content
    this is similiar to container_???_title,   currently only have different background color

15. .mainFooter
    For the footer of the page,   this is for possible customizing background color and the item is centered on the page.   It also has padding to make it a little bigger

16. .contactColumn1,
    .contactColumn2,
    Used in Contact page,   using the column 1 for what type of info and column 2 what is that info.   Ex:   phone - 123-45-6789

17. .contactColumnAll,
    .resumeColumnAll,
    .contactColumnMain 
    used to set them up as inline block so that the elements will fix side by side.   the contactColumnMain is the one column to be bolded

18. .tabResume,
    .tabResume Button,
    .tabResume hover and active,
    .tabResumeContent
    these classes were focus on the Resume page,  and this helps setup the tab possibility using <div> elements.   It has four tabs, one for each section of the resume and will only show one section of resume at a time.



``



## Custom JavaScript Functions
```
The javascript functions created are:

example. function name ex( animate() )
.. what function does ex( animate() is used to move the elements in the info div across the screen)

1.  changeStatusCell 
    The color background of cell depending on who clicked that cell, and during the program, if a line has been detected, it will have
        winner identified on it.    The last else statement is for troubleshooting purpose (this should never happen, but never say never) 

2.  playerTurnBox_update 
    There is a player status box on bottom of game, to indicate who's turn it is,   It will change the background based on who is playing currently.      The last else statement is for troubleshooting purpose (this should never happen, but never say never)

3.  resetTheBoard
    This function does the following
        reset the board at the beginning staring a new game.   It reset all cells to 'free'
        then it randomly pick to gets to start the game
        then it updates the playerbox to indicate who's turn it is
        
4.  resetInnerBoard
    This function does the following
         reset the rowColPosition block to be white with no letters

5.  randomPlayerTurn    
    This function does the following
        picks a random number between 1 and 2 to decide which player gets to play 1 = user, 2 - computerurn

6.  computerMove
    This function does the following
        This will find the next cell that is available for the Computer to move.   It will randomly pick a number between 1 and 9 and
        if it is free, it will have a red background and red x, unless it wins

7.  checkIfWinner
    This function does the following
        This function will be ran every time a user click a box and when a computer chose a box.    It will check for all possible 
        angle to see if there is a winner.   It will check each cell status to make sure they belong to that current user and if it 
        matches all three in a row, we have a winner.    
        It will check every way possible from the position that the computer or a user just picked.

8.  openTicTacToe 
    this function does the following
    It will open a new web page with fixed width and height to start playing the tic tac toe game

8.  There is a group of 9 "addEventListener" for "click" of the div area. and one reset board.  This is from the user's clicking the div area  
     or the button to reset .One for each possible 9 cell in tic tac toe that a user can click on.   It will do the following when
    it is clicked
    a.  first, it will check if cell is available (if not, do nothing)
    b.  if it is available, mark it being used by that specific player in this case, the user
    c.  then it will check to see if the user is a winner,  it will check all angle of the tic tac toe to see if there is a match of three
        if there is, then it will declare it winner
    d.  If it is not a winner, it will  change the user status to "computer", update the Box indicate it is computer's turn, and wait
        2 seconds before running the function to let the computer pick next available box.
    e.  There is a resetBoard listing for "click"  - when user wants to reset the board back to beginning to start a new game


```
