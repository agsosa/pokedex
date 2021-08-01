import tw from 'twin.macro';

const Tag = tw.div`border px-3 rounded-xl`;

export default function TypeTag({ type }) {

  return (
    <Tag>{type}</Tag>
  )
}