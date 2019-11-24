$(document).ready(function() {

    var shape;
    var area_s;
    var area;
    var measurement;

	$("#calculate").click(function(){ // After the user has entered a value and wants to find the measurements that will give the most volume
		shape = $('#shape_type').val();
		area_s = $('#material_amount').val();
		area = parseFloat(area_s);

		if(shape == "square_prism"){ // Performs the calculation for a square prism
			measurement = square_prism(area);
			$("#measurements").val(measurement);
		}
		else if(shape == "cylinder"){ // Performs the calculation for a cylinder
			measurement = cylinder(area);
			$("#measurements").val(measurement);
		}
	});

	$("#shape_type").mouseleave(function(){ // Once the user selects the shape, the corresponding image will display showing the measurements
		shape = $('#shape_type').val();

		switch(shape){
			case "square_prism":
				$("#image").attr("src", "http://3.bp.blogspot.com/-wwM8dN9nfLU/U-Np16GN6GI/AAAAAAAAm70/rHFkyfQfESs/s1600/picture2.jpg");
				break;
			case "cylinder":
				$("#image").attr("src", "https://www.varsitytutors.com/assets/vt-hotmath-legacy/hotmath_help/topics/volume-of-a-cylinder/cylinder1.gif");
				break;	
			default:
				alert("unkown shape");
		}
	});

});

function square_prism(material){ // This function follows methods from calculus to find the greatest volume with the given surface area
	var crit_num;
	var derivative;
	var max_volume = 0;
	var best_length = 0;
	var volume;

	crit_num = Math.sqrt((material/4)/(3/2)); // The Math behind this is based on Calculus I have learned, but this simply finds the length that will yield the greatest volume

	volume = (material/4) * crit_num - (1/2) * crit_num * crit_num * crit_num; // Finds the greatest volume

	best_length = crit_num;
	max_volume = volume;

	var height = max_volume/ (best_length * best_length);

	var str1 = "Dimensions: l(length) = ";
	var s = best_length.toString();
	var str2 = str1.concat(s);

	var str3 = "       h(height) = ";
	var str4 = str2.concat(str3);

	s = height.toString();
	var str5 = str4.concat(s); // Creates a string that presents the measurements in a clean manner

	return str5;

}


function cylinder(material){ // The exact same process is applied here, except that the formula and math behind this is different, and this one deals with radius
	var crit_num;
	var derivative;
	var max_volume = 0;
	var best_radius = 0;
	var volume;
	
	crit_num = Math.sqrt((material/2)/(3 * Math.PI));
	volume = (material/2) * crit_num - Math.PI * crit_num * crit_num * crit_num;

	max_volume = volume;
	best_radius = crit_num;

	var height = (max_volume/(Math.PI * best_radius * best_radius));

	var str1 = "Dimensions: r(radius) = ";
	var s = best_radius.toString();
	var str2 = str1.concat(s);

	var str3 = "       h(height) = ";
	var str4 = str2.concat(str3);

	s = height.toString();

	var str5 = str4.concat(s);

	return str5;

}
















