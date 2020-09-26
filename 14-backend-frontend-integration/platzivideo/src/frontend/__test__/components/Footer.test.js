import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
//import Adapter from 'enzyme-adapter-react-16'
//Importamos el componente que vamos a probar...
import Footer from '../../components/Footer';

//configure({ adapter: new Adapter()});
//Luego necesitamos crear una suite (una suite de pruebas)
//describe('', ()=> {})
describe('<Footer />', () => {
  const footer = mount(<Footer />);
  //Lo primero que quiero probar es que exista el componente
  //(que exista un componente que haga render)
  test('Render Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Footer haves 3 anchors', () => {
    expect(footer.find('a')).toHaveLength(3);
  });

  // Prueba con snapshot
  test('Footer Snapshot', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
