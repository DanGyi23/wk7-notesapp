function testHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div><a href='#notes/0'>Hello!</a></div></li></ul>")
    console.log("testHTMLString passed")
};

function testMultipleHTMLString() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    noteList.addNote("Matey!!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div><a href='#notes/0'>Hello!</a></div></li><li><div><a href='#notes/1'>Matey!!</a></div></li></ul>")
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
    assert.isTrue(noteListView.returnListView() === "<ul><li><div><a href='#notes/0'>12345678901234567890</a></div></li></ul>")
    console.log("testStringOverTwenty passed")
};

function testHashTagsOnURL() {
    var noteList = new NoteList();
    noteList.addNote("Hello!");
    var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.returnListView() === "<ul><li><div><a href='#notes/0'>Hello!</a></div></li></ul>")
    console.log("testHashTagsOnURL passed")
};

testHTMLString();
testMultipleHTMLString();
testEmptyHTMLString();
testStringOverTwenty();
testHashTagsOnURL();