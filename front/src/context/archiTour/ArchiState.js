import React, { useReducer } from 'react';
import ArchiContext from './archiContext';
import ArchiReducer from './archiReducer';
import { SHOW_BUILDINGS, SEARCH_BUILDINGS, GET_BUILDING } from '../types';

const ArchiState = (props) => {
  // NEEDS TO BE MODIFIED
  //   const initialize = async (text) => {
  //     const rawData = await fetch('/allarchitectures');
  //     const res = await rawData.json();
  //     console.log(res);
  //     return res;
  //   };
  // NEEDS TO BE MODIFIED
  //   const buildinglist = initialize();
  //   console.log(buildinglist);
  // NEEDS TO BE MODIFIED
  const initialState = {
    // buildings: buildinglist,
    buildings: [],
    building: {},
  };

  const [state, dispatch] = useReducer(ArchiReducer, initialState);
  // NEEDS TO BE MODIFIED
  // Show Buildings
  const showBuildings = async () => {
    const rawData = await fetch('/allarchitectures');
    const res = await rawData.json();
    dispatch({
      type: SHOW_BUILDINGS,
      payload: res,
    });
  };

  // Search Buildings
  const searchBuildings = async (text) => {
    const rawData = await fetch('/allarchitectures');
    const res = await rawData.json();
    dispatch({
      type: SEARCH_BUILDINGS,
      payload: res,
    });
  };

  // Get Building
  const getBuilding = async (username) => {
    // Needs to get the specific building
    const rawData = await fetch('/allarchitectures');
    const res = await rawData.json();
    dispatch({
      type: GET_BUILDING,
      payload: res.data,
    });
  };

  return (
    <ArchiContext.Provider
      value={{
        buildings: state.buildings,
        building: state.building,
        showBuildings,
        searchBuildings,
        getBuilding,
      }}
    >
      {props.children}
    </ArchiContext.Provider>
  );
};

export default ArchiState;
