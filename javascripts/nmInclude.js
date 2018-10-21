document.write('<meta charset="utf-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
function style(src){
	document.write('<link rel="stylesheet" href="/css/'+src+'.css">');
}
function include(src){
	document.write('<script src="/javascripts/'+src+'.js"></script>');
}
style("w3");
style("style");
include("lib/v0");
include("lib/jQuery");
include("layout");