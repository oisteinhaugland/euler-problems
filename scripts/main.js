window.onload = function() {
    

  





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

     document.getElementById('prob2btn').onclick= function() {
	var myNumber= 0; 
	function prob1() {
		for (i = 0; i<=100;i ++){
			myNumber+= i;
		}
return	myNumber;
	}
     		
     		document.getElementById('prob2').innerHTML =  prob1();
     		document.getElementById("prob2").style.padding = "5px";

     		
     };
};