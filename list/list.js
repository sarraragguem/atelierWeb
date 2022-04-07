function changerCouleur(ligne) {
    ligne.style.color=('#'+(Math.random()*0xFFFFFF<<0).toString(16)) ;
    }
    
    const li = document.querySelectorAll("li");
    console.log(li[0].style);
    
    [a,b,c,d]=li;
    console.log(a);
    
     a.onclick = ()=>{ 
        changerCouleur(a);
    } 
    
    b.onclick = ()=>{ 
        changerCouleur(b);
    } 
    
    c.onclick = ()=>{ 
        changerCouleur(c);
    } 
    
    d.onclick = ()=>{ 
        changerCouleur(d);
    } 

    