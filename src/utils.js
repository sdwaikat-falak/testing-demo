export const generateRandomData = (rowNo = 10000) => {
    const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Lisa', 'William', 'Emma'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    const statuses = ['Active', 'Inactive', 'Pending', 'Suspended'];
    const departments = ['Sales', 'Marketing', 'IT', 'HR', 'Finance', 'Operations'];

    const data = [];

    for (let i = 0; i < rowNo; i++) {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const age = Math.floor(Math.random() * 50) + 18;
        const city = cities[Math.floor(Math.random() * cities.length)];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const department = departments[Math.floor(Math.random() * departments.length)];
        const salary = Math.floor(Math.random() * 100000) + 30000;

        data.push({
            key: i,
            name: `${firstName} ${lastName}`,
            age,
            city,
            status,
            department,
            salary
        });
    }

    return data;
};
