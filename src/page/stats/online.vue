<template>
  <div class="">
    <div class="stats-count">
      <h4><Icon type="record"></Icon> <span>在线访问</span></h4>
      <h1>{{statsCount}}</h1>
    </div>
    <div id="myChart" :style="chartHeight"></div>
  </div>
</template>

<script>
  export default {
    name: 'online',
    data () {
      return {
        statsCount: 1201,
        chartHeight: {
          width: '100%',
          height: 0
        }
      }
    },
    created () {
    },
    updated () {
      this.drawLine()
    },
    mounted () {
      this.chartHeight.height = document.getElementById('app').offsetHeight - 205 + 'px'
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: { text: '' },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {
            textStyle: {
              fontSize: 16
            }
          },
          series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {
                color: '#8ec6ad'
              }
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#8ec6ad'
                }, {
                  offset: 1,
                  color: '#ffe'
                }])
              }
            }
          }]
        })
      }
    }
  }
</script>

