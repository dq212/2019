    //Get modal element
    var modal = document.getElementById('simpleModal');

    // //Get open modal button
    var modalBtn = document.getElementById('modalBtn');
    // //Get close button
    var closeBtn = document.getElementsByClassName('closeBtn')[0];

    var modalContent = document.getElementById('modalBodyCopy');
    
    // //Listen for click
    // modalBtn.addEventListener('click', openModal);

    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', clickOutside);

    // //Function to open modal
    function openModal(e, txt="") {
        var str = txt;
        // modal.style.display = 'block';
        $('#simpleModal').show();
       
        modalContent.innerHTML = str;
      
        }
    
    function closeModal() {
        // console.log(123);
        // modal.style.display = 'none';
        $('#simpleModal').hide();
    }

    function clickOutside(e) {
        if (e.target == modal)
        // modal.style.display = 'none';
        $('#simpleModal').hide();
    }