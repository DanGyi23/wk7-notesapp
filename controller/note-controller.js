(function (exports) {

  function noteController() {
    this._notelist = new NoteList;
    this._notelistview = new NoteListView(this._notelist);
    
    this._notelist.addNote("Zip Zop");
    this._notelist.addNote("1234567890123456789012345");

    new_html = this._notelistview.returnListView();
    element = document.getElementById('app')
    element.innerHTML = new_html

    var listofnotes = this._notelist
    window.addEventListener("hashchange", function (event) {
      event.preventDefault();
      var current_id = location.hash.split("/")[1]
      var noteobject = listofnotes.list.find(function (element) {
        return element.id == current_id
      })
      document.getElementById('note-text').innerHTML = noteobject.text
    });

  }

  exports.noteController = noteController;
})(this);