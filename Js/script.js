// jq
// Example 1: show alert
$(document).ready(function(){
    $('#btn_s').on("click", function(){
        alert("Welcome to JQuery exmaples");
    });
});

// Example 2: show or hide the text
$(document).ready(function(){

    // show
    $('#btn_show').on("click",function(){
        $('#s_h').show();
    });

    // hide
    $('#btn_hide').on("click",function(){
        $('#s_h').hide();
    });
});

// Example 3: toggle the text
$(document).ready(function(){
    $('#btn_t').on("click", function(){
        $('#toggle_t').toggle(300);
    });
});

// Example 4: fadeIn or fadeOut the text
$(document).ready(function(){

    // fadeIn
    $('#btn_fi').on("click",function(){
        $('#f_i').fadeIn();
    });

    // fadeOut
    $('#btn_fo').on("click",function(){
        $('#f_i').fadeOut();
    });
});

// Example 5: fadeToggle the text
$(document).ready(function(){
    $('#btn_ft').on("click", function(){
        $('#f_t').fadeToggle(300);
    });
});

// Example 6: slide toggole
$(document).ready(function(){
    $('.ques').on("click", function(){
        $('.answ').slideToggle();
    });
});

// Example 7: mouse enter
$(document).ready(function(){
    $('.rose').on("mouseenter", function(){
        $('.r_info').slideToggle();
    });
});

// Example 8: double click on mouse
$(document).ready(function(){
    $('.book').on("dblclick", function(){
        $('.b_info').slideToggle();
    });
});

// Example 9: mouseover
$(document).ready(function(){
    $('.nature').on("mouseover", function(){
        $('.n_info').slideToggle();
    });
});

// Example 10: slide up the text
$(document).ready(function(){
    $('#slide_up').on("click", function(){
        $('#s_up').slideUp();
    });
});

// Example 11: slide down the text
$(document).ready(function(){

    $('#up').on("click", function(){
        $('#s_d').slideUp();
    });
    $('#slide_down').on("click", function(){
        $('#s_d').slideDown();
    });
});

// Example 12: slide toggle text
$(document).ready(function(){

    $('#slide_toggle').on("click", function(){
        $('#s_t').slideToggle();
    });    
});

// Example 13: stop sliding the text
$(document).ready(function(){

    $('#start').on("click", function(){
        $('#panel').slideDown(5000);
    });

    $('#stop').on("click", function(){
        $('#panel').stop();
    });
});

// Example 14: callback functions
$(document).ready(function(){
    $('#call_f').on("click", function(){
        $('#c_b').hide("slow", function(){
            alert("This paragraph is now hidden");
        });
    });
});

// Example 15: append text
$(document).ready(function(){
    $('#a_t').on("click", function(){
        $('#txt_app').append("<b>Stand against injustice</b>.");
    });
});

// Example 16: append item
$(document).ready(function(){
    $('#a_i').on("click", function(){
        $('#i_append').append("<li><b>Rajakar Rajakar</b></li>");
    });
});

// Example 17: Prepended text
$(document).ready(function(){
    $('#p_t').on("click", function(){
        $('#txt_prepend').prepend("<b>Stand for students</b>.");
    });
});

// Example 18: Prepended item
$(document).ready(function(){
    $('#p_i').on("click", function(){
        $('#i_prepend').prepend("<li>Save bangladeshi students</li>");
    });
});

// Example 19: remove paragraph
$(document).ready(function(){
    $('#r_p').on("click", function(){
        $('#remove_p').remove();
    });
});

// Example 20: remove the div element
$(document).ready(function(){
    $('#r_div').on("click", function(){
        $('#div_r').remove();
    });
});

// Example 21: empty the div element
$(document).ready(function(){
    $('#e_div').on("click", function(){
        $('.div_empty').empty();
    });
});

// Example 22: Return background-color of p
$(document).ready(function(){
    $('#r_bg').on("click", function(){
        alert("Background color = " + $("#return_bg").css("background-color"));
    });
});

// Example 23: Set background-color of p
$(document).ready(function(){
    $('#s_bg').on("click", function(){
        $('.set_bg').css("background-color", "#80cbc4");
    });
});

// Example 24: Set multiple styles for p
$(document).ready(function(){
    $('#s_bg_size').on("click", function(){
        $('.set_bg_size').css({"background-color": "#ef5350", "font-size": "30px"});
    });
});

// Example 25: change the font size of p
$(document).ready(function(){
    $('#c_size').on("click", function(){
        $('.c_fs').css("font-size", "30px");
    });
});

