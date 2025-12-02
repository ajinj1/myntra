var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama1",
      "name": "Panorama(1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.253301199601223,
          "pitch": 0.0756416538837037,
          "rotation": 0,
          "target": "2-panorama3"
        },
        {
          "yaw": 2.2380846349942622,
          "pitch": 0.0678746419480678,
          "rotation": 0,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama2",
      "name": "Panorama(2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7857012896137974,
          "pitch": 0.040588860647018166,
          "rotation": 0,
          "target": "2-panorama3"
        },
        {
          "yaw": -3.064932419759131,
          "pitch": 0.05129323406146291,
          "rotation": 0,
          "target": "0-panorama1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama3",
      "name": "Panorama(3)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1427317690973915,
          "pitch": 0.18515425932220353,
          "rotation": 0,
          "target": "0-panorama1"
        },
        {
          "yaw": 2.129581391414453,
          "pitch": 0.1619941635800899,
          "rotation": 0,
          "target": "1-panorama2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
