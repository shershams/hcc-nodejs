
printName("Sherzod Kutfiddinov");
printName("Seattle");

function printName( name ) {

	for( var i = 0; i < 10; i++ ) {

		if( i % 2 == 0 ) {
			console.log("Hello "+ name +" - Hey!");
		}else{
			console.log("Hello "+ name);
		}
	}
	console.log("Finished!");
}
