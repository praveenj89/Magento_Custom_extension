 jQuery(document).ready(function($) {
        $(".create").click(function(event) {
            $("#page_view").wordExport();
        });
        
 
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var data = "";
data = getUrlParameter('data');
 $( ".number" ).val(data);
 $('#number').text(data);
$( ".number" ).keyup(function() {
  var number = $( ".number" ).val();
  $('#number').text(number);
});
$( ".description" ).keyup(function() {
 
 $( "#description" ).html( $( ".description" ).val().replace(/\n/g, '<br />') );
});

 $( ".solution" ).keyup(function() {
   
 $( "#solution" ).html( $(  ".solution" ).val().replace(/\n/g, '<br />') );
});
});


