console.log("Register page");
let salon={
    name:"The Fashion Pet",
    address:{
        street:"University",
        number:"758",
        zip:"22569",
        state:"CA",
        city:"San Diego",
    },
    hours:{
        open:"9:00 am",
        close:"20:00 pm",
    },
    pets:[
        
    ]
}
//create a Pet intructor
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
let Scooby=new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","555-555-5555");
console.log(Scooby);

let Brian=new Pet("Brian",40,"Male","Mutt","Friend","Peter","555-555-5555");
console.log(Brian);

let Roger=new Pet("Roger",1600,"Male","Alien","Friend","Stan","555-555-5555");
console.log(Roger);
salon.pets.push(Scooby,Brian,Roger);
console.log(salon.pets);
displayCards(Scooby);
displayCards(Brian);
displayCards(Roger);
//create three pets using the contructor
//get the values from the input
let txtName=document.getElementById("petName"); 
let txtAge=document.getElementById("petAge");
let txtGender=document.getElementById("petGender"); 
let txtBreed=document.getElementById("petBreed");
let txtService=document.getElementById("petService"); 
let txtOwner=document.getElementById("ownerName");
let txtPhone=document.getElementById("ownerPhone"); 

function register(){
    console.log(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,);
    //create the contructor using th values from the input
    let newPet= new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,)
    //push itinto the array
    salon.pets.push(newPet)
    //display the pet on the console
    console.log(salon.pets)
    //clear the inputs
    displayCards(newPet);
    clear();
}

function clear(){
    txtName.value = '';
    txtAge.value = '';
    txtGender.value = '';
    txtBreed.value = '';
    txtService.value ='';
    txtOwner.value = '';
    txtPhone.value = '';

    

}

function simpleDisplay(){
    //dispaly scooby on the console   
}
simpleDisplay();