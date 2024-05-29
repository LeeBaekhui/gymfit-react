import { useState } from "react";
import SearchField from "./components/SearchField";
import FoodCalo from "./components/FoodCalo";
import "./App.css";


function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    console.log("App 에서 SearchField 의 값을 받음: " + value);
    setSearchValue(value);
  };
  
  return (
    <>
    <div> 
      <SearchField onSearch={handleSearch} />
      <FoodCalo searchValue={searchValue} />
    </div>

      
    </>
  );
}

export default App;
