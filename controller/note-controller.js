(function(exports) {

  function changeAppHTML(text) {
    var notelist = new NoteList;
    notelist.addNote(text);
    var notelistview = new NoteListView(notelist);

    new_html = notelistview.returnListView();
    element = document.getElementById('app')
    element.innerHTML = new_html
  }
 
  exports.changeAppHTML = changeAppHTML;
})(this);

changeAppHTML("Favourite Drink: seltzer");