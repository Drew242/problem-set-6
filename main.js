var secondGreatLow = function(arr){
  var b = arr.sort(function(a, b){return (a-b)});
  var a = [b[0]];
  	for(var i = 1; i < b.length; i++)
  	{
  		if( b[i] !== a[a.length-1])
  		{
  			a.push(b[i]);
  		}
  	}
  var low = '';
  var high = '';
  if (a.length == 2) {
    low = a[0];
    high = a[1];
  } else if (a.length == 3) {
    low = a[1];
    high = a[1];
  } else {
    low = a[1];
    high = a[(a.length - 2)];
  }
  console.log(`${low} ${high}`);
}

var timeConvert = function(num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  console.log(`${hours}:${minutes}`);
}

secondGreatLow([7, 7, 12, 98, 106]);
timeConvert(63);
