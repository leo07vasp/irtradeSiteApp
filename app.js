var idClassOnUpdate;
valorBase1 = 1078.8;




function calcPorcentagemOnAtualValue(porcent, value){
	var base = parseFloat(value);
	var basePercent = base/100;
	return basePercent*porcent;
}

function multiplyValue(nMulti, value){
	return (nMulti*value);
}

function init(){

}


jQuery(document).ready(function(){


	jQuery(".qtdPeriodos").on("keyup mouseup" , function(){
		if(typeof LastResult == 'undefined'){
			jQuery("#resultado").html(multiplyValue(valorBase1, jQuery(this).val()));
		}else{
			jQuery("#resultado").html(calcPorcentagemOnAtualValue(ToPercent , multiplyValue(valorBase1, jQuery(this).val())));
		}
		
	});
	

	jQuery(".qtdCorretoras").on("keyup mouseup" , function(){
		valorAtual = parseFloat(jQuery("#resultado").text());
		if(jQuery(this).val() >= 5){
			ToPercent = 100;
		}else{
			switch (parseInt(jQuery(this).val())) {
			  case 1:
				 ToPercent = 60;
			    break;
			  case 2:
			     ToPercent = 70;
			    break;
			  case 3:
			     ToPercent = 80;
			    break;
			  case 4:
			     ToPercent = 90;
			    break;
			  default:
			     ToPercent = 100;
			}
		}
		var valueBaseTotoal = multiplyValue(valorBase1, jQuery(".qtdPeriodos").val());
		jQuery("#resultado").html(calcPorcentagemOnAtualValue(ToPercent , valueBaseTotoal));
		LastResult = calcPorcentagemOnAtualValue(ToPercent , valueBaseTotoal);
	});	


	jQuery(".mercadotype").on("change", function(){
		if(typeof LastResult != 'undefined'){
			jQuery("#resultado").html(calcPorcentagemOnAtualValue(jQuery(this).val(), LastResult));
		}
	});

});