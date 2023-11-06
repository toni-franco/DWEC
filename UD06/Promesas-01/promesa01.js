(() => {
    const ingredients = {
        pasta: 'melissa',
        mincedMeat: "beef",
        sauce: "tomato"
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
       document.getElementById("food-container").appendChild(childEl);
      
    }

    const boilPasta = (pasta) => {
        return new Promise((resolve, reject) => {
            console.log(texts.boilPasta);
            createChildElement(texts.boilPasta);
            resolve(pasta);
        });
    }

    const drainPasta = (pasta) => {
        return new Promise((resolve, reject) => {
            console.log(texts.drainPasta);
            createChildElement(texts.drainPasta);
            resolve(pasta);
        });
    }


    const addButter = (pasta) => {
        return new Promise((resolve, reject) => {
            console.log(texts.addButter);
            createChildElement(texts.addButter);
            resolve(pasta);
        });
    }


    const putOnPlate = (food) => {
        return  new Promise((resolve, reject) => {
            console.log(texts.putOnPlate);
            createChildElement(texts.putOnPlate);
            resolve(food);
        });
    }

    const cookMincedMeat = (meat) => {
        return new Promise ((resolve, reject) => {
            console.log(texts.cookMincedMeat);
            createChildElement(texts.cookMincedMeat);
            resolve(meat);
        });
    }
   

    const defreezeMeat = (meat) => {
        return new Promise ((resolve, reject) => {
            console.log(texts.defreezeMeat);
            createChildElement(texts.defreezeMeat);
            resolve(meat);
        });
    }

    const chopOilMeat = (meat) => {
        return new Promise ((resolve, reject) => {
            console.log(texts.chopOilMeat,);
            createChildElement(texts.chopOilMeat);
            resolve(meat);
        });
    }
    

    const cookPasta = (ingredients) => {
        return boilPasta(ingredients.pasta)
        .then(boiledPasta => drainPasta(boiledPasta))
        .then(drainedPasta=> addButter(drainedPasta))
        .then(butteredPasta => putOnPlate(butteredPasta))
        .then(()=> cookMincedMeat(ingredients.mincedMeat))
        .then(mincedMeat => defreezeMeat(mincedMeat))
        .then(defrozenMeat => chopOilMeat(defrozenMeat))
        .then(chopedMeat => putOnPlate(chopedMeat))   
    }
   
   
    cookPasta(ingredients);
})()        
    