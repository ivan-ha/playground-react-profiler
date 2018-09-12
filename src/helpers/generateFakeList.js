import faker from "faker"

// set a seed for consistent results
faker.seed(1)
const genders = ["M", "F"]

export const generateFakeList = size =>
  new Array(size).fill(undefined).map(() => ({
    name: faker.name.firstName(),
    country: faker.address.country(),
    gender: faker.random.arrayElement(genders),
    avatar: faker.image.avatar(),
  }))
