$(function () {
    $("#targetBTN").click(getval);

});
var token;

function getval(token) {
    token = $("#input").val();
    var profileinfo = "https://graph.facebook.com/me?access_token=" + token;
    //console.log(profileinfo);
    var feeds = "https://graph.facebook.com/me/feed?access_token=" + token;
    //console.log(feeds);
    $.ajax({
        type: "get",
        url: profileinfo,
        // dataType: "jason",
        success: function (data) {
            var profilepic = "https://graph.facebook.com/" + data.id + "/picture?type=square";
            var name = data.first_name + " " + data.last_name;
            //console.log(profilepic);
            $("#profilepic").attr("src", profilepic)
            $("#name").append(data.name);
            $("#mail").append(data.email);
            $("#bday").append(data.birthday)
            $("#school").append(data.education[0].school.name);
            $.ajax({
                type: "get",
                url: feeds,
                // dataType: "jason",
                success: function (data) {
                    var i = 0;
                    $("#from0").append(data.data[0].from.name);
                    $("#from1").append(data.data[1].from.name);
                    $("#from2").append(data.data[2].from.name);
                    $("#from3").append(data.data[3].from.name);
                    $("#from4").append(data.data[4].from.name);
                    $("#from5").append(data.data[5].from.name);
                    $("#pic0").attr("src", "https://graph.facebook.com/" + data.data[0].from.id + "/picture?type=square");
                    $("#pic1").attr("src", "https://graph.facebook.com/" + data.data[1].from.id + "/picture?type=square");
                    $("#pic2").attr("src", "https://graph.facebook.com/" + data.data[2].from.id + "/picture?type=square");
                    $("#pic3").attr("src", "https://graph.facebook.com/" + data.data[3].from.id + "/picture?type=square");
                    $("#pic4").attr("src", "https://graph.facebook.com/" + data.data[4].from.id + "/picture?type=square");
                    $("#pic5").attr("src", "https://graph.facebook.com/" + data.data[5].from.id + "/picture?type=square");
                    $("#story0").append(data.data[0].story);
                    $("#story1").append(data.data[1].story);
                    $("#story2").append(data.data[2].story);
                    $("#story3").append(data.data[3].story);
                    $("#story4").append(data.data[4].story);
                    $("#story5").append(data.data[5].story);

                    $("a#link0").attr("href", data.data[0].link);
                    $("a#link1").attr("href", data.data[1].link);
                    $("a#link2").attr("href", data.data[2].link);
                    $("a#link3").attr("href", data.data[3].link);
                    $("a#link4").attr("href", data.data[4].link);
                    $("a#link5").attr("href", data.data[5].link);


                    //for (i = 0; i < 4; i++) {
                    //    var name = "from" + i;
                    //    var story = "story" + i;
                    //    var time = "time" + i;
                    //    var x= data.data[i].from.name;
                    //    var y= data.data[i].story;
                    //    $("input[id=" + name + "]").append(x);
                    //    $("input[id=" + story + "]").append(y);
                    //    $("input[id=" + time + "]").append();
                    //};
                }
            });
            $("#login").fadeOut("swing");
            $("#profile").slideDown("slow");
            $("#feeds").fadeIn("slow");
        },
        error: function () {
            $("#login").css("background-color", "antiquewhite");
            $("#error").slideDown("swing");

        }
    });

}
