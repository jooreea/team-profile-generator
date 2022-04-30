const Intern = require("../lib/intern");

describe("Intern", () => {
    const intern = new Intern("Jooree", 86, "jooreea@gmail.com", "University of Washington");
    describe("Initialization", () => {
      it("should create an employee object with name, id, email and school properties", () => {
        expect(intern.name).toEqual("Jooree");
        expect(intern.id).toEqual(86);
        expect(intern.email).toEqual("jooreea@gmail.com");
        expect(intern.school).toEqual("University of Washington");
      });
    });
    describe("Methods", () => {
      it("should return name, id, email, role, and school", () => {
        expect(intern.getName()).toEqual("Jooree");
        expect(intern.getId()).toEqual(86);
        expect(intern.getEmail()).toEqual("jooreea@gmail.com");
        expect(intern.getRole()).toEqual("Intern"); 
        expect(intern.getSchool()).toEqual("University of Washington"); 
      });
    });
  })