// Simple component to display a pokemon type

import tw from 'twin.macro';
import propTypes from 'prop-types';

const Tag = tw.div`border border-gray-300 uppercase px-3 py-1 rounded-xl transition duration-500 hover:bg-gray-200 hover:bg-opacity-60`;

export default function TypeTag({ type }) {

  return (
    <Tag>{type}</Tag>
  )
}

TypeTag.defaultProps = {
  type: ""
}

TypeTag.propTypes = {
  type: propTypes.string
}