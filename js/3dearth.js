
var dom = document.getElementById("earth")
var myChart = echarts.init(dom);

// 使用 echarts 绘制世界地图的实例作为纹理
var canvas = document.createElement('canvas');
var texture = echarts.init(canvas, null, {
  width: 4096, height: 2048
});


texture.setOption({
  backgroundColor: '#d5d1ce',

  geo: [
    {
      //type: 'map',
      map: 'world',
      top: 0, left: 0,
      right: 0, bottom: 0,
      silent: true,//图形是否不响应和触发鼠标事件
      boundingCoords: [[-180, 90], [180, -90]],
      // label: {
      //   textStyle: {
      //     color: "#fff",
      //     fontSize: 30
      //   }
      // },
      // emphasis: {
      //   itemStyle: {
      //     color: "#2038cc"
      //   }
      // },
      // data: [{
      //   name: '中国',
      //   value: 100,
      //   label: {
      //     show: true
      //   }
      // }],
      // nameMap: {
      //   'China': '中国'
      // }
    },
  ],
  series: [
    {
      name: '地点', // series名称
      type: 'effectScatter', // series图表类型
      coordinateSystem: 'geo', // series坐标系类型
      color: 'red',
      rippleEffect: {
        period: '3',
        scale: '5',
        brushType: 'stroke'
      },
      data: [{ name: '重庆', value: [106.33, 29.35, 90] }]
    }
  ]
  // visualMap: [{
  //   show: true,
  //   type: 'continuous',
  //   itemWidth: 30,
  //   itemHeight: 100
  // }]
});

var option = {
  globe: {
    show: true,
    baseTexture: texture,
    shading: 'color',
    // light: {
    //   ambient: {
    //     intensity: 0.5
    //   },
    //   main: {
    //     intensity: 0.6
    //   }
    // },
    //视角控制
    viewControl: {
      rotateSensitivity: 3, //鼠标旋转灵敏度，设置为0后无法旋转。
      zoomSensitivity: 0,//鼠标缩放灵敏度
      autoRotate: true,//自动旋转
      autoRotateAfterStill: 1,//鼠标停止后多久恢复旋转(为0时暂停后不恢复旋转)
      //alpha:160,//视角绕 x 轴，即上下旋转的角度
      //beta:-20,//视角绕 y 轴，即左右旋转的角度。
      targetCoord: [116.46, 39.92]//定位到哪里
    }
  },

  series: {
    type: 'scatter3D',
    coordinateSystem: 'globe',
    blendMode: 'lighter',
    symbolSize: 2,
    itemStyle: {
      color: 'rgb(50, 50, 150)',
      opacity: 0.2
    },
    data: [10, 100, 100, 200]
  }
};
myChart.setOption(option);