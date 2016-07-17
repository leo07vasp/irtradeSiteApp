var idClassOnUpdate;
valorBase1 = 1078.8;




function calcPorcentagemOnAtualValue(porcent, value){
	var base = parseFloat(value);
	var basePercent = base/100;
	console.log(basePercent);
	console.log(porcent);
	return basePercent*porcent;
}

function multiplyValue(nMulti, value){
	return (nMulti*value).toFixed(0)
}

function init(){

}


jQuery(document).ready(function(){


	jQuery(".qtdPeriodos").on("keyup mouseup" , function(){
		console.log(multiplyValue(valorBase1, jQuery(this).val()));
		jQuery("#resultado").html(multiplyValue(valorBase1, jQuery(this).val()));
	});
	

	jQuery(".qtdCorretoras").on("keyup mouseup" , function(){
		valorAtual = parseFloat(jQuery("#resultado").text());
		if(jQuery(this).val() >= 5){
			var ToPercent = 100;
		}else{
			switch (parseInt(jQuery(this).val())) {
			  case 1:
			    var ToPercent = 60;
			    break;
			  case 2:
			    var ToPercent = 70;
			    break;
			  case 3:
			    var ToPercent = 80;
			    break;
			  case 4:
			    var ToPercent = 90;
			    break;
			  default:
			    var ToPercent = 100;
			}
		}
		var valueBaseTotoal = multiplyValue(valorBase1, jQuery(".qtdPeriodos").val());
		jQuery("#resultado").html(calcPorcentagemOnAtualValue(ToPercent , valueBaseTotoal));
	});	

});