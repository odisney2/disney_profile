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
    a.  there is a mainHeader div - inside the mainHeader div there are
        i.    mainHeaderInfo  (which is the title of the web page)
        ii.   mainHeaderContent -  containing the following info
            A.  mainHeaderIcon 
            B.  mainHeaderNav

2.  There will be some light background color so that you can see where the grouping happens. For example the following area will have their own background color and possibily their own font style.    It will also be different based on the display view screen
    a.  Background
    b.  Container 




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
    this is a "master" container which contain all three of the containers and to help keep the container centered on the web page.

10. .container_one, 
    .container_two,
    .container_three
    these containers includes a title and content.   The width of these containers depend on the size of the viewport.    
        a.  if small viewport, the containers will all be listed vertical 
        b.  if viewport between 600 and 930px wide, it will show container one and container three on first row (because only have one paragraph currently) and container two will be the second row
        c.  if viewport over 930px, then it will show all three containers horizontally

11. .container_all_title
    this is for all of the sub container titles, which is currently set for italic, a little bigger, and centered at that specific container

12. .container_one_title,
    .container_two_title,
    .container_three_title
    Currently only the background of the container is different between the three

13. .container_all_content
    this is for all of the sub container content area.   Currently there is nothing happening with this, but this is here for future reference when i want to change the font, color, etc for all three in one place

14. .container_one_content,
    .container_two_content,
    .container_three_content
    this is similiar to container_???_title,   currently only have different background color

15.  mainFooter
    this is for the footer of the page,   currently has different background color and the item is centered on the page.   It also has padding to make it a little bigger


```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. function name ex( animate() )
.. what function does ex( animate() is used to move the elements in the info div across the screen)

```
