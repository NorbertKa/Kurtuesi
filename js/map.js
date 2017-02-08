(function(){
    var kurtuesiURL = "http://www.kurtuesi.lv/tiles/cache"
    //EPSG data [https://epsg.io/3059]
    //Resolutions and scales from TileCache [http://tilecache.org/] server
    var resolutions = [917.22172699999999, 670.68745100000001, 335.343726, 167.671863, 83.835931000000002, 41.917966, 20.958983, 10.479490999999999, 5.2397460000000002, 2.6198730000000001, 1.309936, 0.65496799999999999, 0.327484];
    var scales = [2600000, 1901162.307, 950581.1531, 475290.5767, 237645.2884, 118822.6442, 59411.32209, 29705.66104, 14852.83052, 7426.415261, 3713.20763, 1856.603815, 928.3019075];

    //Base layer settings
    var baseLayerSettings = {
        format: 'image/jpeg',
        projection: "EPSG:3059"
    }

    map = new OpenLayers.Map('map',{
        projection: "EPSG:3059",
        units: 'm',
        maxExtent: new OpenLayers.Bounds(151534,67842,922002,541818), 
        tileSize: new OpenLayers.Size(512, 512),
        scales: scales,
        resolutions: resolutions,
        numZoomLevels: 12
    });

    //Layers, got them from [http://www.kurtuesi.lv/maps]
    var kurtuesi = baseLayerSettings
    kurtuesi.layers = 'kurtuesi'
    layer = new OpenLayers.Layer.WMS( "Standarta", kurtuesiURL, kurtuesi);

    var kurtuesi_topo = baseLayerSettings
    kurtuesi_topo.layers = 'kurtuesi_topo'
    layerTopo = new OpenLayers.Layer.WMS( "Topologiska", kurtuesiURL,kurtuesi_topo);

    var kurtuesi_orto = baseLayerSettings
    kurtuesi_orto.layers = 'kurtuesi_orto';
    layerOrto = new OpenLayers.Layer.WMS( "Orto" , kurtuesiURL,kurtuesi_orto);

    map.addLayer(layer);
    map.addLayer(layerTopo);
    map.addLayer(layerOrto);

    //Center the map
    map.setCenter(new OpenLayers.LonLat(478669.91, 304082.77), 3);
    map.addControl(new OpenLayers.Control.LayerSwitcher());
})();