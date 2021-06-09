var productList = [{"label":"abcd-(123)","value":"88521182"},{"label":"Rubber washer-(r-223)","value":"13456476"},{"label":"Isahq-(TEST-4545)","value":"12354654"},{"label":"Steel Epoxy -(45t)","value":"35265636"},{"label":"\u062d\u0644\u0627\u0648\u0629 \u0645\u0635\u0627\u0635 \u0641\u0631\u0627\u0648\u0644\u0629 -(New)","value":"15814777"},{"label":"\u06af\u06d5\u0644\u06d5\u0631-(\u067e\u06ce\u06b5\u0627\u0648)","value":"87256523"},{"label":"Galer-(Pellaw)","value":"53299317"},{"label":"ASTRAL SAnd filter-(spain)","value":"56386458"},{"label":"skimmer-(8324)","value":"44532362"},{"label":"cetaphil-(skin product)","value":"87735549"},{"label":"garnier-(hair product)","value":"92766596"},{"label":"Neutrogena-(1122)","value":"49143255"},{"label":"sunsilk-(200)","value":"85485636"},{"label":"FaceCream-(abc)","value":"39978293"},{"label":"Customer Service-(YBUT24U69MPFUA7)","value":"79372594"},{"label":"Steel grade 1-(sg001)","value":"56836778"},{"label":"washer-(washer001)","value":"61135518"},{"label":"test12323-(test2323)","value":"69961962"},{"label":"tesqweqweqwe-(12345)","value":"55158276"},{"label":"ewrewr-(werewrewr)","value":"71217295"},{"label":"Free Repair For Year-(H8T2X72MGIEBB5R)","value":"37115715"},{"label":"testService-(SF45AAECBU5TEWR)","value":"67697858"},{"label":"testProduct-(123123213)","value":"33893337"},{"label":"Compressor-(C-001)","value":"19339164"},{"label":"Water Pump-(WP-001)","value":"52894249"},{"label":"Rubber gallon-(r-232321)","value":"88259461"},{"label":"testedservice-(7ZBX37IZUZVMVHH)","value":"58172192"},{"label":"Diesel-(High Grade)","value":"13119661"},{"label":"Apple airpods 2nd edition-(2nd edition)","value":"58539373"},{"label":"GeveyProgramming-(VR5QQU713ZKXG4X)","value":"71878499"},{"label":"Polo Shirt-(Ralph Lauren)","value":"34151699"},{"label":"Rubber clip-(r-233)","value":"27937559"},{"label":"Rubber Ballon-(erwe32)","value":"69677357"},{"label":"Rubber mentor-(e200)","value":"35569284"},{"label":"Steel Grade A-(SGA)","value":"64752845"},{"label":"Room Cooler-(RC001)","value":"59793865"},{"label":"Plastic bottle-(pb1)","value":"63944958"},{"label":"ABC Product-(ABC123)","value":"35334586"},{"label":"AA Product-(aa-123)","value":"28544227"},{"label":"Shell Ultra-(15W)","value":"46721756"},{"label":"TOYO MALARIA KIT-(TMLO)","value":"17326162"},{"label":"Testing Product-(Testing Model)","value":"74198742"},{"label":"Bolt-(b-232)","value":"39889663"},{"label":"disco nut-(d-123)","value":"13547976"},{"label":"wrong product-(w-p)","value":"35283163"},{"label":"Best Service-(4K17J81T8YALGGD)","value":"55986994"},{"label":"Jug-(j-12)","value":"58259992"},{"label":"Lube-(10W30)","value":"35572937"},{"label":"Oil change-(A982PV76DYAJXST)","value":"74372395"},{"label":"Sufa-(s-123231)","value":"22467921"},{"label":"Tender-(t00-1)","value":"21338947"},{"label":"9997 Leather -(2021)","value":"39986283"},{"label":"Nike-(air)","value":"91198747"},{"label":"leather-(34)","value":"21631946"},{"label":"testing product-(test for model)","value":"45387736"},{"label":"4PC Comforter-(Milano)","value":"44816915"}] ; 

APchange = function(event, ui){
	$(this).data("autocomplete").menu.activeMenu.children(":first-child").trigger("click");
}
    function jobestimate_productList(cName) {
		var priceClass = 'material_price_item_'+cName;
		var available_quantity = 'available_quantity_'+cName;
		var unit = 'unit_'+cName;
		var tax = 'total_tax_'+cName;
		var discount_type = 'discount_type_'+cName;

        $( ".productSelection" ).autocomplete(
		{
            source: productList,
			delay:300,
			focus: function(event, ui) {
				$(this).parent().find(".autocomplete_hidden_value").val(ui.item.value);
				$(this).val(ui.item.label);
				return false;
			},
			select: function(event, ui) {
				$(this).parent().find(".autocomplete_hidden_value").val(ui.item.value);
				$(this).val(ui.item.label);
				
				var id=ui.item.value;
				var dataString = 'product_id='+ id;
				var base_url = $('.baseUrl').val();

				
				$.ajax
				   ({
						type: "POST",
						url: base_url+"Cjobestimate/retrieve_product_data_inv",
						data: dataString,
						cache: false,
						success: function(data)
						{
							var obj = jQuery.parseJSON(data);
							$('.'+priceClass).val(obj.price);
							$('.'+available_quantity).val(obj.total_product.toFixed(2,2));
							$('.'+unit).val(obj.unit);
							$('.'+tax).val(obj.tax);
							$('#'+discount_type).val(obj.discount_type);
							
							//This Function Stay on others.js page
							quantity_calculate(cName, 'material');
							
						} 
					});
				
				$(this).unbind("change");
				return false;
			}
		});
		$( ".productSelection" ).focus(function(){
			$(this).change(APchange);
		
		});
    }


