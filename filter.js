/** Given an array of products where each product has a details property which is an object, filter the products that have a warranty of "2 years".
 */
const products = [
  { name: 'Laptop', details: { warranty: '1 year', brand: 'BrandA' } },
  { name: 'Phone', details: { warranty: '2 years', brand: 'BrandB' } },
  { name: 'Tablet', details: { warranty: '3 years', brand: 'BrandC' } },
];
console.log(products.filter((x) => x.details.warranty == '2 years'));

/**Given an array of students where each student has a name, age, and an array of scores, filter the students who are older than 20 and have an average score greater than 80.
 */
const students = [
  { name: 'Alice', age: 21, scores: [85, 90, 78] },
  { name: 'Bob', age: 19, scores: [80, 85, 88] },
  { name: 'Charlie', age: 22, scores: [70, 75, 80] },
];
console.log(
  students.filter(
    (x) =>
      x.age > 20 &&
      x.scores.reduce((acc, c) => acc + c, 0) / x.scores.length > 80
  )
);

/**Given an array of teams where each team has an array of players, filter the teams that include a player named "Eve".
 */
const teams = [
  { name: 'Team1', players: [{ name: 'Alice' }, { name: 'Bob' }] },
  { name: 'Team2', players: [{ name: 'Charlie' }, { name: 'Eve' }] },
  { name: 'Team3', players: [{ name: 'Dave' }, { name: 'Eve' }] },
];
console.log(teams.filter((x) => x.players.some((p) => p.name == 'Eve')));

/**Given an array of products where each product has a price and a discount, filter the products with a final price (price - discount) less than $50.
 */
const products2 = [
  { name: 'Product1', price: 100, discount: 20 },
  { name: 'Product2', price: 50, discount: 10 },
  { name: 'Product3', price: 30, discount: 5 },
];
console.log(products2.filter((x) => x.price - x.discount < 50));

/**Given an array of orders where each order has a customer and an array of items, filter the orders that include an item with a price greater than $100.
 */
const orders = [
  {
    customer: 'John',
    items: [
      { name: 'item1', price: 50 },
      { name: 'item2', price: 150 },
    ],
  },
  {
    customer: 'Jane',
    items: [
      { name: 'item3', price: 100 },
      { name: 'item4', price: 75 },
    ],
  },
];
console.log(orders.filter((x) => x.items.some((y) => y.price > 100)));

/**Given an array of users where each user has a name and an address object with city and country, filter the users living in "New York".
 */
const users = [
  { name: 'Alice', address: { city: 'Los Angeles', country: 'USA' } },
  { name: 'Bob', address: { city: 'New York', country: 'USA' } },
  { name: 'Charlie', address: { city: 'New York', country: 'USA' } },
];
console.log(users.filter((x) => x.address.city == 'New York'));

/**Given an array of schools where each school has a name and an array of classes, filter the schools that include a class with the name "Physics".
 */
const schools = [
  { name: 'School1', classes: [{ name: 'Math' }, { name: 'Science' }] },
  { name: 'School2', classes: [{ name: 'Physics' }, { name: 'Chemistry' }] },
];
console.log(schools.filter((x) => x.classes.some((y) => y.name == 'Physics')));

/**Given an array of restaurants where each restaurant has a name, an address object, and an array of reviews, filter the restaurants that have a review rating greater than 4.5.
 */
const restaurants = [
  {
    name: 'Restaurant1',
    address: { city: 'City1', street: 'Street1' },
    reviews: [{ rating: 4.0 }, { rating: 3.5 }],
  },
  {
    name: 'Restaurant2',
    address: { city: 'City2', street: 'Street2' },
    reviews: [{ rating: 4.7 }, { rating: 4.5 }],
  },
];
console.log(
  restaurants.filter(
    (x) =>
      x.reviews.reduce((acc, c) => acc + c.rating, 0) / x.reviews.length > 4.5
  )
);

