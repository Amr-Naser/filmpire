import React from 'react';
import { Container , StyledButton , PageNumber} from './styles';

const Pagination = ({currentPage , setPage , totalPages}) => {

    

    const handlePrev = () => {
        if(currentPage !== 1){
            setPage((prevPage) => prevPage - 1)
        }
    };

    const handleNext = () => {
        if(currentPage !== totalPages){
            setPage((prevPage) => prevPage + 1)
        }
    };

    if(totalPages === 0){
        return null;
    }
  return (
    <Container>
        <StyledButton 
            variant='contained'
            color='primary'
            type='button'
            onClick={handlePrev}
        >
            Prev
        </StyledButton>
        <PageNumber variant='h4' >
            {currentPage}
        </PageNumber>
        <StyledButton 
            variant='contained'
            color='primary'
            type='button'
            onClick={handleNext}
        >
            Next
        </StyledButton>
    </Container>
  )
}

export default Pagination;