// Example 26: change the color of p
$(document).ready(function(){
    $('#c_color').on("click", function(){
        $('.c_c').css("color", "#d84315");
    });
});

// Example 27: change href and title
$(document).ready(function(){
    $('#c_href').on("click", function(){
        $('#w3s').attr("href" , "https://www.w3schools.com/jquery/");
    });
});

// Example 28: Callback function for text
$(document).ready(function(){
    $('#call_t').on("click", function(){
        $('#Callback_txt').text(function(i, origtxt){
            return "old txt:" + origtxt + " new txt: stand for justice. " + i;
        });
    });
});

// Example 29: Callback function for value
$(document).ready(function(){
    $('#c_v').on("click", function(){
        $('#call_v').val("Rebalous students");
    });
});

// Example 30: Callback function for html
$(document).ready(function(){
    $('#c_h').on("click", function(){
        $('#call_html').html("We do not fear death anymore");
    });
});

// Example 31: Double click on the button to see alart
$(document).ready(function(){
    $('#dbl_a').on("dblclick", function(){
        alert("Fear is contagious but so is courage");
    });
});

// Example 32: click the button to mousedown event
$(document).ready(function(){
    $('#m_d').on("mousedown", function(){
        $('#m_down').after("<p style='color: #00acc1;'>If you want something done right, do it yourself.</p>");
    });
});

// Example 33: click the button to mouseup event
$(document).ready(function(){
    $('#m_u').on("mousedown", function(){
        $('#m_up').after("<p style='color: #00acc1;'>You will face many defeats in life, but never let yourself be defeated.</p>");
    });
});

// Example 34:insert before 
$(document).ready(function(){
    $('#i_b').on("click", function(){
        $('#img_b').before("<b>Student deserve justice</b>");
    });
});

// Example 35: insert after
$(document).ready(function(){
    $('#i_a').on("click", function(){
        $('#img_a').after("<b>Bangladesh Quota Reform Movement</b>");
    });
});

// Example 36: start animation
$(document).ready(function(){
    $("#s_a").click(function(){
        var div = $("#strt_ani");
        div.animate({left: '100px'}, "slow");
    });
});

// Example 37: call back console.log the text
$(document).ready(function(){
    $("#consol").click(function(){
        $("#c_l").hide("slow", function(){
            console.log("The paragraph is now hidden");
        });
    });
});

// Example 38: call back console.log the text
$(document).ready(function(){
    $('s_http').on("click", function(){
        $.get("demo_test.asap", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});

// Example 39: hover to see alart
$(document).ready(function(){
    $('#h_e').hover(function(){
        alert("আসছে ফাল্গুনে আমরা কিন্তু দ্বিগুণ হবো");
    })
});

// Example 40: show fadeTo
$('document').ready(function(){
    $('#f_to').on("click",function(){
        $('.two').fadeTo("1000", 0.9);
        $('.one').fadeTo("3000", 0.8);
    });
});

// Example 41: show toggle fadeTo
$(document).ready(function(){
    $("#f_toggle").on("click", function(){
        $("#fade_toggle").fadeToggle("slow");
    });
});

// Example 42: add class
$(document).ready(function(){
    $("#a_class").on("click", function(){
        $("#a_c").addClass("important blue");
    });
});

// Example 43: form
$(document).ready(function(){
    $(".form").submit(function(){
        alert("Submitted");
    });
});

// Example 44: Return font size of p
$(document).ready(function(){
    $('#r_s').on("click", function(){
        alert("font-size = " + $("#return_s").css("font-size"));
    });
});

// Example 45: return font weight of p
$(document).ready(function(){
    $('#r_w').on("click", function(){
        alert("font-weight = " + $("#return_w").css("font-weight"));
    });
});

// Example 46: form
$(document).ready(function(){
    $("#inputtxt").select(function(){
        alert("Text Selected");
    });
});

// Example 47: click to remove class
$(document).ready(function(){
    $("#r_c").on("click", function(){
        $('.free').removeClass("free");
    });
});

// Example 48: click to toggle class
$(document).ready(function(){
    $("#r_toggle").on("click", function(){
        $('.rebal').toggleClass("rebal");
    });
});

// Example 49: return width and height
$(document).ready(function(){
    $("#r_wh").on("click", function(){
        var txt = "";
        txt += "Width of div: " + $(".return").width() + "</br>";
        txt += "Height of div: " + $(".return").height();
        $('.return').html(txt);
    });
});

// Example 50: set width and height
$(document).ready(function(){
    $("#r_s").on("click", function(){
        $('#set').width(300);
    });
});