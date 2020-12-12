
export function oppositeVisibility(elem: HTMLElement): string {
  return elem.style.visibility === "hidden" ? "visible" : "hidden";
}

export const dayText = (day: number): string => `day ${day.toString().padStart(2, "0")}`;
