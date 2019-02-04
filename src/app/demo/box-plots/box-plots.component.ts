import { Component } from '@angular/core';

@Component({
    selector: 'plotly-box-plot',
    templateUrl: './box-plots.component.html',
})
export class BoxPlotComponent {
    public debug = true;
    public useResizeHandler = true;

    public show = true;

    public boxPlot = {
        data: [
            { y: [10, 15, 13, 17], type: 'box' },
            { y: [16, 5, 11, 9], type: 'box' },
        ],
        layout: {
            title: 'Simple Box Plot',
            autosize: true,
            height: 350,
        },
        config: {
            responsive: true,
        }
    };

}
