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
                    $("#pic0").attr("src","https://graph.facebook.com/"+ data.data[0].from.id + "/picture?type=square");
                    $("#pic1").attr("src","https://graph.facebook.com/"+ data.data[1].from.id + "/picture?type=square");
                    $("#pic2").attr("src","https://graph.facebook.com/"+ data.data[2].from.id + "/picture?type=square");
                    $("#pic3").attr("src","https://graph.facebook.com/"+ data.data[3].from.id + "/picture?type=square");
                    $("#story0").append(data.data[0].story);
                    $("#story1").append(data.data[1].story);
                    $("#story2").append(data.data[2].story);
                    $("#story3").append(data.data[3].story);

                    var link0 = data.data[0].link;
                    $("a#link0").attr("href", ""+link0);
                    var link1 = data.data[1].link;
                    $("a#link1").attr("href", ""+link1);
                    var link2 = data.data[2].link;
                    $("a#link2").attr("href", ""+link2);
                    var link3 = data.data[3].link;
                    $("a#link3").attr("href", ""+link3);


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
