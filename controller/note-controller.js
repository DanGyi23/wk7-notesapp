(function (exports) {

  function noteController(notelist) {
    this._notelist = notelist;
    this._notelistview = new NoteListView(this._notelist);

    new_html = this._notelistview.returnListView();
    element = document.getElementById('app')
    element.innerHTML = new_html

    window.addEventListener("hashchange", function (event) {
      event.preventDefault();
      var current_id = location.hash.split("/")[1]
      var noteobject = notelist.list.find(function (element) {
        return element.id == current_id
      })
      document.getElementById('note-text').innerHTML = noteobject.text
    });

  }

  exports.noteController = noteController;
})(this);