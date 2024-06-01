/**Find Deeply Nested Object:
Given an array of companies where each company has an array of departments, and each department has an array of employees, use find to locate the first employee named "Alice" in any department of any company */
const companies = [
  {
    name: 'Company1',
    departments: [
      { name: 'HR', employees: [{ name: 'Alice' }, { name: 'Bob' }] },
      {
        name: 'Engineering',
        employees: [{ name: 'Charlie' }, { name: 'Dave' }],
      },
    ],
  },
  {
    name: 'Company2',
    departments: [
      { name: 'Marketing', employees: [{ name: 'Eve' }, { name: 'Frank' }] },
    ],
  },
];
console.log(
  companies
    .flatMap((company) =>
      company.departments.flatMap((department) => department.employees)
    )
    .find((employee) => employee.name === 'Alice')
);

const products = [
  { name: 'Laptop', details: { warranty: '1 year', brand: 'BrandA' } },
  { name: 'Phone', details: { warranty: '2 years', brand: 'BrandB' } },
  { name: 'Tablet', details: { warranty: '3 years', brand: 'BrandC' } },
];
console.log(products.find((p) => p.details.warranty === '2 years'));

/**Find Object by Complex Condition:
Given an array of students where each student has a name, age, and an array of scores, use find to locate the first student who is older than 20 and has an average score greater than 80.
 */
const students = [
  { name: 'Alice', age: 21, scores: [85, 90, 78] },
  { name: 'Bob', age: 19, scores: [80, 85, 88] },
  { name: 'Charlie', age: 22, scores: [70, 75, 80] },
];
console.log(
  students.find((s) => {
    if (s.age > 20) {
      let totalScore = s.scores.reduce((acc, c) => acc + c, 0);
      let avgScore = totalScore / s.scores.length;
      if (avgScore > 80) {
        return { ...s };
      }
    }
  })
);

/**Given an array of teams where each team has an array of players, use find to locate the first player named "Eve" in any team.
 */
const teams = [
  { name: 'Team1', players: [{ name: 'Alice' }, { name: 'Bob' }] },
  { name: 'Team2', players: [{ name: 'Charlie' }, { name: 'Eve' }] },
  { name: 'Team3', players: [{ name: 'Dave' }, { name: 'Frank' }] },
];
console.log(
  teams.flatMap((t) => t.players.flatMap((c) => c.name)).find((x) => x == 'Eve')
);

/**Given an array of books where each book has a title, author, and year, use find to locate the first book written by "AuthorA" and published after 2000.
 */
const books = [
  { title: 'Book1', author: 'AuthorA', year: 1999 },
  { title: 'Book2', author: 'AuthorB', year: 2005 },
  { title: 'Book3', author: 'AuthorA', year: 2015 },
];
console.log(books.find((x) => x.author == 'AuthorA' && x.year > 2000));

/** Given an array of orders where each order has a customer and an array of items, use find to locate the first order that includes an item with a price greater than $100.
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
console.log(orders.find((x) => x.items.some((s) => s.price > 100)));

/**Given an array of classes where each class has a name and an array of students, use find to locate the first class that includes a student named "Dave".
 */
const classes = [
  { name: 'Math', students: ['Alice', 'Bob'] },
  { name: 'Science', students: ['Charlie', 'Dave'] },
  { name: 'History', students: ['Eve', 'Frank'] },
];
console.log(classes.find((x) => x.students.find((c) => c == 'Dave')));

/**Given an array of products where each product has a price and a discount, use find to locate the first product with a final price (price - discount) less than $50.
 */

const products2 = [
  { name: 'Product1', price: 100, discount: 20 },
  { name: 'Product2', price: 50, discount: 10 },
  { name: 'Product3', price: 30, discount: 5 },
];
console.log(products2.find((x) => x.price - x.discount < 50));

/**Given an array of users where each user has a name and an address object with city and country, use find to locate the first user living in "New York".
 */
const users = [
  { name: 'Alice', address: { city: 'Los Angeles', country: 'USA' } },
  { name: 'Bob', address: { city: 'New York', country: 'USA' } },
  { name: 'Charlie', address: { city: 'Chicago', country: 'USA' } },
];
console.log(users.find((x) => x.address.city === 'New York'));

