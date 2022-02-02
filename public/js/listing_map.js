var page = 1;
var kec = document.getElementById("kec").getAttribute('data-kec');
var triggerScrollLoader = true;
var isLoading = false;

// $(document).ready(function(){    
// 	loadMaps()
// })

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

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 555) {
        if (isLoading == false) {
            isLoading = true;
            page++;
            if (triggerScrollLoader) {
                initLoadMore(page, kec);
                loadMoreDataMaps(page, kec);
            }
        }
    }
});

function initLoadMore(page, kec) {
    $.ajax({
        url: "/ListingKos/onScrollLoadMore?page=" + page + "&kec=" + kec,
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
        console.log('Nothing to display');
    });
}

function loadMoreDataMaps(page, kec) {
    $.ajax({
        url: "/ListingKos/loadMoreDataMaps?page=" + page + "&kec=" + kec,
        type: "GET",
        dataType: "json",
    }).done(function (data) {
        isLoading = false;
        if (data.length == 0) {
            triggerScrollLoader = false;
            $('#loader').hide();
            return;
        }
        
        for (i = 0; i < data.length; i++) {
			var point = {
				type_point: data[i]['kategori_kos'],
				name: data[i]['nama_kos'],
				location_latitude: parseFloat(data[i]['lat_kos']), 
				location_longitude: parseFloat(data[i]['lng_kos']),
				map_image_url: '/img/thumb_map_single_hotel.jpg',
				rate: 'Superb | 7.5',
				name_point: data[i]['nama_kos'],
				get_directions_start_address: '',
				phone: '+3934245255',
				url_point: 'detail-hotel.html'
			}
            markersData.Marker.push(point)
        }
		// console.log(point)
        
    }).fail(function (jqXHR, ajaxOptions, thrownError) {
        console.log('Nothing to display');
    });
}

	(function(A) {

	if (!Array.prototype.forEach)
		A.forEach = A.forEach || function(action, that) {
			for (var i = 0, l = this.length; i < l; i++)
				if (i in this)
					action.call(that, this[i], i, this);
			};

		})(Array.prototype);

		var
		mapObject,
		markers = [],
		markersData = {
			'Marker': [
			
			]
		};
		console.log(markersData)
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
				styles: [
					{
						"featureType": "administrative.country",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.province",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.locality",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.neighborhood",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "administrative.land_parcel",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "landscape.man_made",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "landscape.natural.landcover",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "landscape.natural.terrain",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.business",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.government",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.medical",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.place_of_worship",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.school",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "poi.sports_complex",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.highway.controlled_access",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "simplified"
							}
						]
					},
					{
						"featureType": "transit.line",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.station.airport",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.station.bus",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "transit.station.rail",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "all",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "water",
						"elementType": "labels",
						"stylers": [
							{
								"visibility": "off"
							}
						]
					}
				]
			};
			var marker;
			mapObject = new google.maps.Map(document.getElementById('map_right_listing'), mapOptions);
			for (var key in locations)
				locations[key].forEach(function (item) {
					marker = new google.maps.Marker({
						position: new google.maps.LatLng(parseFloat(item['lat_kos']), parseFloat(item['lng_kos'])),
						map: mapObject,
						icon: '/img/pins/' + key + '.png',
					});

					if ('undefined' === typeof markers[key])
						markers[key] = [];
					markers[key].push(marker);
					google.maps.event.addListener(marker, 'click', (function () {
				  closeInfoBox();
				  getInfoBox(item).open(mapObject, this);
				  mapObject.setCenter(new google.maps.LatLng(item.location_latitude, item.location_longitude));
				 }));

	});

	new MarkerClusterer(mapObject, markers[key]);
	
		function hideAllMarkers () {
			for (var key in markers)
				markers[key].forEach(function (marker) {
					marker.setMap(null);
				});
		};
	
	

		function closeInfoBox() {
			$('div.infoBox').remove();
		};

		function getInfoBox(item) {
        console.log(item)
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
function onHtmlClick(location_type, key){
     google.maps.event.trigger(markers[location_type][key], "click");
}
google.maps.event.addDomListener(window, 'load', initialize);