

// changing individual properties with code and using setInterval
var rotationSpeed = -0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
  myOtherBox.setAttribute('rotation', {x: 15, y: 30, z: 90});
  
  myOtherBox.object3D.rotation.x += rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
