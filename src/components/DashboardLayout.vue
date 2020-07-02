<template>
  <highcharts :options="chartOptions" ref="chart"></highcharts>
</template>

<script>
import { Chart } from 'highcharts-vue';

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
        },
        title: {
          text: 'Timesheet Users',
        },
        credits: {
          enabled: false,
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          title: {
            text: 'Total property count',
          },
        },
        legend: {
          enabled: true,
        },
        plotOptions: {
          series: {
            borderWidth: 0,
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: 'Total Timesheet Users',
            colorByPoint: true,
            data: [1, 2, 3, 4, 5],
          },
        ],
      },
    };
  },
  name: 'Dashboard',
  props: {
    chartData: {
      required: false,
      type: Array,
    },
  },
  watch: {
    chartData(newData) {
      this.chartOptions.series[0].data = newData;
      this.$refs.chart.chart.hideLoading();
    },
  },
};
</script>

