export interface Ride {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  participants: string[];
}

export const rides: Ride[] = [
  {
    id: 1,
    title: "Saturday Morning City Loop",
    date: "2024-03-30",
    time: "08:00 AM",
    location: "Central Park",
    description: "A leisurely ride around the city's most scenic spots.",
    participants: ["Alice", "Bob", "Charlie"]
  },
  {
    id: 2,
    title: "Sunday Hill Climb Challenge",
    date: "2024-03-31",
    time: "07:30 AM",
    location: "Mountain View Park",
    description: "Test your endurance with this challenging hill climb.",
    participants: ["David", "Emma", "Frank"]
  },
  {
    id: 3,
    title: "Midweek Evening Ride",
    date: "2024-04-03",
    time: "06:00 PM",
    location: "Riverside Path",
    description: "Unwind after work with a relaxing ride along the river.",
    participants: ["Grace", "Henry"]
  },
  {
    id: 4,
    title: "Weekend Long Distance Ride",
    date: "2024-04-06",
    time: "06:30 AM",
    location: "Countryside Road",
    description: "A long-distance ride through scenic countryside routes.",
    participants: ["Ivy", "Jack", "Kelly", "Liam"]
  },
  {
    id: 5,
    title: "Beginner-Friendly City Tour",
    date: "2024-04-10",
    time: "10:00 AM",
    location: "City Hall",
    description: "An easy-paced ride perfect for newcomers to cycling.",
    participants: ["Mike", "Nina"]
  },
  {
    id: 6,
    title: "Sunset Coastal Ride",
    date: "2024-04-13",
    time: "05:30 PM",
    location: "Beach Boardwalk",
    description: "Enjoy breathtaking views on this scenic coastal route.",
    participants: ["Oliver", "Penny", "Quinn"]
  },
  {
    id: 7,
    title: "Mountain Bike Adventure",
    date: "2024-04-20",
    time: "09:00 AM",
    location: "Forest Trails Park",
    description: "An exciting off-road journey through challenging terrain.",
    participants: ["Rachel", "Sam", "Tom"]
  },
  {
    id: 8,
    title: "Charity Ride for Local Hospital",
    date: "2024-04-27",
    time: "08:00 AM",
    location: "City Square",
    description: "Join us in raising funds for our local hospital's new wing.",
    participants: ["Uma", "Victor", "Wendy", "Xander"]
  },
  {
    id: 9,
    title: "Historical Landmarks Tour",
    date: "2024-05-04",
    time: "09:30 AM",
    location: "Old Town Center",
    description: "Discover the city's rich history on this educational ride.",
    participants: ["Yara", "Zack"]
  },
  // New rides added below
  {
    id: 10,
    title: "Gravel Grinder Adventure",
    date: "2024-05-11",
    time: "07:00 AM",
    location: "Rural Outskirts",
    description: "Experience the thrill of mixed-terrain riding on this challenging gravel adventure.",
    participants: ["Alex", "Blake"]
  },
  {
    id: 11,
    title: "Full Moon Night Ride",
    date: "2024-05-18",
    time: "09:00 PM",
    location: "Lakeside Trail",
    description: "Join us for a magical nighttime ride under the full moon.",
    participants: ["Cameron", "Dana"]
  },
  {
    id: 12,
    title: "Family-Friendly Park Ride",
    date: "2024-05-25",
    time: "10:30 AM",
    location: "Community Park",
    description: "A fun and easy ride for cyclists of all ages and skill levels.",
    participants: ["Evan", "Fiona", "George"]
  },
  {
    id: 13,
    title: "Urban Art Bike Tour",
    date: "2024-06-01",
    time: "02:00 PM",
    location: "Downtown Arts District",
    description: "Explore the city's vibrant street art and murals on this cultural cycling tour.",
    participants: ["Harper", "Isla"]
  },
  {
    id: 14,
    title: "Sunrise Beach Ride",
    date: "2024-06-08",
    time: "05:30 AM",
    location: "Oceanfront Promenade",
    description: "Start your day with a refreshing ride along the beach as the sun rises.",
    participants: ["Jordan", "Kai"]
  },
  {
    id: 15,
    title: "Foodie Bike Tour",
    date: "2024-06-15",
    time: "11:00 AM",
    location: "Gourmet District",
    description: "Combine cycling and culinary delights on this gastronomic adventure.",
    participants: ["Leo", "Mia"]
  },
  {
    id: 16,
    title: "Extreme Downhill Challenge",
    date: "2024-06-22",
    time: "08:30 AM",
    location: "Mountain Bike Park",
    description: "Test your skills on thrilling downhill trails (experienced riders only).",
    participants: ["Nico", "Olivia"]
  }
];