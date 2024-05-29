import React, { useState, useEffect } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Checkbox,
  TablePagination,
  TableContainer,
  Paper,
} from "@material-ui/core";
import FoodApi from "./FoodApi";

const FoodCalo = ({ searchValue }) => {
  console.log("FoodCalo 에서 App 의 searchValue 를 받음: " + searchValue);
  const [foodCalo, setFoodCalo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchFood = async () => {
      console.log("fetchFood 가 실행될때의 searchValue 값: " + searchValue);
      const data = await FoodApi(searchValue);
      setFoodCalo(data);
    };

    fetchFood();
  }, [searchValue]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = foodCalo.map((n) => n["FOOD_NM_KR "]);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, foodCalo.length - page * rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < foodCalo.length
                  }
                  checked={
                    foodCalo.length > 0 && selected.length === foodCalo.length
                  }
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all foods" }}
                />
              </TableCell>
              <TableCell>음식명</TableCell>
              <TableCell>함량기준량(g)</TableCell>
              <TableCell>에너지(kcal)</TableCell>
              <TableCell>단백질(g)</TableCell>
              <TableCell>지방(g)</TableCell>
              <TableCell>탄수화물(g)</TableCell>
              <TableCell>당류(g)</TableCell>
              <TableCell>나트륨(mg)</TableCell>
              <TableCell>콜레스테롤(mg)</TableCell>
              <TableCell>포화지방산(g)</TableCell>
              <TableCell>트랜스지방산(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foodCalo
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((article, index) => {
                const isItemSelected = isSelected(article["FOOD_NM_KR "]);
                return (
                  <TableRow
                    key={index}
                    onClick={(event) =>
                      handleClick(event, article["FOOD_NM_KR "])
                    }
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                    className="table-row"
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": `enhanced-table-checkbox-${index}`,
                        }}
                      />
                    </TableCell>
                    <TableCell>{article["FOOD_NM_KR "]}</TableCell>
                    <TableCell>{article["SERVING_SIZE "]}</TableCell>
                    <TableCell>{article["AMT_NUM1 "]}</TableCell>
                    <TableCell>{article["AMT_NUM3 "]}</TableCell>
                    <TableCell>{article["AMT_NUM4"]}</TableCell>
                    <TableCell>{article["AMT_NUM6"]}</TableCell>
                    <TableCell>{article["AMT_NUM7"]}</TableCell>
                    <TableCell>{article["AMT_NUM13"]}</TableCell>
                    <TableCell>{article["AMT_NUM22"]}</TableCell>
                    <TableCell>{article["AMT_NUM23"]}</TableCell>
                    <TableCell>{article["AMT_NUM24"]}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={12} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={foodCalo.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default FoodCalo;
