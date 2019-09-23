import $ from 'jquery';
var Highcharts;

let chart =  {
    init : function(){
        Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(Highcharts);
        
    },
    render : function(el){
      //  alert("render")
        let instance =  new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line'
            },
            title :{
                text: 'g'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
         
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },
         
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },
         
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33,
                    drilldown: 'Microsoft Internet Explorer'
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    drilldown: 'Chrome'
                }, {
                    name: 'Firefox',
                    y: 10.38,
                    drilldown: 'Firefox'
                }]
            }]
         });
    }
}
//

export default chart