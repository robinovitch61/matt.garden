
export function oppositeVisibility(elem: HTMLElement): string {
  return elem.style.visibility === "hidden" ? "visible" : "hidden";
}

export const dayText = (day: number): string => `day ${day.toString().padStart(2, "0")}`;

export const togglePlant = (id: string): void => {
  const elem = document.getElementById(id);
  if (elem) {
    elem.style.visibility = oppositeVisibility(elem);
  } else {
    throw Error(`no plant named ${id}`);
  }
};
