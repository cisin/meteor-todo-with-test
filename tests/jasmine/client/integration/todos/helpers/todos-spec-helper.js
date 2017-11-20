TodosSpecHelper = {};

TodosSpecHelper.retrieveMessagesFromUI = function() {
    var messages = $("li .text").map(function() {
        return $(this).text();
    }).get();

    return messages;
}
