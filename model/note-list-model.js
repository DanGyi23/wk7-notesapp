(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.returnList = function() {
    return this.list
  };

  NoteList.prototype.addNote = function(text) {
    var newNote = new Note(text);
    newNote.id = this.list.length;
    this.list.push(newNote);
  };

  exports.NoteList = NoteList;
})(this);