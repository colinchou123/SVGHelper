(function (win){
	win.test2=test;
	win.addMarker1=addMarker1;
	win.addMarker2=addMarker2;
	win.addFilledArea=addFilledArea;
	function test(){
		console.log("test1111111");
	};
	function addMarker1(svgId){
		console.log("t");
		
		var svgContainer = d3.select("#"+svgId).attr("width",600)
				.attr("height",600); 
		var arrowMarker = svgContainer.append("marker")
			.attr("id","arrow")
			.attr("markerUnits","strokeWidth")
				.attr("markerWidth","12")
									.attr("markerHeight","12")
									.attr("viewBox","0 0 12 12")
									.attr("refX","6")
									.attr("refY","6")
									.attr("orient","auto");
			//¼ýÍ· 
			var arrow_path = "M2,2 L10,6 L2,10 L6,6 L2,2";
			 
			arrowMarker.append("path")
			.attr("d",arrow_path)
			.attr("fill","#000");
	}
	function addMarker2(svgId){
		var svgContainer = d3.select("#"+svgId).attr("width",600)
				.attr("height",600); 
		var arrowMarker = svgContainer.append("marker")
			.attr("id","arrow")
			.attr("markerUnits","strokeWidth")
				.attr("markerWidth","12")
									.attr("markerHeight","12")
									.attr("viewBox","0 0 12 12")
									.attr("refX","6")
									.attr("refY","6")
									.attr("orient","180deg");
			//¼ýÍ· 
			var arrow_path = "M2,2 L10,6 L2,10 L6,6 L2,2";
			 
			arrowMarker.append("path")
			.attr("d",arrow_path)
			.attr("fill","#000");
	}
	function addFilledArea(svgId,x,y,dx,dy){
		var svgContainer = d3.select("#"+svgId);
		svgContainer.append("rect").attr("x",x).attr("y",y).attr("width",dx).attr("height",dy);
		return svgContainer;
	}
	function addFilledArea(svgId,x,y,dx,dy){
		var svgContainer = d3.select("#"+svgId);
		svgContainer.append("rect").attr("x",x).attr("y",y).attr("width",dx).attr("height",dy);
		return svgContainer;
	}
}(window));