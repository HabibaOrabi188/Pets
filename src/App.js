const pet = (props) => {
  return React.createElement('h2', {}, props.name);
  return React.createElement('h2', {}, props.animal);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h2', null, 'myProject'),
    React.createElement(pet, {name: 'Jax', animal: 'Dog'}),
    React.createElement(pet, {name: 'SO', animal: 'cat'}),
    React.createElement(pet, {name: 'Zayn', animal: 'Bird'}),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
