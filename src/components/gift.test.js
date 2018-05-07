import React from 'react';
import { shallow } from 'enzyme';
import Gift from './gift';

describe('Gift', () => {
  let gift;
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: {id: 1}, removeGift: mockRemove };

  beforeEach(() => {
    gift = shallow(<Gift {...props} />);
    // similar to <Gift id: props.id, removeGift: props.mockRemove };
  });

  test('it can be created', () => {
    expect(gift).toMatchSnapshot();
  });

  test('It initializes a person and present in `state`', () => {
    expect(gift.state()).toEqual({
      person: '',
      present: '',
    });
  });

  describe('when typing into the person input', () => {
    const PERSON = 'uncle'
    beforeEach( () => {
      gift.find('.input-person').simulate('change', {
        target: {
          value: PERSON,
        }
      });
    });

    test('It updates the person in `state`', () => {
      expect(gift.state().person).toEqual(PERSON);
    });
  });

  describe('when typing into the present input ', () => {
    const PRESENT = 'Golf Clubs';


    beforeEach(() => {
      gift.find('.input-present').simulate('change', {
        target: {
          value: PRESENT,
        }
      });
    });

    test('It updates the present in `state`', () => {
      expect(gift.state().present).toEqual(PRESENT);
    });
  });

  describe('clicking remove gift button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    test('it calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
