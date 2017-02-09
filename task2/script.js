var start = $('div').attr('data-countdown-start'); 

var arr = start.split([':']);

var d = arr[0], h = arr[1], m = arr[2], s = arr[3];
 

function getTime(){

if(s==0){
s = 60;	
m--;
		if (m == -1){
		m = 59;
		h--;
			if (h == -1){
				h = 23;
				d--;
			}

		if (h/10 < 1){
  	h = '0' + h;
  }
}

	if (m/10 < 1){
  m = '0' + m;
 }

}

setTimeout(getSeconds, 1000);
}


function getSeconds(){

s--;

if (s/10 < 1){

 	s = '0' + s;
 }

$('.days').text(d);
$('.hours').text(h);
$('.min').text(m);
$('.sec').text(s);

getTime();
}

if (d/10 < 1){
  d = '0' + d;
 }
 	if (h/10 < 1){
  	h = '0' + h;
  }

getSeconds();

