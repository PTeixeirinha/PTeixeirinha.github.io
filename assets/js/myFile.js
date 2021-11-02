


function showAssign(id){
    document.getElementById("assign1Diogo").style.display = "none";
    document.getElementById("assign1Pedro").style.display = "none";
    document.getElementById("assign1Boucho").style.display = "none";
    document.getElementById("assign1Filipe").style.display = "none";
    if(id == 1){
        document.getElementById("assign1Diogo").style.display = "block";
    }else if(id == 2){
        document.getElementById("assign1Pedro").style.display = "block";
    }else if(id == 3){
        document.getElementById("assign1Boucho").style.display = "block";
    }else if(id == 4){
        document.getElementById("assign1Filipe").style.display = "block";
    }
	
}

