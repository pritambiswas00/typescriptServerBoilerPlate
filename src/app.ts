import { Address, CreateUser } from "./BuilderPattern"

const newUser = new CreateUser("Pritam").setAddress(new Address(560038, "Bangalore")).setEmail("pritambiswas060@gmail.com").setPhoneNumber("8017393446").build();

console.log(newUser)
