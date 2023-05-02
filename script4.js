function Passfail(x){
	if(x<60){
		alert("You failed this class")
	}
	else if(x<=60){
		alert("You got a D in this class");
	}else if(x<=70){
		alert("You got a C in this class");
	}else if(x<=80){
		alert("You got a B in this class");
	}else if(x<=90){
		alert("You got a A in this class");
	}else{
		alert("You did not receive your grade ")
	}
}

Passfail(59);
Passfail(62);
Passfail(74);
Passfail(81);
Passfail(99);
Passfail(0);