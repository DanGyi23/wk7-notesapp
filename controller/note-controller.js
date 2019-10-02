(function(exports) {

  function noteController() {
    this._notelist = new NoteList;
    this._notelistview = new NoteListView(this._notelist);

    new_html = this._notelistview.returnListView();
    element = document.getElementById('app')
    element.innerHTML = new_html
  }
 
  exports.noteController = noteController;
})(this);