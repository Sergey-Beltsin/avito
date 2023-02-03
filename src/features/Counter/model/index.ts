import { createEvent, createStore, sample } from "effector";

import { useStore } from "effector-react";
import { CounterStore } from "./types";

export const handleIncrement = createEvent<void>();
export const handleDecrement = createEvent<void>();
const counterChanged = createEvent<number>();

const $counter = createStore<CounterStore>(0).on(counterChanged, (_, counter) => counter);

sample({
  clock: handleIncrement,
  source: $counter,
  fn: (counter) => counter + 1,
  target: counterChanged,
});

sample({
  clock: handleDecrement,
  source: $counter,
  fn: (counter) => counter - 1,
  target: counterChanged,
});

export const useCounterStore = (): CounterStore => useStore($counter);
