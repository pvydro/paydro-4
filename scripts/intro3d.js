// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// // var GLTFLoader = require('three/examples/jsm/loaders/GLTFLoader.js')
// var scene = new THREE.Scene()
// var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
// var renderer = new THREE.WebGLRenderer({ alpha: true })
// var introModel

// $(document).ready(() => {
//     renderer.domElement.id = 'interdimensions'
//     renderer.setSize( window.innerWidth, window.innerHeight )
//     document.body.appendChild( renderer.domElement )
    
//     createIntroModel()
//     animateIntroModel()
// })

// function createIntroModel() {
//     // var geometry = new THREE.BoxGeometry()
//     // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )

//     // introModel = new THREE.Mesh( geometry, material )

//     // scene.add(introModel)

//     var loader = new THREE.GLTFLoader()

//     loader.load('../3d/cog/cog.gltf', function ( gltf ) {
//         introModel = gltf.scene
//         scene.add(gltf.scene)
//     }, undefined, function ( error ) {
//         console.error( error )
//     } )

//     camera.position.z = 5
// }

// function animateIntroModel() {
//     requestAnimationFrame(animateIntroModel)
//     if (introModel !== undefined) {
//         introModel.rotation.x += 0.01
//         introModel.rotation.y += 0.01
//     }
//     renderer.render(scene, camera)
// }

import { GLTFLoader } from './gltf.js'
import * as THREE from './three.module.js'//'../three.js'

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
var introModel = undefined
var scene = new THREE.Scene()
var renderer = new THREE.WebGLRenderer({ alpha: true })

var intro3d = (() => {
    renderer.domElement.id = 'interdimensions'
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    createIntroModel()
    animateIntroModel()

    function animateIntroModel() {
        requestAnimationFrame(animateIntroModel)
        if (introModel !== undefined) {
            // introModel.rotation.x += 0.01
            introModel.rotation.y += 0.001
        }
        renderer.render(scene, camera)
    }

    function createIntroModel() {
        var loader = new GLTFLoader()
    
        loader.load('../assets/3d/cog/cog.gltf', (gltf) => {
            console.log('loaded cog')
            // gltf.material.color.setHex(0xff0000)
            // gltf.material.needsUpdate = true
            introModel = gltf.scene
            introModel.rotation.x = 0.5

            // var newMaterial = new THREE.MeshStandardMaterial({color: 0xffffff})
            // introModel.traverse((o) => {
            //     if (o.isMesh) o.material = newMaterial
            // })

            var newMaterial = new THREE.MeshPhongMaterial({
                color: 0xffffff,
                wireframe: true,
                side: THREE.DoubleSide
            })

            introModel.traverse((o) => {
                if (o.isMesh) o.material = newMaterial
            })


            var lights = [];
            lights[0] = new THREE.DirectionalLight(0xffffff, 1)
            lights[0].position.set(1, 0, 0)
            lights[1] = new THREE.DirectionalLight(0x11E8BB, 1)
            lights[1].position.set(0.75, 1, 0.5)
            lights[2] = new THREE.DirectionalLight(0xba6ee0, 1)
            lights[2].position.set(-0.75, -1, 0.5)
            scene.add(lights[0])
            scene.add(lights[1])
            scene.add(lights[2])
            
            scene.add(introModel)            
        }, undefined, (e) => {
            console.error(e)
        } )

        // Light
        // var light1 = new THREE.PointLight(0xffffff, 0.5, 100)
        // var light2 = new THREE.PointLight(0xffffff, 1, 100)
        // light.position.set( 50, 50, 50 )
        // light1.position.set(18, 8, 5)
        // light1.position.set(0, 65, 0)
        // light2.position.set(0, -8, 0)
        // scene.add(light1)
        // scene.add(light2)
    

        var ambientLight = new THREE.AmbientLight(0x999999 );
        scene.add(ambientLight);

        camera.position.set(0, 0, 5)
    }
})

export { intro3d }