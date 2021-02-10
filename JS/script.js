window.addEventListener('scroll',function(){
    		var header = document.querySelector('header');
    		header.classList.toggle('sticky',window.scrollY>0);
    	});

    	function toggle(){
    		var menuToggle= document.querySelector('.toggle');
    		var menu= document.querySelector('.menu');
    		menuToggle.classList.toggle('active');
    		menu.classList.toggle('active');
    	}
    	 const scriptURL = 'https://script.google.com/macros/s/AKfycbw6LoTetpmmaX3ZtPbARG-l-H9ujUiv6Aiz4xMJa8Zg7ytbuLeN/exec'
            const form = document.forms['contactme']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => window.open('success.html','_self'))
                .catch(error => console.error('Error!', error.message))

             document.getElementById("contact-form").reset();
            })