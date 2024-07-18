import React, { StrictMode } from 'react';

import {createRoot} from 'react-dom/client';

// import Pet from './Pet'
import Search from './Search';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Details from './Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const App = ()=>{
  //   return React.createElement('div', {}, [
  //     React.createElement('h2', null, 'myProject'),
  //     React.createElement(pet, {name: 'Jax', animal: 'Dog'}),
  //     React.createElement(pet, {name: 'SO', animal: 'cat'}),
  //     React.createElement(pet, {name: 'Zayn', animal: 'Bird'}),
  //   ]);



  const queryClient=new QueryClient({
    defaultOptions:{
      queries:{
        staleTime:Infinity,
        cacheTime:Infinity,

      }
    }
    
  })

  return (

    <BrowserRouter>

    <QueryClientProvider client={queryClient}>


    
    <header>
    <Link to="/">Adopt Me!</Link>
    </header>

      {/* <Search /> */}

      {/* <Pet name='Jax' animal='Dog' breed='G. Sh.'/>
      <Pet name='SO' animal='cat' breed='Siemese'/>
      <Pet name='Zayn' animal='Bird' breed='Cockatiel'/> */}

      <Routes>
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/" element={<Search/>} />
      </Routes>

           
    </QueryClientProvider>

    </BrowserRouter>
    
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
