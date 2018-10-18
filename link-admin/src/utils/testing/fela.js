import PropTypes from 'prop-types';
import { shallow as enzymeShallow } from 'enzyme';
import { createRenderer } from 'fela';

export const shallow = (node, options = {}) => {
  const renderer = createRenderer();

  const component = enzymeShallow(node, {
    context: {
      renderer,
    },
    ...options,
  });

  return component;
};
