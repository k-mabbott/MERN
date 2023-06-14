const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newFakeUser = {
      password: faker.internet.password(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      lastName: faker.person.lastName(),
      firstName: faker.person.firstName(),
      _id: faker.database.mongodbObjectId()
  } 
  return newFakeUser
}

const createCompany = () => {
  const newFakeCompany = {
  _id: faker.database.mongodbObjectId(),
  name: faker.company.name(),
  address: {
          street: faker.location.street(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
          country: faker.location.country(),
          } 
  } 
  return newFakeCompany
}
// --------------------------------------HOME/TEST
app.get("/api", (req, res) => {
  res.send("Hello!!!!");
});

// --------------------------------------NEW USER
app.get("/api/users/new", (req, res) => {
  res.send(createUser());
});
// --------------------------------------NEW COMPANY
app.get("/api/companies/new", (req, res) => {
  res.send(createCompany());
});
// --------------------------------------NEW USER / COMPANY
app.get("/api/user/company/", (req, res) => {
  res.send({user: createUser(), company: createCompany()});
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
// ------------------------------------ TEST FOR USER / COMPANY
// const fakeUser = createUser();
// const fakeCompany = createCompany();

// console.log('fake user:', fakeUser)
// console.log('fake company:', fakeCompany)

// --------------------------------------EXAMPLE FROM PLATFORM
// const createProduct = () => {
//     const newFake = {
//         name: faker.commerce.productName(),
//         price: "$" + faker.commerce.price(),
//         department: faker.commerce.department()
//     };
//     return newFake;
// };

// const newFakeProduct = createProduct();
// console.log(newFakeProduct);





// req is short for request
// res is short for response

