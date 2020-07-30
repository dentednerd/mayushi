import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';

const PageBar = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: ${theme.fontSizes.large} auto;
`;

const Paginate = styled.section`
  display: block;
  max-width: 25%;
  background-color: ${theme.colors.darkBlue};
  color: #fff;
  padding: ${theme.fontSizes.small} ${theme.fontSizes.medium};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 1.25rem;
  text-align: left;
  font-size: 0.75rem;
  cursor: pointer;
`;

const Pagination = ({ count, currentPage, setCurrentPage }) => {
  if (!count) return null;

  return (
    <PageBar>
      {count === 20 && (
        <Paginate style={{ alignSelf: 'flex-start' }} onClick={() => setCurrentPage(currentPage + 1)}>
          &laquo; older
        </Paginate>
      )}
    
      {currentPage > 1 && (
        <Paginate style={{ alignSelf: 'flex-end' }}onClick={() => setCurrentPage(currentPage - 1)}>
          newer &raquo;
        </Paginate>
      )}
    </PageBar>
  );
}

export default Pagination;
