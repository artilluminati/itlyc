


function filter(){
    if(document.getElementById("ps").checked == true){
        var divsToHide = document.getElementsByClassName("ps");

    for(var i = 0; i < divsToHide.length; i++)
    {
    divsToHide[i].style.display = 'flex';
    }
    }
    else{
        var divsToHide = document.getElementsByClassName("ps");

    for(var i = 0; i < divsToHide.length; i++)
    {
    divsToHide[i].style.display = 'none';
    }
    }
}