/**Given an array of events where each event has a name and an array of attendees, filter the events with more than 100 attendees.
 */
const events = [
  { name: 'Event1', attendees: new Array(50).fill('Attendee') },
  { name: 'Event2', attendees: new Array(150).fill('Attendee') },
  { name: 'Event3', attendees: new Array(90).fill('Attendee') },
];
console.log(events.filter((x) => x.attendees.length > 100));

/**Given an array of parks where each park has a name and an array of facilities where each facility is an object with a type and availability, filter the parks that have an available swimming pool.
 */
const parks = [
  {
    name: 'Park1',
    facilities: [
      { type: 'Playground', availability: true },
      { type: 'Swimming Pool', availability: false },
    ],
  },
  {
    name: 'Park2',
    facilities: [
      { type: 'Basketball Court', availability: true },
      { type: 'Swimming Pool', availability: true },
    ],
  },
  {
    name: 'Park2',
    facilities: [
      { type: 'Basketball Court', availability: true },
      { type: 'Swimming Pool', availability: true },
    ],
  },
  {
    name: 'Park2',
    facilities: [
      { type: 'Basketball Court', availability: true },
      { type: 'Swimming Pool', availability: true },
    ],
  },
];
console.log(
  parks.filter((x) =>
    x.facilities.find(
      (c) => c.type == 'Swimming Pool' && c.availability == true
    )
  )
);

/** Given an array of courses where each course has a title and an array of modules, filter the courses that include a module with the name "Advanced Topics".
 */
const courses = [
  {
    title: 'Course1',
    modules: [{ name: 'Introduction' }, { name: 'Basics' }],
  },
  {
    title: 'Course2',
    modules: [{ name: 'Intermediate' }, { name: 'Advanced Topics' }],
  },
];
console.log(
  courses.filter((x) => x.modules.find((x) => x.name == 'Advanced Topics'))
);

/**Given an array of shops where each shop has a name and an array of products where each product has a category and inStock property, filter the shops that have an in-stock product in the "Electronics" category.
 */
const shops = [
  {
    name: 'Shop1',
    products: [
      { category: 'Electronics', inStock: false },
      { category: 'Clothing', inStock: true },
    ],
  },
  {
    name: 'Shop2',
    products: [
      { category: 'Electronics', inStock: true },
      { category: 'Home Appliances', inStock: true },
    ],
  },
];
console.log(
  shops.filter((x) =>
    x.products.find((x) => x.category == 'Electronics' && x.inStock == true)
  )
);

/**Given an array of tournaments where each tournament has a title and an array of teams where each team has a name and an averageScore, filter the tournaments that have a team with an average score greater than 85.
 */
const tournaments = [
  {
    title: 'Tournament1',
    teams: [
      { name: 'Team1', averageScore: 80 },
      { name: 'Team2', averageScore: 90 },
    ],
  },
  {
    title: 'Tournament2',
    teams: [
      { name: 'Team3', averageScore: 70 },
      { name: 'Team4', averageScore: 85 },
    ],
  },
];

console.log(
  tournaments.filter((x) => x.teams.some((c) => c.averageScore > 80))
);

/**Given an array of movies where each movie has a title and an array of showtimes, and each showtime has a date and ticketsAvailable, filter the movies that have a showtime with tickets available and the date is after today.
 */
const movies = [
  {
    title: 'Movie1',
    showtimes: [
      { date: new Date('2024-06-01'), ticketsAvailable: 0 },
      { date: new Date('2024-06-05'), ticketsAvailable: 10 },
    ],
  },
  {
    title: 'Movie2',
    showtimes: [
      { date: new Date('2024-06-03'), ticketsAvailable: 5 },
      { date: new Date('2024-06-07'), ticketsAvailable: 20 },
    ],
  },
];
console.log(
  movies.filter((x) =>
    x.showtimes.some(
      (x) => x.ticketsAvailable > 0 && x.date > new Date().getDate() + 1
    )
  )
);

