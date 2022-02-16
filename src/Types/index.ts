export interface Business {
  address: {
    city: string;
    country: string;
    number: string;
    street: string;
    zip: string;
  };
  description: string;
  email: string;
  id: string;
  image: string;
  name: string;
  phone: string;
}

export interface BusinessList extends Array<Business> {}
