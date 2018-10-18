export const diveTo = (shallowWrapper, selector, options) => {
  let component = shallowWrapper;

  while (!component.is(selector)) {
    component = component.dive(options);
  }

  return component;
};

export const diveInto = (shallowWrapper, selector, options) => {
  return diveTo(shallowWrapper, selector, options).dive();
};
