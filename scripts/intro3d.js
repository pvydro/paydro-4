import { GLTFLoader } from './gltf.js'
import * as THREE from './three.module.js'

var camera = new THREE.PerspectiveCamera(1, window.innerWidth / window.innerHeight, 0.1, 1000)
var introModel = undefined
var scene = new THREE.Scene()
var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
})
var rotationSpeed = 1
var targetRotationSpeed = 0.001
var baseXRotation = 0.5
var targetRotationX = baseXRotation 
var targetTargetRotationX = baseXRotation 
var spunUpRotationSpeed = 0.06
var expandIntroModel = false
var targetPos = { x: 0, y: 0 }

var isSpinningUp = false
var spinningUpTimeout
var isScrolling = false
var scrollDisableTimer

var transitionedToBottom = false
var bottomCogScale = 0.3
var cogScale = 1
var targetCogScale = cogScale
var raycaster = new THREE.Raycaster()
var bottomCorner = new THREE.Vector2(1, -1)
var bottomCornerPoint = new THREE.Vector3(0, 0, 0)
var plane = new THREE.Plane().setFromNormalAndCoplanarPoint(new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, 1))

var intro3d = (() => {
    renderer.domElement.id = 'interdimensions'
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    createIntroModel()
    animateIntroModel()

    function animateIntroModel() {
        requestAnimationFrame(animateIntroModel)
        if (introModel !== undefined) {
            // Spinning ring
            introModel.rotation.y += rotationSpeed
            rotationSpeed += (targetRotationSpeed - rotationSpeed) / 40

            if (expandIntroModel) {
                introModel.scale.y += (1 - introModel.scale.y) / 40
            }

            if (isSpinningUp) {
                targetRotationSpeed += (spunUpRotationSpeed - targetRotationSpeed) / 10
            } else {
                targetRotationSpeed += (0.001 - targetRotationSpeed) / 20
            }

            targetRotationX += (targetTargetRotationX - targetRotationX) / 150
            
            introModel.rotation.x += (targetRotationX - introModel.rotation.x) / 25

            // Transitioning to bottom
            if (transitionedToBottom) {
                // Update position
                targetRotationX = 1.2
                targetPos.x += (bottomCornerPoint.x - targetPos.x) / 10
                targetPos.y += (bottomCornerPoint.y - targetPos.y) / 40
                introModel.position.x += (targetPos.x - introModel.position.x) / 15
                introModel.position.y += (targetPos.y - introModel.position.y) / 20
            
                // Update scale
                targetCogScale += (bottomCogScale - targetCogScale) / 30
                cogScale += (targetCogScale - cogScale) / 40
                introModel.scale.set(cogScale, cogScale, cogScale)

                fixCanvasToTop()
            }

        }
        renderer.render(scene, camera)
    }

    function createIntroModel() {
        var loader = new GLTFLoader()
    
        loader.load('../assets/3d/cog/cog.gltf', (gltf) => {
            introModel = gltf.scene
            introModel.rotation.x = 0.5
            introModel.scale.y = 4
            setTimeout(() => { expandIntroModel = true }, 250)

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
            
            
            $(document).on('mousemove', (e) => {
                var centerX = window.innerWidth * 0.5;
                var centerY = window.innerHeight * 0.5;
                var tol = 6
                var distX = (e.clientX - centerX) / (centerX * tol)
                var distY = (e.clientY - centerY) / (centerY * tol)

                //targetRotationZ += (distX - targetRotationZ) / 50
                targetTargetRotationX = baseXRotation + distY
            })

            $(document).on('scroll', (e) => {
                isScrolling = true
                triggerScrollDisableTimer()

                if (!isSpinningUp) {
                    console.log('spin up!')
                    isSpinningUp = true
                    spinningUpTimeout = window.setTimeout(() => {
                        isSpinningUp = false
                    }, 500)
                } else {
                    if (spinningUpTimeout) {
                        window.clearTimeout(spinningUpTimeout)
                    }
                    spinningUpTimeout = window.setTimeout(() => {
                        isSpinningUp = false
                    }, 100)
                }

                // Bringing to bottom
                if (!transitionedToBottom) {
                    const topBreakPoint = window.innerHeight - (window.innerHeight * 0.6)
                    if ($(window).scrollTop() > topBreakPoint) {
                        var box = new THREE.Box3().setFromObject(introModel)
                        transitionedToBottom = true
                        raycaster.setFromCamera(bottomCorner, camera)
                        raycaster.ray.intersectPlane(plane, bottomCornerPoint)
                        bottomCornerPoint.y += 0.6
                        bottomCornerPoint.x -= 0.6

                        triggerInterdimensionalTimingChange(1000, 750)
                        // window.setTimeout(() => {
                        //     triggerInterdimensionalTimingChange()
                        //     
                        // }, 2000)
                    }
                }
            })
                
        }, undefined, (e) => {
            console.error(e)
        })
    

        var ambientLight = new THREE.AmbientLight(0x999999)
        scene.add(ambientLight)

        camera.position.set(0, 0, 400)
    }

    function triggerInterdimensionalTimingChange(time, subtime) {
        console.log('check')
        window.setTimeout(() => {
            if (!isScrolling) {
                console.log('notscrolling')
                $('#interdimensions').css('transition-timing-function', 'cubic-bezier(.74,0,.48,1.01)')
            } else {
                triggerInterdimensionalTimingChange(subtime, subtime / 2)
            }
        }, time)
    }

    function fixCanvasToTop() {
        const canvas = $('#interdimensions')

        const scrollAmt = $(window).scrollTop()
        canvas.addClass('stuck-at-bottom')
        canvas.css({
            top: scrollAmt
        })

        if (isScrolling && !canvas.hasClass('scrolling')) {
            canvas.addClass('scrolling')
        } else if (!isScrolling && canvas.hasClass('scrolling')) {
            canvas.removeClass('scrolling')
        }
    }

    function triggerScrollDisableTimer() {
        if (scrollDisableTimer) {
            window.clearTimeout(scrollDisableTimer)
        }

        scrollDisableTimer = window.setTimeout(() => {
            isScrolling = false
        }, 1000)
    }
})

export { intro3d }