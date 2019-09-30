(function(exports) {
    function Note(inputText) {
        this.text = inputText;
    };

    Note.prototype.returnNote = function() {
        return this.text;
    };
    exports.Note = Note;
})(this);