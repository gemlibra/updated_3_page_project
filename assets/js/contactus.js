
/* SHOW & HIDE MODAL (POPUP)*/
const myModal = document.getElementById("mymodal"); // get modal from page.
const closeModal = document.getElementById("closebtn"); // Get close button 'X'
const submitBtn = document.getElementById("submitbtn");

/* Show & Hide Modal => This function will be triggered by form submit button and
 * Search buttons  */

submitBtn.addEventListener('click', function() {
	function submitFormData() {
		//process form data here, then call showModal outside this function.
	}
});


/* NOTE: showModal also contains the function to hid modal,
 * therefore, after form submission, Call showmodal function and also hide the modal after after 3 seconds.
 *  */
showModal();


function showModal(){
	setTimeout(function() {
		myModal.style.display = 'block';
	}, 1000);
		
	setTimeout(function() {
		myModal.style.display = 'none';
	}, 4000);
}


closeModal.addEventListener('click', function(){
	//myModal.close();  //OR
	
	myModal.style.display = 'none';
	
 	//$('myModal').hide();
});



