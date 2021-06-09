var customerList = [{"label":"Ky kya","value":"LOHU3HEU7M4XYFQ"},{"label":"\u0634\u0631\u0643\u0629 \u0645\u064a\u0631\u0632\u0627 \u0645\u0627\u062c\u062f \u0644\u0644\u062a\u062c\u0627\u0631\u0629 ","value":"ET3XAIEDJ2YYREX"},{"label":"dsfa","value":"XLT4IYLG5JS3IXO"},{"label":"\u0645\u0633\u0639\u0648\u062f \u0647\u0645\u0632\u06d5","value":"RLJ5RPUUQGXOTTW"},{"label":"Bin Khamees \u0628\u0646 \u062e\u0645\u064a\u0633 ","value":"PTZGT5W2EI913QN"},{"label":"john smith","value":"94PVKO16VDIOFDE"},{"label":"aliza","value":"TH3JGYTDGA98H29"},{"label":"customer","value":"OBYXMD9GVDDP9L9"},{"label":"Owner","value":"KKZLUEIM652KVDL"},{"label":"fahad","value":"139GVTVSCJR5MFZ"},{"label":"Akhter","value":"PTR2FXRENF6DS4O"},{"label":"Customer X","value":"RI23NGONEO4XISB"},{"label":"Hated  Customer","value":"SCQH8MPUNOUB9PH"},{"label":"Zulegha","value":"TEYSBZ5S5R3Y75T"},{"label":"Patricio Flores","value":"GFN3PBY1NWBY6C4"},{"label":"abcd","value":"OUVTNSAXW78YTM7"},{"label":"Fahad Customer","value":"5UY5GGNMJWB8RT4"},{"label":"Fahad2 customer","value":"WHE7LD6EHFLD9LB"},{"label":"NISHAT FEED","value":"8WLM5ELNJM66UH5"},{"label":"Customer A1","value":"G6VLNC1UYSEX81N"},{"label":"Hasnain Khan","value":"1J4N973US97A7FZ"},{"label":"Farrukh Kamal","value":"8SE7CET9GACTAX9"},{"label":"Walk In Customer","value":"JSZEGZTIXIDU81S"},{"label":"Furqan","value":"RXIN2NN5XLLHB6Z"},{"label":"THE AGA KHAN HOSPITAL","value":"35QIKNLZ75Z91LF"},{"label":"Junaid khanzada","value":"VGPLWP6HME6PHUN"},{"label":"khalid junaid","value":"FQGEZTULYNHLP4D"},{"label":"khalid jamal","value":"6DVGRXVPIPYXJOL"},{"label":"khalid waleed","value":"D2YVAL4PERCJAN9"},{"label":"Junaid Naveed","value":"DDHF5JNMB8G84Z2"},{"label":"obaid chingaro","value":"61MMK56J7ZSYF9L"},{"label":"gujjar khan","value":"NIGDERR1K8Q8HM2"},{"label":"pp customer","value":"TB99Q35F3TKZVOA"},{"label":"Romero","value":"D9JTXJCTBH811BL"},{"label":"Yohana","value":"LSWMZT74OE6AUDV"},{"label":"pamela.jercy","value":"RQWOI2FOX3634B9"},{"label":"harman tenda","value":"8ZQFPC7NYJDW6F1"},{"label":"nemaar.junior","value":"BYSTOMQJPEP8QPZ"},{"label":"ali.kami","value":"4FYK9D7D4XVU8Z9"},{"label":"Messi Champ","value":"NQSGKIQ4O6YBV2G"},{"label":"Rolando Senior","value":"VD6D4ND4B2XDFJR"},{"label":"Adnan","value":"U2ZDKSTV7OK4RXH"},{"label":"Ali Ali","value":"43KHNPFHA52XGX6"},{"label":"LED ZONE","value":"8FWFOOFU8MY3A4Y"},{"label":"Testing 1","value":"64X2BGDIOEDATZO"},{"label":"Muhammed Savad","value":"A913CD9BYYLDVM2"},{"label":"NETBUE","value":"EFMEV3RKEIROA3U"}] ; 

APchange = function(event, ui){
	$(this).data("autocomplete").menu.activeMenu.children(":first-child").trigger("click");
}
    $(function() {
      
        $( ".customerSelection" ).autocomplete(
		{
            source:customerList,
			delay:300,
			focus: function(event, ui) {
				$(this).parent().find(".customer_hidden_value").val(ui.item.value);
				$(this).val(ui.item.label);
				return false;
			},
			select: function(event, ui) {
				$(this).parent().find(".customer_hidden_value").val(ui.item.value);
				$(this).val(ui.item.label);
				$(this).unbind("change");
				return false;
			}
		});
			$( ".customerSelection" ).focus(function(){
				$(this).change(APchange);
			
			});
    });
