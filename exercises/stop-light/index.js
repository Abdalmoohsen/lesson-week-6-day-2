
// turn on stop function
$('#stopButton').on('click', function turnOnStopLight() {
    // change background color of stop light to red
    $('#stopLight').css('background-color', 'red');
    $('#slowLight').css('background-color', 'black');
      $('#goLight').css('background-color', 'black');
});

// turn on slow function
$('#slowButton').on('click', function turnOnSlowLight() {
    // change background color of stop light to red
    $('#slowLight').css('background-color', 'yellow');
    $('#stopLight').css('background-color', 'black');
      $('#goLight').css('background-color', 'black');
});

// turn on go function
$('#goButton').on('click', function turnOnGoLight() {
    // change background color of stop light to red
    $('#goLight').css('background-color', 'green');
      $('#stopLight').css('background-color', 'black');
      $('#slowLight').css('background-color', 'black');
});

// set stop light click event

// set slow light click event

// set go light click event
