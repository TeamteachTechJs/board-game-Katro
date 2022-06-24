const pointer = new THREE.Vector2( );
const raycaster = new THREE.Raycaster( );
var movable = new THREE.Object3D( );

window.addEventListener('click', event => 
{
    if (movable) {
        console.log('Canceled');
        movable = null;
        return;
    }
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientX / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera( pointer, camera );
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0 && intersects[0].object.userData.name == 'PION' && intersects[0].object.userData.movable ) {
        movable = intersects[0].object;
        intersects[0].object.material.transparent = true;
        intersects[0].object.material.opacity = 1;
        console.log(intersects[0].object.userData.name);
    }
});

window.addEventListener('mousemove', event => {
    pointer.x = (event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = -(event.clientX / window.innerHeight) * 2 + 1;
})

function moveObject() {
    if (movable != null) {
        raycaster.setFromCamera(pointer,camera)
        const found = raycaster.intersectObjects(scene.children)
        if (found.length>0){
            for (let o of found) {
                if (!o.object.userData.ground) 
                continue;

                movable.position.x = o.point.x
                movable.position.z = o.point.z
            }
        }
    }
}