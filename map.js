const people = [
  { name: 'Alice', birthYear: 1990 },
  { name: 'Bob', birthYear: 1985 },
  { name: 'Charlie', birthYear: 2000 },
];
console.log(
  people.map((p) => ({ ...p, age: new Date().getFullYear() - p.birthYear }))
);

const students = [
  { name: 'Alice', marks: [90, 85, 88] },
  { name: 'Bob', marks: [75, 80, 79] },
  { name: 'Charlie', marks: [92, 95, 94] },
];
console.log(
  students.map((s) => ({
    ...s,
    average: (s.marks.reduce((acc, c) => acc + c, 0) / s.marks.length).toFixed(
      2
    ),
  }))
);

const temperaturesF = [32, 68, 104];
console.log(temperaturesF.map((x) => ((x - 32) * 5) / 9));

const nestedArrays = [[1, 2], [3, [4, 5]], [6]];
console.log(nestedArrays.map((x) => x.flat()));

const items = [
  { id: 101, name: 'item1' },
  { id: 102, name: 'item2' },
  { id: 103, name: 'item3' },
];
console.log(items.map((x) => x.id));

const people2 = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
];
console.log(
  people2.map((x) => ({
    ...x,
    initials: `${x.firstName[0]}.${x.lastName[0]}.`,
  }))
);

const users = [
  { userName: 'Alice', userAge: 25 },
  { userName: 'Bob', userAge: 30 },
];
console.log(users.map((x) => ({ name: x.userName, age: x.userAge })));

const products = [
  { name: 'Shirt', price: 50, discount: 10 },
  { name: 'Pants', price: 100, discount: 20 },
  { name: 'Shoes', price: 150, discount: 15 },
];
console.log(
  products.map((p) => ({
    ...p,
    finalPrice: p.price - p.price * (p.discount / 100),
  }))
);

//HARD
const employees = [
  {
    name: 'John',
    address: { street: '123 Main St', city: 'Springfield', state: 'IL' },
  },
  {
    name: 'Jane',
    address: { street: '456 Elm St', city: 'Greenville', state: 'TX' },
  },
];
console.log(
  employees.map((x) => ({
    ...x,
    fullAddress: `${x.address.street},${x.address.city},${x.address.state}`,
  }))
);

const orders = [
  { product: 'Apple', quantity: 3 },
  { product: 'Banana', quantity: 5 },
];
console.log(
  orders.map((x) => ({ product: x.product, totalPrice: 10 * x.quantity }))
);

const products2 = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 20 },
  { name: 'Keyboard', price: 60 },
];
console.log(products2.map((x) => x.price > 50 && x));

const names = ['Alice', 'Bob', 'Charlie'];
const scores = [85, 92, 88];
console.log(names.map((x, i) => ({ name: x, score: scores[i] })));

const cars = [
  { make: 'Ford', year: 1988 },
  { make: 'Toyota', year: 1995 },
];
console.log(cars.map((c) => ({ ...c, isVintage: c.year < 1990 })));

const students2 = [
  { firstName: 'Alice', lastName: 'Johnson', birthYear: 2001 },
  { firstName: 'Bob', lastName: 'Smith', birthYear: 2000 },
];
console.log(
  students2.map((x) => ({
    first_name: x.firstName,
    last_name: x.lastName,
    birth_year: x.birthYear,
  }))
);

const users2 = [
  { name: 'Alice', posts: ['Hello World', 'Learning JS'] },
  { name: 'Bob', posts: ['My Journey', 'Map Method'] },
];
console.log(
  users2.map((x) => {
    const transformedPosts = x.posts.map((x) => ({
      title: x,
      length: x.length,
    }));
    return { ...x, posts: transformedPosts };
  })
);

const sales = [
  { product: 'Laptop', region: 'North' },
  { product: 'Laptop', region: 'South' },
  { product: 'Phone', region: 'North' },
  { product: 'Laptop', region: 'North' },
];
const uniqueProduct = [...new Set(sales.map((x) => x.product))];
console.log(uniqueProduct);
const saleSummary = uniqueProduct.map((product) => {
  const regions = sales
    .filter((sale) => sale.product == product)
    .reduce((acc, sale) => {
      acc[sale.region] = (acc[sale.region] || 0) + 1;
      return acc;
    }, {});
  return {
    product,
    saleSummary: regions,
  };
});
console.log(saleSummary);

