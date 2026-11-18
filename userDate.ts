export interface userData {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
}

export const userInfo: userData = {
  firstName: 'Cahangir',
  lastName: 'Quuzada',
  company: 'Test',
  address: 'Nasimi r',
  address2: 'Xan susinski',
  country: 'United States',
  state: 'Baku',
  city: 'Baku',
  zipcode: 'AZ1000',
  mobileNumber: '+9942315354',
  email: 'abcfg1d4521@gmail.com',
  password: '123456',
  day: '3',
  month: '9',
  year: '2000',
};

export interface products {
  name: string;
  price: string;
}

export const product1: products = {
  name: 'Stylish Dress',
  price: 'Rs. 1500',
};

export const product2: products = {
  name: 'Winter Top',
  price: 'Rs. 600',
};
