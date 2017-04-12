$(function () {
    $("#targetBTN").click(getval);

});
var token;

function getval(token) {
    token = $("#input").val();
    var profileinfo = "https://graph.facebook.com/me?access_token=" + token;
    console.log(profileinfo);
    var feeds = "https://graph.facebook.com/me/feed?access_token=" + token;
    console.log(feeds);
    $.ajax({
        type: "get",
        url: profileinfo,
        // dataType: "jason",
        success: function (data) {
            var profilepic = "https://graph.facebook.com/" + data.id + "/picture?type=square";
            var name = data.first_name + " " + data.last_name;
            console.log(profilepic);
            $("#profilepic").attr("src", profilepic)
            $("#name").append(name);
            $("#mail").append(data.email);
            $("#bday").append(data.birthday)
            $("#school").append(data.education[0].school.name);
            $.ajax({
                type: "get",
                url: feeds,
                // dataType: "jason",
                success: function (data) {

                }
            });
            $("#login").fadeOut("swing");
            $("#profile").slideDown("slow");
        },
        error: function () {
            $("#login").css("background-color", "antiquewhite");
            $("#error").slideDown("swing");

        }
    });

}
