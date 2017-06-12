$(document).ready(function(){


  
	$("#get-quote").on("click", function(event){

		// Prevents the button from opening a new link
		event.preventDefault();

		$.ajax({

			url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
			success: function(data){



					$(".author").fadeOut("slow");
					$(".quote").fadeOut("slow", function(){


						$("body").animate({

							// Background color will be random every time the button is clicked
        					backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
      						}, {
      						queue: false
      					});


						applyQuote(data[0].content, "- " + data[0].title);

						$(".quote").fadeIn({
							duration: 400,
							queue: false
						});


						$(".author").fadeIn({
							duration: 400,
							queue: false
						});

					});
				
			},

		cache: false

		});

    });

});


function applyQuote(quote, author){
	$(".quote").html(quote);
	$(".author").html(author);
	quote = quote.replace("</p>", "");
	quote = quote.replace(" </p>", "");
	quote = quote.replace("<p>", "");

	$("#twitter-link").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote));
}

function animateQuote(data){
	
}





