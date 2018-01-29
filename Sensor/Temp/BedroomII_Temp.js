/**
 * Created by Robbin_2 on 2017/1/9.
 */
$(function () {
    Highcharts.chart('sensor3_container2', {
        chart: {
            margin: {
                marginTop: '10px'
            },

            backgroundColor: {
                backgroundColor: 'rgba(17, 26, 41, 0.8);'
            },

            zoomType: 'x'
        },

        style: {
            color: '#ffffff',
            fontFamily: 'Frutiger'
        },

        title: {
            text: null
        },

        xAxis: {
            title: {
                text: 'Time (h)',
                style: {
                    color: '#ffffff'
                }
            },
            categories: ['12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00'],

            labels: {
                step: 2,
                style: {
                    color: '#ffffff'
                }
            },
            Tick: {
                enabled: false
            },

            tickWidth: '3px',

            gridLineDashStyle: 'Dot',
            gridLineWidth: '0.5px',
            gridLineColor: '#ffffff'
        },

        yAxis: {
            title: {
                text: null
            },

            labels: {
                style: {
                    color: '#ffffff'
                }
            },

            tickInterval: 2,

            gridLineWidth: '1px',
            gridLineDashStyle: 'Dot',
            gridLineColor: '#ffffff',

            plotLines: [{
                value: 0,
                width: 3,
                color: '#0f0f0f'
            }]
        },

        tooltip: {
            valueSuffix: '°C'
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperature',
            color: '#1e96ed',
            data: [27.5, 28.8, 28.3, 29.2, 30.1, 27.8, 25.2, 24.1, 20.2]
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        }
    });
});
