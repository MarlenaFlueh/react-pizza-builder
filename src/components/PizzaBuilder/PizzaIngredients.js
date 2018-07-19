import React, { Fragment } from "react";

import { GridItem } from "./GridItems";
import * as nums from "./IngredientNums";

import {
  Mushroom,
  Olive,
  PepperOne,
  PepperTwo,
  Pepperoni,
  Mozerella,
  Tomato
} from "./Ingredients";

export const pepper = (
  <Fragment>
    {nums.pepperOne.map(item => (
      <GridItem col={item.col} row={item.row}>
        <PepperOne />
      </GridItem>
    ))},
    {nums.pepperTwo.map(ing => (
      <GridItem col={ing.col} row={ing.row}>
        <PepperTwo />
      </GridItem>
    ))}
  </Fragment>
);

export const pepperoni = nums.pepperoni.map(item => (
  <GridItem col={item.col} row={item.row}>
    <Pepperoni />
  </GridItem>
));

export const mozerella = nums.mozerella.map(item => (
  <GridItem col={item.col} row={item.row}>
    <Mozerella />
  </GridItem>
));

export const mushroom = nums.mushroom.map(item => (
  <GridItem col={item.col} row={item.row}>
    <Mushroom />
  </GridItem>
));

export const tomato = nums.tomato.map(item => (
  <GridItem col={item.col} row={item.row}>
    <Tomato />
  </GridItem>
));

export const olive = nums.olive.map(item => (
  <GridItem col={item.col} row={item.row}>
    <Olive />
  </GridItem>
));
