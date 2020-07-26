import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IAxios {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: number,
      lng: number,
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

interface IData {
  data: IAxios[],
}

export default (): React.ReactElement<HTMLElement> => {
  const [state, setState] = useState([] as IAxios[]);

  useEffect(() => {
    const FetchData = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response: IData): void => {
          const { data } = response;
          setState(data);
        });
    };
    FetchData();
  });

  return (
    <>
      {
        state.map((s: IAxios): React.ReactElement<IAxios> => (
          <ul>
            <li>{s.id}</li>
            <li>{s.name}</li>
            <li>{s.username}</li>
            <li>{s.email}</li>
            <li>{s.address.street}</li>
            <li>{s.address.suite}</li>
            <li>{s.address.city}</li>
            <li>{s.address.zipcode}</li>
            <li>{s.address.geo.lat}</li>
            <li>{s.address.geo.lng}</li>
            <li>{s.phone}</li>
            <li>{s.website}</li>
            <li>{s.company.name}</li>
            <li>{s.company.catchPhrase}</li>
            <li>{s.company.bs}</li>
          </ul>
        ))
      }
    </>
  );
};
