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

export const pepper = (
  <Fragment>
    <GridItem col="3" row="1">
      <PepperOne />
    </GridItem>
    <GridItem col="4" row="2">
      <PepperOne />
    </GridItem>
    <GridItem col="2" row="5">
      <PepperOne />
    </GridItem>
    <GridItem col="1" row="2">
      <PepperTwo />
    </GridItem>
    <GridItem col="5" row="4">
      <PepperTwo />
    </GridItem>
  </Fragment>
);

export const pepperoni = (
  <Fragment>
    <GridItem col="2" row="1">
      <Pepperoni />
    </GridItem>
    <GridItem col="4" row="1">
      <Pepperoni />
    </GridItem>
    <GridItem col="1" row="2">
      <Pepperoni />
    </GridItem>
    <GridItem col="1" row="4">
      <Pepperoni />
    </GridItem>
    <GridItem col="2" row="4">
      <Pepperoni />
    </GridItem>
    <GridItem col="4" row="4">
      <Pepperoni />
    </GridItem>
  </Fragment>
);

export const mozerella = (
  <Fragment>
    <GridItem col="3" row="1">
      <Mozerella />
    </GridItem>
    <GridItem col="4" row="2">
      <Mozerella />
    </GridItem>
    <GridItem col="1" row="3">
      <Mozerella />
    </GridItem>
    <GridItem col="3" row="3">
      <Mozerella />
    </GridItem>
    <GridItem col="2" row="4">
      <Mozerella />
    </GridItem>
  </Fragment>
);

export const mushroom = (
  <Fragment>
    <GridItem col="4" row="1">
      <Mushroom />
    </GridItem>
    <GridItem col="3" row="2">
      <Mushroom />
    </GridItem>
    <GridItem col="5" row="2">
      <Mushroom />
    </GridItem>
    <GridItem col="2" row="3">
      <Mushroom />
    </GridItem>
    <GridItem col="4" row="3">
      <Mushroom />
    </GridItem>
    <GridItem col="2" row="1">
      <Mushroom />
    </GridItem>
  </Fragment>
);

export const tomato = (
  <Fragment>
    <GridItem col="2" row="2">
      <Tomato />
    </GridItem>
    <GridItem col="3" row="3">
      <Tomato />
    </GridItem>
    <GridItem col="4" row="3">
      <Tomato />
    </GridItem>
    <GridItem col="5" row="3">
      <Tomato />
    </GridItem>
    <GridItem col="5" row="4">
      <Tomato />
    </GridItem>
    <GridItem col="3" row="5">
      <Tomato />
    </GridItem>
  </Fragment>
);

export const olive = (
  <Fragment>
    <GridItem col="2" row="1">
      <Olive />
    </GridItem>
    <GridItem col="2" row="2">
      <Olive />
    </GridItem>
    <GridItem col="5" row="2">
      <Olive />
    </GridItem>
    <GridItem col="1" row="4">
      <Olive />
    </GridItem>
    <GridItem col="3" row="4">
      <Olive />
    </GridItem>
    <GridItem col="4" row="5">
      <Olive />
    </GridItem>
  </Fragment>
);
