import { useState } from "react";

function TodoList() {
  const [lists, setLists] = useState(() => {
    //Get data from storeage and set initial value
    const storeageLists = JSON.parse(localStorage.getItem("lists"));
    return storeageLists;
  });
  const [text, setText] = useState();
  //get on change into input text
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //Add new value into list
  const handleAdd = () => {
    setLists((prev) => {
      //Add new text value into list
      const newLists = [...prev, text];
      //save to local storage
      const jsonLists = JSON.stringify(newLists);
      localStorage.setItem("lists", jsonLists);
      return newLists;
    });
    //Reset value of input text
    setText("");
  };

  return (
    <div style={{ padding: 50 }}>
      <input onChange={handleOnChange} value={text || ""} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {/* Get all elements in list */}
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
