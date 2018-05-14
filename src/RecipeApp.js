import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title:"Pasta",
          instructions:'Mix ingredients',
          ingredients: ['Flour', 'Water'],
          img:'spaghetti.jpg'
        },
        {
          id: 1,
          title: "Milkshake",
          instructions: 'Combine ice cream and milk. Blend until creamy',
          ingredients: ['2 Scoops Ice cream', '8 ounces milk'],
          img: 'milkshake.jpg'
        },
        {
          id: 2,
          title: 'Avocado Toast',
          instructions: 'Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.',
          ingredients: ['2 slices of bread', '1 avocado', '1 tablespoon olive oil', '1 pinch salt', 'pepper'],
          img: 'avocado_toast.jpg'
        }
      ],
      nextRecipeId: 3,
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;