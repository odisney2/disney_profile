
/*
    opens the web page with the tic tac toe layout as a certain width and height
*/

function openTicTacToe() {
    window.open('tictactoe.html',
                'mywindow',
                'width=400, height=400,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,copyhistory=no,resizable=yes');
}


/*
    this hides and show tab in the Resume section
*/

function openResumeSection(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    console.log('sectionName - ' + sectionName);

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabResumeContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tabResumeLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}






