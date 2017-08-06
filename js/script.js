 /*var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 23.777176, lng: 90.399452},
          zoom: 12,
		  //disableDefaultUI:true,
		  //scrollwheel:false,
		  //mapTypeId:google.maps.MapTypeId.ROADMAP
		  mapTypeId:google.maps.MapTypeId.HYBRID
		  //mapTypeId:google.maps.MapTypeId.SATELLITE
        });
		//key=AIzaSyAwN37FIfQgZfVi3pSTDba_PMqcGG0C8k8&callback=initMap"
      }*/

(function (window, google, mapster) {
    var options = mapster.MAP_OPTIONS,
		element=document.getElementById('map'),
		map=new google.maps.Map(element,options);

}(window, google, window.Mapster || (window.Mapster = {})));