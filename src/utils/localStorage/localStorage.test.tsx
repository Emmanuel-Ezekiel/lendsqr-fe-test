import { useLocalStorage } from './localStorage'; // Replace with the correct module path

describe('useLocalStorage', () => {
  it('should return the default value and update the stored value when setValue is called', () => {
    const keyName = 'testKey';
    const defaultValue = 'defaultValue';
    const newValue = 'newValue';

    // Custom mock for localStorage
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };

    // Mocking localStorage methods
    const getItemSpy = jest.spyOn(localStorageMock, 'getItem');
    const setItemSpy = jest.spyOn(localStorageMock, 'setItem');

    // Mocking window.localStorage
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    // Render the hook
    const hookResult = useLocalStorage(keyName, defaultValue);

    expect(hookResult[0]).toBe(defaultValue);

    hookResult[1](newValue);

    expect(hookResult[0]).toBe(newValue);
    expect(setItemSpy).toHaveBeenCalledWith(keyName, JSON.stringify(newValue));
  });
});
