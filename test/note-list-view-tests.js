function testHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div>Hello!</div></li></ul>")
    console.log("testHTMLString passed")
};

function testMultipleHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    noteList.addNote("Matey!!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div>Hello!</div></li><li><div>Matey!!</div></li></ul>")
    console.log("testMultipleHTMLString passed")
};

function testEmptyHTMLString() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul></ul>")
    console.log("testEmptyHTMLString passed")
};

function testStringOverTwenty() {
    var noteList = new NoteList();
    noteList.addNote("1234567890123456789012345");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div>12345678901234567890</div></li></ul>")
    console.log("testStringOverTwenty passed")
};

testHTMLString();
testMultipleHTMLString();
testEmptyHTMLString();
testStringOverTwenty();