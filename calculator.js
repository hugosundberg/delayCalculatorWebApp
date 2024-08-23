document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bpm').focus(); // Automatically focus the input field on page load
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculateNoteValues(); 
    }

}); 


function calculateNoteValues() {
    const bpm = document.getElementById("bpm").value;
    if (bpm <= 0 || isNaN(bpm)) {
        return;
    }

    const quarterNote = (60000 / bpm).toFixed(0); // milliseconds for a quarter note
    const halfNote = (quarterNote * 2).toFixed(0);
    const wholeNote = (quarterNote * 4).toFixed(0);
    const eighthNote = (quarterNote / 2).toFixed(0);
    const sixteenthNote = (quarterNote / 4).toFixed(0);

    document.getElementById("wholeNoteMs").innerText = wholeNote;
    document.getElementById("halfNoteMs").innerText = halfNote;
    document.getElementById("quarterNoteMs").innerText = quarterNote;
    document.getElementById("eighthNoteMs").innerText = eighthNote;
    document.getElementById("sixteenthNoteMs").innerText = sixteenthNote;

    document.getElementById("wholeNoteSec").innerText = wholeNote / 1000; 
    document.getElementById("halfNoteSec").innerText = halfNote / 1000; 
    document.getElementById("quarterNoteSec").innerText = quarterNote / 1000; 
    document.getElementById("eighthNoteSec").innerText = eighthNote / 1000; 
    document.getElementById("sixteenthNoteSec").innerText = sixteenthNote / 1000; 
    

    document.getElementById("results").style.display = "table";
}