var Modal=( function (){
    function Modal(options){
        var myModal = document.getElementById(options.el);
        myModal.style.display = 'block';

        var modalDialog = util.first(myModal);
        modalDialog.style.width = (options.width? options.width :600) +'px';
        modalDialog.style.height = (options.height? options.height :300) +'px';

    }

    
    return Modal;
    

})();

var 