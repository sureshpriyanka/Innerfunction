function outer(inner) {
	
inner();
	
}


function inner()

{

console.log("Hello World From Inner Function");

}

outer(inner);