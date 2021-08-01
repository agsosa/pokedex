// Pagination component

import tw from 'twin.macro';
import PropTypes from 'prop-types';

const Container = tw.div`w-full flex flex-col space-y-2 mt-8 text-xl justify-center items-center`;

const Btn = tw.button`border px-3 py-1 bg-white rounded-md 
disabled:opacity-60 disabled:cursor-not-allowed 
hocus:outline-none 
transition duration-500 hover:bg-gray-200`;

const PageText = tw.span``;

const BtnContainer = tw.div`flex space-x-2`;

export default function Pagination({ totalPages = 0, page = 1, onPreviousPage, onNextPage, onPageJump }) {
  if (totalPages === 0) return null;

  const handleFirstPage = () => {
    if (onPageJump) onPageJump(1);
  };

  const handleLastPage = () => {
    if (onPageJump) onPageJump(totalPages);
  };

  const isFirstPage = page == 1;
  const isLastPage = page == totalPages;

  return (
    <Container>
      <PageText>
        Page {page}/{totalPages}
      </PageText>
      <BtnContainer>
        <Btn disabled={isFirstPage} onClick={handleFirstPage}>
          First
        </Btn>
        <Btn disabled={isFirstPage} onClick={onPreviousPage}>
          Previous
        </Btn>
        <Btn disabled={isLastPage} onClick={onNextPage}>
          Next
        </Btn>
        <Btn disabled={isLastPage} onClick={handleLastPage}>
          Last
        </Btn>
      </BtnContainer>
    </Container>
  );
}

Pagination.defaultProps = {
  totalPages: 0,
  page: 1,
  onPreviousPage: null,
  onNextPage: null,
  onPageJump: null,
};

Pagination.propTypes = {
  totalPages: PropTypes.number,
  page: PropTypes.number,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func,
  onPageJump: PropTypes.func,
};
