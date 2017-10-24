// script.js

$(function() {
     
    $("button").click(function() {
        $('#box').fadeOut(1000);
    });
    
    
    
    // Click the GO button
    $('#go').click(function() {
        
        
        // build a function that checks to see if a car has won the race
        function checkIfComplete() {
            
            if( isComplete == 1 ) {
                isComplete = 2;
            } else if (isComplete == 2) {
                place = 'second';
				isComplete = 3;
            } else if (isComplete == 3) {
                place = 'third';
            }
			
            
        }
        
        // get the width of the cars
        var carWidth = $('#car1').width();
        
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        // generate a random # between 1 and 5500
        
        var raceTime1 = Math.floor( (Math.random() * 5000) + 501 );
        var raceTime2 = Math.floor( (Math.random() * 5000) + 502 );
        var raceTime3 = Math.floor( (Math.random() * 5000) + 503 );
		
        // set a flag variable to FALSE by default
        var isComplete = 1;
        
        // set a flag variable to FIRST by default
        var place = 'first';
        
        // animate car 1
        $('#car1').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1/1000 + ' seconds!' );
            
        });
        
        // animate car 2
        $('#car2').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth-67
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime2/1000 + ' seconds!' );
            
        });
		
		// animate car 3
        $('#car3').animate({
        
            // move the car width of the racetrack
            left: raceTrackWidth-38
            
        }, raceTime3, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo3 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime3/1000 + ' seconds!' );
            
        });
        
    });
    
    // reset the race
    $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceInfo span').text('');
    });
    
    
    
    
    
    
    
    
    
    
    
   
    
});
    








