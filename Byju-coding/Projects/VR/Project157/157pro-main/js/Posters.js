AFRAME.registerComponent("comics-posters", {
  init: function() {
    this.postersContainer = this.el;
    this.poster();
  },
   poster: function () {
        const thumbNailsRef = [
          {
            id: "superman",
            url: "./assets/posters/superman-poster.jpg"
          },
          {
            id: "spiderman",
            url: "./assets/posters/spiderman-poster.jpg"
          },
          
          {
            id: "captain-aero",
            url: "./assets/posters/captain-aero-poster.jpg"
          },
          {
            id: "outer-space",
            url: "./assets/posters/outer-space-poster.jpg"
          }
          ];
        prevoiusXPosition = -60;
    
        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          const borderEl = this.createBorders(position, item.id)
          
          const imageEl = this.createImages(item)
          borderEl.appendChild(imageEl)
      
          this.postersContainer.appendChild(borderEl);
        }
      },
      createBorders:function(position, id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id", id)    
        entityEl.setAttribute("visible", true)  
        entityEl.setAttribute("geometry", {primitive:"plane", width:22, height:40})
        entityEl.setAttribute("position", position)
        entityEl.setAttribute("material", {color:"#0077cc", opacity:1})
        return entityEl            
      },
    
      createImages:function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible", true)  
        entityEl.setAttribute("geometry", {primitive:"plane", width:20, height:28})
        entityEl.setAttribute("material", {src:item.url})
        entityEl.setAttribute("position",{x:0, y:5, z:0.1})
        return entityEl            
      },
    });

