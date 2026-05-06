function greetUser(name = "Guest") {
  const message = `Hello, ${name}!`;
  console.log(message);
  return message;
}

console.log("--- Default parameter ---");
greetUser();
greetUser("Olena");

const user = {
  name: "Dmytro",
  sayHiRegular() {
    console.log("Regular function this.name:", this.name);
    return this.name;
  },
  sayHiArrow: () => {
    console.log("Arrow function this.name:", this?.name);
    return this?.name;
  },
};

console.log("\n--- this binding ---");
user.sayHiRegular();
user.sayHiArrow();

const detached = user.sayHiRegular;
console.log("Detached regular call:", detached());

const bound = user.sayHiRegular.bind(user);
console.log("Bound regular call:", bound());

console.log("\n--- var vs let ---");

for (var i = 0; i < 3; i++) {}
console.log("var after loop:", i);

for (let j = 0; j < 3; j++) {}
try {
  console.log("let after loop:", j);
} catch (error) {
  console.warn("let after loop:", error.message);
}

console.log("\n--- setTimeout with var ---");
for (var k = 0; k < 3; k++) {
  setTimeout(function () {
    console.log("var in timeout:", k);
  }, 0);
}

console.log("\n--- setTimeout with let ---");
for (let m = 0; m < 3; m++) {
  setTimeout(function () {
    console.log("let in timeout:", m);
  }, 10);
}

window._task3 = { greetUser, user };
