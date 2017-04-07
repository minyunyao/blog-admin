import { Component, OnInit } from '@angular/core';
import { LeafletService } from './services/leaflet.service';
import { flyIn } from '../../animations/fly-in';
import { Mark } from '../../models/mark-model';
require('leaflet');
let L = require('leaflet');
// require('leaflet.label');
require('leaflet.markercluster');
require('leaflet.fullscreen');
require('leaflet-search');
require('assets/leaflet/L.Control.MousePosition.js');
require('assets/leaflet/leaflet-list-markers/dist/leaflet-list-markers.src.js');
// require('assets/leaflet/freezable.js');



@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss'],
  animations: [
    flyIn
  ]
})
export class LeafletComponent implements OnInit {
  public markers: any;
  constructor(private leafletService: LeafletService) { };
  public marker: any;
  public unBoundMark: any;
  public boundMark: any;
  public baseMaps: any;

  ngOnInit() {
    this.baseMaps = {
      Chart: L.tileLayer("http://www.ais.msa.gov.cn/MapService?service=wmts&request=gettile&tilematrixset=basicsearoad&tilematrix={z}&tilerow={y}&tilecol={x}&format=image/png&layer=default&style=default&version=1.0.0", {
        attribution: '&copy; <a href=\"#\">深圳深蓝信息科技开发有限公司</a>'
      }),
      Esri: L.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
      })
    }

    let map = L.map("map", {
      zoomControl: false,
      center: L.latLng(23.18674966, 116.60408333),
      zoom: 12,
      minZoom: 4,
      maxZoom: 20,
      fullscreenControl: true,
      layers: [this.baseMaps.Chart]
    });
    L.control.zoom({ position: "topright" }).addTo(map);
    L.control.layers(this.baseMaps).addTo(map);
    L.control.scale().addTo(map);
    L.control.mousePosition({ position: "bottomright" }).addTo(map);
    this.markers = this.addMarkerToMap();
    
    // map.addLayer(this.markers);
    let _this = this;
    //inizialize Leaflet List Markers
    var list = new L.Control.ListMarkers({ layer: this.markers, itemIcon: null });
    list.on('item-mouseover', function (e) {
      
    }).on('item-mouseout', function (e) {
      // map.removeLayer(_this.marker);
    }).on('item-click', function (e) {
      if (_this.marker) {
        map.removeLayer(_this.marker);
      }
      _this.marker = _this.leafletService.addMark(e.layer._latlng);
      map.addLayer(_this.marker);
      // map.panTo(e.layer._latlng);
      _this.markers.zoomToShowLayer(e.layer);
      map.panTo(e.layer._latlng);
    });
    map.addControl(list);


    map.addControl(new L.Control.Search({
      layer: this.markers,
      textPlaceholder: '请输入航标名称',
      marker: false,
      zoom: 18,
      textErr: '未找到！！',
      buildTip: function (text, val) {
        let isBound = val.layer.options.isBound;
        let src = isBound == 1 ? "assets/mark/link.png" : "assets/mark/linkbreak.png";
        return '<a href="#" ">' + text + '<img src="' + src + '"></a>';
      },
      moveToLocation: function (latlng, title, map) {
        map.setView(latlng, 18);
        if (_this.marker) {
          map.removeLayer(_this.marker);
        }
        _this.marker = _this.leafletService.addMark(latlng);
        map.addLayer(_this.marker);
        let markLay = latlng.layer.options;
        _this.leafletService.getMarkInfo(markLay.markId, markLay.isBound).subscribe(
          res => {
            if (markLay.isBound == 0) {
              _this.unBoundMark = res;
            } else {
              _this.boundMark = res;
            }

          }
        )
      }
    }));
    //markers点击事件
    this.markers.on('click', function (a) {
      if (_this.marker) {
        map.removeLayer(_this.marker);
      }
      _this.marker = _this.leafletService.addMark(a.latlng);
      map.addLayer(_this.marker);
      let markLay = a.layer.options;
      //_this.leafletService.openWin(markLay.markId,markLay.isBound);
      _this.leafletService.getMarkInfo(markLay.markId, markLay.isBound).subscribe(
        res => {
          if (markLay.isBound == 0) {
            _this.unBoundMark = res;
          } else {
            _this.boundMark = res;
          }

        }
      )


    });


  }

  public addMarkerToMap(): any {
    let _this = this;
    let markers: any;
    markers = new L.markerClusterGroup();
    this.leafletService.getMarkList().subscribe(
      res => {
        res.map(function (mark: Mark) {
          let myIcon: any = _this.leafletService.getImg(mark.seaChartIcon);
          let marker = L.marker([mark.latitude, mark.longitude], { icon: myIcon, zIndexOffset: 1000, title: mark.markName, isBound: mark.isBound, markId: mark.basNavigationMarkOID });
          markers.addLayer(marker);
        });
      }
    )
    return markers;
  }

}
