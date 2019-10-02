
    function testNoteCanBeInstantiated() {
        var note = new Note("Hello Test!");
        assert.isTrue(note.returnNote() === "Hello Test!");
        console.log("testNoteCanBeInstantiated passed")
    };

    testNoteCanBeInstantiated();