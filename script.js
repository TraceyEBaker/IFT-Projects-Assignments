console.log('It works')

$(document).ready(function(){
	$('.submit').click(function(event){ //if the button is clicked, that click will be logged
		console.log('Clicked button')
		
		var name = $('.name').val()//ensures name contains correct value
		var email = $('.email').val()//ensures email contains correct value
		var subject = $('.subject').val()//ensures subject contains correct value
		var message = $('.message').val()//ensures message contains correct value
		var statusElm = $('.status') //ensures status contains correct value
		statusElm.empty()
		
		if(name.length > 5){
			statusElm.append('<div>Name is valid</div>')//name must contain at least 5 letts, or will be deemed invalid
		}
		else{
			event.preventDefault() //prevents the form from submitting unless a valid entry has been made 
			statusElm.append('<div>Name is not valid</div>')
		}
		
		if(email.length > 5 && email.includes('@') && email.includes('.')){
			statusElm.append('<div>Email is valid</div>') //email must contain at least 5 characters, the @ symbol and a period, or will be deemed invalid
		}
		else{
			event.preventDefault()//prevents the form from submitting unless a valid entry has been made
			statusElm.append('<div>Email is not valid</div>')
		}
		
		if(subject.length >= 2){
			statusElm.append('<div>Subject is valid</div>') //subject of message must contain at least two characters, or will be deemed invalid
		}
		else{
			event.preventDefault()//prevents the form from submitting unless a valid entry has been made
			statusElm.append('<div>Subject is not valid</div>')
		}
		
		if(message.length > 10){
			statusElm.append('<div>Message is valid</div>') //message must contain at least 10 characters or will be deemed invalid
		}
		else{
			event.preventDefault()//prevents the form from submitting unless a valid entry has been made
			statusElm.append('<div>Message is not valid</div>')
		}
	})
})
		
		