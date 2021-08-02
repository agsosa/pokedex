import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Pagination from '@/components/common/Pagination';

jest.mock('next-translate/useTranslation', () => {
  return jest.fn(() => ({
    lang: 'en',
    t: jest.fn((str) => str),
  }));
});

const totalPages = 3;
const page = 1;

describe('Pagination component', () => {
  it('should render correctly', () => {
    render(<Pagination totalPages={totalPages} page={page} />);

    const firstBtn = screen.getByText('first', { exact: false });
    const pageNumber = screen.getByText('1', { exact: false });

    expect(pageNumber).toBeInTheDocument();
    expect(firstBtn).toBeInTheDocument();
    expect(firstBtn).toBeDisabled();
  });

  it('should jump to last and first page', () => {
    const handlePageJump = jest.fn()

    render(<Pagination totalPages={totalPages} page={2} onPageJump={handlePageJump}/>);

    const lastBtn = screen.getByText('last', { exact: false });
    const firstBtn = screen.getByText("first", {exact: false});

    lastBtn.click();
    expect(handlePageJump).toBeCalledWith(totalPages);

    firstBtn.click();
    expect(handlePageJump).toBeCalledWith(1);
  });

  it('should navigate to previous and next page', () => {
    const handleNextPage = jest.fn()
    const handlePreviousPage = jest.fn()

    render(<Pagination totalPages={totalPages} page={2} onPreviousPage={handlePreviousPage} onNextPage={handleNextPage}/>);

    const previousBtn = screen.getByText('previous', { exact: false });
    const nextBtn = screen.getByText("next", {exact: false});

    previousBtn.click();
    expect(handlePreviousPage).toBeCalledTimes(1)

    nextBtn.click();
    expect(handleNextPage).toBeCalledTimes(1);
  });
});
