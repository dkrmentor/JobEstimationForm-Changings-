//Add Input Field Of Row
function addInputFieldMaterial(t) {
    var row = $("#addjobestimateItemMaterial tr").length;
    var count = row - 2;
    var limits = 500;
    if (count == limits)
        alert("You have reached the limit of adding " + count + " inputs");
    else {
        var a = "product_name" + count, tabindex = count * 5, e = document.createElement("tr");
        tab1 = tabindex + 1;
        tab2 = tabindex + 2;
        tab3 = tabindex + 3;
        tab4 = tabindex + 4;
        tab5 = tabindex + 5;
        tab6 = tabindex + 6;
        tab7 = tabindex + 7;
        tab8 = tabindex + 8;
        tab9 = tabindex + 9;
        var material = '"material"';                                 
        e.innerHTML = "<td><input type='text' name='product_name[]' onkeypress='jobestimate_productList(" + count + ");' class='form-control productSelection' placeholder='Product Name' id='product_name_" + count + "' required tabindex='" + tab1 + "'><input type='hidden' class='autocomplete_hidden_value  product_id_" + count + "' name='product_id[]' id='SchoolHiddenId'/></td><td><input type='text' name='product_quantity[]' onkeyup='quantity_calculate(" + count + ", " + material + ");' onchange='quantity_calculate(" + count + ", " + material + ");' id='material_total_qntt_" + count +"' class='form-control text-right material_total_qntt_" + count + "' placeholder='0.00' min='0' required /></td><td><input type='text' name='product_rate[]' onkeyup='quantity_calculate(" + count + ", " + material + ");' onchange='quantity_calculate(" + count + ", " + material + ");' id='material_price_item_" + count + "' class='material_price_item_" + count + " price_item form-control text-right' required placeholder='0.00' min='0' tabindex='" + tab3 + "'/></td><td class='text-right'><input class='material_total_price form-control text-right' type='text' name='total_price[]' id='material_total_price_" + count + "' value='0.00' readonly='readonly'/></td><td class='text-center'><button class='btn btn-danger text-center' type='button' value='Delete' onclick='deleteRow(this)'><i class='fa fa-minus-circle'></i></button></td>",
        document.getElementById('addjobestimateItemMaterialTotal').before(e),
        document.getElementById("addjobestimateItemMaterial").setAttribute("tabindex", tab6);
        count++;
    }
}
function addInputFieldLabour(t) {
    var row = $("#addjobestimateItemLabour tr").length;
    var count = row - 2;
    var limits = 500;
    if (count == limits)
        alert("You have reached the limit of adding " + count + " inputs");
    else {
        var a = "product_name" + count, tabindex = count * 5, e = document.createElement("tr");
        tab1 = tabindex + 1;
        tab2 = tabindex + 2;
        tab3 = tabindex + 3;
        tab4 = tabindex + 4;
        tab5 = tabindex + 5;
        tab6 = tabindex + 6;
        tab7 = tabindex + 7;
        tab8 = tabindex + 8;
        tab9 = tabindex + 9; 
        var material = '"labour"';     
        e.innerHTML = "<td><input type='text' name='labour_name[]' class='form-control' id='labour_name_" + count + "'></td><td><input type='text' name='labour_quantity[]' onkeyup='quantity_calculate(" + count + ", " + material + ");' onchange='quantity_calculate(" + count + ", " + material + ");' id='labour_total_qntt_" + count +"' class='form-control text-right labour_total_qntt_" + count + "' placeholder='0.00' min='0' required /></td><td><input type='text' name='labour_rate[]' onkeyup='quantity_calculate(" + count + ", " + material + ");' onchange='quantity_calculate(" + count + ", " + material + ");' id='labour_price_item_" + count + "' class='labour_price_item_" + count + " labour_price_item form-control text-right' required placeholder='0.00' min='0' tabindex='" + tab3 + "'/></td><td class='text-right'><input class='labour_total_price form-control text-right' type='text' name='labour_total_price[]' id='labour_total_price_" + count + "' value='0.00' readonly='readonly'/></td><td class='text-center'><button class='btn btn-danger text-center' type='button' value='Delete' onclick='deleteRow(this)'><i class='fa fa-minus-circle'></i></button></td>",
        document.getElementById('addjobestimateItemLabourTotal').before(e),
        document.getElementById("addjobestimateItemLabour").setAttribute("tabindex", tab6);
        count++;
    }
}
function addInputFieldMisc(t) {
    var row = $("#addjobestimateItemMisc tr").length;
    var count = row - 2;
    var limits = 500;
    if (count == limits)
        alert("You have reached the limit of adding " + count + " inputs");
    else {
        var a = "product_name" + count, tabindex = count * 5, e = document.createElement("tr");
        tab1 = tabindex + 1;
        tab2 = tabindex + 2;
        tab3 = tabindex + 3;
        tab4 = tabindex + 4;
        tab5 = tabindex + 5;
        tab6 = tabindex + 6;
        tab7 = tabindex + 7;
        tab8 = tabindex + 8;
        tab9 = tabindex + 9; 
        var material = '"misc"';    
        e.innerHTML = "<td><input type='text' name='misc_name[]' class='form-control' id='misc_name_" + count + "'></td><td><input type='text' name='misc_quantity[]' onkeyup='quantity_calculate(" + count + ", " + material + ");' onchange='quantity_calculate(" + count + ", " + material + ");' id='misc_total_qntt_" + count +"' class='form-control text-right misc_total_qntt_" + count + "' placeholder='0.00' min='0' required /></td><td><input type='text' name='misc_rate[]' onkeyup='quantity_calculate(" + count + ", " + material + ");' onchange='quantity_calculate(" + count + ", " + material + ");' id='misc_price_item_" + count + "' class='misc_price_item_" + count + " misc_price_item form-control text-right' required placeholder='0.00' min='0' tabindex='" + tab3 + "'/></td><td class='text-right'><input class='misc_total_price form-control text-right' type='text' name='misc_total_price[]' id='misc_total_price_" + count + "' value='0.00' readonly='readonly'/></td><td class='text-center'><button class='btn btn-danger text-center' type='button' value='Delete' onclick='deleteRow(this)'><i class='fa fa-minus-circle'></i></button></td>",
        document.getElementById('addjobestimateItemMiscTotal').before(e),
        document.getElementById("addjobestimateItemMisc").setAttribute("tabindex", tab6);
        count++;
    }
}
//Quantity calculate
function quantity_calculate(item, section) {
    var quantity = $("#" + section + "_total_qntt_" + item).val();
    var price_item = $("#" + section + "_price_item_" + item).val();
    var n = quantity * price_item;
    
    $("#" + section + "_total_price_" + item).val(n);
    var total = parseFloat(0);
    $('.' + section + '_total_price').each(function () {
        total = total + parseFloat($(this).val());
    });
    $('#grandTotal' + section.charAt(0).toUpperCase() + section.slice(1)).val(total);
    calculateSum();
}
//Calculate Sum
function calculateSum() {
    var totalMaterial = 0, totalLabour = 0, totalMisc = 0, discount = 0, taxRate = 0, shipping = 0, others = 0, total = 0, subTotal = 0, subTotalLessDiscount = 0, totalTax = 0;

    totalMaterial   = $('#grandTotalMaterial').val();
    totalLabour     = $('#grandTotalLabour').val();
    totalMisc       = $('#grandTotalMisc').val();

    subTotal = parseFloat(totalMaterial) + parseFloat(totalLabour) + parseFloat(totalMisc);
    $('#sub_total_amount'). val(subTotal);

    discount = $('#jobestimate_discount').val()
    if(isNaN(parseFloat(discount))){
        discount = 0;
        subTotalLessDiscount = 0;
    }else{
        if(parseFloat(discount) > 0 && parseFloat(subTotal) > 0){
            subTotalLessDiscount = parseFloat(subTotal) - parseFloat(discount);
        }
    }
    $('#total_discount_ammount').val(subTotalLessDiscount);

    taxRate = $('#tax_rate').val();
    if(isNaN(parseFloat(taxRate))){
        taxRate = 0;
        totalTax = 0;
    }else{
        if(parseFloat(taxRate) > 0 && parseFloat(subTotal) > 0){
            totalTax = parseFloat(subTotal) * parseFloat(taxRate) / 100;
        }
    }
    $('#total_tax_ammount').val(totalTax);

    shipping = $('#shipping').val();
    if(isNaN(parseFloat(shipping))){
        shipping = 0;
    }

    others = $('#others').val();
    if(isNaN(parseFloat(others))){
        others = 0;
    }

    total = parseFloat(subTotal) + parseFloat(shipping) + parseFloat(others) + parseFloat(totalTax) - parseFloat(discount);

    $('#dueAmmount').val(total);
}

