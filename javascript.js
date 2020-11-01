var faal=1
				const fristiprijs = 1.25;
				const waterprijs = 0.69 ;
				const colaprijs = 1.20;
				const bitterbalprijs=0.20;
				

				alert ("Welkom bij Jan Peter's pannekoeken parradijs")

				bestelling(1)
				function bestelling(qty){
				var bestelling=prompt("wat zou u willen bestellen of wilt uw stoppen? Op de menukaart staat water,cola,fristi of bitterballen aangegeven")
				if(bestelling == "fristi"){
 					fristibestel(1)
					}	
					if(bestelling == "cola"){
 					colabestel(1)

					}
					if(bestelling == "water"){
 					waterbestel(1)

					}
					if(bestelling == "bitterballen"){
 					bitterbalbestel(1)
 				    }
					if (bestelling =="stop"){
						stopalles(1)
					}

				if(bestelling != 'fristi' && bestelling != 'cola' && bestelling != 'water' && bestelling != "stop" && bestelling != "bitterballen")
                                     {	
					var faal=1;
					gefaald(1)
				}
				}		

				function gefaald (qty){
					while (faal>=1){
					alert("Je mag alleen fristi cola water bitterballen of stop zeggen")
					var bestelling=prompt("wat zou u willen bestellen?")
				
					if(bestelling == "fristi"){
 					fristibestel(1)
					faal=-1}	
					if(bestelling == "cola"){
 					colabestel(1)

					faal=-1}
					if(bestelling == "water"){
 					waterbestel(1)

					faal=-1}
					if(bestelling == "bitterballen"){
 					bitterbalbestel(1)

					faal=-1}


					if(bestelling == "stop"){
 					stopalles(1)

					faal=-1}
				}
			}

			

			function fristibestel(qty){
			var fristiaantal = prompt("Hoeveel Fristi's wil je bestellen?")
			if (fristiaantal <= 0){
				alert ("Je moet wel boven de 0 invullen")
				fristibestel(1)}
			else{

			document.write (fristiaantal+" fristi's x  €" + fristiprijs+ "=€" + fristiaantal*fristiprijs +"<br>");
		    bestelling(1)
		    }
			}
			function colabestel(qty){
			var colaaantal = prompt("Hoeveel Cola's wil je bestellen?")
			if (colaaantal <= 0){
				alert ("Je moet wel boven de 0 invullen")
				colabestel(1)}
			else{
			document.write (colaaantal+" cola's x  €1.20=€" + colaaantal*colaprijs+"<br>");
			bestelling(1)
			}
			}	



			function waterbestel(qty){
			var wateraantal = prompt("Hoeveel Water's wil je bestellen?")
			if (wateraantal <= 0){
				alert ("Je moet wel boven de 0 invullen")
				waterbestel(1)
			}
			else{
			document.write (wateraantal+" water's x  €" + waterprijs+ "=€" + wateraantal*waterprijs+"<br>");
			bestelling(1)
			}
			}
			function bitterbalbestel(qty){
			var bitterbalaantal = prompt("Hoeveel bitterballen wil je bestellen je hebt de keuze tussen 8 en 16?")
			if (bitterbalaantal != 16 && bitterbalaantal !=8){
				alert ("Je mag alleen 8 of 16 invullen ")
				bitterbalbestel(1)
			}
			document.write (bitterbalaantal+" bitterballen x  €0.20 =€"+ bitterbalaantal*bitterbalprijs+"<br>");
			bestelling(1)
		}
			function stopalles (qty){
			alert("Hier ziet uw de bon")
			}		

			