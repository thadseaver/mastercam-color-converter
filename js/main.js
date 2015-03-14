$(function () {
	
	$('#convert').on('click', function(e){
	
		e.preventDefault();

		// Get number entered and return an integer
		var numEntered = $('#mc-number').val(),
			validateVal = parseInt(numEntered);

		// Error check entry
		if (isNaN(validateVal) || (validateVal < 0 || validateVal > 255)){
			$('#error').addClass('error-enter');
			} else {

			// Assign hex value to color selected
			switch (numEntered) {
				case "0":
					var answer = "#000000";
					break;
				case "1":
					var answer = "#000080";
					break;
				case "2":
					var answer = "#008000";
					break;
				case "3":
					var answer = "#00c0c0";
					break;
				case "4":
					var answer = "#800000";
					break;
				case "5":
					var answer = "#800080";
					break;
				case "6":
					var answer = "#804200";
					break;
				case "7":
					var answer = "#c0c0c0";
					break;
				case "8":
					var answer = "#808080";
					break;
				case "9":
					var answer = "#0000ff";
					break;
				case "10":
					var answer = "#00ff00";
					break;
				case "11":
					var answer = "#00ffff";
					break;
				case "12":
					var answer = "##ff0000";
					break;
				case "13":
					var answer = "#ff00ff";
					break;
				case "14":
					var answer = "#ffff00";
					break;
				case "15":
					var answer = "#ffffff";
					break;
				case "16":
					var answer = "#ffffcc";
					break;
				case "17":
					var answer = "#ffff99";
					break;
				case "18":
					var answer = "#ffff80";
					break;
				case "19":
					var answer = "#ffff66";
					break;
				case "20":
					var answer = "#ffff33";
					break;
				case "21":
					var answer = "#ccffff";
					break;
				case "22":
					var answer = "#ccffcc";
					break;
				case "23":
					var answer = "#ccff99";
					break;
				case "24":
					var answer = "#ccff66";
					break;
				case "25":
					var answer = "#ccff33";
					break;
				case "26":
					var answer = "#ccff00";
					break;
				case "27":
					var answer = "#99ffff";
					break;
				case "28":
					var answer = "#99ffcc";
					break;
				case "29":
					var answer = "#99ff99";
					break;
				case "30":
					var answer = "#99ff66";
					break;
				case "31":
					var answer = "#99ff33";
					break;
				case "32":
					var answer = "#99ff00";
					break;
				case "33":
					var answer = "#66ffff";
					break;
				case "34":
					var answer = "#66ffcc";
					break;
				case "35":
					var answer = "#66ff99";
					break;
				case "36":
					var answer = "#66ff66";
					break;
				case "37":
					var answer = "#66ff33";
					break;
				case "38":
					var answer = "#66ff00";
					break;
				case "39":
					var answer = "#33ffff";
					break;
				case "40":
					var answer = "#33ffcc";
					break;
				case "41":
					var answer = "#33ff99";
					break;
				case "42":
					var answer = "#80ff80";
					break;
				case "43":
					var answer = "#33ff66";
					break;
				case "44":
					var answer = "#33ff33";
					break;
				case "45":
					var answer = "#33ff00";
					break;
				case "46":
					var answer = "#00ffcc";
					break;
				case "47":
					var answer = "#00ff99";
					break;
				case "48":
					var answer = "#00ff66";
					break;
				case "49":
					var answer = "#00ff33";
					break;
				case "50":
					var answer = "#ffccff";
					break;
				case "51":
					var answer = "#ffcccc";
					break;
				case "52":
					var answer = "#ffcc99";
					break;
				case "53":
					var answer = "#ffcc66";
					break;
				case "54":
					var answer = "#ffcc33";
					break;
				case "55":
					var answer = "#ffcc00";
					break;
				case "56":
					var answer = "#ccccff";
					break;
				case "57":
					var answer = "#cccccc";
					break;
				case "58":
					var answer = "#cccc99";
					break;
				case "59":
					var answer = "#cccc66";
					break;
				case "60":
					var answer = "#cccc33";
					break;
				case "61":
					var answer = "#cccc00";
					break;
				case "62":
					var answer = "#c0c000";
					break;
				case "63":
					var answer = "#99ccff";
					break;
				case "64":
					var answer = "#99cccc";
					break;
				case "65":
					var answer = "#99cc99";
					break;
				case "66":
					var answer = "#99cc66";
					break;
				case "67":
					var answer = "#99cc33";
					break;
				case "68":
					var answer = "#99cc00";
					break;
				case "69":
					var answer = "#66ccff";
					break;
				case "70":
					var answer = "#66cccc";
					break;
				case "71":
					var answer = "#66cc99";
					break;
				case "72":
					var answer = "#66cc66";
					break;
				case "73":
					var answer = "#66cc33";
					break;
				case "74":
					var answer = "#66cc00";
					break;
				case "75":
					var answer = "#33ccff";
					break;
				case "76":
					var answer = "#33cccc";
					break;
				case "77":
					var answer = "#33cc99";
					break;
				case "78":
					var answer = "#33cc66";
					break;
				case "79":
					var answer = "#33cc33";
					break;
				case "80":
					var answer = "#33cc00";
					break;
				case "81":
					var answer = "#00ccff";
					break;
				case "82":
					var answer = "#00cccc";
					break;
				case "83":
					var answer = "#00cc99";
					break;
				case "84":
					var answer = "#00cc66";
					break;
				case "85":
					var answer = "#00cc33";
					break;
				case "86":
					var answer = "#00cc00";
					break;
				case "87":
					var answer = "#00c000";
					break;
				case "88":
					var answer = "#00aa00";
					break;
				case "89":
					var answer = "#ff99ff";
					break;
				case "90":
					var answer = "#ff99cc";
					break;
				case "91":
					var answer = "#ff9999";
					break;
				case "92":
					var answer = "#ff9966";
					break;
				case "93":
					var answer = "#ff9933";
					break;
				case "94":
					var answer = "#ff9900";
					break;
				case "95":
					var answer = "#cc99ff";
					break;
				case "96":
					var answer = "#cc99cc";
					break;
				case "97":
					var answer = "#cc9999";
					break;
				case "98":
					var answer = "#cc9966";
					break;
				case "99":
					var answer = "#cc9933";
					break;
				case "100":
					var answer = "#cc9900";
					break;
				case "101":
					var answer = "#96a0aa";
					break;
				case "102":
					var answer = "#9999cc";
					break;
				case "103":
					var answer = "#999999";
					break;
				case "104":
					var answer = "#999966";
					break;
				case "105":
					var answer = "#999933";
					break;
				case "106":
					var answer = "#999900";
					break;
				case "107":
					var answer = "#808000";
					break;
				case "108":
					var answer = "#6699ff";
					break;
				case "109":
					var answer = "#6699cc";
					break;
				case "110":
					var answer = "#0080c0";
					break;
				case "111":
					var answer = "#669999";
					break;
				case "112":
					var answer = "#008080";
					break;
				case "113":
					var answer = "#669966";
					break;
				case "114":
					var answer = "#669933";
					break;
				case "115":
					var answer = "#669900";
					break;
				case "116":
					var answer = "#3399ff";
					break;
				case "117":
					var answer = "#3399cc";
					break;
				case "118":
					var answer = "#339999";
					break;
				case "119":
					var answer = "#339966";
					break;
				case "120":
					var answer = "#339933";
					break;
				case "121":
					var answer = "#339900";
					break;
				case "122":
					var answer = "#0099ff";
					break;
				case "123":
					var answer = "#008040";
					break;
				case "124":
					var answer = "#0099cc";
					break;
				case "125":
					var answer = "#009999";
					break;
				case "126":
					var answer = "#009966";
					break;
				case "127":
					var answer = "#009933";
					break;
				case "128":
					var answer = "#009900";
					break;
				case "129":
					var answer = "#ff80ff";
					break;
				case "130":
					var answer = "#ff66ff";
					break;
				case "131":
					var answer = "#ff80c0";
					break;
				case "132":
					var answer = "#ff66cc";
					break;
				case "133":
					var answer = "#ff6699";
					break;
				case "134":
					var answer = "#ff8080";
					break;
				case "135":
					var answer = "#ff6666";
					break;
				case "136":
					var answer = "#ff8040";
					break;
				case "137":
					var answer = "#ff6633";
					break;
				case "138":
					var answer = "#ff6600";
					break;
				case "139":
					var answer = "#cc66ff";
					break;
				case "140":
					var answer = "#cc66cc";
					break;
				case "141":
					var answer = "#cc6699";
					break;
				case "142":
					var answer = "#cc6666";
					break;
				case "143":
					var answer = "#cc6633";
					break;
				case "144":
					var answer = "#cc6600";
					break;
				case "145":
					var answer = "#9966ff";
					break;
				case "146":
					var answer = "#9966cc";
					break;
				case "147":
					var answer = "#996699";
					break;
				case "148":
					var answer = "#996666";
					break;
				case "149":
					var answer = "#996633";
					break;
				case "150":
					var answer = "#996600";
					break;
				case "151":
					var answer = "#8080ff";
					break;
				case "152":
					var answer = "#6666ff";
					break;
				case "153":
					var answer = "#8080c0";
					break;
				case "154":
					var answer = "#6666cc";
					break;
				case "155":
					var answer = "#666699";
					break;
				case "156":
					var answer = "#666666";
					break;
				case "157":
					var answer = "#666633";
					break;
				case "158":
					var answer = "#666600";
					break;
				case "159":
					var answer = "#0080ff";
					break;
				case "160":
					var answer = "#3366ff";
					break;
				case "161":
					var answer = "#3366cc";
					break;
				case "162":
					var answer = "#336699";
					break;
				case "163":
					var answer = "#336666";
					break;
				case "164":
					var answer = "#336633";
					break;
				case "165":
					var answer = "#336600";
					break;
				case "166":
					var answer = "#0066ff";
					break;
				case "167":
					var answer = "#0066cc";
					break;
				case "168":
					var answer = "#006699";
					break;
				case "169":
					var answer = "#006666";
					break;
				case "170":
					var answer = "#006633";
					break;
				case "171":
					var answer = "#006600";
					break;
				case "172":
					var answer = "#ff33ff";
					break;
				case "173":
					var answer = "#ff33cc";
					break;
				case "174":
					var answer = "#ff3399";
					break;
				case "175":
					var answer = "#ff3366";
					break;
				case "176":
					var answer = "#ff3333";
					break;
				case "177":
					var answer = "#ff3300";
					break;
				case "178":
					var answer = "#cc33ff";
					break;
				case "179":
					var answer = "#cc33cc";
					break;
				case "180":
					var answer = "#cc3399";
					break;
				case "181":
					var answer = "#cc3366";
					break;
				case "182":
					var answer = "#cc3333";
					break;
				case "183":
					var answer = "#cc3300";
					break;
				case "184":
					var answer = "#9933ff";
					break;
				case "185":
					var answer = "#9933cc";
					break;
				case "186":
					var answer = "#993399";
					break;
				case "187":
					var answer = "#993366";
					break;
				case "188":
					var answer = "#993333";
					break;
				case "189":
					var answer = "#993300";
					break;
				case "190":
					var answer = "#6633ff";
					break;
				case "191":
					var answer = "#6633cc";
					break;
				case "192":
					var answer = "#663399";
					break;
				case "193":
					var answer = "#663366";
					break;
				case "194":
					var answer = "#804040";
					break;
				case "195":
					var answer = "#663333";
					break;
				case "196":
					var answer = "#663300";
					break;
				case "197":
					var answer = "#3333ff";
					break;
				case "198":
					var answer = "#3333cc";
					break;
				case "199":
					var answer = "#333399";
					break;
				case "200":
					var answer = "#333366";
					break;
				case "201":
					var answer = "#404040";
					break;
				case "202":
					var answer = "#333333";
					break;
				case "203":
					var answer = "#404000";
					break;
				case "204":
					var answer = "#333300";
					break;
				case "205":
					var answer = "#0033ff";
					break;
				case "206":
					var answer = "#0033cc";
					break;
				case "207":
					var answer = "#003399";
					break;
				case "208":
					var answer = "#004080";
					break;
				case "209":
					var answer = "#003366";
					break;
				case "210":
					var answer = "#004040";
					break;
				case "211":
					var answer = "#003333";
					break;
				case "212":
					var answer = "#004000";
					break;
				case "213":
					var answer = "#003300";
					break;
				case "214":
					var answer = "#ff00cc";
					break;
				case "215":
					var answer = "#ff0099";
					break;
				case "216":
					var answer = "#ff0066";
					break;
				case "217":
					var answer = "#ff0033";
					break;
				case "218":
					var answer = "#cc00ff";
					break;
				case "219":
					var answer = "#cc00cc";
					break;
				case "220":
					var answer = "#c000c0";
					break;
				case "221":
					var answer = "#cc0099";
					break;
				case "222":
					var answer = "#cc0066";
					break;
				case "223":
					var answer = "#cc0033";
					break;
				case "224":
					var answer = "#cc0000";
					break;
				case "225":
					var answer = "#c00000";
					break;
				case "226":
					var answer = "#aa0000";
					break;
				case "227":
					var answer = "#9900ff";
					break;
				case "228":
					var answer = "#9900cc";
					break;
				case "229":
					var answer = "#990099";
					break;
				case "230":
					var answer = "#990066";
					break;
				case "231":
					var answer = "#990033";
					break;
				case "232":
					var answer = "#990000";
					break;
				case "233":
					var answer = "#6600ff";
					break;
				case "234":
					var answer = "#8000ff";
					break;
				case "235":
					var answer = "#6600cc";
					break;
				case "236":
					var answer = "#660099";
					break;
				case "237":
					var answer = "#660066";
					break;
				case "238":
					var answer = "#800040";
					break;
				case "239":
					var answer = "#660033";
					break;
				case "240":
					var answer = "#660000";
					break;
				case "241":
					var answer = "#400000";
					break;
				case "242":
					var answer = "#3300ff";
					break;
				case "243":
					var answer = "#3300cc";
					break;
				case "244":
					var answer = "#330099";
					break;
				case "245":
					var answer = "#400080";
					break;
				case "246":
					var answer = "#330066";
					break;
				case "247":
					var answer = "#400040";
					break;
				case "248":
					var answer = "#330033";
					break;
				case "249":
					var answer = "#330000";
					break;
				case "250":
					var answer = "#0000cc";
					break;
				case "251":
					var answer = "#0000aa";
					break;
				case "252":
					var answer = "#000099";
					break;
				case "253":
					var answer = "#000066";
					break;
				case "254":
					var answer = "#000040";
					break;
				case "255":
					var answer = "#000033";
					break;
			}

		// Write HTML to page based on number selected
		$('.hex-answer').html('The hex code for your selected color is ' + '<span id="result">' + answer.toUpperCase() + '</span>' + '.');
		}
	});
	
	// Clear answer and remove error message
	$('#mc-number').focus(function(){
		$('.hex-answer').html('Please select a color.');
		$('#error').removeClass('error-enter');
	});


	// Use Spectrum plugin to layout Mastercam color palette
	$("#custom").spectrum({
    showPaletteOnly: true,
    preferredFormat: "hex",
    flat: true,
    allowEmpty: true,
    palette: [
    ["rgb(0, 0, 0)", "rgb(0, 0, 128)", "rgb(0, 128, 0)", "rgb(0, 192, 192)", "rgb(128, 0, 0)", "rgb(128, 0, 128)", "rgb(128, 66, 0)", "rgb(192, 192, 192)", "rgb(128, 128, 128)", "rgb(0, 0, 255)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 0)", "rgb(255, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 255, 255)"],
    ["rgb(255, 255, 204)", "rgb(255, 255, 153)", "rgb(255, 255, 128)", "rgb(255, 255, 102)", "rgb(255, 255, 51)", "rgb(204, 255, 255)", "rgb(204, 255, 204)", "rgb(204, 255, 153)", "rgb(204, 255, 102)", "rgb(204, 255, 51)", "rgb(204, 255, 0)", "rgb(153, 255, 255)", "rgb(153, 255, 204)", "rgb(153, 255, 153)", "rgb(153, 255, 102)", "rgb(153, 255, 51)"],
    ["rgb(153, 255, 0)", "rgb(102, 255, 255)", "rgb(102, 255, 204)", "rgb(102, 255, 153)", "rgb(102, 255, 102)", "rgb(102, 255, 51)", "rgb(102, 255, 0)", "rgb(51, 255, 255)", "rgb(51, 255, 204)", "rgb(51, 255, 153)", "rgb(128, 255, 128)", "rgb(51, 255, 102)", "rgb(51, 255, 51)", "rgb(51, 255, 0)", "rgb(0, 255, 204)", "rgb(0, 255, 153)"],
    ["rgb(0, 255, 102)", "rgb(0, 255, 51)", "rgb(255, 204, 255)", "rgb(255, 204, 204)", "rgb(255, 204, 153)", "rgb(255, 204, 102)", "rgb(255, 204, 51)", "rgb(255, 204, 0)", "rgb(204, 204, 255)", "rgb(204, 204, 204)", "rgb(204, 204, 153)", "rgb(204, 204, 102)", "rgb(204, 204, 51)", "rgb(204, 204, 0)", "rgb(192, 192, 0)", "rgb(153, 204, 255)"],
    ["rgb(153, 204, 204)", "rgb(153, 204, 153)", "rgb(153, 204, 102)", "rgb(153, 204, 51)", "rgb(153, 204, 0)", "rgb(102, 204, 255)", "rgb(102, 204, 204)", "rgb(102, 204, 153)", "rgb(102, 204, 102)", "rgb(102, 204, 51)", "rgb(102, 204, 0)", "rgb(51, 204, 255)", "rgb(51, 204, 204)", "rgb(51, 204, 153)", "rgb(51, 204, 102)", "rgb(51, 204, 51)"],
    ["rgb(51, 204, 0)", "rgb(0, 204, 255)", "rgb(0, 204, 204)", "rgb(0, 204, 153)", "rgb(0, 204, 102)", "rgb(0, 204, 51)", "rgb(0, 204, 0)", "rgb(0, 192, 0)", "rgb(0, 170, 0)", "rgb(255, 153, 255)", "rgb(255, 153, 204)", "rgb(255, 153, 153)", "rgb(255, 153, 102)", "rgb(255, 153, 51)", "rgb(255, 153, 0)", "rgb(204, 153, 255)"],
    ["rgb(204, 153, 204)", "rgb(204, 153, 153)", "rgb(204, 153, 102)", "rgb(204, 153, 51)", "rgb(204, 153, 0)", "rgb(150, 160, 170)", "rgb(153, 153, 204)", "rgb(153, 153, 153)", "rgb(153, 153, 102)", "rgb(153, 153, 51)", "rgb(153, 153, 0)", "rgb(128, 128, 0)", "rgb(102, 153, 255)", "rgb(102, 153, 204)", "rgb(0, 128, 192)", "rgb(102, 153, 153)"],
    ["rgb(0, 128, 128)", "rgb(102, 153, 102)", "rgb(102, 153, 51)", "rgb(102, 153, 0)", "rgb(51, 153, 255)", "rgb(51, 153, 204)", "rgb(51, 153, 153)", "rgb(51, 153, 102)", "rgb(51, 153, 51)", "rgb(51, 153, 0)", "rgb(0, 153, 255)", "rgb(0, 128, 64)", "rgb(0, 153, 204)", "rgb(0, 153, 153)", "rgb(0, 153, 102)", "rgb(0, 153, 51)"],
    ["rgb(0, 153, 0)", "rgb(255, 128, 255)", "rgb(255, 102, 255)", "rgb(255, 128, 192)", "rgb(255, 102, 204)", "rgb(255, 102, 153)", "rgb(255, 128, 128)", "rgb(255, 102, 102)", "rgb(255, 128, 64)", "rgb(255, 102, 51)", "rgb(255, 102, 0)", "rgb(204, 102, 255)", "rgb(204, 102, 204)", "rgb(204, 102, 153)", "rgb(204, 102, 102)", "rgb(204, 102, 51)"],
    ["rgb(204, 102, 0)", "rgb(153, 102, 255)", "rgb(153, 102, 204)", "rgb(153, 102, 153)", "rgb(153, 102, 102)", "rgb(153, 102, 51)", "rgb(153, 102, 0)", "rgb(128, 128, 255)", "rgb(102, 102, 255)", "rgb(128, 128, 192)", "rgb(102, 102, 204)", "rgb(102, 102, 153)", "rgb(102, 102, 102)", "rgb(102, 102, 51)", "rgb(102, 102, 0)", "rgb(0, 128, 255)"],
    ["rgb(51, 102, 255)", "rgb(51, 102, 204)", "rgb(51, 102, 153)", "rgb(51, 102, 102)", "rgb(51, 102, 51)", "rgb(51, 102, 0)", "rgb(0, 102, 255)", "rgb(0, 102, 204)", "rgb(0, 102, 153)", "rgb(0, 102, 102)", "rgb(0, 102, 51)", "rgb(0, 102, 0)", "rgb(255, 51, 255)", "rgb(255, 51, 204)", "rgb(255, 51, 153)", "rgb(255, 51, 102)"],
    ["rgb(255, 51, 51)", "rgb(255, 51, 0)", "rgb(204, 51, 255)", "rgb(204, 51, 204)", "rgb(204, 51, 153)", "rgb(204, 51, 102)", "rgb(204, 51, 51)", "rgb(204, 51, 0)", "rgb(153, 51, 255)", "rgb(153, 51, 204)", "rgb(153, 51, 153)", "rgb(153, 51, 102)", "rgb(153, 51, 51)", "rgb(153, 51, 0)", "rgb(102, 51, 255)", "rgb(102, 51, 204)"],
    ["rgb(102, 51, 153)", "rgb(102, 51, 102)", "rgb(128, 64, 64)", "rgb(102, 51, 51)", "rgb(102, 51, 0)", "rgb(51, 51, 255)", "rgb(51, 51, 204)", "rgb(51, 51, 133)", "rgb(51, 51, 102)", "rgb(64, 64, 64)", "rgb(51, 51, 51)", "rgb(64, 64, 0)", "rgb(51, 51, 0)", "rgb(0, 51, 255)", "rgb(0, 51, 204)", "rgb(0, 51, 153)"],
    ["rgb(0, 64, 128)", "rgb(0, 51, 102)", "rgb(0, 64, 64)", "rgb(0, 51, 51)", "rgb(0, 64, 0)", "rgb(0, 51, 0)", "rgb(255, 0, 204)", "rgb(255, 0, 153)", "rgb(255, 0, 102)", "rgb(255, 0, 51)", "rgb(204, 0, 255)", "rgb(204, 0, 204)", "rgb(192, 0, 192)", "rgb(204, 0, 153)", "rgb(204, 0, 102)", "rgb(204, 0, 51)"],
    ["rgb(204, 0, 0)", "rgb(192, 0, 0)", "rgb(170, 0, 0)", "rgb(153, 0, 255)", "rgb(153, 0, 204)", "rgb(153, 0, 153)", "rgb(153, 0, 102)", "rgb(153, 0, 51)", "rgb(153, 0, 0)", "rgb(102, 0, 255)", "rgb(128, 0, 255)", "rgb(102, 0, 204)", "rgb(102, 0, 153)", "rgb(102, 0, 102)", "rgb(128, 0, 64)", "rgb(102, 0, 51)"],
    ["rgb(102, 0, 0)", "rgb(64, 0, 0)", "rgb(51, 0, 255)", "rgb(51, 0, 204)", "rgb(51, 0, 153)", "rgb(64, 0, 128)", "rgb(51, 0, 102)", "rgb(64, 0, 64)", "rgb(51, 0, 51)", "rgb(51, 0, 0)", "rgb(0, 0, 204)", "rgb(0, 0, 170)", "rgb(0, 0, 153)", "rgb(0, 0, 102)", "rgb(0, 0, 64)", "rgb(0, 0, 51)"]
    ]
	});

	// Use ZeroClipboard plugin to copy the hex code to clipboard on button click
	var clip = new ZeroClipboard( 
		document.getElementById('copy'), {
		moviePath: "zeroclipboard-master/ZeroClipboard.swf"
	});


}); //end ready
