AFRAME.registerComponent('car',{
    schema:{
      moveX:{type:"string",default:"./assets/car/scene.gltf"}  
    },
    tick:function(){
      this.el.setAttribute("gltf-model", this.data.moveX);
      const position = { x: 0, y: 50, z: 80 };
      const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
    }
}) 

