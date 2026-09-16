const user = { id: 1, role: "admin" };
const { role } = user;

const array1 = [1, 2];
const array2 = [...array1, 3];

const updatedUser = { ...user, active: true };