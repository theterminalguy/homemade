function renderChart(pos,neg,neu) {
	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
		title:{
			text: "Sentiments"
		},
		animationEnabled: false,   // change to true
		data: [
			{
				// Change type to "bar", "area", "spline", "pie",etc.
				type: "doughnut",
				dataPoints: [
					{ label: "positive",  y: pos  },
					{ label: "negative", y: neg  },
					{ label: "neutral", y: neu  }
				]
			}
		]
	});
	chart.render();
}