/**Given an array of conferences where each conference has a name and an array of sessions, and each session has an array of speakers, filter the conferences that include a session with a speaker named "Dr. Smith".
 */
const conferences = [
  {
    name: 'Conference1',
    sessions: [
      { title: 'Session1', speakers: ['Alice', 'Bob'] },
      { title: 'Session2', speakers: ['Charlie', 'Dave'] },
    ],
  },
  {
    name: 'Conference2',
    sessions: [
      { title: 'Session3', speakers: ['Dr. Smith', 'Eve'] },
      { title: 'Session4', speakers: ['Frank', 'Grace'] },
    ],
  },
];
console.log(
  conferences.filter((x) =>
    x.sessions.some((x) => x.speakers.includes('Dr. Smith'))
  )
);
/**Given an array of projects where each project has a name, budget, and an array of tasks, filter the projects with a budget greater than $5000 and more than 5 tasks.
 */
const projects = [
  { name: 'Project1', budget: 4000, tasks: new Array(3).fill('Task') },
  { name: 'Project2', budget: 6000, tasks: new Array(6).fill('Task') },
  { name: 'Project3', budget: 8000, tasks: new Array(7).fill('Task') },
];
console.log(projects.filter((c) => c.budget > 5000 && c.tasks.length > 5));

/**Given an array of books where each book has a title and an array of authors where each author has a name and age, filter the books that have an author younger than 30.
 */
const books = [
  {
    title: 'Book1',
    authors: [
      { name: 'Author1', age: 45 },
      { name: 'Author2', age: 35 },
    ],
  },
  {
    title: 'Book2',
    authors: [
      { name: 'Author3', age: 25 },
      { name: 'Author4', age: 50 },
    ],
  },
];
console.log(books.filter((c) => c.authors.some((x) => x.age < 30)));

/**Given an array of warehouses where each warehouse has a location and an array of items where each item has a type and quantity, filter the warehouses that have more than 100 items of type "Electronics".
 */
const warehouses = [
  {
    location: 'Location1',
    items: [
      { type: 'Electronics', quantity: 80 },
      { type: 'Clothing', quantity: 50 },
    ],
  },
  {
    location: 'Location2',
    items: [
      { type: 'Electronics', quantity: 120 },
      { type: 'Home Appliances', quantity: 60 },
    ],
  },
];
console.log(
  warehouses.filter((x) =>
    x.items.some((x) => x.type == 'Electronics' && x.quantity > 100)
  )
);

/**Given an array of flights where each flight has a flightNumber, destination, and a passengers array where each passenger has a name and age, filter the flights that have a passenger older than 60.
 */
const flights = [
  {
    flightNumber: 'FL123',
    destination: 'CityA',
    passengers: [
      { name: 'John', age: 45 },
      { name: 'Jane', age: 35 },
    ],
  },
  {
    flightNumber: 'FL456',
    destination: 'CityB',
    passengers: [
      { name: 'Alice', age: 70 },
      { name: 'Bob', age: 50 },
    ],
  },
];
console.log(flights.filter((x) => x.passengers.some((z) => z.age > 60)));

/**Given an array of universities where each university has a name and an array of departments where each department has a name and an array of professors, filter the universities that have a department with a professor named "Dr. Brown".
 */
const universities = [
  {
    name: 'University1',
    departments: [
      { name: 'Department1', professors: ['Dr. Smith', 'Dr. White'] },
      { name: 'Department2', professors: ['Dr. Black', 'Dr. Green'] },
    ],
  },
  {
    name: 'University2',
    departments: [
      { name: 'Department3', professors: ['Dr. Brown', 'Dr. Grey'] },
      { name: 'Department4', professors: ['Dr. Pink', 'Dr. Blue'] },
    ],
  },
];
console.log(
  universities.filter((x) =>
    x.departments.some((y) => y.professors.includes('Dr. Brown'))
  )
);
