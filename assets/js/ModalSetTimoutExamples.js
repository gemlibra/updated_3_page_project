/*JQUERY */

  $(document).ready(function() {
            // Set a timeout to show the modal after 3 seconds (3000 milliseconds)
            setTimeout(function() {
                $('#myTimedModal').modal('show');
            }, 3000);
        });



/* JAVASCRIPT
—————————————————————————
 */

document.addEventListener('DOMContentLoaded', function() {
      const modal = document.getElementById('myModal');
      const closeButton = document.querySelector('.close-button');

      // Function to show the modal
      function showModal() {
        modal.style.display = 'block';
      }

      // Function to hide the modal
      function hideModal() {
        modal.style.display = 'none';
      }

      // Set a timeout to show the modal after 3 seconds (3000 milliseconds)
      setTimeout(showModal, 3000);

      // Event listener to close the modal when the close button is clicked
      closeButton.addEventListener('click', hideModal);

      // Event listener to close the modal when clicking outside the content
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          hideModal();
        }
      });
    });



///* PHP */
//<script>. 
//$(window).load(function(){
//   setTimeout(function(){
//       $('#myModal').modal('show');
//   }, 5000);
//});
//</script>

 

