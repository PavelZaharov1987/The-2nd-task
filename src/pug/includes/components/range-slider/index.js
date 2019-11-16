import 'jquery-ui/ui/widgets/slider';
import './range-slider.scss';

$("#polzunok").slider({
	animate: "slow",
	range: true,
	max: 16000,    
	values: [ 5000, 10000 ],
	slide : function(event, ui) {    
		$("#result-polzunok").text(ui.values[ 0 ] + " ₽ - " + ui.values[ 1 ] + " ₽ ");        
	}
});
$( "#result-polzunok" ).text($("#polzunok").slider("values", 0) + " ₽ - " + $("#polzunok").slider("values", 1) + " ₽ ");