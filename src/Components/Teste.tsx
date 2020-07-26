/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import MyFetch from '../Helpers/Fetch';

interface IFetch {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  unidade: string,
  ibge: string,
  gia: string,
}

export default (): React.ReactElement<React.FC> => {
  const [state, setState] = useState([] as any[]);
  const url = 'https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/';

  const Fetching = MyFetch(url);

  const Consulting = Fetching
    .then((f: any): void => f.map((ff: any): void => ff));

  const Result = Fetching
    .then((response: any): void => setState(response));

  return (
    <>
      {
        state.map((s: IFetch, index: number): React.ReactElement<IFetch> => (
          <ul key={index.toString()}>
            <li>{s.cep}</li>
            <li>{s.logradouro}</li>
            <li>{s.complemento}</li>
            <li>{s.bairro}</li>
            <li>{s.localidade}</li>
            <li>{s.uf}</li>
            <li>{s.unidade}</li>
            <li>{s.ibge}</li>
            <li>{s.gia}</li>
          </ul>
        ))
      }
    </>
  );
}