const quizAnswers = [
  ['Answer1', 'AnotherAnswer'],
  ['Short', 'VeryLongAnswer'],
];
console.log(
  quizAnswers.map((x) => x.map((c) => ({ title: c, length: c.length })))
);

const books = [
  { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
  { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
];
console.log(books.map((x) => ({ ...x, shortTitle: x.title.substring(0, 10) })));

const departments = [
  { name: 'HR', employees: ['Alice', 'Bob'] },
  { name: 'Engineering', employees: ['Charlie', 'David', 'Eve'] },
];
console.log(
  departments.map((x) => ({ ...x, employeeCount: x.employees.length }))
);

const movies = [
  { title: 'Inception', details: { director: 'Nolan', year: 2010 } },
  { title: 'Interstellar', details: { director: 'Nolan', year: 2014 } },
];
console.log(
  movies.map((x) => ({
    ...x,
    desc: `Director is ${x.details.director} and year was ${x.details.year}`,
  }))
);

const orders2 = [
  { orderId: 1, items: ['apple', 'banana', 'cherry'] },
  { orderId: 2, items: ['pear', 'grape', 'mango', 'kiwi'] },
];
console.log(
  orders2.map((x) => ({
    ...x,
    items: x.items.length > 3 ? x.items.map((c) => c.toUpperCase()) : x.items,
  }))
);

const settings = [
  { key: 'theme', value: 'dark' },
  { key: 'fontSize', value: '16px' },
];
console.log(settings.map((x) => ({ [x.key]: x.value })));

const categories = [
  {
    name: 'Electronics',
    items: [
      { name: 'Laptop', price: 1000 },
      { name: 'Phone', price: 500 },
    ],
  },
  {
    name: 'Clothing',
    items: [
      { name: 'Shirt', price: 50 },
      { name: 'Pants', price: 100 },
    ],
  },
];
console.log(
  categories.map((x) => ({
    ...x,
    items: x.items.map((c) => ({
      ...c,
      discountedPrice: c.price - c.price * 0.1,
    })),
  }))
);

const parts = [
  { partId: 1, partName: 'CPU' },
  { partId: 2, partName: 'RAM' },
];
const prices = [
  { partId: 1, price: 200 },
  { partId: 2, price: 80 },
];
console.log(
  parts.map((x) => ({
    ...x,
    price: prices.find((p) => p.partId == x.partId).price,
  }))
);

const companies = [
  {
    name: 'Company1',
    departments: [
      { departmentName: 'HR', employeeCount: 10 },
      { departmentName: 'Engineering', employeeCount: 50 },
    ],
  },
  {
    name: 'Company2',
    departments: [
      { departmentName: 'HR', employeeCount: 5 },
      { departmentName: 'Engineering', employeeCount: 20 },
      { departmentName: 'Sales', employeeCount: 15 },
    ],
  },
];
console.log(
  companies.map((x) => ({
    ...x,
    totalEmp: x.departments.reduce((acc, c) => acc + c.employeeCount, 0),
  }))
);

const books2 = [
  { title: 'Book1', author: 'Author1', year: 1999 },
  { title: 'Book2', author: 'Author2', year: 2005 },
  { title: 'Book3', author: 'Author3', year: 2015 },
];
console.log(
  books2.map((x) => {
    if (x.year > 2000) return { ...x };

    return;
  })
);

const orders3 = [
  {
    customer: 'John',
    items: [
      { name: 'item1', price: 100 },
      { name: 'item2', price: 200 },
    ],
  },
  {
    customer: 'Jane',
    items: [
      { name: 'item3', price: 150 },
      { name: 'item4', price: 250 },
    ],
  },
];
console.log(
  orders3.map((x) => ({
    customer: x.customer,
    totalCost: x.items.reduce((acc, c) => acc + c.price, 0),
  }))
);

const departments2 = [
  {
    name: 'HR',
    employees: [
      { name: 'Alice', salary: 50000 },
      { name: 'Bob', salary: 60000 },
    ],
  },
  {
    name: 'Engineering',
    employees: [
      { name: 'Charlie', salary: 70000 },
      { name: 'Dave', salary: 80000 },
    ],
  },
];
console.log(
  departments2.map((x) => ({
    ...x,
    totalSalary: x.employees.reduce((acc, c) => acc + c.salary, 0),
  }))
);

const members = [
  { name: 'Alice', borrowedBooks: ['Book1', 'Book2', 'Book3'] },
  { name: 'Bob', borrowedBooks: ['Book4'] },
];
console.log(
  members.map((x) => ({
    ...x,
    totalBooks: x.borrowedBooks.length,
  }))
);

const classes = [
  { name: 'Math', students: ['Alice', 'Bob'] },
  { name: 'Science', students: ['Charlie', 'Dave'] },
];
console.log(
  classes.map((x) => ({
    ...x,
    studentsList: x.students.toString(),
  }))
);

const products3 = [
  { name: 'Laptop', price: 1000, category: 'Electronics' },
  { name: 'Shirt', price: 50, category: 'Clothing' },
];
console.log(
  products3.map((x) => {
    if (x.category === 'Electronics')
      return { ...x, discountedPrice: x.price - x.price * 0.1 };

    return x;
  })
);

const cities = [
  {
    name: 'City1',
    districts: [
      { name: 'District1', neighborhoods: ['N1', 'N2'] },
      { name: 'District2', neighborhoods: ['N3'] },
    ],
  },
  {
    name: 'City2',
    districts: [{ name: 'District3', neighborhoods: ['N4', 'N5', 'N6'] }],
  },
];
console.log(
  cities.map((x) => {
    const totalNeighbourhood = x.districts.reduce(
      (acc, c) => acc + c.neighborhoods.length,
      0
    );
    return { ...x, totalNeighbourhood: totalNeighbourhood };
  })
);

const screenings = [
  {
    movie: 'Movie1',
    date: '2023-05-20',
    attendees: ['Person1', 'Person2'],
  },
  {
    movie: 'Movie2',
    date: '2023-05-21',
    attendees: ['Person3', 'Person4', 'Person5'],
  },
];
console.log(
  screenings.map((x) => ({ ...x, attendeesCount: x.attendees.length }))
);

const studentNames = ['Alice', 'Bob', 'Charlie'];
const scores2 = [85, 90, 78];
console.log(studentNames.map((x, i) => ({ name: x, scores: scores2[i] })));

const companies2 = [
  {
    name: 'Company1',
    projects: [{ projectName: 'Project1' }, { projectName: 'Project2' }],
  },
  {
    name: 'Company2',
    projects: [{ projectName: 'Project3' }],
  },
];
console.log(
  companies2.map((x) => ({ ...x, totalProjects: x.projects.length }))
);

const customers = [
  {
    name: 'Alice',
    orders: [
      { item: 'item1', price: 50 },
      { item: 'item2', price: 150 },
    ],
  },
  {
    name: 'Bob',
    orders: [
      { item: 'item3', price: 200 },
      { item: 'item4', price: 75 },
    ],
  },
];
console.log(
  customers.map((x) => {
    let highOrder = x.orders.filter((c) => c.price > 100);
    return { ...x, highOrder: highOrder };
  })
);

const companies3 = [
  {
    name: 'Company1',
    departments: [
      { deptName: 'HR', employees: ['Alice', 'Bob'] },
      { deptName: 'Engineering', employees: ['Charlie', 'Dave'] },
    ],
  },
  {
    name: 'Company2',
    departments: [
      { deptName: 'Marketing', employees: ['Eve'] },
      { deptName: 'Sales', employees: ['Frank', 'Grace'] },
    ],
  },
];
console.log(
  companies3.map((x) => {
    const total = x.departments.reduce((acc, c) => acc + c.employees.length, 0);
    return { ...x, total: total };
  })
);
