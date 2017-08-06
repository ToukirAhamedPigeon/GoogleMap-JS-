(function (window,google, mapster) {

    mapster.MAP_OPTIONS = {
        center: {
            lat: 23.777176,
            lng: 90.399452
        },
        zoom: 12,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        maxZoom: 14,
        minZoom: 10,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT,
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
}(window,google, window.Mapster || (window.Mapster = {})))