/* Predefined Variables Are:
 *     blog_url
 *     latest_post
 *     background_color
 *     border_color
 *     scrolling_speed
 *     info_text
 *     close_button
 */

function recent_post_content(){
    var s = "<div id='recent_post' title='Breaking'>";
    if(info_text){
    s += "<div class='wrapper'>";
    s += "<div class='newstitle'>";
    s += "Breaking";
    s += "</div>";
    }
    s += "  <marquee style='float:left; margin-left:10px; line-height: 24px; width:82%' scrollAmount='"+scrolling_speed+"'>";
    for(var i=0; i<latest_post; i++){
        var recent_post_entries = entries[i];
        s += "<a href='"+recent_post_entries.href+"' ";
        s += "onmouseover='this.parentNode.stop()' onmouseout='this.parentNode.start()'";
        s += ">" + recent_post_entries.title + "</a>";
        if(i != latest_post-1){s += " | ";}
	function myFunction() {
    document.getElementById("myP").style.textAlign = "right";
}

    }
    s += "</marquee>";
    s += "</div>";
    if(close_button){
	s += "<div style='float:right;margin-right:15px;'>";
    s += "<a href='javascript:void(0)' onclick='document.getElementById(\"recent_post\").style.display=\"none\"'>";
    s += "(x)";
    s += "</a>";
    s += "</div>";
    }
    document.write(s);
}
recent_post_text();
