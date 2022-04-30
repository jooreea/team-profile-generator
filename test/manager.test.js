const Manager = require("../lib/manager");

describe("Manager", () => {
    const manager = new Manager("Jooree", 86, "jooreea@gmail.com", 101);
    describe("Initialization", () => {
      it("should create an employee object with name, id, email, and office number properties", () => {
        expect(manager.name).toEqual("Jooree");
        expect(manager.id).toEqual(86);
        expect(manager.email).toEqual("jooreea@gmail.com");
        expect(manager.officeNumber).toEqual(101);
      });
    });
    describe("Methods", () => {
      it("should return name, id, email, role, and office number", () => {
        expect(manager.getName()).toEqual("Jooree");
        expect(manager.getId()).toEqual(86);
        expect(manager.getEmail()).toEqual("jooreea@gmail.com");
        expect(manager.getRole()).toEqual("Manager"); 
        expect(manager.getOfficeNumber()).toEqual(101); 
      });
    });
  })