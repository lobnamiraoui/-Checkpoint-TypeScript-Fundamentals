// Définir l'interface Vehicle
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implémenter la classe Car qui implémente l'interface Vehicle
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Typage des paramètres du constructeur
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implémentation de la méthode start
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Créer une instance de la classe Car
  const myCar = new Car("Toyota", "Corolla", 2020);
  
  // Appeler la méthode start sur l'instance
  myCar.start(); // Cela affichera "Car engine started" dans la console