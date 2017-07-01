
$( document ).ready(function() {

	$("#painelAbertura").show();
	$("#titulo_painelAberturaH1").show();
	$("#painel").hide();
	$("#btnPainel").hide();
	showProgress(100);


	$( "#btnPainel" ).click(function() {
		 toggleFullScreen();
		$("#painelAbertura").hide();
		$("#painel").show();
		$("#btnPainel").hide();
		});




	//$('.carousel').carousel()


  // TICKER

	(function() {
	  var tickerItemLocation = document.querySelector(".ticker-item-location");
	  // our headlines
	  var tickerItems = [
	    "A PGJ informa que o pagamento de junho será creditado amanhã.",
	    "Estão abertas inscrições para o Curso de Processo Civil. Verifique email enviado pelo CEAF.",
	    "Sexta-feira haverá vacinação contra gripe a partir das 09h, no hall de entrada."
	  ];
	  var displayingNow = 0;
	  var tickerContent = '';
	  var numberOfItems = tickerItems.length;
	  var tickerSizeGuide = document.querySelector('.ticker-size-guide');

	  // slice(0) in this chain is used to copy the array before it is sorted so the original order is preserved when it is displayed. Otherwise it would always go in order of headline length.
	  var longestItem = tickerItems.slice(0).sort(function(a, b) {return b.length - a.length;})[0];

	  // create a string of HTML containing all the ticker items as divs
	  function populateTicker() {
	    for (var i = 0; i < numberOfItems; i++) {
	      tickerContent +=
	        '<div class="ticker-item" id="ticker' + i + '">' +
	        tickerItems[i] + '</div>';
	    }

	    // push that string to the right spot in the document.
	    tickerItemLocation.innerHTML = tickerContent;

	    //set up the invisible element that gives ticker wrapper the correct hight.
	    tickerSizeGuide.innerHTML = '<div>' + longestItem + '</div>';

	    // get the first one displayed right away.
	    document.querySelector('#ticker0').classList.add('active-ticker-item');

	  }

	  // add and remove classes in order to control animations.
	  function displayTickerItem() {
	    var previouslyActive =
	      document.querySelector('.active-ticker-item') || false;
	    if (previouslyActive) {
	      previouslyActive.classList.add('leaving-ticker-item');
	    }

	    // using a timeout to allow animations to complete before doing more things
	    setTimeout(function() {
	      document
	        .querySelector('#ticker' + displayingNow)
	        .classList.add('active-ticker-item');
	      previouslyActive.classList.remove(
	        'active-ticker-item',
	        'leaving-ticker-item'
	      );
	    }, 800);

	    // reset when we reach the last item;
	    if (displayingNow === numberOfItems - 1) {
	      displayingNow = 0;
	    } else {
	      displayingNow++;
	    }
	  }

	  // start the show!
	  populateTicker();
	  setInterval(displayTickerItem, 5000);
	})();


		// setTimeout(function(){ abrirPainel(); }, 3000);
		 //setTimeout(function(){ window.location.href = "painel/"; }, 3000);
		 //window.location.href = "painel.html";
	//});


// DATE TIME

var now = new Date(); //create a new Date
var year = now.getFullYear();
var mm = (now.getMonth());
var dd = now.getDate();
var hour = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

//Get month as a string
function monthToStr(data){
  var month=new Array();
  month[0]="Janeiro";
  month[1]="Fevereiro";
  month[2]="Março";
  month[3]="Abril";
  month[4]="Maio";
  month[5]="Junho";
  month[6]="Julho";
  month[7]="Agosto";
  month[8]="Setembro";
  month[9]="Outubro";
  month[10]="Novembro";
  month[11]="Dezembro";
  return month[data];
}

//Get day as a string
function dayToStr(data){
  var day=new Array();
  day[0]="Domingo";
  day[1]="Segunda";
  day[2]="Terça";
  day[3]="Quarta";
  day[4]="Quinta";
  day[5]="Sexta";
  day[6]="Sábado";
  return day[data];
}

function setTime(){

	var now = new Date(); //create a new Date
	var year = now.getFullYear();
	var mm = (now.getMonth());
	var dd = now.getDate();
	var hour = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
	var min = now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
	var sec = now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();

// Get Date
	$('.day').html(dayToStr(dd));
	$('.date').html(dd + " " + monthToStr(mm) + " " + year);
	$('.time').html(hour + ":" + min);
};

// Set Interval to refresh the clock every second
setInterval(setTime, 1000);




});



// FUNCTIONS




function showProgress(_upto) {

    //Filter Percentage
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = $("#_cir_P_y");
    var _text_percentage = $("#_cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {

        _input_percentage = (_upto / 100) * 382;
        _percentage = (_progress / 100) * 382;

        _text_percentage.html(_progress + '%');

        if (_percentage >= _input_percentage) {

            clearInterval(_sleep);
			//requestFullScreen();
			//window.location.href = "painel/";


			$("#titulo_painelAberturaH1").hide();
			$("#btnPainel").show();
        } else {

            _progress++;

            _cir_progress.attr("stroke-dasharray", _percentage + ',388');
        }
    }
}




function requestFullScreen() {

  var el = document.body;

  // Supports most browsers and their versions.
  var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
  || el.mozRequestFullScreen || el.msRequestFullScreen;

  if (requestMethod) {

    // Native full screen.
    requestMethod.call(el);

  } else if (typeof window.ActiveXObject !== "undefined") {

    // Older IE.
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}


function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {
      document.documentElement.requestFullScreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullScreen) {
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
}
