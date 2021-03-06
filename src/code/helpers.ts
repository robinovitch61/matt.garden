
export function oppositeVisibility(elem: HTMLElement): string {
  return elem.style.visibility === "hidden" ? "visible" : "hidden";
}

export const dayText = (day: number): string => `day ${day.toString()}`;

export const togglePlantVisibility = (plantName: string): void => {
  const elem = document.getElementById(plantName);
  if (elem) {
    elem.style.visibility = oppositeVisibility(elem);
  } else {
    throw Error(`no plant named ${plantName}`);
  }
};

export const toggleSproutVisibility = (plantName: string): void => {
  const sproutId = `sprout-${plantName}`;
  const elem = document.getElementById(sproutId);
  if (elem) {
    elem.style.visibility = oppositeVisibility(elem);
  } else {
    throw Error(`no sprout named ${sproutId}`);
  }
};

export const setHaloVisibility = (plantName: string, visible: boolean): void => {
  const sproutId = `halos-${plantName}`;
  const elem = document.getElementById(sproutId);
  if (elem) {
    elem.style.visibility = visible ? "visible" : "hidden";
  } else {
    throw Error(`no halo named ${sproutId}`);
  }
};
