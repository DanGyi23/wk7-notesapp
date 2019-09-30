(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList;
    };

    NoteListView.prototype.returnListView = function() {
        const newArray = this.noteList.list.map(function(element) {
        return `<li><div>${element.text}</div></li>`;
        });
        const newerArray = newArray.join('');
        return "<ul>" + newerArray + "</ul>";
    };

    exports.NoteListView = NoteListView;
})(this);
