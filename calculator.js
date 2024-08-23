document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.console.error("Hello World");
    }

}); 

function calculateNoteValues() {
    const bpm = document.getElementById("bpm").value;
    if (bpm <= 0 || isNaN(bpm)) {
        alert("Please enter a valid BPM.");
        return;
    }

    const quarterNote = (60000 / bpm).toFixed(2); // milliseconds for a quarter note
    const halfNote = (quarterNote * 2).toFixed(2);
    const wholeNote = (quarterNote * 4).toFixed(2);
    const eighthNote = (quarterNote / 2).toFixed(2);
    const sixteenthNote = (quarterNote / 4).toFixed(2);

    document.getElementById("wholeNote").innerText = wholeNote;
    document.getElementById("halfNote").innerText = halfNote;
    document.getElementById("quarterNote").innerText = quarterNote;
    document.getElementById("eighthNote").innerText = eighthNote;
    document.getElementById("sixteenthNote").innerText = sixteenthNote;

    document.getElementById("results").style.display = "table";
}