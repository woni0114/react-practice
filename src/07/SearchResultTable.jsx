////7-5. 검색 기능 만들면서 리덕스 복습하기

///7-5-3. 검색 결과 목록 만들기

////7-5-3-1. 화면 컴포넌트 만들기

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchResultTable extends PureComponent {
  render() {
    const { items } = this.props;
    return (
      <table border="1" width="100%">
        <tr>
          <td>아이디</td>
          <td>이름</td>
          <td>나이</td>
        </tr>
        {items.map(({ id, name, age }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
          </tr>
        ))}
      </table>
    );
  }
}

SearchResultTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.name,
      age: PropTypes.number,
    }),
  ),
};
SearchResultTable.defaultProps = {
  items: [],
};
export default SearchResultTable;