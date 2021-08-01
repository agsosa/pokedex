import tw from 'twin.macro';

const Tag = tw.div`border border-gray-300 uppercase px-3 py-1 rounded-xl`;

export default function TypeTag({ type }) {

  return (
    <Tag>{type}</Tag>
  )
}