/**Given an array of schools where each school has a name and an array of classes, use find to locate the first school that includes a class with the name "Physics".
 */
const schools = [
  { name: 'School1', classes: [{ name: 'Math' }, { name: 'Science' }] },
  { name: 'School2', classes: [{ name: 'Physics' }, { name: 'Chemistry' }] },
];
console.log(schools.find((x) => x.classes.find((c) => c.name == 'Physics')));

/**Given an array of restaurants where each restaurant has a name, an address object, and an array of reviews, use find to locate the first restaurant with a review rating greater than 4.5.
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
    reviews: [{ rating: 4.7 }, { rating: 4.3 }],
  },
];
console.log(
  restaurants.find((x) => {
    let reviews = x.reviews.reduce((acc, c) => acc + c.rating, 0);
    let totalReview = reviews / x.reviews.length;
    if (totalReview >= 4.5) return x;
  })
);

/**Given an array of libraries where each library has a name and an array of sections, and each section has an array of books, use find to locate the first library that has a section with a book titled "JavaScript".
 */
const libraries = [
  {
    name: 'Library1',
    sections: [
      { name: 'Fiction', books: [{ title: 'Book1' }, { title: 'Book2' }] },
      {
        name: 'Non-Fiction',
        books: [{ title: 'JavaScript' }, { title: 'Book3' }],
      },
    ],
  },
  {
    name: 'Library2',
    sections: [
      { name: 'Science', books: [{ title: 'Book4' }, { title: 'Book5' }] },
    ],
  },
];
console.log(
  libraries.find((x) => {
    return x.sections.find((c) => c.books.find((b) => b.title == 'JavaScript'));
  })
);

/**Given an array of classes where each class has a name and an array of students where each student has a name and age, use find to locate the first class with a student older than 18.
 */
const classes2 = [
  {
    name: 'Class1',
    students: [
      { name: 'Alice', age: 17 },
      { name: 'Bob', age: 18 },
    ],
  },
  {
    name: 'Class2',
    students: [
      { name: 'Charlie', age: 19 },
      { name: 'Dave', age: 20 },
    ],
  },
];
console.log(classes2.find((x) => x.students.find((c) => c.age > 18)));

/**Given an array of events where each event has a name and an array of attendees, use find to locate the first event with more than 100 attendees.
 */
const events = [
  { name: 'Event1', attendees: new Array(50).fill('Attendee') },
  { name: 'Event2', attendees: new Array(150).fill('Attendee') },
  { name: 'Event3', attendees: new Array(90).fill('Attendee') },
];
console.log(events.find((e) => e.attendees.length > 100));

/**Given an array of parks where each park has a name and an array of facilities where each facility is an object with a type and availability, use find to locate the first park with an available swimming pool.
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
];
console.log(
  parks.find((x) =>
    x.facilities.find(
      (c) => c.type == 'Swimming Pool' && c.availability == true
    )
  )
);

/**Given an array of courses where each course has a title and an array of modules, use find to locate the first course that includes a module with the name "Advanced Topics".
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
  courses.find((x) => x.modules.find((c) => c.name === 'Advanced Topics'))
);

/**Given an array of shops where each shop has a name and an array of products where each product has a category and inStock property, use find to locate the first shop that has an in-stock product in the "Electronics" category.
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
  shops.find((x) =>
    x.products.find((c) => c.category == 'Electronics' && c.inStock == true)
  )
);

/**Given an array of tournaments where each tournament has a title and an array of teams where each team has a name and an averageScore, use find to locate the first tournament that has a team with an average score greater than 85.
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
      { name: 'Team4', averageScore: 75 },
    ],
  },
];

/**Given an array of movies where each movie has a title and an array of showtimes, and each showtime has a date and ticketsAvailable, use find to locate the first movie that has a showtime with tickets available and the date is after today.
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
  movies.find((x) =>
    x.showtimes.find(
      (c) => c.date > new Date().getDate() + 1 && c.ticketsAvailable > 0
    )
  )
);

/**Given an array of conferences where each conference has a name and an array of sessions, and each session has an array of speakers, use find to locate the first conference that includes a session with a speaker named "Dr. Smith".
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
  conferences.find((x) =>
    x.sessions.some((c) => c.speakers.includes('Dr. Smith'))
  )
);
