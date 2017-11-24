var ctx = document.getElementsByClassName("line-chart");

		var chartGraphic = new Chart(ctx, {
			type: 'bar',
			data: {
        		labels: ["Temperatura x dia","20/10","21/10","22/10","23/10","24/10","25/10","26/10", ],
        		datasets: [{
            		label: 'Máxima',
            		data:[0,27,32,27,18,26,29,29],
            		borderWidth: 4,
            		borderColor: 'DarkOrange',
            		backgroundColor: 'Darkorange',
            		hoverBackgroundColor: 'orange',
            		hoverBorderColor: 'orange'
            },
            {
            		label: 'Mínima',
            		data:[0,19,21,17,16,17,18,19],
            		borderWidth: 4,
            		borderColor: 'DarkGray',
            		backgroundColor: 'DarkGray',
            		hoverBackgroundColor: 'LightGrey',
            		hoverBorderColor: 'LightGrey'
            	},
            ]
        },
        options: {
        	title: {
        		display: true,
        		fontSize: 20,
        		text: "Temperatura em São José dos Campos"
        	},
        },
});
