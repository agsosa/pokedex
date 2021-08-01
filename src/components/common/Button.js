// Custom button component

import tw from 'twin.macro';
import PropTypes from 'prop-types';

const Btn = tw.a`
disabled:opacity-50 disabled:cursor-not-allowed
flex items-center justify-center space-x-2
rounded-lg border border-gray-800 
text-gray-800 text-lg font-semibold 
px-3 py-1 
hocus:outline-none cursor-pointer
transition duration-300 hover:bg-gray-800 hover:text-gray-100`;

export default function Button({ left, right, label, ...props }) {
  return (
    <Btn {...props}>
      {left}
      <span>{label}</span>
      {right}
    </Btn>
  );
}

Button.defaultProps = {
  label: '',
  left: null,
  right: null,
};

Button.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  label: PropTypes.string,
};
