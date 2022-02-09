import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Input from './Input';

class CategoriesSidebar extends Component {
  componentDidMount = async () => {
    const { updateAppState } = this.props;
    const categoriesArray = await getCategories();
    updateAppState({ categoriesArray });
  }

  render() {
    const { categoriesArray } = this.props;
    return (
      <div>
        CategoriesSidebar
        <ul>
          { categoriesArray.map((category) => (
            <li key={ category.id }>
              <Input
                type="radio"
                name={ category.name }
                labelText={ category.name }
                labelId="category"
              />
            </li>))}
        </ul>
      </div>
    );
  }
}

CategoriesSidebar.propTypes = {
  updateAppState: PropTypes.func.isRequired,
  categoriesArray: PropTypes.arrayOf(PropTypes.object),
};

CategoriesSidebar.defaultProps = {
  categoriesArray: [],
};

export default CategoriesSidebar;
