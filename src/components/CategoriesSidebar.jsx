import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';
import Input from './Input';
import '../Styles/allProducts.css';

class CategoriesSidebar extends Component {
  componentDidMount = async () => {
    const { updateAppState } = this.props;
    const categoriesArray = await getCategories();
    updateAppState({ categoriesArray });
  }

  onRadioButtonClick = (categoryId) => {
    const { updateAppState, handleClick } = this.props;
    updateAppState({ categoryId }, handleClick);
  }

  render() {
    const { categoriesArray } = this.props;
    return (
      <div className="sideCard">
        <p>CategoriesSidebar</p>
        <ul>
          { categoriesArray.map((category) => (
            <li key={ category.id }>
              <Input
                classInput="sidebarInput"
                classLabel="sidebarLabel"
                type="radio"
                name="item-categoria"
                id={ category.id }
                labelText={ category.name }
                labelId="category"
                onChange={ () => this.onRadioButtonClick(category.id) }
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
  handleClick: PropTypes.func.isRequired,
};

CategoriesSidebar.defaultProps = {
  categoriesArray: [],
};

export default CategoriesSidebar;