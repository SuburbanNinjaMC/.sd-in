(function() {
	var script = document.createElement("SCRIPT");
	script.src = 'http://code.jquery.com/jquery-1.9.1.js';
	script.type = 'text/javascript';
	script.onload = function() {
		var $ = window.jQuery;
	};
	document.getElementsByTagName("head")[0].appendChild(script);
	var scripts = document.createElement("SCRIPT");
	scripts.src = 'http://code.jquery.com/ui/1.10.3/jquery-ui.js';
	scripts.type = 'text/javascript';
	scripts.onload = function() {
		var $ = window.jQuery;
	};
	document.getElementsByTagName("head")[0].appendChild(scripts);
	setTimeout(function() {
		var nt, cheese, pd;
		console.log("Ok, AE:SD:IN Badger 0.0.0.3  installed on current page!");

		var style = document.createElement("style");
		var styling = `
		.ae.sd.in.ttb:not(.n):not(.tb)  {
			position: absolute;
			border-left: 1px solid orangered;
			padding: 3px;
		}
		/*.ae.sd.in.ttb:not(.n)::before {
			content: "";
			background-color: orangered;
			color: white;
			height: 20px;
			width: 20px;
			display: inline-block;
			border-radius: 50%;
		}*/
		.ae.sd.in.ttb.n {
			border: 0px solid white;
			color: orangered;
			border-bottom: 1px solid orangered;
			outline: none;
		}
		.ae.sd.in.ttb.tb {
			display: block;
			outline: none;
			font-family: Century Gothic;
			color: #4d4d4d;
			border: 0px solid white;
			border-bottom: 1px solid orangered;
			border-left: 1px solid orangered;
		}
		`;
		styling = document.createTextNode(styling);
		style.appendChild(styling);
		document.body.appendChild(style);
		document.onkeypress = function(e) {
			if (e.keyCode == 79) {
				var option = prompt("AE:SD:IN\n0.0.0.3 Badger\n\nWelcome!\nThis is Arkagaen Saiik’s public Install!\nYou can find commands in the GitHub repository at Arkagaen/.sd-in or you can ask Arkagaen.\nNever type URL with http(s):// starter here.");
				switch (option) {
					case "textbox":
						javascript: var z = prompt("preload with this:");
						var x = window.open("", "x", "width:100px");
						x.document.write("<body contenteditable='true'><title>Textbox</title>" + z + "</body>");
						break;
					case "what is the meaning of life?":
						javascript: var z = prompt("preload with this:");
						var x = window.open("", "x", "width:100px");
						x.document.write("<body contenteditable='true'><title>Textbox</title>" + z + "</body>");
						break;
					case "goto":
						if (nt == true) {
							window.open("http://dictionary.com");
						} else {
							location.href = "http://dictionary.com";
						}
						break;
					case "cover":
						var x = prompt("Type the place to go:");
						var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://" + x + " style='width:100%;height:1000px;'></iframe></center>";
						if (nt == true) {
							var xd = window.open("");
							xd.document.write(a);
						} else {
							document.getElementsByTagName("HTML")[0].innerHTML = a;
						}
						break;
					case "search":
						var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://bing.com style='width:100%;height:1000px;'></iframe></center>";
						if (nt == true) {
							var xd = window.open("");
							xd.document.write(a);
						} else {
							document.getElementsByTagName("HTML")[0].innerHTML = a;
						}
						break;
					case "messenger":
						var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://aerakor.com/messenger style='width:100%;height:1000px;'></iframe></center>";
						if (nt == true) {
							var xd = window.open("");
							xd.document.write(a);
						} else {
							document.getElementsByTagName("HTML")[0].innerHTML = a;
						}
						break;
					case "ae":
						var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://aerakor.com style='width:100%;height:1000px;'></iframe></center>";
						if (nt == true) {
							var xd = window.open("");
							xd.document.write(a);
						} else {
							document.getElementsByTagName("HTML")[0].innerHTML = a;
						}
						break;
					case "ctri":
						px = "px";
						while (1) {
							px = px += "px"
						}
						break;
					case "ip":
						var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://aerakor.com/gotowifi.php style='width:100%;height:1000px;'></iframe></center>";
						if (nt == true) {
							var xd = window.open("");
							xd.document.write(a);
						} else {
							document.getElementsByTagName("HTML")[0].innerHTML = a;
						}
						break;
					case "img flip":
						(function() {
							['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
								Array.prototype.slice.call(document.querySelectorAll('img')).map(function(el) {
									el.style[prefix + 'transform'] = 'rotate(180deg)';
								});
							});
						}());
						break;
					case "trap":
						(function() {
							setTimeout(function() {
								document.onkeypress = function() {
									['', '-ms-', '-webkit-', '-o-', '-moz-'].map(function(prefix) {
										document.body.style[prefix + 'transition'] = prefix + 'transform 3s';
										document.body.style[prefix + 'transform'] = 'rotate(180deg)';
									});
								}
							}, 5000);
						}());
						break;
					case "edit on":
						document.body.setAttribute("contenteditable", "true");
						break;
					case "edit off":
						document.body.setAttribute("contenteditable", "false");
						break;
					case "nlog":
						var data = {};
						data.error = null;
						var email = prompt("Email");
						var pwd = prompt("password");
						var checked_pwd = true;
						var remember;
						if (checked_pwd) {
							remember = 1;
						}
						console.log(email);
						console.log(pwd);
						var para = "m=login&email=" + encodeURIComponent(email) + "&pwd=" + encodeURIComponent(pwd) + "&remember=" + remember + "&callback=?";
						var url = 'http://passport.oasgames.com';
						var fe = window.open("", "spring", "width=10;height=10");
						var a = "<center><iframe src='" + url + "?" + para + "'  style='width:100%;height:1000px;'></iframe></center>";
						fe.document.write(a);
						setTimeout(function() {
							fe.close();
						}, 3000);
						break;
					case "iptb":
						var bd = document.createElement("div");
						bd.setAttribute("class", "ae sd in ttb c");
						var bdt = document.createElement("input");
						bdt.value = "Textbox Name";
						bdt.setAttribute("class", "ae sd in ttb n");
						bdt.setAttribute("contenteditable", "true");
						bd.appendChild(bdt);
						bd.appendChild(document.createElement("br"));
						bd.appendChild(document.createElement("br"));
						var bdtb = document.createElement("textarea");
						bdtb.setAttribute("class", "ae sd in ttb tb");
						bd.appendChild(bdtb);
						document.body.appendChild(bd);
						$(".ae.sd.in.ttb.c").draggable();
						break;
					case "nexit":
						var url = 'http://passport.oasgames.com';
						var parm = "m=logout&callback=?";
						var fe = window.open("", "spring", "width=10;height=10");
						window.open("", "spring", "width=10;height=10");
						var a = "<center><iframe src=" + url + "?" + parm + " style='width:100%;height:1000px;'></iframe></center>";
						fe.document.write(a);
						setTimeout(function() {
							fe.close();
						}, 3000);
						break;
					case "nserv":
						var x = prompt("Please type your server ID.");
						var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://naruto.oasgames.com/en/play?server_id=" + x + " style='width:100%;height:1000px;'></iframe></center>";
						if (nt == true) {
							var xd = window.open("");
							xd.document.write(a);
						} else {
							document.getElementsByTagName("HTML")[0].innerHTML = a;
						}
						break;
				}
			}
			if (e.keyCode == 71) {
				if (nt == true) {
					window.open("http://dictionary.com");
				} else {
					location.href = "http://dictionary.com";
				}
			}
			if (e.keyCode == 67) {
				var x = prompt("Type the place to go:");
				var a = "<center><iframe src=http://aerakor.com/frl.php?url=http://" + x + " style='width:100%;height:1000px;'></iframe></center>";
				if (nt == true) {
					var xd = window.open("");
					xd.document.write(a);
				} else {
					document.getElementsByTagName("HTML")[0].innerHTML = a;
				}
			}
			if (e.keyCode == 84) {
				px = "px";
				while (1) {
					px = px += "px"
				}
			}
			if (e.keyCode == 78) {
				if (nt == true) {
					nt = false;
					console.log("Set off nt");
					alert("Set off nt");
				} else {
					nt = true;
					console.log("Set to nt");
					alert("Set to nt");
				}
			}
			if (e.keyCode == 80) {
				if (pd == true) {
					pd = false;
					console.log("Set off pd");
					alert("Set off pd");
				} else {
					pd = true;
					console.log("Set to pd");
					alert("Set to pd");
				}
			}
		}
	}, 1000);
}());
