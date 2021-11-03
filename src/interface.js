window.addEventListener('load', (event) => {
   setTimeout(closePreloader, 1000)
});

function openPreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.visibility = "visible";
}

function closePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.visibility = "hidden";
}


function toggleInfo() {
    let toggle = document.getElementById('containerInfo');
   
    if(toggle.style.right === "-552px"){
        toggle.style.right = "8px";
    }
    else{
        toggle.style.right = "-552px";
    }        
}