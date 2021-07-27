function multiplicar(){
  
    var cantidad = Number(document.getElementById('cantidad').value);

            var valorcompra = cantidad * 1100000;

    if(valorcompra < 2200000){


        document.getElementById('valordescuento').value = "No hay descuento";
        document.getElementById('valorcompra').value = valorcompra;
        document.getElementById('resultadodescuento').innerHTML = "<strong>Descuento aplicado 0%</strong>";
    }

    else{

        if(valorcompra < 4400000){

            var valordescuento = valorcompra * 0.15;
            var total = valorcompra - valordescuento;

            document.getElementById('valorcompra').value = valorcompra;
            document.getElementById('valordescuento').value = valordescuento;
            document.getElementById('total').value = total;
            document.getElementById('resultadodescuento').innerHTML = "<strong>Descuento aplicado 20%</strong>";


        }
        else{

            if(valorcompra < 8800000){

            var valordescuento = valorcompra * 0.25;
            var total = valorcompra - valordescuento;

            document.getElementById('valorcompra').value = valorcompra;
            document.getElementById('valordescuento').value = valordescuento;
            document.getElementById('total').value = total;
            document.getElementById('resultadodescuento').innerHTML = "<strong>Descuento aplicado 30%</strong>";

        }
        else{

            if(valorcompra < 13200000){

                var valordescuento = valorcompra * 0.35;
                var total = valorcompra - valordescuento;
    
                document.getElementById('valorcompra').value = valorcompra;
                document.getElementById('valordescuento').value = valordescuento;
                document.getElementById('total').value = total;
                document.getElementById('resultadodescuento').innerHTML = "<strong>Descuento aplicado 40%</strong>";
    
            }
            else{

                if(valorcompra > 13200000){

                    var valordescuento = "no Hay Descuento";
                    var total = valorcompra - valordescuento;
        
                    document.getElementById('valorcompra').value = valorcompra;
                    document.getElementById('valordescuento').value = valordescuento;
                    document.getElementById('total').value = total;
                    document.getElementById('resultadodescuento').innerHTML = "<strong>Descuento aplicado 0%</strong>";
                }
            }
        }
        }
    }
}