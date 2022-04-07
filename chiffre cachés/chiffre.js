function play(){
    let c = Math.random()*10;
    var  i=0;
    var  luck=false;
    var d = document.querySelector("select").value;
    alert("jouons!")
    do{
        var e = prompt("devinez le chiffre:)");

        i++;
        if (c==e) luck=true;
    }while((i<d)&&(luck===false))

    if (luck===true){
        alert("vous avez gagné!");
    }
    else{
        alert ("encore une fois !");
        var y =confirm("voulez-vous vraiment jouer ?")
        if (y){
        let text = document.querySelector("button");
        text.textContent= "réessayer";
        }
    }
}
