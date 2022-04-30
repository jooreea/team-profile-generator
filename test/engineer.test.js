const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    const engineer = new Engineer("Jooree", 86, "jooreea@gmail.com", "jooreea");
    describe("Initialization", () => {
      it("should create an employee object with name, id, email, and github properties", () => {
        expect(engineer.name).toEqual("Jooree");
        expect(engineer.id).toEqual(86);
        expect(engineer.email).toEqual("jooreea@gmail.com");
        expect(engineer.github).toEqual("jooreea");
      });
    });
    describe("Methods", () => {
      it("should return name, id, email, role, and github", () => {
        expect(engineer.getName()).toEqual("Jooree");
        expect(engineer.getId()).toEqual(86);
        expect(engineer.getEmail()).toEqual("jooreea@gmail.com");
        expect(engineer.getRole()).toEqual("Engineer"); 
        expect(engineer.getGithub()).toEqual("jooreea"); 
      });
    });
  })