(function(exports) {
    function Note(inputText) {
        this.text = inputText;
        this.id = '';
    };

    Note.prototype.returnNote = function() {
        return this.text;
    };
    exports.Note = Note;
})(this);