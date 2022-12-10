/**
 * Convert number from px to rem equivalent (default 3 decimal places)
 * @param px - number in px to be converted
 */
export const pxToRem = (px: number, decimalPlaces = 3): string => {
  const rem = parseFloat((px / 16).toFixed(decimalPlaces));
  return `${rem}rem`;
};

/**
 * Filter out props that starts with the _wms prefix. This is used to filter out
 * props that are only used for styled() engine.
 * @param propName - name of the prop
 * @returns whether the prop should be forwarded
 */
export const shouldForwardProp = (propName: string): boolean =>
  !propName.startsWith("_wms");
