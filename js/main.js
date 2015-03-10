$(function () {
	
	$('#convert').on('click', function(e){
	
		e.preventDefault();
		var numEntered = $('#mc-number').val(),
			validateVal = parseInt(numEntered);
		if (isNaN(validateVal) || (validateVal < 0 || validateVal > 255)){
			$('#error').addClass('error-enter');
			} else {
			switch (numEntered) {
				case "0":
					var foo = "000000";
					break;
				case "1":
					var foo = "000080";
					break;
				case "2":
					var foo = "008000";
					break;
				case "3":
					var foo = "00c0c0";
					break;
				case "4":
					var foo = "800000";
					break;
				case "5":
					var foo = "800080";
					break;
				case "6":
					var foo = "804200";
					break;
				case "7":
					var foo = "c0c0c0";
					break;
				case "8":
					var foo = "808080";
					break;
				case "9":
					var foo = "0000ff";
					break;
				case "10":
					var foo = "00ff00";
					break;
				case "11":
					var foo = "00ffff";
					break;
				case "12":
					var foo = "ff0000";
					break;
				case "13":
					var foo = "ff00ff";
					break;
				case "14":
					var foo = "ffff00";
					break;
				case "15":
					var foo = "ffffff";
					break;
				case "16":
					var foo = "ffffcc";
					break;
				case "17":
					var foo = "ffff99";
					break;
				case "18":
					var foo = "ffff80";
					break;
				case "19":
					var foo = "ffff66";
					break;
				case "20":
					var foo = "ffff33";
					break;
				case "21":
					var foo = "ccffff";
					break;
				case "22":
					var foo = "ccffcc";
					break;
				case "23":
					var foo = "ccff99";
					break;
				case "24":
					var foo = "ccff66";
					break;
				case "25":
					var foo = "ccff33";
					break;
				case "26":
					var foo = "ccff00";
					break;
				case "27":
					var foo = "99ffff";
					break;
				case "28":
					var foo = "99ffcc";
					break;
				case "29":
					var foo = "99ff99";
					break;
				case "30":
					var foo = "99ff66";
					break;
				case "31":
					var foo = "99ff33";
					break;
				case "32":
					var foo = "99ff00";
					break;
				case "33":
					var foo = "66ffff";
					break;
				case "34":
					var foo = "66ffcc";
					break;
				case "35":
					var foo = "66ff99";
					break;
				case "36":
					var foo = "66ff66";
					break;
				case "37":
					var foo = "66ff33";
					break;
				case "38":
					var foo = "66ff00";
					break;
				case "39":
					var foo = "33ffff";
					break;
				case "40":
					var foo = "33ffcc";
					break;
				case "41":
					var foo = "33ff99";
					break;
				case "42":
					var foo = "80ff80";
					break;
				case "43":
					var foo = "33ff66";
					break;
				case "44":
					var foo = "33ff33";
					break;
				case "45":
					var foo = "33ff00";
					break;
				case "46":
					var foo = "00ffcc";
					break;
				case "47":
					var foo = "00ff99";
					break;
				case "48":
					var foo = "00ff66";
					break;
				case "49":
					var foo = "00ff33";
					break;
				case "50":
					var foo = "ffccff";
					break;
				case "51":
					var foo = "ffcccc";
					break;
				case "52":
					var foo = "ffcc99";
					break;
				case "53":
					var foo = "ffcc66";
					break;
				case "54":
					var foo = "ffcc33";
					break;
				case "55":
					var foo = "ffcc00";
					break;
				case "56":
					var foo = "ccccff";
					break;
				case "57":
					var foo = "cccccc";
					break;
				case "58":
					var foo = "cccc99";
					break;
				case "59":
					var foo = "cccc66";
					break;
				case "60":
					var foo = "cccc33";
					break;
				case "61":
					var foo = "cccc00";
					break;
				case "62":
					var foo = "c0c000";
					break;
				case "63":
					var foo = "99ccff";
					break;
				case "64":
					var foo = "99cccc";
					break;
				case "65":
					var foo = "99cc99";
					break;
				case "66":
					var foo = "99cc66";
					break;
				case "67":
					var foo = "99cc33";
					break;
				case "68":
					var foo = "99cc00";
					break;
				case "69":
					var foo = "66ccff";
					break;
				case "70":
					var foo = "66cccc";
					break;
				case "71":
					var foo = "66cc99";
					break;
				case "72":
					var foo = "66cc66";
					break;
				case "73":
					var foo = "66cc33";
					break;
				case "74":
					var foo = "66cc00";
					break;
				case "75":
					var foo = "33ccff";
					break;
				case "76":
					var foo = "33cccc";
					break;
				case "77":
					var foo = "33cc99";
					break;
				case "78":
					var foo = "33cc66";
					break;
				case "79":
					var foo = "33cc33";
					break;
				case "80":
					var foo = "33cc00";
					break;
				case "81":
					var foo = "00ccff";
					break;
				case "82":
					var foo = "00cccc";
					break;
				case "83":
					var foo = "00cc99";
					break;
				case "84":
					var foo = "00cc66";
					break;
				case "85":
					var foo = "00cc33";
					break;
				case "86":
					var foo = "00cc00";
					break;
				case "87":
					var foo = "00c000";
					break;
				case "88":
					var foo = "00aa00";
					break;
				case "89":
					var foo = "ff99ff";
					break;
				case "90":
					var foo = "ff99cc";
					break;
				case "91":
					var foo = "ff9999";
					break;
				case "92":
					var foo = "ff9966";
					break;
				case "93":
					var foo = "ff9933";
					break;
				case "94":
					var foo = "ff9900";
					break;
				case "95":
					var foo = "cc99ff";
					break;
				case "96":
					var foo = "cc99cc";
					break;
				case "97":
					var foo = "cc9999";
					break;
				case "98":
					var foo = "cc9966";
					break;
				case "99":
					var foo = "cc9933";
					break;
				case "100":
					var foo = "cc9900";
					break;
				case "101":
					var foo = "96a0aa";
					break;
				case "102":
					var foo = "9999cc";
					break;
				case "103":
					var foo = "999999";
					break;
				case "104":
					var foo = "999966";
					break;
				case "105":
					var foo = "999933";
					break;
				case "106":
					var foo = "999900";
					break;
				case "107":
					var foo = "808000";
					break;
				case "108":
					var foo = "6699ff";
					break;
				case "109":
					var foo = "6699cc";
					break;
				case "110":
					var foo = "0080c0";
					break;
				case "111":
					var foo = "669999";
					break;
				case "112":
					var foo = "008080";
					break;
				case "113":
					var foo = "669966";
					break;
				case "114":
					var foo = "669933";
					break;
				case "115":
					var foo = "669900";
					break;
				case "116":
					var foo = "3399ff";
					break;
				case "117":
					var foo = "3399cc";
					break;
				case "118":
					var foo = "339999";
					break;
				case "119":
					var foo = "339966";
					break;
				case "120":
					var foo = "339933";
					break;
				case "121":
					var foo = "339900";
					break;
				case "122":
					var foo = "0099ff";
					break;
				case "123":
					var foo = "008040";
					break;
				case "124":
					var foo = "0099cc";
					break;
				case "125":
					var foo = "009999";
					break;
				case "126":
					var foo = "009966";
					break;
				case "127":
					var foo = "009933";
					break;
				case "128":
					var foo = "009900";
					break;
				case "129":
					var foo = "ff80ff";
					break;
				case "130":
					var foo = "ff66ff";
					break;
				case "131":
					var foo = "ff80c0";
					break;
				case "132":
					var foo = "ff66cc";
					break;
				case "133":
					var foo = "ff6699";
					break;
				case "134":
					var foo = "ff8080";
					break;
				case "135":
					var foo = "ff6666";
					break;
				case "136":
					var foo = "ff8040";
					break;
				case "137":
					var foo = "ff6633";
					break;
				case "138":
					var foo = "ff6600";
					break;
				case "139":
					var foo = "cc66ff";
					break;
				case "140":
					var foo = "cc66cc";
					break;
				case "141":
					var foo = "cc6699";
					break;
				case "142":
					var foo = "cc6666";
					break;
				case "143":
					var foo = "cc6633";
					break;
				case "144":
					var foo = "cc6600";
					break;
				case "145":
					var foo = "9966ff";
					break;
				case "146":
					var foo = "9966cc";
					break;
				case "147":
					var foo = "996699";
					break;
				case "148":
					var foo = "996666";
					break;
				case "149":
					var foo = "996633";
					break;
				case "150":
					var foo = "996600";
					break;
				case "151":
					var foo = "8080ff";
					break;
				case "152":
					var foo = "6666ff";
					break;
				case "153":
					var foo = "8080c0";
					break;
				case "154":
					var foo = "6666cc";
					break;
				case "155":
					var foo = "666699";
					break;
				case "156":
					var foo = "666666";
					break;
				case "157":
					var foo = "666633";
					break;
				case "158":
					var foo = "666600";
					break;
				case "159":
					var foo = "0080ff";
					break;
				case "160":
					var foo = "3366ff";
					break;
				case "161":
					var foo = "3366cc";
					break;
				case "162":
					var foo = "336699";
					break;
				case "163":
					var foo = "336666";
					break;
				case "164":
					var foo = "336633";
					break;
				case "165":
					var foo = "336600";
					break;
				case "166":
					var foo = "0066ff";
					break;
				case "167":
					var foo = "0066cc";
					break;
				case "168":
					var foo = "006699";
					break;
				case "169":
					var foo = "006666";
					break;
				case "170":
					var foo = "006633";
					break;
				case "171":
					var foo = "006600";
					break;
				case "172":
					var foo = "ff33ff";
					break;
				case "173":
					var foo = "ff33cc";
					break;
				case "174":
					var foo = "ff3399";
					break;
				case "175":
					var foo = "ff3366";
					break;
				case "176":
					var foo = "ff3333";
					break;
				case "177":
					var foo = "ff3300";
					break;
				case "178":
					var foo = "cc33ff";
					break;
				case "179":
					var foo = "cc33cc";
					break;
				case "180":
					var foo = "cc3399";
					break;
				case "181":
					var foo = "cc3366";
					break;
				case "182":
					var foo = "cc3333";
					break;
				case "183":
					var foo = "cc3300";
					break;
				case "184":
					var foo = "9933ff";
					break;
				case "185":
					var foo = "9933cc";
					break;
				case "186":
					var foo = "993399";
					break;
				case "187":
					var foo = "993366";
					break;
				case "188":
					var foo = "993333";
					break;
				case "189":
					var foo = "993300";
					break;
				case "190":
					var foo = "6633ff";
					break;
				case "191":
					var foo = "6633cc";
					break;
				case "192":
					var foo = "663399";
					break;
				case "193":
					var foo = "663366";
					break;
				case "194":
					var foo = "804040";
					break;
				case "195":
					var foo = "663333";
					break;
				case "196":
					var foo = "663300";
					break;
				case "197":
					var foo = "3333ff";
					break;
				case "198":
					var foo = "3333cc";
					break;
				case "199":
					var foo = "333399";
					break;
				case "200":
					var foo = "333366";
					break;
				case "201":
					var foo = "404040";
					break;
				case "202":
					var foo = "333333";
					break;
				case "203":
					var foo = "404000";
					break;
				case "204":
					var foo = "333300";
					break;
				case "205":
					var foo = "0033ff";
					break;
				case "206":
					var foo = "0033cc";
					break;
				case "207":
					var foo = "003399";
					break;
				case "208":
					var foo = "004080";
					break;
				case "209":
					var foo = "003366";
					break;
				case "210":
					var foo = "004040";
					break;
				case "211":
					var foo = "003333";
					break;
				case "212":
					var foo = "004000";
					break;
				case "213":
					var foo = "003300";
					break;
				case "214":
					var foo = "ff00cc";
					break;
				case "215":
					var foo = "ff0099";
					break;
				case "216":
					var foo = "ff0066";
					break;
				case "217":
					var foo = "ff0033";
					break;
				case "218":
					var foo = "cc00ff";
					break;
				case "219":
					var foo = "cc00cc";
					break;
				case "220":
					var foo = "c000c0";
					break;
				case "221":
					var foo = "cc0099";
					break;
				case "222":
					var foo = "cc0066";
					break;
				case "223":
					var foo = "cc0033";
					break;
				case "224":
					var foo = "cc0000";
					break;
				case "225":
					var foo = "c00000";
					break;
				case "226":
					var foo = "aa0000";
					break;
				case "227":
					var foo = "9900ff";
					break;
				case "228":
					var foo = "9900cc";
					break;
				case "229":
					var foo = "990099";
					break;
				case "230":
					var foo = "990066";
					break;
				case "231":
					var foo = "990033";
					break;
				case "232":
					var foo = "990000";
					break;
				case "233":
					var foo = "6600ff";
					break;
				case "234":
					var foo = "8000ff";
					break;
				case "235":
					var foo = "6600cc";
					break;
				case "236":
					var foo = "660099";
					break;
				case "237":
					var foo = "660066";
					break;
				case "238":
					var foo = "800040";
					break;
				case "239":
					var foo = "660033";
					break;
				case "240":
					var foo = "660000";
					break;
				case "241":
					var foo = "400000";
					break;
				case "242":
					var foo = "3300ff";
					break;
				case "243":
					var foo = "3300cc";
					break;
				case "244":
					var foo = "330099";
					break;
				case "245":
					var foo = "400080";
					break;
				case "246":
					var foo = "330066";
					break;
				case "247":
					var foo = "400040";
					break;
				case "248":
					var foo = "330033";
					break;
				case "249":
					var foo = "330000";
					break;
				case "250":
					var foo = "0000cc";
					break;
				case "251":
					var foo = "0000aa";
					break;
				case "252":
					var foo = "000099";
					break;
				case "253":
					var foo = "000066";
					break;
				case "254":
					var foo = "000040";
					break;
				case "255":
					var foo = "000033";
					break;
			}
		$('.hex-answer').html('The hex code for your selected color is #' + '<span id="result">' + foo.toUpperCase() + '</span>' + '.');
		}
	});
	
	$('#mc-number').focus(function(){
		$('.hex-answer').html('Please select a color.');
		$('#error').removeClass('error-enter');
	});



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
