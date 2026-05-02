//task1
let student = {
    studentID: 12345,
    studentName: "John Doe",
    Age: 20,
    contact:{
        email:"john.doe@example.com",
        phone:"123-456-7890" 
    },
    address:{
        city:"mysore",
        state:"karnataka",  
        pincode:"570001"
    }
};
let {studentID,studentName, Age,contact:{email, phone}, address:{city, state, pincode}} = student
console.log(studentID); 
console.log(studentName);
console.log(Age);
console.log(email);
console.log(phone);
console.log(city);
console.log(state);
console.log(pincode);

// task2
// let product={
//     productid:123,
//     productname:"laptop",
//     price:1000,
//     specifications:{
//         brand:"dell",
//         ram:"16GB",
//         storage:"512GB SSD"
//     },
//     seller:{
//         name:"bestbuy",
//         loc:"mysore"
//     }
// };
// console.log(product.productid);
// console.log(product.productname);
// console.log(product.price);
// console.log(product.specifications.brand);
// console.log(product.specifications.ram);
// console.log(product.specifications.storage);
// console.log(product.seller.name);
// console.log(product.seller.loc);


// task3
// let car={
//     carId:301,
//     model:"create"
//     brand:"toyota",
//     engine:{
//         type:"petrol",
//         horsepower:150
//     },
//     owner:{
//         name:"john",
//        address:{
//         city:"chennai",
//         state:"tamilnadu",
        
//        }
//     },
// };
// console.log(car.carId);
// console.log(car.model);
// console.log(car.brand);
// console.log(car.engine.type);
// console.log(car.engine.horsepower);
// console.log(car.owner.name);
// console.log(car.owner.address.city);
// console.log(car.owner.address.state);

// task5
let school={
    schoolname:"national public school",
    principal:"mr. smith",
    classes:{
        class10:{
        sectionA:{
            teacher:"ms. johnson",
            students:30
    }
}
},
address:{
    city:"banglore",
    state:"karnataka",
}
};
console.log(school.schoolname);
console.log(school.principal);
console.log(school.classes.class10.sectionA.teacher);
console.log(school.classes.class10.sectionA.students);
console.log(school.address.city);
console.log(school.address.state);

    
// // task6
// let student={
//     stdId:101,
//     stdNmae:"john",
//     stdaddress:{
//         street:"123",
//         area:"TK Layout",
//         city:"mysore",
//         state:"karnataka",
//         pincode:"570001"
//     },
//     subjects:["Java","Python","Sql","Html","Css",  "web"]
// }
// console.log(student.stdId);
// console.log(student.stdNmae);
// console.log(student.stdaddress.street);
// console.log(student.stdaddress.area);
// console.log(student.stdaddress.city);
// console.log(student.stdaddress.state);
// console.log(student.stdaddress.pincode);

// //task7
// let technology={
//     frontend:["html","css","javascript"],
//     backend:["nodejs","express","mongodb"],
//     database:["mysql","postgresql","mongodb"]
// }
// console.log(technology.frontend[0]);
// console.log(technology.frontend[1]);
// console.log(technology.frontend[2]);

