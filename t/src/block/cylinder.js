import BaseBlock from './base'
import blockConf from '../../confs/block-conf'

export default class Cylinder extends BaseBlock {
  constructor (x, y, z, type, width) {
    super('cylinder')
    const size = width || this.width
      
    if (type == 'color') {
       
        let currentColor
        const seed = Math.floor(Math.random() * 6)
        switch (seed) {
          case 0:
            currentColor = blockConf.colors.orange
            break
          case 1:
            currentColor = blockConf.colors.orangeDark
            break
          case 2:
            currentColor = blockConf.colors.green
            break
          case 3:
            currentColor = blockConf.colors.blue
            break
          case 4:
            currentColor = blockConf.colors.yellow
            break
          case 5:
            currentColor = blockConf.colors.purple
            break
          default:
        }
        const innerMaterial = new THREE.MeshLambertMaterial({ color: blockConf.colors.white })
        const outerMaterial = new THREE.MeshLambertMaterial({ color: currentColor })
  
        const innerHeight = 3
        const outerHeight = (blockConf.height - innerHeight) / 2
        const outerGeometry = new THREE.CylinderGeometry(size / 2, size / 2, outerHeight, 120)
        const innerGeometry = new THREE.CylinderGeometry(size / 2, size / 2, innerHeight, 120)
  
        const totalMesh = new THREE.Object3D()
        const topMesh = new THREE.Mesh(outerGeometry, outerMaterial)
        topMesh.position.y = (innerHeight + outerHeight) / 2
        topMesh.receiveShadow = true
        topMesh.castShadow = true
        const middleMesh = new THREE.Mesh(innerGeometry, innerMaterial)
        middleMesh.receiveShadow = true
        middleMesh.castShadow = true
        const bottomMesh = new THREE.Mesh(outerGeometry, outerMaterial)
        bottomMesh.position.y = -(innerHeight + outerHeight) / 2
        bottomMesh.receiveShadow = true
        bottomMesh.castShadow = true
        totalMesh.add(topMesh)
        totalMesh.add(middleMesh)
        totalMesh.add(bottomMesh)
        this.instance = totalMesh
    }

    this.instance.name = 'block'
    // if (type == 'popup') {
    //   this.popup()
    // } else if (type == 'show') {
    this.x = x
    this.y = y
    this.z = z
      this.instance.position.x = this.x
      this.instance.position.y = this.y
      this.instance.position.z = this.z
    // }
  }
}