function volume_sphere(e) {
e.preventDefault();
//alert("hi");
	 // Get the radius input value
            const radius = parseFloat(document.getElementById("radius").value);

           if (isNaN(radius)) {
               // Handle invalid input
document.getElementById("volume").value = "Invalid input. Please enter a valid number.";
        }
		   else {
                // Calculate the volume of the sphere
               const calculate = (4/3) * Math.PI * Math.pow(radius, 3);
calculate.toFixed(2);
                // Display the calculated volume in the volume field
                document.getElementById("volume").value =calculate;
			   var  decimal1= calculate.toFixed(2);
            }
} 
// it works yes yes yes ok sir ok ok
//jo volume ayega uske 2 digit tk 
//   it doesnt give output 
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
