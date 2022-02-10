import React from "react";

export default function GroceryList({ displayList, handleDelete }) {

  return (
    <>
      <ul>
        {displayList.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.input}</li>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </>
  );
}
