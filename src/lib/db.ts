import { rides as initialRides, Ride } from '../data/rides';

let rides = [...initialRides];

interface Map {
  id: string;
  rideId: number;
  name: string;
  uploadDate: string;
  coordinates: string;
}

let maps: Map[] = [
  {
    id: '1',
    rideId: 1,
    name: 'Central Park Loop.gpx',
    uploadDate: '2024-03-22',
    coordinates: JSON.stringify([
      [40.7812, -73.9665],
      [40.7682, -73.9719],
      [40.7642, -73.9731],
      [40.7669, -73.9813],
      [40.7800, -73.9738],
      [40.7812, -73.9665]
    ])
  },
  {
    id: '2',
    rideId: 2,
    name: 'Brooklyn Bridge Ride.tcx',
    uploadDate: '2024-03-23',
    coordinates: JSON.stringify([
      [40.7127, -74.0134],
      [40.7068, -73.9973],
      [40.7057, -73.9964],
      [40.7046, -73.9954],
      [40.6977, -73.9887],
      [40.6932, -73.9839]
    ])
  }
];

export default {
  getRides: () => rides,
  addRide: (ride: Omit<Ride, 'id' | 'participants'>) => {
    const newRide: Ride = { ...ride, id: rides.length + 1, participants: [] };
    rides.push(newRide);
    return newRide;
  },
  getRide: (id: number) => rides.find(ride => ride.id === id),
  joinRide: (id: number, name: string) => {
    const ride = rides.find(ride => ride.id === id);
    if (ride) {
      ride.participants.push(name);
      return true;
    }
    return false;
  },
  getMaps: () => maps.map(map => ({
    ...map,
    coordinates: JSON.parse(map.coordinates) as [number, number][]
  })),
  addMap: (map: Omit<Map, 'id'>) => {
    const newMap = { ...map, id: (maps.length + 1).toString() };
    maps.push(newMap);
    return {
      ...newMap,
      coordinates: JSON.parse(newMap.coordinates) as [number, number][]
    };
  }
};