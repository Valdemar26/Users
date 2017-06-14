import { Component } from '@angular/core';

@Component({
  selector: 'charts',
  template: `<fusioncharts
    width="600" 
    height="400"
    type="column2d"
    dataFormat="json"
    [dataSource]=dataSource >
  </fusioncharts>
  `,
})
export class ChartsComponent {
  demoId: string;
  dataSource: Object;

  constructor() {
    this.demoId = "ex1";

    this.dataSource = {
      chart: {
        caption: "Harry's SuperMart",
        subCaption: "Top 5 stores in last month by revenue",
        numberPrefix: "$",
        theme: "ocean"
      },
      data:[{
        label: "Bakersfield Central",
        value: "880000"
      }, {
        label: "Garden Groove harbour",
        value: "730000"
      }, {
        label: "Los Angeles Topanga",
        value: "590000"
      }, {
        label: "Compton-Rancho Dom",
        value: "520000"
      }, {
        label: "Daly City Serramonte",
        value: "330000"
      }]
    };
  }
}
