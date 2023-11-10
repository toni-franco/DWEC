(() => {

    const ingredients = {
        pasta: 'melissa',
        mincedMeat:"beef",
        sauce:"tomato"
    };

    const texts = {
        cookPasta: "Estoy cocinando pasta",
        boilPasta: "Estoy herviendo pasta",
        drainPasta: "Estoy escurriendo la pasta",
        addButter:"Agregando mantequilla",
        putOnPlate:"Sirviendo en el plato",
        cookMincedMeat: "la carne se cocinará",
        defreezeMeat: "la carne picada se descongela",
        chopOilMeat: "Picar y poner aceite a la carne"
   }
    
    const createChildElement = (text) => {
       let childEl = document.createElement('div');
       childEl.innerText = text;
       document.getElementById('food-container').appendChild(childEl);
    }
    
    const cookPasta = (ingredients,callback) => {
        if (typeof callback === 'function') 
            callback(ingredients);
    }
    
    const boilPasta = (pasta, callback) => {
        if (typeof callback === 'function') 
           console.log(texts.boilPasta);
           createChildElement(texts.boilPasta);
            callback(pasta);
    }
    
     const drainPasta = (pasta, callback) =>{
        if (typeof callback === 'function') 
           console.log(texts.drainPasta);
           createChildElement(texts.drainPasta);
           callback(pasta);
    }
    
     const addButter = (pasta, callback) => {
        if (typeof callback === 'function') 
             console.log(texts.addButter);
                createChildElement(texts.addButter);
             callback(pasta);
    }
    
     const putOnPlate = (food) =>{
            createChildElement(texts.putOnPlate);
    }
    
    const cookMincedMeat = (meat, callback) => {
          if (typeof callback === 'function') 
             console.log(texts.cookMincedMeat);
                createChildElement(texts.cookMincedMeat);
             callback(meat);
    }
    
    const defreezeMeat = (mincedMeat, callback) =>{
     if (typeof callback === 'function') 
             console.log(texts.defreezeMeat);
                createChildElement(texts.defreezeMeat);
             callback(mincedMeat);
    }
    
    const chopOilMeat = (defrozen, callback) =>{
        if (typeof callback === 'function')
           console.log(texts.chopOilMeat);
           createChildElement(texts.chopOilMeat);
           callback(defrozen)
    }
    
    const cook = ((ingredients)=>{

            boilPasta(ingredients.pasta, (pasta) => {
                drainPasta(pasta, (drainedPasta) => {
                    addButter(drainedPasta, (butteredPasta)=>{
                        putOnPlate(butteredPasta)
                    })
                })
            })
    
            cookMincedMeat(ingredients.mincedMeat, (mincedMeat)=>{
                defreezeMeat(mincedMeat, (defrozen)=>{
                    chopOilMeat(defrozen, (cookedMeat)=>{
                      putOnPlate(cookedMeat)
                    })
                })
            })
    })
    
    
    cookPasta(ingredients, cook);
    
    })()
