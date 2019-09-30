(function(exports) {
    function testNoteCanBeInstantiated() {
        var note = new Note("Hello Test!");

        if (note.returnNote() !== "Hello Test!") {
            throw new Error("Note not instantiated");
        }
    };

    testNoteCanBeInstantiated();
})(this);