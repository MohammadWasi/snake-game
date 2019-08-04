import React from 'react';
export function shallowEquals(arr1, arr2) {
    if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
    let equals = true;
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) equals = false;
    }
    return equals;
  }
  
  export function arrayDiff(arr1, arr2){
    return arr1.map((a, i)=>{ 
      return a - arr2[i]
    })
  }
  
  // display a single cell
  export function GridCell(props) {
      
      
    const classes = `grid-cell 
  ${props.foodCell ? "grid-cell--food" : ""} 
  ${props.snakeCell ? "grid-cell--snake" : ""}
  `;
    return (
      <div
        className={classes}
        style={{ height: props.size + "px", width: props.size + "px" }}
        />
    );
  }