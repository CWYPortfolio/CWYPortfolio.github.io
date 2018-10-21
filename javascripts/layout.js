function w3_open() {
	document.getElementById("main").style.marginLeft = "200px";
	document.getElementById("mySidebar").style.width = "200px";
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("openNav").style.display = 'none';
	$("#close").fadeTo("fast",0.5)
}
function w3_close() {
	document.getElementById("main").style.marginLeft = "0%";
	document.getElementById("mySidebar").style.display = "none";
	$("#close").fadeOut("fast");
	document.getElementById("close").style.display = "none";
	document.getElementById("openNav").style.display = "inline-block";
}
function resize(){
	$(".full").css("width",document.body.clientWidth-32+"px");
	$(".half").css("width",document.body.clientWidth/2-32+"px");
}
$(window).ready(layout);
$(window).resize(resize);
var init='\
		<div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="width:200px;display:none;" id="mySidebar"> \
		  <a href="#" class="w3-button" style="font-size:20px;height:50px;width:100%;text-align:left" onclick="w3_close()">Close &times;</a> \
		  <a href="/index.html" class="w3-bar-item w3-button">Home</a> \
		  <a href="/achievements.html" class="w3-bar-item w3-button">Achievements</a> \
		  <a href="/identities.html" class="w3-bar-item w3-button">Identities</a> \
		  <a href="/aspirations.html" class="w3-bar-item w3-button">Aspirations</a> \
		</div> \
		<div id="main"> \
			<div id="close" onclick="w3_close()" class="w3-display-hover w3-animate w3-fadeout w3-hover-opacity" style="display:none;background-color:black;width:100%;margin:0px;height:100%;position:fixed"></div> \
			<header class="w3-bar w3-cyan" style="position:fixed;width:100%"><button id="openNav" class="w3-button w3-cyan  w3-xlarge" style="float:left" onclick="w3_open()">&#9776;</button><h4 id="title" class="w3-text-light-grey w3-margin-left" style="float:left;text-shadow:1px 1px 0 #444"></h4></header> \
			<div style="height:52px;width:100%"></div> \
		';
function layout(){
	$(".card").each(function(){
		$(this).removeClass("card");
		if($(this).children("header").length>0){
			var title=$(this).children("header")[0].innerHTML;
			$(this).children("header")[0].remove();
			$(this).replaceWith(makeCard(this.innerHTML,$(this).attr("class"),$(this).attr("style"),title));
		}else $(this).replaceWith(makeCard(this.innerHTML,$(this).attr("class"),$(this).attr("style"),""));
	});
	var body=document.body.innerHTML;
	document.body.innerHTML=init+body+"</div>";
	document.getElementById("title").innerHTML=document.title;
	$(".full").css("width",document.body.clientWidth-32+"px");
	$(".half").css("width",document.body.clientWidth/2-32+"px");
}
function makeCard(content,clas="",style="",title=""){
	var card="";
	if(title!=""){
		card='<table class="fleft fillWS w3-table w3-animate-zoom w3-card-4 w3-round-large w3-center '+clas+'" style="margin:16px;'+style+'"> \
				<thead style="height:auto" class="header w3-teal"><td style="width:100%"><h1>'+title+'</h1>\
				</td></thead> \
				<tr><td style="vertical-align:middle;">'+content+'\
				</td></tr> \
			</table>';
	}else{
		card='<div class="fillWS fleft w3-animate-zoom w3-card-4 w3-round-large '+clas+'" style="margin:16px;'+style+'">'+content+'</div>';
	}
	return card;
}