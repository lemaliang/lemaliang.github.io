let map =L.map('map').setView([10.1179510, -83.5429476],11)

      var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var myIcon = L.icon({
      iconUrl: 'alfiler.svg',
      iconSize: [38, 95],
      iconAnchor: [45, 75],
      popupAnchor: [-25, -40],
      });

      var myIcon1 = L.icon({
      iconUrl: 'km.svg',
      iconSize: [38, 95],
      iconAnchor: [45, 75],
      popupAnchor: [-25, -40],
      });

      var popup = L.popup();

      let exp37 = L.marker([10.20534, -83.82283],{icon:myIcon}).addTo(map);
      exp37.bindPopup("<b>Expediente<br>文件号:</b><br>SABI-2019-37<br>");

      let exp10 = L.marker([10.20295, -83.81328]).addTo(map);
      exp10.bindPopup("<b>Expediente<br>文件号</b><br> SABI-2019-10<br>");

      let exp27 = L.marker([10.20359, -83.76602]).addTo(map);
      exp27.bindPopup("<b>Expediente<br>文件号</b><br>SABI-2019-27<br>");
      exp27.bindTooltip("SABI-2019-27<br>K064+558 至 K064+654").openTooltip();

      
      
      document.getElementById('select').addEventListener('change', function(e) {
          let coords = e.target.value.split(",");
          map.flyTo(coords,15);
      });

      let geojson = 
      {
"type": "FeatureCollection",
"features": [
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.885689,
        10.211583,
        0
      ]
    },
    "properties": {
      "name": "K51",
      "latitud": 10.211583,
      "longitud": -83.885689,
      "iconos": "km_051.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.8770104,
        10.2141746,
        0
      ]
    },
    "properties": {
      "name": "K52",
      "latitud": 10.2141746,
      "longitud": -83.8770104,
      "iconos": "km_052.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.868291,
        10.216831,
        0
      ]
    },
    "properties": {
      "name": "K53",
      "latitud": 10.216831,
      "longitud": -83.868291,
      "iconos": "km_053.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.8604796,
        10.2131421,
        0
      ]
    },
    "properties": {
      "name": "K54",
      "latitud": 10.2131421,
      "longitud": -83.8604796,
      "iconos": "km_054.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.8514261,
        10.2129605,
        0
      ]
    },
    "properties": {
      "name": "K55",
      "latitud": 10.2129605,
      "longitud": -83.8514261,
      "iconos": "km_055.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.8422676,
        10.2128571,
        0
      ]
    },
    "properties": {
      "name": "K56",
      "latitud": 10.2128571,
      "longitud": -83.8422676,
      "iconos": "km_056.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.834245,
        10.209445,
        0
      ]
    },
    "properties": {
      "name": "K57",
      "latitud": 10.209445,
      "longitud": -83.834245,
      "iconos": "km_057.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.82574,
        10.206418,
        0
      ]
    },
    "properties": {
      "name": "K58",
      "latitud": 10.206418,
      "longitud": -83.82574,
      "iconos": "km_058.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.817299,
        10.203292,
        0
      ]
    },
    "properties": {
      "name": "K59",
      "latitud": 10.203292,
      "longitud": -83.817299,
      "iconos": "km_059.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.808177,
        10.202906,
        0
      ]
    },
    "properties": {
      "name": "K60",
      "latitud": 10.202906,
      "longitud": -83.808177,
      "iconos": "km_060.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.799072,
        10.202397,
        0
      ]
    },
    "properties": {
      "name": "K61",
      "latitud": 10.202397,
      "longitud": -83.799072,
      "iconos": "km_061.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.789954,
        10.202417,
        0
      ]
    },
    "properties": {
      "name": "K62",
      "latitud": 10.202417,
      "longitud": -83.789954,
      "iconos": "km_062.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.780843,
        10.202938,
        0
      ]
    },
    "properties": {
      "name": "K63",
      "latitud": 10.202938,
      "longitud": -83.780843,
      "iconos": "km_063.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.771735,
        10.203461,
        0
      ]
    },
    "properties": {
      "name": "K64",
      "latitud": 10.203461,
      "longitud": -83.771735,
      "iconos": "km_064.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.762624,
        10.203941,
        0
      ]
    },
    "properties": {
      "name": "K65",
      "latitud": 10.203941,
      "longitud": -83.762624,
      "iconos": "km_065.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.753503,
        10.204445,
        0
      ]
    },
    "properties": {
      "name": "K66",
      "latitud": 10.204445,
      "longitud": -83.753503,
      "iconos": "km_066.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.744384,
        10.204984,
        0
      ]
    },
    "properties": {
      "name": "K67",
      "latitud": 10.204984,
      "longitud": -83.744384,
      "iconos": "km_067.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.735198,
        10.205533,
        0
      ]
    },
    "properties": {
      "name": "K68",
      "latitud": 10.205533,
      "longitud": -83.735198,
      "iconos": "km_068.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.726077,
        10.205173,
        0
      ]
    },
    "properties": {
      "name": "K69",
      "latitud": 10.205173,
      "longitud": -83.726077,
      "iconos": "km_069.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.716974,
        10.204757,
        0
      ]
    },
    "properties": {
      "name": "K70",
      "latitud": 10.204757,
      "longitud": -83.716974,
      "iconos": "km_070.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.708085,
        10.206681,
        0
      ]
    },
    "properties": {
      "name": "K71",
      "latitud": 10.206681,
      "longitud": -83.708085,
      "iconos": "km_071.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.699262,
        10.208999,
        0
      ]
    },
    "properties": {
      "name": "K72",
      "latitud": 10.208999,
      "longitud": -83.699262,
      "iconos": "km_072.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.690184,
        10.208308,
        0
      ]
    },
    "properties": {
      "name": "K73",
      "latitud": 10.208308,
      "longitud": -83.690184,
      "iconos": "km_073.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.681915,
        10.204524,
        0
      ]
    },
    "properties": {
      "name": "K74",
      "latitud": 10.204524,
      "longitud": -83.681915,
      "iconos": "km_074.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.67372,
        10.200593,
        0
      ]
    },
    "properties": {
      "name": "K75",
      "latitud": 10.200593,
      "longitud": -83.67372,
      "iconos": "km_075.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.664761,
        10.198893,
        0
      ]
    },
    "properties": {
      "name": "K76",
      "latitud": 10.198893,
      "longitud": -83.664761,
      "iconos": "km_076.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.655772,
        10.197336,
        0
      ]
    },
    "properties": {
      "name": "K77",
      "latitud": 10.197336,
      "longitud": -83.655772,
      "iconos": "km_077.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.646786,
        10.195704,
        0
      ]
    },
    "properties": {
      "name": "K78",
      "latitud": 10.195704,
      "longitud": -83.646786,
      "iconos": "km_078.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.638871,
        10.191309,
        0
      ]
    },
    "properties": {
      "name": "K79",
      "latitud": 10.191309,
      "longitud": -83.638871,
      "iconos": "km_079.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.63145,
        10.186049,
        0
      ]
    },
    "properties": {
      "name": "K80",
      "latitud": 10.186049,
      "longitud": -83.63145,
      "iconos": "km_080.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.623903,
        10.180975,
        0
      ]
    },
    "properties": {
      "name": "K81",
      "latitud": 10.180975,
      "longitud": -83.623903,
      "iconos": "km_081.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.6161364,
        10.1762452,
        0
      ]
    },
    "properties": {
      "name": "K82",
      "latitud": 10.1762452,
      "longitud": -83.6161364,
      "iconos": "km_082.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.608614,
        10.171111,
        0
      ]
    },
    "properties": {
      "name": "K83",
      "latitud": 10.171111,
      "longitud": -83.608614,
      "iconos": "km_083.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.602494,
        10.164404,
        0
      ]
    },
    "properties": {
      "name": "K84",
      "latitud": 10.164404,
      "longitud": -83.602494,
      "iconos": "km_084.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.596522,
        10.157572,
        0
      ]
    },
    "properties": {
      "name": "K85",
      "latitud": 10.157572,
      "longitud": -83.596522,
      "iconos": "km_085.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.5891,
        10.152407,
        0
      ]
    },
    "properties": {
      "name": "K86",
      "latitud": 10.152407,
      "longitud": -83.5891,
      "iconos": "km_086.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.581116,
        10.148027,
        0
      ]
    },
    "properties": {
      "name": "K87",
      "latitud": 10.148027,
      "longitud": -83.581116,
      "iconos": "km_087.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.573133,
        10.143646,
        0
      ]
    },
    "properties": {
      "name": "K88",
      "latitud": 10.143646,
      "longitud": -83.573133,
      "iconos": "km_088.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.565852,
        10.138251,
        0
      ]
    },
    "properties": {
      "name": "K89",
      "latitud": 10.138251,
      "longitud": -83.565852,
      "iconos": "km_089.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.560793,
        10.130732,
        0
      ]
    },
    "properties": {
      "name": "K90",
      "latitud": 10.130732,
      "longitud": -83.560793,
      "iconos": "km_090.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.555431,
        10.123511,
        0
      ]
    },
    "properties": {
      "name": "K91",
      "latitud": 10.123511,
      "longitud": -83.555431,
      "iconos": "km_091.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.548012,
        10.118263,
        0
      ]
    },
    "properties": {
      "name": "K92",
      "latitud": 10.118263,
      "longitud": -83.548012,
      "iconos": "km_092.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.540209,
        10.113585,
        0
      ]
    },
    "properties": {
      "name": "K93",
      "latitud": 10.113585,
      "longitud": -83.540209,
      "iconos": "km_093.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.533164,
        10.107851,
        0
      ]
    },
    "properties": {
      "name": "K94",
      "latitud": 10.107851,
      "longitud": -83.533164,
      "iconos": "km_094.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.525912,
        10.102477,
        0
      ]
    },
    "properties": {
      "name": "K95",
      "latitud": 10.102477,
      "longitud": -83.525912,
      "iconos": "km_095.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.517255,
        10.09992,
        0
      ]
    },
    "properties": {
      "name": "K96",
      "latitud": 10.09992,
      "longitud": -83.517255,
      "iconos": "km_096.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.50995,
        10.094514,
        0
      ]
    },
    "properties": {
      "name": "K97",
      "latitud": 10.094514,
      "longitud": -83.50995,
      "iconos": "km_097.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.501533,
        10.091284,
        0
      ]
    },
    "properties": {
      "name": "K98",
      "latitud": 10.091284,
      "longitud": -83.501533,
      "iconos": "km_098.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.4924776,
        10.090558,
        0
      ]
    },
    "properties": {
      "name": "K99",
      "latitud": 10.090558,
      "longitud": -83.4924776,
      "iconos": "km_099.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.484117,
        10.094128,
        0
      ]
    },
    "properties": {
      "name": "K100",
      "latitud": 10.094128,
      "longitud": -83.484117,
      "iconos": "km_100.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.47677,
        10.099406,
        0
      ]
    },
    "properties": {
      "name": "K101",
      "latitud": 10.099406,
      "longitud": -83.47677,
      "iconos": "km_101.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.46807,
        10.101413,
        0
      ]
    },
    "properties": {
      "name": "K102",
      "latitud": 10.101413,
      "longitud": -83.46807,
      "iconos": "km_102.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.458945,
        10.101389,
        0
      ]
    },
    "properties": {
      "name": "K103",
      "latitud": 10.101389,
      "longitud": -83.458945,
      "iconos": "km_103.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.449929,
        10.100132,
        0
      ]
    },
    "properties": {
      "name": "K104",
      "latitud": 10.100132,
      "longitud": -83.449929,
      "iconos": "km_104.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.440896,
        10.099398,
        0
      ]
    },
    "properties": {
      "name": "K105",
      "latitud": 10.099398,
      "longitud": -83.440896,
      "iconos": "km_105.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.431884,
        10.098648,
        0
      ]
    },
    "properties": {
      "name": "K106",
      "latitud": 10.098648,
      "longitud": -83.431884,
      "iconos": "km_106.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.423179,
        10.095937,
        0
      ]
    },
    "properties": {
      "name": "K107",
      "latitud": 10.095937,
      "longitud": -83.423179,
      "iconos": "km_107.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.416634,
        10.09106,
        0
      ]
    },
    "properties": {
      "name": "K108",
      "latitud": 10.09106,
      "longitud": -83.416634,
      "iconos": "km_108.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.414098,
        10.082431,
        0
      ]
    },
    "properties": {
      "name": "K109",
      "latitud": 10.082431,
      "longitud": -83.414098,
      "iconos": "km_109.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.408878,
        10.077002,
        0
      ]
    },
    "properties": {
      "name": "K110",
      "latitud": 10.077002,
      "longitud": -83.408878,
      "iconos": "km_110.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.399837,
        10.077207,
        0
      ]
    },
    "properties": {
      "name": "K111",
      "latitud": 10.077207,
      "longitud": -83.399837,
      "iconos": "km_111.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.390826,
        10.075833,
        0
      ]
    },
    "properties": {
      "name": "K112",
      "latitud": 10.075833,
      "longitud": -83.390826,
      "iconos": "km_112.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.381884,
        10.074289,
        0
      ]
    },
    "properties": {
      "name": "K113",
      "latitud": 10.074289,
      "longitud": -83.381884,
      "iconos": "km_113.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.372894,
        10.074601,
        0
      ]
    },
    "properties": {
      "name": "K114",
      "latitud": 10.074601,
      "longitud": -83.372894,
      "iconos": "km_114.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.365621,
        10.069248,
        0
      ]
    },
    "properties": {
      "name": "K115",
      "latitud": 10.069248,
      "longitud": -83.365621,
      "iconos": "km_115.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.36816,
        10.061248,
        0
      ]
    },
    "properties": {
      "name": "K116",
      "latitud": 10.061248,
      "longitud": -83.36816,
      "iconos": "km_116.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.362252,
        10.055071,
        0
      ]
    },
    "properties": {
      "name": "K117",
      "latitud": 10.055071,
      "longitud": -83.362252,
      "iconos": "km_117.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.355508,
        10.049124,
        0
      ]
    },
    "properties": {
      "name": "K118",
      "latitud": 10.049124,
      "longitud": -83.355508,
      "iconos": "km_118.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.347979,
        10.045413,
        0
      ]
    },
    "properties": {
      "name": "K119",
      "latitud": 10.045413,
      "longitud": -83.347979,
      "iconos": "km_119.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.339098,
        10.047,
        0
      ]
    },
    "properties": {
      "name": "K120",
      "latitud": 10.047,
      "longitud": -83.339098,
      "iconos": "km_120.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.329984,
        10.04673,
        0
      ]
    },
    "properties": {
      "name": "K121",
      "latitud": 10.04673,
      "longitud": -83.329984,
      "iconos": "km_121.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.320869,
        10.046449,
        0
      ]
    },
    "properties": {
      "name": "K122",
      "latitud": 10.046449,
      "longitud": -83.320869,
      "iconos": "km_122.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.311746,
        10.046165,
        0
      ]
    },
    "properties": {
      "name": "K123",
      "latitud": 10.046165,
      "longitud": -83.311746,
      "iconos": "km_123.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.30263,
        10.045811,
        0
      ]
    },
    "properties": {
      "name": "K124",
      "latitud": 10.045811,
      "longitud": -83.30263,
      "iconos": "km_124.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.293606,
        10.04533,
        0
      ]
    },
    "properties": {
      "name": "K125",
      "latitud": 10.04533,
      "longitud": -83.293606,
      "iconos": "km_125.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.284407,
        10.04494,
        0
      ]
    },
    "properties": {
      "name": "K126",
      "latitud": 10.04494,
      "longitud": -83.284407,
      "iconos": "km_126.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.275714,
        10.042484,
        0
      ]
    },
    "properties": {
      "name": "K127",
      "latitud": 10.042484,
      "longitud": -83.275714,
      "iconos": "km_127.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.268835,
        10.03659,
        0
      ]
    },
    "properties": {
      "name": "K128",
      "latitud": 10.03659,
      "longitud": -83.268835,
      "iconos": "km_128.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.262061,
        10.030552,
        0
      ]
    },
    "properties": {
      "name": "K129",
      "latitud": 10.030552,
      "longitud": -83.262061,
      "iconos": "km_129.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.253664,
        10.027345,
        0
      ]
    },
    "properties": {
      "name": "K130",
      "latitud": 10.027345,
      "longitud": -83.253664,
      "iconos": "km_130.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.244579,
        10.026562,
        0
      ]
    },
    "properties": {
      "name": "K131",
      "latitud": 10.026562,
      "longitud": -83.244579,
      "iconos": "km_131.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.235486,
        10.025808,
        0
      ]
    },
    "properties": {
      "name": "K132",
      "latitud": 10.025808,
      "longitud": -83.235486,
      "iconos": "km_132.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.226397,
        10.025031,
        0
      ]
    },
    "properties": {
      "name": "K133",
      "latitud": 10.025031,
      "longitud": -83.226397,
      "iconos": "km_133.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.217837,
        10.022118,
        0
      ]
    },
    "properties": {
      "name": "K134",
      "latitud": 10.022118,
      "longitud": -83.217837,
      "iconos": "km_134.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.210314,
        10.017014,
        0
      ]
    },
    "properties": {
      "name": "K135",
      "latitud": 10.017014,
      "longitud": -83.210314,
      "iconos": "km_135.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.202781,
        10.011908,
        0
      ]
    },
    "properties": {
      "name": "K136",
      "latitud": 10.011908,
      "longitud": -83.202781,
      "iconos": "km_136.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.195093,
        10.007121,
        0
      ]
    },
    "properties": {
      "name": "K137",
      "latitud": 10.007121,
      "longitud": -83.195093,
      "iconos": "km_137.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.186136,
        10.005641,
        0
      ]
    },
    "properties": {
      "name": "K138",
      "latitud": 10.005641,
      "longitud": -83.186136,
      "iconos": "km_138.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.177074,
        10.004594,
        0
      ]
    },
    "properties": {
      "name": "K139",
      "latitud": 10.004594,
      "longitud": -83.177074,
      "iconos": "km_139.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.16921,
        10.000415,
        0
      ]
    },
    "properties": {
      "name": "K140",
      "latitud": 10.000415,
      "longitud": -83.16921,
      "iconos": "km_140.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.161809,
        9.995354,
        0
      ]
    },
    "properties": {
      "name": "K141",
      "latitud": 9.995354,
      "longitud": -83.161809,
      "iconos": "km_141.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.152768,
        9.99425,
        0
      ]
    },
    "properties": {
      "name": "K142",
      "latitud": 9.99425,
      "longitud": -83.152768,
      "iconos": "km_142.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.144374,
        9.990871,
        0
      ]
    },
    "properties": {
      "name": "K143",
      "latitud": 9.990871,
      "longitud": -83.144374,
      "iconos": "km_143.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.135385,
        9.990809,
        0
      ]
    },
    "properties": {
      "name": "K144",
      "latitud": 9.990809,
      "longitud": -83.135385,
      "iconos": "km_144.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.126377,
        9.992111,
        0
      ]
    },
    "properties": {
      "name": "K145",
      "latitud": 9.992111,
      "longitud": -83.126377,
      "iconos": "km_145.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.117574,
        9.990489,
        0
      ]
    },
    "properties": {
      "name": "K146",
      "latitud": 9.990489,
      "longitud": -83.117574,
      "iconos": "km_146.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.108478,
        9.990926,
        0
      ]
    },
    "properties": {
      "name": "K147",
      "latitud": 9.990926,
      "longitud": -83.108478,
      "iconos": "km_147.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.099545,
        9.990828,
        0
      ]
    },
    "properties": {
      "name": "K148",
      "latitud": 9.990828,
      "longitud": -83.099545,
      "iconos": "km_148.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.092292,
        9.985478,
        0
      ]
    },
    "properties": {
      "name": "K149",
      "latitud": 9.985478,
      "longitud": -83.092292,
      "iconos": "km_149.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.083263,
        9.985017,
        0
      ]
    },
    "properties": {
      "name": "K150",
      "latitud": 9.985017,
      "longitud": -83.083263,
      "iconos": "km_150.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.074386,
        9.982926,
        0
      ]
    },
    "properties": {
      "name": "K151",
      "latitud": 9.982926,
      "longitud": -83.074386,
      "iconos": "km_151.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.065453,
        9.983991,
        0
      ]
    },
    "properties": {
      "name": "K152",
      "latitud": 9.983991,
      "longitud": -83.065453,
      "iconos": "km_152.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.056439,
        9.985128,
        0
      ]
    },
    "properties": {
      "name": "K153",
      "latitud": 9.985128,
      "longitud": -83.056439,
      "iconos": "km_153.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.047321,
        9.985465,
        0
      ]
    },
    "properties": {
      "name": "K154",
      "latitud": 9.985465,
      "longitud": -83.047321,
      "iconos": "km_154.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.038585,
        9.98802,
        0
      ]
    },
    "properties": {
      "name": "K155",
      "latitud": 9.98802,
      "longitud": -83.038585,
      "iconos": "km_155.svg",
      "type": "K"
    }
  },
  {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.029873,
        9.990688,
        0
      ]
    },
    "properties": {
      "name": "K156",
      "latitud": 9.990688,
      "longitud": -83.029873,
      "iconos": "km_156.svg",
      "type": "K"
    }
  }
]
}


