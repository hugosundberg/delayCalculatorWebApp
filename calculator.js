document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bpm').focus(); // Automatically focus the input field on page load
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const selectedValue = document.querySelector('input[name="noteType"]:checked').value;
        calculateNoteValues(selectedValue); 
    }
}); 

// Get all radio buttons with the name 'noteType'
const noteTypeRadioButtons = document.querySelectorAll('input[name="noteType"]');

noteTypeRadioButtons.forEach(radio => {
    radio.addEventListener('change', function(event) {
        // When a different radio button is selected
        const selectedValue = event.target.value;
        calculateNoteValues(selectedValue);
    });
});

function round(number) {
    // Check if the input is a whole number
    if (number === Math.floor(number)) {
        return number;
    } else {
        return Number(number.toFixed(2));
    }
}

function calculateNoteValues(selectedValue) {
    const bpm = document.getElementById("bpm").value;
    
    if (bpm <= 0 || isNaN(bpm)) {
        return;
    }

    // Calculates millisecond values
    const quarterNote = (60000 / bpm).toFixed(0); // milliseconds for a quarter note
    const halfNote = (quarterNote * 2).toFixed(0);
    const wholeNote = (quarterNote * 4).toFixed(0);
    const eighthNote = (quarterNote / 2).toFixed(0);
    const sixteenthNote = (quarterNote / 4).toFixed(0);
    const thirtySecondNote = (quarterNote / 8).toFixed(0);


    if (selectedValue === "straight"){
        // Displays straight millisecond values
        document.getElementById("wholeNoteMs").innerText = wholeNote;
        document.getElementById("halfNoteMs").innerText = halfNote;
        document.getElementById("quarterNoteMs").innerText = quarterNote;
        document.getElementById("eighthNoteMs").innerText = eighthNote;
        document.getElementById("sixteenthNoteMs").innerText = sixteenthNote;
        document.getElementById("thirtySecondNoteMs").innerText = thirtySecondNote;

        // Displays straight second values
        document.getElementById("wholeNoteSec").innerText = round((wholeNote / 1000)); 
        document.getElementById("halfNoteSec").innerText = round((halfNote / 1000)); 
        document.getElementById("quarterNoteSec").innerText = round((quarterNote / 1000)); 
        document.getElementById("eighthNoteSec").innerText = round((eighthNote / 1000)); 
        document.getElementById("sixteenthNoteSec").innerText = round((sixteenthNote / 1000)); 
        document.getElementById("thirtySecondNoteSec").innerText = round((thirtySecondNote / 1000)); 

        
    } else if (selectedValue === "dotted") {
         // Displays dotted millisecond values
         document.getElementById("wholeNoteMs").innerText = round((wholeNote * 1.5));
         document.getElementById("halfNoteMs").innerText = round((halfNote * 1.5));
         document.getElementById("quarterNoteMs").innerText = round((quarterNote * 1.5));
         document.getElementById("eighthNoteMs").innerText = round((eighthNote * 1.5));
         document.getElementById("sixteenthNoteMs").innerText = round((sixteenthNote * 1.5));
         document.getElementById("thirtySecondNoteMs").innerText = round((thirtySecondNote * 1.5));

         // Displays dotted second values
         document.getElementById("wholeNoteSec").innerText = round((wholeNote / 1000) * 1.5); 
         document.getElementById("halfNoteSec").innerText = round((halfNote / 1000) * 1.5); 
         document.getElementById("quarterNoteSec").innerText = round((quarterNote / 1000) * 1.5); 
         document.getElementById("eighthNoteSec").innerText = round((eighthNote / 1000) * 1.5); 
         document.getElementById("sixteenthNoteSec").innerText = round((sixteenthNote / 1000) * 1.5); 
         document.getElementById("thirtySecondNoteSec").innerText = round((thirtySecondNote / 1000) * 1.5);

    } else {
        // Displays triplet millisecond values
        document.getElementById("wholeNoteMs").innerText = round((wholeNote * 0.6));
        document.getElementById("halfNoteMs").innerText = round((halfNote * 0.6));
        document.getElementById("quarterNoteMs").innerText = round((quarterNote * 0.6));
        document.getElementById("eighthNoteMs").innerText = round((eighthNote * 0.6));
        document.getElementById("sixteenthNoteMs").innerText = round((sixteenthNote * 0.6));
        document.getElementById("thirtySecondNoteMs").innerText = round((thirtySecondNote * 0.6));

        // Display triplet second values
        document.getElementById("wholeNoteSec").innerText = round((wholeNote / 1000) * 0.6);
        document.getElementById("halfNoteSec").innerText = round((halfNote / 1000) * 0.6);
        document.getElementById("quarterNoteSec").innerText = round((quarterNote / 1000) * 0.6);
        document.getElementById("eighthNoteSec").innerText = round((eighthNote / 1000) * 0.6);
        document.getElementById("sixteenthNoteSec").innerText = round((sixteenthNote / 1000) * 0.6);
        document.getElementById("thirtySecondNoteSec").innerText = round((thirtySecondNote / 1000) * 0.6);
    }
    
    document.getElementById("results").style.display = "table";
}