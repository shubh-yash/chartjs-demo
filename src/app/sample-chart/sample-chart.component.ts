import { Component, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry, registerables } from 'chart.js';
import { LoanService } from '../service/loan.service';
import { Loan } from '../model/loan.model';
Chart.register(...registerables);

@Component({
  selector: 'app-sample-chart',
  templateUrl: './sample-chart.component.html',
  styleUrls: ['./sample-chart.component.css'],
})
export class SampleChartComponent implements OnInit {
  loanData: Loan[] = [];
  labels: string[] = [];
  data: number[] = [];
  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    // this.displayChart();
    // this.displayScatterChart();
    // this.displayBubbleChart();
    this.loanService.getLoanInfo().subscribe(resp =>{
      this.loanData = resp
      if(this.loanData.length>0){
        this.loanData.forEach(loan=>{
          this.labels.push(loan.industry);
          this.data.push(loan.loanAmt);
        })
      }
    this.showLoanChart(this.labels, this.data, 'bar', 'barChartCanvas'); // used for comaprison
    this.showLoanChart(this.labels, this.data, 'pie', 'pieChartCanvas'); //used to showcase composition
    this.showLoanChart(this.labels, this.data, 'doughnut', 'dnChartCanvas');  //used to showcase composition
    this.showLoanChart(this.labels, this.data, 'polarArea', 'paChartCanvas');
    this.showLoanChart(this.labels, this.data, 'radar', 'radarChartCanvas');
    this.showLoanChart(this.labels, this.data, 'line', 'lineChartCanvas'); // used for comaprison
    this.showLoanChart(this.labels, this.data, 'scatter', 'scatterChartCanvas');
    // demonstrate relationship between two quantitative variable where one variable is dependent on the other
    // Principle - XY Correlation
    // X-axis- independent Variable
    // Y-axis- dependent Variable
    // this.showLoanChart(this.labels, this.data, 'bubble', 'bubbleChartCanvas'); //demonstrate relationship between three variables
    })
  }

  displayChart() {
    // const ctx = document.getElementById('chartCanvas');
    // Types of Charts:Line, Area, Bar, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter
    const myBarChart = new Chart('barChartCanvas', {
      type: 'bar',
      data: {
        labels: ['Java', 'Python', 'C++', 'Angular', 'React', '.NET'],
        datasets: [
          {
            label: 'Popularity of Programming language', //default is undefined
            data: [100, 150, 80, 110, 115, 55],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(201, 203, 207, 0.5)',
            ],
            borderWidth: 2, //sets border width
            borderColor: 'gold', //sets border color
            borderRadius: 2,
            // barThickness:50,
          },
        ],
      },
      // options: {
      //   indexAxis: 'x', //default is x
      //   scales: {
      //     y: {
      //       beginAtZero: false,
      //     },
      //   },
      //   layout: {
      //     padding: {
      //       left:50,
      //       top:50
      //     },
      //   },

      //   // plugins: {
      //   //   tooltip: {
      //   //     enabled: true, //show or hide tooltip
      //   //     backgroundColor: '#d9d7db',
      //   //     titleColor: '#2596be',
      //   //     titleFont: { size: 16, family: 'Times New Roman' },
      //   //     titleMarginBottom: 10,
      //   //     titleAlign: 'center',
      //   //     titleSpacing: 2,
      //   //     bodyColor: 'grey',
      //   //     bodyFont: { size: 15, family: 'cursive', weight: 900 },
      //   //   },
      //   //   title: {
      //   //     display: true,
      //   //     text: 'Chart-1.1',
      //   //     font: { size: 18 },
      //   //     position: 'bottom',
      //   //     color: '#70686c',
      //   //     align: 'end'
      //   //   },

      //   //   legend: {
      //   //     display: true,
      //   //     position: 'bottom',
      //   //     align: 'center',
      //   //     labels: {
      //   //       color: '#5087ba',
      //   //       font: { size: 14, family: 'consolas' },
      //   //     },
      //   //   },
      //   // },

      //   // animation: {
      //   //   duration: 3000, //default
      //   //   easing: 'easeInBounce',
      //   // },

      //   onClick(event, elements, chart) {
      //     // console.log("on click event fired", event, elements, chart)
      //     // chart!.tooltip!.title = ["Core Java", "Python-3", "C", "Angular-16", "React-17", ".NET MVC"]
      //     console.log(elements);
      //     console.log(chart);
      //     elements[0]!.element!.options['borderColor'] = 'blue'
      //     chart!.tooltip!.dataPoints[0]!.dataset.label = 'Programming languages popularity';
      //     chart.update();
      //   },

      //   onHover: ()=>console.log("On Hover Chart"),

      //   // events:['click']
      // },
    });
  }

  showLoanChart(
    labelArr: string[],
    dataValues: number[],
    chartType: any,
    id: string
  ) {
    new Chart(id, {
      type: chartType,
      data: {
        labels: labelArr,
        datasets: [
          {
            label: 'Loan Distribution', //default is undefined
            data: dataValues,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(201, 203, 207, 0.5)',
            ],
            borderWidth: 2, //sets border width
            borderColor: 'grey', //sets border color
            borderRadius: 2,
            // barThickness:50,
          },
        ],
      },
      options: {
        indexAxis: 'x', //default is x
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        layout: {
          padding: {
            // left:50,
            // top:50
          },
        },
        plugins: {
          tooltip: {
            enabled: true, //show or hide tooltip
            backgroundColor: '#b3b59a',
          },
        },
      },
    });
  }

  displayScatterChart() {
    new Chart('scatterChartCanvas', {
      type: 'scatter',
      data: {
        // labels: ['Java', 'Python', 'C++', 'Angular', 'React', '.NET'],
        datasets: [
          {
            label: 'Cold drink sales', //default is undefined
            data: [
              { x: 32, y: 3000 },
              { x: 36, y: 4000 },
              { x: 28, y: 2400 },
              { x: 40, y: 4800 },
              { x: 46, y: 2600 },
            ],
            backgroundColor: ['#e31740'],
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              text: 'Temp in degree Celsius',
              display: true,
              color: '#73676a',
              font: {
                size: 14,
              },
            },
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Sales in INR',
              color: '#73676a',
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
  }

  displayBubbleChart() {
    new Chart('bubbleChartCanvas', {
      type: 'bubble',
      data: {
        datasets: [
          {
            label: 'Sales vs Marketing Expense', //default is undefined
            data: [
              // { x: 15000, y: 170000, r: 5000 },
              // { x: 12500, y: 130000, r: 25000 },
              // { x: 1000, y: 15000, r: 8000 },
              // { x: 5000, y: 48000, r: 5000 },
              // { x: 8500, y: 75000, r: 6000 },
              // { x: 4000, y: 44000, r: 2000 },

              { x: 1, y: 50, r: 30 },
              { x: 2, y: 60, r: 25 },
              { x: 3, y: 70, r: 40 },
              { x: 4, y: 80, r: 10 },
              { x: 5, y: 90, r: 35 },
              { x: 6, y: 100, r: 45 },
            ],
            backgroundColor: ['#a88932'],
          },
        ],
      },
      // options: {
      // scales: {
      //   x: {
      //     title: {
      //       text: 'Marketing Expense(in Crores)',
      //       display: true,
      //       color: '#73676a',
      //       font: {
      //         size: 14,
      //       },
      //     }
      //   },
      //   y: {
      //     title: {
      //       text: 'Sales(in Crores)',
      //       display: true,
      //       color: '#73676a',
      //       font: {
      //         size: 14,
      //       },
      //     }
      //   },
      // },
      // },
    });
  }
}
