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

function calculateNoteValues(selectedValue) {
    const bpm = document.getElementById("bpm").value;
    
    if (bpm <= 0 || isNaN(bpm)) {
        return;
    }

    console.log(selectedValue);

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
        document.getElementById("wholeNoteSec").innerText = wholeNote / 1000; 
        document.getElementById("halfNoteSec").innerText = halfNote / 1000; 
        document.getElementById("quarterNoteSec").innerText = quarterNote / 1000; 
        document.getElementById("eighthNoteSec").innerText = eighthNote / 1000; 
        document.getElementById("sixteenthNoteSec").innerText = sixteenthNote / 1000; 
        document.getElementById("thirtySecondNoteSec").innerText = thirtySecondNote / 1000; 

        
    } else if (selectedValue === "dotted") {
         // Displays dotted millisecond values
         document.getElementById("wholeNoteMs").innerText = (wholeNote * 1.5);
         document.getElementById("halfNoteMs").innerText = halfNote * 1.5;
         document.getElementById("quarterNoteMs").innerText = quarterNote * 1.5;
         document.getElementById("eighthNoteMs").innerText = eighthNote * 1.5;
         document.getElementById("sixteenthNoteMs").innerText = sixteenthNote * 1.5;
 
         // Displays dotted second values
         document.getElementById("wholeNoteSec").innerText = (wholeNote / 1000) * 1.5; 
         document.getElementById("halfNoteSec").innerText = (halfNote / 1000) * 1.5; 
         document.getElementById("quarterNoteSec").innerText = (quarterNote / 1000) * 1.5; 
         document.getElementById("eighthNoteSec").innerText = (eighthNote / 1000) * 1.5; 
         document.getElementById("sixteenthNoteSec").innerText = (sixteenthNote / 1000) *1.5; 
    } else {
        // Displays triplet millisecond values

    }

    

    document.getElementById("results").style.display = "table";
}