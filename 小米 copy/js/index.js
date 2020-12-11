
(function(){
    var oBtnLogin = document.getElementById('btn-login');
    oBtnLogin.onclick = function(){
        new Modal({
            width:400,
            el : 'mymodal1'
        });
        return false;
    };

    var oMyModal1 = document.getElementById('mymodal1')
    oMyModal1.onclick = function(){
        oMyModal1.style.display = 'none';
        return false;
       
    }
    
})()