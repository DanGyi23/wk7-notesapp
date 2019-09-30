function testHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div>Hello!</div></li></ul>")
};

function testMultipleHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    noteList.addNote("Matey!!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div>Hello!</div></li><li><div>Matey!!</div></li></ul>")
};

testHTMLString();
testMultipleHTMLString();