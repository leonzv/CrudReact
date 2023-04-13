export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    username: string;
    address: {
      street: string;
      number: string;
      city: string;
      zipcode: string;
      geolocation: {
        lat: string;
        long: string;
      };
    };
  };
  