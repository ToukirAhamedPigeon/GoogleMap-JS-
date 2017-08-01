 var map;
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
      }