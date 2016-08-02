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

function getValueTopercent(){
	
		if(jQuery(".qtdCorretoras").val() >= 5){
			ToPercent = 100;
		}else{
			switch (parseInt(jQuery(".qtdCorretoras").val())) {
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

		return ToPercent;
}


jQuery(document).ready(function(){


	jQuery(".qtdPeriodos").on("keyup mouseup" , function(){
		if(typeof LastResult == 'undefined'){
			jQuery("#resultado").html(multiplyValue(valorBase1, jQuery(this).val()));
		}else{
			jQuery("#resultado").html(calcPorcentagemOnAtualValue(getValueTopercent() , multiplyValue(valorBase1, jQuery(this).val())) * jQuery(".mercadotype").val());
		}
		
	});
	

	jQuery(".qtdCorretoras").on("keyup mouseup" , function(){
		

		var valueBaseTotoal = multiplyValue(valorBase1, jQuery(".qtdPeriodos").val());
		jQuery("#resultado").html(calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal) * jQuery(".mercadotype").val());
		LastResult = calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal);
	});	


	jQuery(".mercadotype").on("change", function(){
		var valueBaseTotoal = multiplyValue(valorBase1, jQuery(".qtdPeriodos").val());
		jQuery("#resultado").html(calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal) * jQuery(".mercadotype").val());
		
	});

});