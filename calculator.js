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
    const sixteenthNote = (quarterNote / 4).toFixed(0)
    ;

    document.getElementById("wholeNote").innerText = wholeNote;
    document.getElementById("halfNote").innerText = halfNote;
    document.getElementById("quarterNote").innerText = quarterNote;
    document.getElementById("eighthNote").innerText = eighthNote;
    document.getElementById("sixteenthNote").innerText = sixteenthNote;

    document.getElementById("results").style.display = "table";
}