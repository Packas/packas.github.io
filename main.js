var container, camera, renderer, scene, crate;
console.log('Hello World');

function setup(){
    container = document.querySelector("./scene");
    scene = new THREE.Scene();
    
    const fov = 35;
    const aspect = window.innerWidth/window.innerHeight;
    const clipping = {
        near: 0.01,
        far: 500
    };
    console.log(fov, aspect, clipping.far, clipping.near);
    


};

setup();