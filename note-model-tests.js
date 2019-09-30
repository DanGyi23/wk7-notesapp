
    function testNoteCanBeInstantiated() {
        var note = new Note("Hello Test!");
        assert.isTrue(note.returnNote() === "Hello Test!");
    };

    testNoteCanBeInstantiated();