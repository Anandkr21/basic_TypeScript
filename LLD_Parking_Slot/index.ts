type VehicleType = "Car" | "Bike" | "Bus";


export class Vehicle {
    constructor(public vehicleType: VehicleType, public registrationNumber: number, public color: string) { }
}

export class Bike extends Vehicle {
    constructor(public registrationNumber: number, public color: string) {
        super("Bike", registrationNumber, color)
    }
}
export class Bus extends Vehicle {
    constructor(public registrationNumber: number, public color: string) {
        super("Bus", registrationNumber, color)
    }
}
export class Car extends Vehicle {
    constructor(public registrationNumber: number, public color: string) {
        super("Car", registrationNumber, color)
    }
}

export class Slot {
    public isBooked: boolean = false;
    constructor(public type: VehicleType) { }
}

export class ParkingSlot {
    public parkingSpots: Slot[];
    constructor(public maxLimit: number) {
        this.parkingSpots = [];
    }

    addSlots(slot: Slot): number {
        if (this.parkingSpots.length < this.maxLimit) {
            this.parkingSpots.push(slot);
        }
        return this.parkingSpots.length;
    }

    availableSlot(vehicleType: VehicleType): number {
        return this.parkingSpots.filter((slot) => slot.type === vehicleType && !slot.isBooked).length;
    }

    bookSlot(vehicle: Car | Bike | Bus): boolean {
        const slotNumber = this.parkingSpots.findIndex((slot) => slot.type === vehicle.vehicleType && !slot.isBooked);
        if (slotNumber !== -1) {
            this.parkingSpots[slotNumber].isBooked = true;
            return true;
        }
        return false;
    }
}