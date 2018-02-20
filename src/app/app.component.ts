import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Chart 1
  chart=new Chart({
    title: {
        text: 'All Container CPU Uses'
    },
    xAxis:{
      categories:['15.27', '15.28', '15.29', '15.30', '15.31', '15.32', '15.33','15.34', '15.35', '15.36', '15.37', '15.38', '15.39', '15.40','15.41'],
      title: {
          text: ''
      }
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Container 1',
        data: [0.0, 0.5, 1.0, 0.7, 1.2, 1.3,0.8,0.6,0.9,1.0,1.1,0.6,0.3,0.8,0.6]
    }, {
        name: 'Container 2',
        data: [0.0, 0.1, 0.3,0.0,0.4,0.2,0.6,0.8,0.6,1.1,1.0,0.3,0.2,0.9,0.0]
    }, {
        name: 'Container 3',
        data: [0.0, 1.0,0.7,0.5,0.3,0.1,0.0,0.2,0.4,0.6,0.8,1.1, 1.0, 0.7, 1.2]
    }]
  });

  //2nd Chart
  chart2 = new Chart({
    chart: {
      type: 'area'
    },
    title: {
      text: 'All Container Memory Uses'
    },
    xAxis:{
      categories:['15.27', '15.28', '15.29', '15.30', '15.31', '15.32', '15.33','15.34', '15.35', '15.36', '15.37', '15.38', '15.39', '15.40','15.41'],
      tickmarkPlacement: 'on',
      title: {
          text: ''
      }
    },
    yAxis: {
        title: {
            text: 'Memory Used [mb]'
        }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Memory 1',
      data: [190.7,209.8,228.9,248.0,267.0,286.1, 295.1, 280,250,270,300,280,290,277,230]
    },
    {
      name: 'Memory 2',
      data: [100.2,115.3,110.3,120,150,140,165,190,175,150,188,177,210,225,190]
    },
    {
      name: 'Memory 3',
      data: [50.7,55.8,45.9,60.0,69,58.1,98,75,82,80,72,90,89,59,63]
    },
    {
      name: 'Memory 4',
      data: [18, 31, 54,25,33,12,46,22,33,42,65,56,45,25,15]
    }]
  });

  //3rd Chart
  chart3=new Chart({
    title: {
        text: 'POD Heapstar CPU Uses'
    },
    xAxis:{
      categories:['15.27', '15.28', '15.29', '15.30', '15.31', '15.32', '15.33','15.34', '15.35', '15.36', '15.37', '15.38', '15.39', '15.40','15.41'],
      title: {
          text: ''
      }
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Container 1',
        data: [0.0, 0.2,0.0,0.3,0.0,1.0,0.0,1.0,0.7,0.5,0.3,0.1,0.0,0.2,0.4]
    }, {
        name: 'Container 2',
        data: [0.0, 0.1, 0.3,0.0,0.4,0.2,0.6,0.8,0.6,1.1,1.0,0.3,0.2,0.9,0.0]
    }, {
        name: 'Container 3',
        data: [0.0, 0.3,0.0,0.5,0.0,1.1,0.0,0.5,0.7,0.3,0.8,1.3,1.5,1.0,0.0]
    }]
  });

  //4th Chart
  chart4 = new Chart({
    chart: {
      type: 'area'
    },
    title: {
      text: 'POD Heapstar Memory Uses'
    },
    xAxis:{
      categories:['15.27', '15.28', '15.29', '15.30', '15.31', '15.32', '15.33','15.34', '15.35', '15.36', '15.37', '15.38', '15.39', '15.40','15.41'],
      tickmarkPlacement: 'on',
      title: {
          text: ''
      }
    },
    yAxis: {
        title: {
            text: 'Memory Used [mb]'
        }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Memory 1',
      data: [0.0,20.0,50.9,38.0,72.0,95.1, 65.1, 56.0,75.0,110.5,150.1,115.6,90.5,67.0,45.6]
    },
    {
      name: 'Memory 2',
      data: [100.2,115.3,110.3,120,150,140,165,190,175,150,188,177,210,225,190]
    },
    {
      name: 'Memory 3',
      data: [0.0,30.0,40.9,58.0,72.0,105.1, 165.1, 156.0,115.0,130.5,150.1,105.6,80.5,50.0,30.6]
    },
    {
      name: 'Memory 4',
      data: [18, 31, 54,25,33,12,46,22,33,42,65,56,45,25,15]
    }]
  });

  //3rd Chart
  chart5=new Chart({
    title: {
        text: 'Labels InFluxDB CPU Uses'
    },
    xAxis:{
      categories:['15.27', '15.28', '15.29', '15.30', '15.31', '15.32', '15.33','15.34', '15.35', '15.36', '15.37', '15.38', '15.39', '15.40','15.41'],
      title: {
          text: ''
      }
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    credits: {
      enabled: false
    },
    series: [{
        name: 'Container 1',
        data: [0.0, 0.4,0.0,0.2,0.0,1.5,0.2,1.6,0.0,0.5,0.2,0.5,0.0,0.2,0.0]
    }, {
        name: 'Container 2',
        data: [0.0, 0.1, 0.3,0.0,0.4,0.2,0.6,0.8,0.6,1.1,1.0,0.3,0.2,0.9,0.0]
    }, {
        name: 'Container 3',
        data: [0.0, 0.4,0.0,0.2,0.8,1.2,0.2,1.0,0.0,0.5,0.9,0.5,0.0,0.2,0.0]
    }]
  });

  //6th Chart
  chart6 = new Chart({
    chart: {
      type: 'area'
    },
    title: {
      text: 'Labels InFluxDB Memory Uses'
    },
    xAxis:{
      categories:['15.27', '15.28', '15.29', '15.30', '15.31', '15.32', '15.33','15.34', '15.35', '15.36', '15.37', '15.38', '15.39', '15.40','15.41'],
      tickmarkPlacement: 'on',
      title: {
          text: ''
      }
    },
    yAxis: {
        title: {
            text: 'Memory Used [mb]'
        }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Memory 1',
      data: [0.0,20.0,50.9,38.0,72.0,95.1, 65.1, 56.0,75.0,110.5,150.1,115.6,90.5,67.0,45.6]
    },
    {
      name: 'Memory 2',
      data: [100.2,115.3,110.3,120,150,140,165,190,175,150,188,177,210,225,190]
    },
    {
      name: 'Memory 3',
      data: [0.0,30.0,40.9,58.0,72.0,105.1, 165.1, 156.0,115.0,130.5,150.1,105.6,80.5,50.0,30.6]
    },
    {
      name: 'Memory 4',
      data: [18, 31, 54,25,33,12,46,22,33,42,65,56,45,25,15]
    }]
  });

  
}
