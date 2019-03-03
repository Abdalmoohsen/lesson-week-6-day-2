// click event for gray button

// click event for white button

$('#grayButton').on('click', function switchGray() {
    // change background to gray
    $('body').css('background-color','gray');
    // change font to white
    $('h1 , p').css('color', 'white');
});

$('#whiteButton').on('click', function switchWhite() {
    // change background to white
    $('body').css('background-color','white');
    // change font to black
    $('h1 , p').css('color', 'black');
});
