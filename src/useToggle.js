import { useState, useCallback } from "react";

export function useToggle(initial) {
  const [open, setOpen] = useState(initial);

  //todo: rubberduck this line of code
  return [open, useCallback(() => setOpen((status) => !status), [])];
//this line works too
//   return [open, () => setOpen((status) => !status), []];
}
