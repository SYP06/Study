// 3.getElementsByClassName:通过元素的class来获取元素（该方法在ie8和之前的浏览器不支持
        //封装自己的getElementsByClassName 方法
        /*
        * @param className 要查找的类的名称
        * @param tagName 限定的标签名称
        * @param context 搜索的上下文（搜索范围）
        */
       //elements = [],定义一个空数组名叫elements
       function getClassName(className,tagName,context){
        var elements = [];
        context = contex || document;
    //先检测当前浏览器是否支持getElementsByClassName，如果支持直接调用，否则调用后面自己的方法
        
        if( document.getElementsByClassName){
            document.getElementsByClassName(className);
        } else{
           var arr = context.getElementsByTagName(tagName);
           for (var i=0 ; i<arr.length; i++){
               //需要引入正则处理
               if(arr[i].className==className){
                   elements.push(arr[i]);
               }
           }
        }
        return elements;
        

    }
     var aLi = oUl1.getElementsByClassName('item','li',oUl1);
     for(var i=0; i < aLi.length; i++){
        aLi[i].style.background = 'red';
    }