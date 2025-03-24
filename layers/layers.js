var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'สนามบินไทย',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> สนามบินไทย'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1];
lyr__1.set('fieldAliases', {'fid': 'fid', 'OF_APT_ID': 'OF_APT_ID', 'NAME': 'NAME', 'CITY': 'CITY', 'COUNTRY': 'COUNTRY', 'total_leng': 'total_leng', 'Other': 'Other', 'Y': 'Y', 'X': 'X', 'Z__feet_': 'Z__feet_', 'TZ': 'TZ', 'DST': 'DST', 'NAME_SHORT': 'NAME_SHORT', 'TYPE': 'TYPE', 'IATA_FAA': 'IATA_FAA', 'ICAO': 'ICAO', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'OF_APT_ID': 'TextEdit', 'NAME': 'TextEdit', 'CITY': 'TextEdit', 'COUNTRY': 'TextEdit', 'total_leng': 'TextEdit', 'Other': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Z__feet_': 'TextEdit', 'TZ': 'TextEdit', 'DST': 'TextEdit', 'NAME_SHORT': 'TextEdit', 'TYPE': 'TextEdit', 'IATA_FAA': 'TextEdit', 'ICAO': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'OF_APT_ID': 'hidden field', 'NAME': 'inline label - visible with data', 'CITY': 'inline label - visible with data', 'COUNTRY': 'inline label - visible with data', 'total_leng': 'hidden field', 'Other': 'hidden field', 'Y': 'hidden field', 'X': 'hidden field', 'Z__feet_': 'hidden field', 'TZ': 'hidden field', 'DST': 'hidden field', 'NAME_SHORT': 'hidden field', 'TYPE': 'hidden field', 'IATA_FAA': 'hidden field', 'ICAO': 'hidden field', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});