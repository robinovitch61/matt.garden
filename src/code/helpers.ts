
export function oppositeVisibility(elem: HTMLElement): string {
  return elem.style.visibility === "hidden" ? "visible" : "hidden";
}

export const dayText = (day: number): string => `day ${day.toString()}`;

export function setHeightsUsingJsBecauseMobileIsDumb(): void {
  const grid = document.getElementById("grid");
  const header = document.getElementById("header");
  const plantSpace = document.getElementById("plant");
  const controls = document.getElementById("controls");
  const fact = document.getElementById("fact");

  if (!grid || !header || !plantSpace || !controls || !fact) {
    throw Error("Garden failed to grow while setting heights");
  }

  const numDivisions = 8;
  const height = window.innerHeight;
  const pxPerDivision = Math.floor(height / numDivisions);
  grid.style.height = `${height}px`;
  header.style.height = `${pxPerDivision}px`;
  plantSpace.style.height = `${4 * pxPerDivision}px`;
  controls.style.height = `${pxPerDivision}px`;
  fact.style.height = `${2 * pxPerDivision}`;
}
