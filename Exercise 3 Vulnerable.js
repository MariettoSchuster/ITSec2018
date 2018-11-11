function addComment() {
    // Get the input value
    var value = $('#inp').val();

    // This is the vulnerable comment
    $('#wrongDiv').append("<ul style='list-style-type: none' id='newWrongList'></ul>");
    $("#newWrongList").append("<li>" + value + "</li>");
}
