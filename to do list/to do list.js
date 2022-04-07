function newElement(){
    var li = document.createElement("li");
    var myInput=document.querySelector("input").value;
    var t =document.createTextNode(myInput);
    li.appendChild(t);
    var myUL = document.querySelector('ul');
    if (myInput ===''){
        alert('add an item to your to-do-list !');
    }else{
        myUL.appendChild(li);
    }
    document.querySelector('input').value='';

    var close= document.createElement('span');
    var txt=document.createTextNode('\u00D7');
    close.className='close';
    close.appendChild(txt);
    li.appendChild(close);

    close.addEventListener('click',function(){
        this.parentElement.style.display='none';
    })
}

var elements = document.querySelector('ul');
 elements.addEventListener('click', (e)=>{
if(e.target.tagName==='LI') {
    e.target.classList.toggle("checked");

}
});




var list = document.getElementsByTagName("LI");
var i ;
for ( i=0 ;i< list.length ;i++){
    var close = document.createElement('SPAN');
    var t=document.createTextNode('\u00D7');
    close.className="close";
     close.appendChild(t);
    list[i].appendChild(close);


/*
var closeI = document.querySelector('li');
closeI.addEventListener('click',(e)=>{
    if(e.target.tagName=== 'SPAN'){
          e.style.display ='none' ;
    }
})*/

var close = document.getElementsByClassName('close');
var i;
for (i=0 ; i < close.length ; i++ )
{
    close[i].onclick= function() {
        var li = this.parentElement;
        li.style.display='none';
    }
}


/*
var myNodes =document.getElementsByTagName('ul')
var i ;
for(i=0 ; i< myNodes.children.length;i++) {
    var span = document.createElement('SPAN');
    var txt =document.createTextNode('\u00D7');
    span.appendChild(txt);
    span.className='close';
    myNodes[i].children.appendChild(span);*/
}