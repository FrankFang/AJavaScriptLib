var fj = {
    developing : true,
    init: function() {
        
    }
}

fj.dom = {
    lastSibling:function(node){},
    firstSibling:function(node){},
    previousSibling:function(node){},
    nextSibling:function(node){},

    getText:function(node){},
    setText:function(node,text){},
    
    createTextElement:function(tagName,text){},
    createLink:function(href, text){}
}
fj.event = {
    getKeyCode:function(e){},
    getTarget:function(e){},
    stopBubble:function(e){},
    preventDefault:function(e){},
    add:function(node,eventType,fn){}
}
fj.css = {
    swap:function(node,oldCssClass,newCssClass){},
    add:function(node,cssClass){},
    remove:function(node,cssClass){},
    check:function(node,cssCLass){}
}
fj.develop = {
    init:function(){
        if(!fj.developing){
            return
        }
        fj.event.add(window,'error',function(e){
            var event = fj.event.getTarget(e)
            try{
                console.log('error: '+event)
            }catch(){
                
            }finally{
                return
            }
        })
    }
}
void function(){
    fj.init();
}()