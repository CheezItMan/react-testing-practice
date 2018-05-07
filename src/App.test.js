import React from 'react';
// Allows you to shallowly render the component (only 1-layer deep)
import { shallow } from 'enzyme';
import App from './App';



describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  test('it renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  test('it initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('When clicking the add-gift button', () => {
    const id = 1;
    beforeEach(() => {
      app.find('.btn-add').simulate('click');

    });

    test('it adds new gifts to `state`', () => {
      expect(app.state().gifts.length).toEqual(1);
      expect(app.state().gifts).toEqual([{ id }]);
    });

    test('it adds a new gift to the giftlist', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    test('It creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });



    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      test('it removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });

});
