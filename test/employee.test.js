const Employee = require("../lib/employee");

describe("Employee", () => {
  const employee = new Employee("Jooree", 86, "jooreea@gmail.com");
  describe("Initialization", () => {
    it("should create an employee object with name, id, and email properties", () => {
      expect(employee.name).toEqual("Jooree");
      expect(employee.id).toEqual(86);
      expect(employee.email).toEqual("jooreea@gmail.com");
    });
  });

  describe("Methods", () => {
    it("should return name, id, email and role", () => {
      expect(employee.getName()).toEqual("Jooree");
      expect(employee.getId()).toEqual(86);
      expect(employee.getEmail()).toEqual("jooreea@gmail.com");
      expect(employee.getRole()).toEqual("Employee"); 
    });
  });
})