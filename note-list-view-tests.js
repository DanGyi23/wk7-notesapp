function testHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div>Hello!</div></li></ul>")
};

testHTMLString();