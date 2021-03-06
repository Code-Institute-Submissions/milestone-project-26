// Populate the datatable using specific colums from bidimensional dataSet array

$(document).ready(function() {
    var artwork = $('#artwork').DataTable( {
        sDom: 'lrtip',
        data: dataSet,
        columns: [
            { title: "Title" },
            { title: "Created In" },
            { title: "Year" },
            { title: "Current Country" },
            { title: "Current City" },
            { title: "Current Location" } 
        ]
    } );

    $('#customSearchBox').keyup(function(){
        artwork.search($(this).val()).draw() ;
    })
} );

// Map function

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: {
        lat: 46.619261,
        lng: -33.134766
      }
    });

    var infowindow = new google.maps.InfoWindow();
  
    var marker, i;
  
    for (i = 0; i < dataSet.length; i++) {  // Marker constructor using data from bidimensional dataSet array
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(dataSet[i][6], dataSet[i][7]),
        title: dataSet[i][5],
        map: map
      });
  
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent("<i class='fas fa-map-marked-alt'></i> " + dataSet[i][5] + "<br />" + "<i class='fas fa-globe-americas'></i> " + "Website: " + dataSet[i][8]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  
  }