//Invoice Paid Amount
function jobestimate_paidamount() {
    var t = $("#grandTotal").val(),
            a = $("#paidAmount").val(),
            e = t - a;
    $("#dueAmmount").val(e.toFixed(2, 2))
}
//Stock Limit
function stockLimit(t) {
    var a = $("#total_qntt_" + t).val(),
            e = $(".product_id_" + t).val(),
            o = $(".baseUrl").val();
    $.ajax({
        type: "POST",
        url: o + "Cjobestimate/product_stock_check",
        data: {
            product_id: e
        },
        cache: !1,
        success: function (e) {
            if (a > Number(e)) {
                var o = "You can purchase maximum " + e + " Items";
                alert(o), $("#qty_item_" + t).val("0"), $("#total_qntt_" + t).val("0"), $("#total_price_" + t).val("0")
            }
        }
    })
}

function stockLimitAjax(t) {
    var a = $("#total_qntt_" + t).val(),
            e = $(".product_id_" + t).val(),
            o = $(".baseUrl").val();
    $.ajax({
        type: "POST",
        url: o + "Cjobestimate/product_stock_check",
        data: {
            product_id: e
        },
        cache: !1,
        success: function (e) {
            if (a > Number(e)) {
                var o = "You can purchase maximum " + e + " Items";
                alert(o), $("#qty_item_" + t).val("0"), $("#total_qntt_" + t).val("0"), $("#total_price_" + t).val("0.00"), calculateSum()
            }
        }
    })
}

//Invoice full paid
function full_paid() {
    var grandTotal = $("#grandTotal").val();
    $("#paidAmount").val(grandTotal);
    jobestimate_paidamount();
    calculateSum();
}

//Delete a row of table
function deleteRow(t) {
    var a = $("#normaljobestimate > tbody > tr").length;
    if (1 == a)
        alert("There only one row you can't delete.");
    else {
        var e = t.parentNode.parentNode;
        e.parentNode.removeChild(e),
                calculateSum();
        jobestimate_paidamount();
    }
}
var count = 2,
        limits = 500;
//$('body').on('keyup', '#jobestimate_discount', function () {
//    var jobestimateDis = $("#jobestimate_discount").val();
//    var ttlDis = $("#total_discount_ammount").val();
//    var xx = jobestimateDis * ttlDis;
//    alert(xx);
//})