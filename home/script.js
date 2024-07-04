function FichaOrdemTormenta(){
    const sistemasRpg = document.getElementById("fichasSistemas")
    const fichaMostrar = document.querySelectorAll(".js-fichas-hide");
    
    function activeVisible(event){
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle("ativo");        
    }

    
}



FichaOrdemTormenta()