L.geoJSON(geojson, 

{
  pointToLayer: function(geoJsonPoint, latlng){
      return L.marker(latlng,{
          icon: myIcon1
      });
  }, 
  onEachFeature: function(feature, layer){
      
      layer.bindPopup(feature.properties.name, feature.properties.iconos);

  }
}


).addTo(map);








//var options = document.getElementsByClassName('item');

//for(var i = 0; i < options.length; i++){
  //      options[i].textContent = 'leon';

//}
var select = document.getElementById("select");
        //var arr = ['casa', 'perro', '343',454];

        var arr = [ //Expedientes Expropiados
          {
                  expNum: 'SABI-2019-037',
                  ki:'K058+332',
                  kf:'K058+349', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Ricardo Vindas Rojas', 
                  ownerPhone: '6075-1054, 8497-1367',
                  expDrawing: '/plano37.png',
                  lat: 10.20534,
                  lng: -83.82283,
                  coord:'10.20534, -83.82283',
                  location: 'Lado Izquierdo (左侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-010(1)',
                  ki:'K059+260',
                  kf:'K059+556', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Enrique Rodríguez Arroyo', 
                  ownerPhone: '8305-2136, 2710-3907, 8681-4365 (whatsapp)',
                  expDrawing: '/plano010new.png',
                  lat: 10.20295,
                  lng: -83.81328,
                  coord:'10.20295, -83.81328',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-010(2)',
                  ki:'K059+595',
                  kf:'K059+636', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Enrique Rodríguez Arroyo', 
                  ownerPhone: '8305-2136, 2710-3907, 8681-4365 (whatsapp)',
                  expDrawing: '/plano010(2).png',
                  lat: 10.20309,
                  lng: -83.81428, 
                  coord:'10.20309, -83.81428',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-027',
                  ki:'K064+558',
                  kf:'K064+654', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Almacén Antonio Gazel Sociedad Anónima', 
                  ownerPhone: '8833-3105',
                  expDrawing: '/plano027.png',
                  lat: 10.20378,
                  lng: -83.76628,
                  coord:'10.20378, -83.76628',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },  
          {
                  expNum: 'SABI-2019-011',
                  ki:'K075+076',
                  kf:'K075+095', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Marvin Brenes Fuentes', 
                  ownerPhone: '8833-4895',
                  expDrawing: '/plano011.png',
                  lat: 10.20055,
                  lng: -83.67291,
                  coord:'10.20055, -83.67291',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },  
          {
                  expNum: 'SABI-2018-123',
                  ki:'K083+172',
                  kf:'K083+193', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Rafael Núñez Núñez', 
                  ownerPhone: '2760-0356, 60077249',
                  expDrawing: '/plano123.png',
                  lat: 10.16983,
                  lng: -83.60758,
                  coord:'10.16983, -83.60758',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2018-122',
                  ki:'K083+193',
                  kf:'K083+211', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Haydee Falcomira del Socorro Torrentes Serrano', 
                  ownerPhone: '8980-9190, 8633-5562',
                  expDrawing: 'plano122.png',
                  lat: 10.16967,
                  lng: -83.60747,
                  coord:'10.16967, -83.60747',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2018-121',
                  ki:'K083+433',
                  kf:'K083+439', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Alice Gloria Peraza Solís', 
                  ownerPhone: '6076-5452',
                  expDrawing: '/plano121.png',
                  lat: 10.16833,
                  lng: -83.60603,
                  coord:'10.16833, -83.60603',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
            },
          {
                  expNum: 'SABI-2019-023',
                  ki:'K083+974',
                  kf:'K083+988', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'María Eugenia Méndez Fonseca', 
                  ownerPhone: '8651-6369, 6278-4260',
                  expDrawing: '',
                  lat: 10.16462,
                  lng: -83.60275,
                  coord:'10.16462, -83.60275',
                  location: 'Lado Derecho (右侧)| Lado Izquierdo (左侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2018-128',
                  ki:'K084+048',
                  kf:'K084+063', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Rosa Justina Mora Chavarría', 
                  ownerPhone: '8866-0022, 8884-5303',
                  expDrawing: '/plano128.png',
                  lat: 10.16405,
                  lng: -83.60234,
                  coord:'10.16405, -83.60234',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2019-007',
                  ki:'K084+122',
                  kf:'K084+137', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Karen Dinorah Enríquez Gómez', 
                  ownerPhone: '8806-34-54',
                  expDrawing: '/plano007.png',
                  lat: 10.1635,
                  lng: -83.60178,
                  coord:'10.1635, -83.60178',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-006',
                  ki:'K050+619',
                  kf:'K050+710', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Agropecuaria Corinto S.A', 
                  ownerPhone: '2225-5046, 8924-9506',
                  expDrawing: '/plano006.png',
                  lat: 10.21217,
                  lng: -83.88871,
                  coord:'10.21217, -83.88871',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-056',
                  ki:'K057+997',
                  kf:'K058+233', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Ricardo Vindas Rojas', 
                  ownerPhone: '6075-1054',
                  expDrawing: '/plano056.png',
                  lat: 10.20602,
                  lng: -83.82476,
                  coord:'10.20602, -83.82476',
                  location: 'Lado Izquierdo (左侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2019-055',
                  ki:'K111+766',
                  kf:'K111+799', 
                  status:'Expropiado 已征地',
                  brach: '(4)标段 - 2分部',
                  deliveryDate:'2019.11.23',
                  owner:'Rodolfo Delgado Brenes', 
                  ownerPhone: '8476-2874',
                  expDrawing: '/plano055.png',
                  lat: 10.07628,
                  lng: -83.39283,
                  coord:'10.07628, -83.39283',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2019-012(1)',
                  ki:'K078+355',
                  kf:'K078+419', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Hacienda Las Delicias S.A', 
                  ownerPhone: '2760-0221',
                  expDrawing: '/plano012(1).png',
                  lat: 10.1944,
                  lng: -83.64384,
                  coord:'10.1944, -83.64384',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-012(2)',
                  ki:'K078+509',
                  kf:'K078+558', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Hacienda Las Delicias S.A', 
                  ownerPhone: '2760-0221',
                  expDrawing: 'plano012(2).png',
                  lat: 10.19416,
                  lng: -83.64349,
                  coord:'10.19416, -83.64349',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2019-054',
                  ki:'K068+211',
                  kf:'K068+230', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Johnny Trinidad Cárdenas Álfaro', 
                  ownerPhone: '8391-9630, 2716-6291',
                  expDrawing: '/plano054.png',
                  lat: 10.20295,
                  lng: -83.81328,
                  coord:'10.20295, -83.81328',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-072',
                  ki:'K115+357',
                  kf:'K115+424', 
                  status:'Expropiado 已征地',
                  brach: '(4)标段 - 2分部',
                  deliveryDate:'2019.11.23',
                  owner:'Nayubel Briceño Piedra', 
                  ownerPhone: '8694-5767, 2718-4280',
                  expDrawing: '/plano072.png',
                  lat: 10.06609,
                  lng: -83.36616,
                  coord:'10.06609, -83.36616',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2018-126',
                  ki:'K083+122',
                  kf:'K083+142', 
                  status:'Expropiado 已征地',
                  brach: '(2)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Ramón Solís Granados', 
                  ownerPhone: 'N/A',
                  expDrawing: 'plano126.png',
                  lat: 10.17044,
                  lng: 83.60796,
                  coord:'10.17044, -83.60796',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          }, 
          {
                  expNum: 'SABI-2019-001',
                  ki:'K055+727',
                  kf:'K055+741', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'José Joaquín González Campos', 
                  ownerPhone: '2260-5372, 6229-2334, 8713-8588',
                  expDrawing: '/plano001.png',
                  lat: 10.21264,
                  lng: -83.8447,
                  coord:'10.21264, -83.8447',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-052',
                  ki:'K114+206',
                  kf:'K114+377', 
                  status:'Expropiado 已征地',
                  brach: '(4)标段 - 2分部',
                  deliveryDate:'2019.11.23',
                  owner:'Corrales Dormond Sociedad Anónima', 
                  ownerPhone: '8308-7344, 8712-6446',
                  expDrawing: '/plano052.png',
                  lat: 10.07331,
                  lng: -83.37097,
                  coord:'10.07331, -83.37097',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },    
          {
                  expNum: 'SABI-2019-119',
                  ki:'K112+107',
                  kf:'K112+140', 
                  status:'Expropiado 已征地',
                  brach: '(4)标段 - 2分部',
                  deliveryDate:'2019.11.23',
                  owner:'Nazario Arcadio Santana Santana', 
                  ownerPhone: '8320-7126',
                  expDrawing: '/plano119.png',
                  llat: 10.04626,
                  lng: -83.31969,
                  coord:'10.04626, -83.31969',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
          },
          {
                  expNum: 'SABI-2019-033',
                  ki:'K055+741',
                  kf:'K055+767', 
                  status:'Expropiado 已征地',
                  brach: '(1)标段 - 1分部',
                  deliveryDate:'2019.11.23',
                  owner:'Grupo Empresarial EUSSE Sociedad Anónima', 
                  ownerPhone: '7105-6622, 2710-2874',
                  expDrawing: '/plano033.png',
                  lat: 10.21268,
                  lng: -83.84459,
                  coord:'10.21268, -83.84459',
                  location: 'Lado Derecho (右侧)',
                  tipoEst:'N/A'
                
          },
  
  
          ];
    
        for(var i = 0 ; i < arr.length; i++){
            var option = document.createElement("option");
            //txt = document.createTextNode(arr[i].expNum);
            txt = document.createTextNode(`${arr[i].expNum} (${arr[i].ki} - ${arr[i].kf})`);
            option.appendChild(txt);
            option.setAttribute("value",arr[i].coord);
            option.setAttribute("name",arr[i].expNum);
            //option.setAttribute("name",`${arr[i].expNum} ${arr[i].ki} - ${arr[i].kf}`);
            select.insertBefore(option, select.lastChild);
            //console.log(arr[i].coord);
        }

  
        const selectElement = document.getElementById('select');
        

        selectElement.addEventListener('change', (event) => {
          const resultado = document.querySelector('.resultado');
          //resultado.textContent = `El expediente es ${event.target.name}`;
          resultado.textContent = `Coordenadas de la propiedad(坐标): ${event.target.value}`;
        });

        // Telefono funcion
        selectElement.addEventListener('change', (event) => {
          const coordValue = event.target.value;
          for(i=0; i<arr.length; i++){
            if(arr[i].coord === coordValue){
              var telephone = arr[i].ownerPhone;
              var nombreProp = arr[i].owner;
              var fechaEntrega = arr[i].deliveryDate;
              var kmInicio = arr[i].ki;
              var kmFinal = arr[i].kf;
              var actStatus = arr[i].status;
              var branch = arr[i].brach;
              var urlFoto = arr[i].expDrawing; //link image Catastro
              var typeStruct = arr[i].tipoEst;
              var locacion = arr[i].location;
            }
          }
          const telefono = document.getElementById('telefono');
          telefono.textContent = `${telephone}`; 
          const proName = document.getElementById('propietarioNombre');
          proName.textContent = `${nombreProp}`;
          const delDate = document.getElementById('fechaEntrega');
          delDate.textContent = `${fechaEntrega}`;
          const inicioKm = document.getElementById('ki');
          inicioKm.textContent = `${kmInicio}`;
          const finalKm = document.getElementById('kf');
          finalKm.textContent = `${kmFinal}`;
          const stat = document.getElementById('estado');
          stat.textContent = `${actStatus}`;
          const r = document.getElementById('rama');
          r.textContent = `${branch}`;
          const tEst = document.getElementById('estructura');
          tEst.textContent = `${typeStruct}`;
          const liLd = document.getElementById('location');
          liLd.textContent = `${locacion}`;

          const newImgDiv = document.getElementById('mapaCat');
          newImgDiv.setAttribute('src',urlFoto);
          
        });
        
          


        //selectElement.addEventListener('change', (event) => {
         // const telefono = document.getElementById('telefono');
         // telefono.textContent = `${event.target.value}`;
        //});

        for(i=0;i<arr.length;i++){
          var num = arr[i].ownerPhone;
          //console.log(num);
        }
    