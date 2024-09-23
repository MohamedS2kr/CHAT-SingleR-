const connection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")  // Hub endpoint defined in the server
    .build();
connection.on("ReceiveMessage", function (fromuser, message) {
    var msg = fromuser + ": " + message;
    var li = document.createElement("li");
    li.txtcontect = msg;
    $("#list").prepend(li);
});

connection.start().catch(err => console.error(err));

$("#btnSend").on("click", function () {
    var FromUser = $("#txtUser").val();
    var Message = $("#txtMessage").val();

    connection.invoke("SendMessage", FromUser, Message)
});