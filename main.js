var container, camera, renderer, scene, crate;

function setup(){
    container = document.querySelector(".scene");
    scene = new THREE.Scene();
    
    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight;
    const clipping = {
        near: 0.01,
        far: 500
    };

    camera = new THREE.PerspectiveCamera(fov, aspect, clipping.near, clipping.far);
    camera.position.set(0, 0, 20);
    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load("3d/scene.gltf", (gltf) => {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    });
};

setup();