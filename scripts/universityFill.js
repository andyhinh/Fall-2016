// Could not get this to work. I believe the format needs to be [{id:#, tag:"{college}"}] for each object.
// Search up select2.github.io
// - Andy Hinh
jQuery(function($) {
  $("#SCHOOL").select2({
    placeholder: "Search for a University",
    minimumInputLength: 1,
    ajax: { // instead of writing the function to execute the request we use Select2's convenient helper
        url: "../registration/dist/universityList.json",
        dataType: 'json',
        quietMillis: 250,
        data: function (term, page) {
            return {
                q: term, // search term
            };
        },
        results: function (data, page) { // parse the results into the format expected by Select2.
            // since we are using custom formatting functions we do not need to alter the remote JSON data
            return { results: data.items };
        },
        cache: true
    },
    initSelection: function(element, callback) {
        // the input tag has a value attribute preloaded that points to a preselected repository's id
        // this function resolves that id attribute to an object that select2 can render
        // using its formatResult renderer - that way the repository name is shown preselected
        var id = $(element).val();
        if (id !== "") {
            $.ajax("" + id, {
                dataType: "json"
            }).done(function(data) { callback(data); });
        }
    },
    formatResult: repoFormatResult, // omitted for brevity, see the source of this page
    formatSelection: repoFormatSelection,  // omitted for brevity, see the source of this page
    dropdownCssClass: "bigdrop", // apply css that makes the dropdown taller
    escapeMarkup: function (m) { return m; } // we do not want to escape markup since we are displaying html in results
});
});
