import { create } from 'zustand';

interface Vehicle {
  id: number;
  name: string;
  year: number;
}

interface VehicleStore {
  vehicles: Vehicle[];
  addVehicle(vehicle: Vehicle): void;
}

export const useVehicleStore = create<VehicleStore>((set) => ({
  vehicles: [],
  addVehicle: (vehicle: Vehicle) => set((state) => ({
    vehicles: [...state.vehicles, vehicle],
  })),
}));
