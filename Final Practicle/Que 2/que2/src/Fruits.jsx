import React from 'react'

const Fruits = () => {

    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

    const handleFruitClick = (fruitName) => {
    alert(`You clicked: ${fruitName}`);
  };

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li onClick={() => handleFruitClick(fruit)} >
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Fruits
