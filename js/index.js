
var scene = new THREE.Scene( );
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer( );

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( 'resize', function ( )
{
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height );
    camera.aspect = width / height;
    camera.updateProjectionMatrix( );
} );

//controls = new THREE.OrbitControls( camera, renderer.domElement );

//creation du shape
var geometry = new THREE.BoxGeometry( 7,0.5,7);
var cubeMaterials = [
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( "../image/face.png" ), side: THREE.DoubleSide } ), //droite
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( "../image/face.png" ), side: THREE.DoubleSide } ), //gauche
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( "../image/Katro.png" ), side: THREE.DoubleSide } ),//haut
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( "../image/face.png" ), side: THREE.DoubleSide } ),//bas
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( "../image/face.png" ), side: THREE.DoubleSide } ),//devant
    new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( "../image/face.png" ), side: THREE.DoubleSide } )//derriere
];


//creation du materiel
var material = new THREE.MeshFaceMaterial( cubeMaterials );
var cube = new THREE.Mesh( geometry, material );


camera.position.z = 15;
camera.position.x = 0;

cube.position.x = 0;
cube.position.y = -1;
cube.position.z = 0;
cube.rotation.x = 0;
scene.add( cube );

//creation de la table
var tableGeometry = new THREE.BoxGeometry(13, 0.8, 9);
var tableMaterials = new THREE.MeshBasicMaterial( { color: 0x8B4513, wireframe: false } );
var table = new THREE.Mesh( tableGeometry, tableMaterials );

table.position.y = -1.6;
scene.add( table );



        var piedGeometry = new THREE.BoxGeometry( 0.5, 5, 0.5 );
        var piedMat = new THREE.MeshBasicMaterial( { color : 0xA9A9A9, wireframe: false } );
        var pied = new THREE.Mesh( piedGeometry, piedMat );

        pied.position.x = -6;
        pied.position.z = 4;
        pied.position.y = -4.5
        scene.add( pied );

        var piedGeometry = new THREE.BoxGeometry( 0.5, 5, 0.5 );
        var piedMat = new THREE.MeshBasicMaterial( { color : 0xA9A9A9, wireframe: false } );
        var pied = new THREE.Mesh( piedGeometry, piedMat );

        pied.position.x = 6;
        pied.position.z = 4;
        pied.position.y = -4.5
        scene.add( pied );

        var piedGeometry = new THREE.BoxGeometry( 0.5, 5, 0.5 );
        var piedMat = new THREE.MeshBasicMaterial( { color : 0xA9A9A9, wireframe: false } );
        var pied = new THREE.Mesh( piedGeometry, piedMat );

        pied.position.x = 6;
        pied.position.z = -4;
        pied.position.y = -4.5
        scene.add( pied );

        var piedGeometry = new THREE.BoxGeometry( 0.5, 5, 0.5 );
        var piedMat = new THREE.MeshBasicMaterial( { color : 0xA9A9A9, wireframe: false } );
        var pied = new THREE.Mesh( piedGeometry, piedMat );

        pied.position.x = -6;
        pied.position.z = -4;
        pied.position.y = -4.5
        scene.add( pied );


var ambientLight = new THREE.AmbientLight( 0xFFFFFF, 5.0 );
scene.add( ambientLight );


// ajout des pions
function addPion(position, colors) {
    for(let i = 0; i < position.length; i++) {
        var pionGeom = new THREE.CylinderGeometry( 0.2, 0.2, 0.07 );
        var pionMat = new THREE.MeshPhongMaterial( { color: colors } );
        var pion = new THREE.Mesh( pionGeom, pionMat );
        
        pion.position.set( position[i].x, posY, position[i].z ); //(x, y, z)
        
        scene.add( pion );
        //pion.userData.name = 'PION';
        //pion.userData.movable = true;
    }
}

addPion(pos, col1)
addPion(pos2, col2)

//logique du jeu
var update = function ( ) {

};

var render = function ( ) {
    //moveObject();
    renderer.render( scene, camera );
};

//boucle du jeu
var GameLoop = function ( ) {
    requestAnimationFrame( GameLoop );
    update( );
    render( );
};

GameLoop( );