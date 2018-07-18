import React, { Fragment } from "react";
import { GridItem } from "./GridItems";

import {
  Mushroom,
  Olive,
  PepperOne,
  PepperTwo,
  Pepperoni,
  Mozerella,
  Tomato
} from "./Ingredients";

const pepperOneNums = [
  { col: 3, row: 1 },
  { col: 4, row: 2 },
  { col: 2, row: 5 }
];

const pepperTwoNums = [{ col: 1, row: 2 }, { col: 5, row: 4 }];

const pepperoniNums = [
  { col: 2, row: 1 },
  { col: 4, row: 1 },
  { col: 1, row: 2 },
  { col: 1, row: 4 },
  { col: 2, row: 4 },
  { col: 4, row: 4 }
];

const mozerellaNums = [
  { col: 3, row: 1 },
  { col: 4, row: 2 },
  { col: 1, row: 3 },
  { col: 3, row: 3 },
  { col: 2, row: 4 }
];

const mushroomNums = [
  { col: 4, row: 1 },
  { col: 3, row: 2 },
  { col: 5, row: 2 },
  { col: 2, row: 3 },
  { col: 4, row: 3 },
  { col: 2, row: 1 }
];

const tomatoNums = [
  { col: 2, row: 2 },
  { col: 3, row: 3 },
  { col: 4, row: 3 },
  { col: 5, row: 3 },
  { col: 5, row: 4 },
  { col: 3, row: 5 }
];

const oliveNums = [
  { col: 2, row: 1 },
  { col: 2, row: 2 },
  { col: 5, row: 2 },
  { col: 1, row: 4 },
  { col: 3, row: 4 },
  { col: 4, row: 5 }
];

export const pepper = (
  <Fragment>
    {pepperOneNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <PepperOne />
      </GridItem>
    ))}
    {pepperTwoNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <PepperTwo />
      </GridItem>
    ))}
  </Fragment>
);

export const pepperoni = (
  <Fragment>
    {pepperoniNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <Pepperoni />
      </GridItem>
    ))}
  </Fragment>
);

export const mozerella = (
  <Fragment>
    {mozerellaNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <Mozerella />
      </GridItem>
    ))}
  </Fragment>
);

export const mushroom = (
  <Fragment>
    {mushroomNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <Mushroom />
      </GridItem>
    ))}
  </Fragment>
);

export const tomato = (
  <Fragment>
    {tomatoNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <Tomato />
      </GridItem>
    ))}
  </Fragment>
);

export const olive = (
  <Fragment>
    {oliveNums.map(item => (
      <GridItem col={item.col} row={item.row}>
        <Olive />
      </GridItem>
    ))}
  </Fragment>
);
