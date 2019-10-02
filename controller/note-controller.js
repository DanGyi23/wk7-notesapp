(function (exports) {

  function noteController(notelist) {
    this._notelist = notelist;
    this._notelistview = new NoteListView(this._notelist);

      var new_html = this._notelistview.returnListView();
      var element = document.getElementById('app')
      element.innerHTML = new_html


    window.addEventListener("hashchange", function (event) {
      event.preventDefault();
      var current_id = location.hash.split("/")[1]
      var noteobject = notelist.list.find(function (element) {
        return element.id == current_id
      })
      document.getElementById('note-text').innerHTML = noteobject.text
    });

    note_entry_form = document.getElementById('text-input')
    notelistview = this._notelistview
    note_entry_form.addEventListener("submit", function (event) {
      event.preventDefault();
      var text_entered = document.getElementById('note-entry').value;
      notelist.addNote(text_entered);
      var new_html = notelistview.returnListView();
      var element = document.getElementById('app')
      element.innerHTML = new_html
    })

  }

  exports.noteController = noteController;
})(this);