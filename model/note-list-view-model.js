(function(exports) {
    function NoteListView(noteList) {
        this.noteList = noteList;
    };

    NoteListView.prototype.returnListView = function() {
        const newArray = this.noteList.list.map(function(element) {
            if (element.text.length > 20) {
                var output_str = element.text.substring(0, 20);
            } else {
                var output_str = element.text
            };
        return `<li><div>${output_str}</div></li>`;
        });
        const newerArray = newArray.join('');
        return "<ul>" + newerArray + "</ul>";
    };

    exports.NoteListView = NoteListView;
})(this);
