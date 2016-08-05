var idClassOnUpdate;
valorBase1 = 1078.8;


function formatCurrency(n, currency) {
    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

function calcPricePerMonth(){
	var months = (jQuery(".qtdPeriodos").val()*12);
	var valorAtualResultadoDivider = parseInt(jQuery("#resultado").data('result'));
	//console.log(months);
	//console.log(valorAtualResultadoDivider);
	jQuery("#parcelamento").html(months + "x de " + formatCurrency((valorAtualResultadoDivider/months), "R$"));

}

function UpdateDesc(){

	var valueActualResult = parseInt(jQuery("#resultado").data('result'));
	var valorFull = 1078*parseInt(jQuery(".qtdPeriodos").val());

	if(jQuery(".qtdCorretoras").val() >= 5){
			jQuery("#desconto").html(formatCurrency(0000,"R$"));
	}else{

		if((valorFull - valueActualResult) >= 1){
			jQuery("#desconto").html(formatCurrency((valorFull - valueActualResult),"R$"));
		}

	}

}


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
			jQuery("#resultado").data('result', multiplyValue(valorBase1, jQuery(this).val()));
			jQuery("#resultado").html(formatCurrency((multiplyValue(valorBase1, jQuery(this).val())),"R$"));
		}else{
			jQuery("#resultado").data('result', calcPorcentagemOnAtualValue(getValueTopercent() , multiplyValue(valorBase1, jQuery(this).val())) * jQuery(".mercadotype").val());
			jQuery("#resultado").html(formatCurrency((calcPorcentagemOnAtualValue(getValueTopercent() , multiplyValue(valorBase1, jQuery(this).val())) * jQuery(".mercadotype").val()),"R$"));
		}
		UpdateDesc();
		calcPricePerMonth();
	});
	

	jQuery(".qtdCorretoras").on("keyup mouseup" , function(){
		var valueBaseTotoal = multiplyValue(valorBase1, jQuery(".qtdPeriodos").val());
		jQuery("#resultado").data('result', calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal) * jQuery(".mercadotype").val());
		jQuery("#resultado").html(formatCurrency((calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal) * jQuery(".mercadotype").val()),"R$"));
		LastResult = calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal);
		UpdateDesc();
		calcPricePerMonth();
	});	


	jQuery(".mercadotype").on("change", function(){
		var valueBaseTotoal = multiplyValue(valorBase1, jQuery(".qtdPeriodos").val());
		jQuery("#resultado").data('result', calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal) * jQuery(".mercadotype").val());
		jQuery("#resultado").html(formatCurrency((calcPorcentagemOnAtualValue(getValueTopercent() , valueBaseTotoal) * jQuery(".mercadotype").val()),"R$"));
		UpdateDesc();
		calcPricePerMonth();
		
	});

	

});