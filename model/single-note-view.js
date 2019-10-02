(function(exports) {
  function singleNoteView(note) {
    this._note = note
  }

  singleNoteView.prototype.createNoteHTML = function() {
    return "<div>" + this._note.text + "</div>"
  }

  exports.singleNoteView = singleNoteView;
})(this);