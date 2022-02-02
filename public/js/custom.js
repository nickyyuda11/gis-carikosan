$('#loadMoreButtonBlock').on('click', function() {
    if (isLoading == false) {
        isLoading = true;
        page++;
        if (triggerScrollLoader) {
            initLoadMore(page, kec);
            loadMoreDataMaps(page, kec);
        }
    }
})

function initLoadMore(page, kec) {
    $.ajax({
        url: "/ListingKos/onScrollLoadMore?page=" + page,
        type: "GET",
        dataType: "html",
    }).done(function (data) {
        isLoading = false;
        if (data.length == 0) {
            triggerScrollLoader = false;
            $('#loader').hide();
            return;
        }
        $('#loader').hide();
        $('#loadMoreBlock').append(data).show('slow');
        
    }).fail(function (jqXHR, ajaxOptions, thrownError) {
        $('#loadMoreButtonBlock').hide()
        $('#pesan').html('Tidak ada Kos lain')
    });
}

function initialize() {
    var mapCanvas = document.getElementById('map_right_listing');
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(48.865633, 2.321236),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        scrollwheel: false,
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        styles: [{
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.station.bus",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ]
    };
    var map = new google.maps.Map(mapCanvas, mapOptions)

    var infowindow = new google.maps.InfoWindow(),
        marker, i;
    var bounds = new google.maps.LatLngBounds(); // diluar looping
    for (i = 0; i < locations.length; i++) {
        pos = new google.maps.LatLng(parseFloat(locations[i]['lat_kos']), parseFloat(locations[i]['lng_kos']));
        bounds.extend(pos); // di dalam looping
        marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: '/img/pins/Marker.png',
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                closeInfoBox();
                getInfoBox(locations[i]).open(map, this);
                map.setCenter(new google.maps.LatLng(parseFloat(locations[i]['lat_kos']), parseFloat(locations[i]['lng_kos'])));
            }
        })(marker, i));
    }
    map.fitBounds(bounds); // setelah looping        

}

function closeInfoBox() {
    $('div.infoBox').remove();
};

function getInfoBox(item) {
    return new InfoBox({
        content: '<div class="marker_info" id="marker_info">' +
            '<img src="/img/thumb_map_single_hotel.jpg" alt=""/>' +
            '<span>' +
            '<span class="infobox_rate">Superb | 7.5</span>' +
            '<em>' + item['kategori_kos'] + '</em>' +
            '<h3>' + item['nama_kos'] + '</h3>' +
            '<a href="' + item['id_kos'] + '" class="btn_infobox_detail"></a>' +
            '<form action="http://maps.google.com/maps" method="get" target="_blank"><input name="saddr" value="' + item['kota_kos'] + '" type="hidden"><input type="hidden" name="daddr" value="' + parseFloat(item['lat_kos']) + ',' + parseFloat(item['lng_kos']) + '"><button type="submit" value="Get directions" class="btn_infobox_get_directions">Get directions</button></form>' +
            '<a href="tel://081234567890" class="btn_infobox_phone">081234567890</a>' +
            '</span>' +
            '</div>',
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(10, 92),
        closeBoxMargin: '',
        closeBoxURL: "/img/close_infobox.png",
        isHidden: false,
        alignBottom: true,
        pane: 'floatPane',
        enableEventPropagation: true
    });
};

function loadMoreDataMaps(page, kec) {
    $.ajax({
        url: "/ListingKos/loadMoreDataMaps?page=" + page,
        type: "GET",
        dataType: "json",
    }).done(function (data) {
        isLoading = false;
        if (data.length == 0) {
            triggerScrollLoader = false;
            $('#loader').hide();
            return;
        }        
        var mapCanvas = document.getElementById('map_right_listing');
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(48.865633, 2.321236),
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            mapTypeControl: false,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            panControl: false,
            panControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            scrollwheel: false,
            scaleControl: false,
            scaleControlOptions: {
                position: google.maps.ControlPosition.TOP_LEFT
            },
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            styles: [{
                    "featureType": "administrative.country",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "landscape.natural.landcover",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "landscape.natural.terrain",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.business",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.government",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.medical",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.place_of_worship",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.school",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "poi.sports_complex",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.station.airport",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.station.bus",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit.station.rail",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "on"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }
            ]
        };
        var map = new google.maps.Map(mapCanvas, mapOptions)

        var infowindow = new google.maps.InfoWindow(),
            marker, i;
        var bounds = new google.maps.LatLngBounds(); // diluar looping
        for (i = 0; i < data.length; i++) {
            pos = new google.maps.LatLng(parseFloat(data[i]['lat_kos']), parseFloat(data[i]['lng_kos']));
            bounds.extend(pos); // di dalam looping
            marker = new google.maps.Marker({
                position: pos,
                map: map,
                icon: '/img/pins/Marker.png',
            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    closeInfoBox();
                    getInfoBox(data[i]).open(map, this);
                    map.setCenter(new google.maps.LatLng(parseFloat(data[i]['lat_kos']), parseFloat(data[i]['lng_kos'])));
                }
            })(marker, i));
        }        
        map.fitBounds(bounds); // setelah looping
        
    }).fail(function (jqXHR, ajaxOptions, thrownError) {
        $('#pesan').html('Tidak ada Kos lain')
        $('#loadMoreButtonBlock').hide()
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


