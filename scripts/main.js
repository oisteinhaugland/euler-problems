window.onload = function() {
    

  




/**************************
PROBLEM 1
**************************/
     document.getElementById('prob1btn').onclick= function() {
	var myNumber= 0; 
	function prob1() {
		for (i = 0; i <1000;i++) {
			if (i % 3 == 0 || i % 5 == 0){
			myNumber+=i;	
			}
		}
		return myNumber;
	}
     		
     		document.getElementById('prob1').innerHTML =  prob1();
     		document.getElementById("prob1").style.padding = "5px";

     		
     };


/**************************
PROBLEM 2
**************************/
     document.getElementById('prob2btn').onclick= function() {
	var iterationAnswer= 0; 
	var y = 0;
	var x = 1;
	var solution = 0;
	function prob2() {
		for (i = 0; i<=100;i ++){
			if (iterationAnswer < 4000000) {
				iterationAnswer =  y + x;
				y=x;
				x = iterationAnswer;

				if (iterationAnswer % 2 == 0){
					solution += iterationAnswer;
				}
				 
				/*
				x+y=mynumber
				0+1 = 1
				1+1 = 2
				2+1 = 3
				3+2 = 5
				5+3 = 8
				8+5=13
				13+8 = 21
				etc.*/

			}
			
		}
		return	solution;
	}
     		
     		document.getElementById('prob2').innerHTML =  prob2();
     		document.getElementById("prob2").style.padding = "5px";	
     };



/**************************
PROBLEM 3
**************************/
      document.getElementById('prob3btn').onclick= function() {
      
      	var number  = 600851475143;
      	var myAnswer = 0;

	var x = 0;
	var y = 0;

	function prime() {
		var myPrimes = [];
		var max = 10000;

		for (i = 1; i < max; i++){
			var isPrimeTrue = true;

			for (y = 2; y < i; y++){
				if (i % y == 0){
					isPrimeTrue = false;
					
					{ break; }
				}
			}

			if (isPrimeTrue){
				myPrimes.push(i)
			}
		}
		return myPrimes;
	}

	function prob3() {
		myAnswer = number;
			if (myAnswer % 2 == 0){
				myAnswer /= 2;
			}
			return myAnswer;
		}
	
	

	
		

		document.getElementById('prob3').innerHTML =  prime();
     		document.getElementById("prob3").style.padding = "5px";
	
	}   		
     };

