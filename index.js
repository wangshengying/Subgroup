$(function(){    
    var data1 = [
        ['语言名称', '排名', '升或降', '变化幅度'],
        ['java', 1, '降', '-0.01%'],
        ['C', 2, '升', '+2.44%'],
        ['Python', 3, '升', '+1.41%'],
        ['C++', 4, '降', '-2.58%'],
        ['C#', 5, '升', '+2.07%'],
        ['Visual Basic.NET', 6,'降', '-1.17%'],
        ['javascript', 7, '降', '-0.85%']
      ],
      container1 = document.getElementById('example'),
      settings1 = {
        data: data1
      },
      hot1;
    
    hot1 = new Handsontable(container1, settings1);
    hot1.setDataAtCell(0, 1, 'Ford');

    
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {},
        xAxis: {
            data: [2000, 2005, 2010, 2015, 2020]
        },
        yAxis: {
            type:'value'
        },
        series: [{
            name: '排名',
            data: [6,9,8,8,7],
            type: 'line'
        }]
    };
    myChart.setOption(option);
})
