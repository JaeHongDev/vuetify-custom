interface IVuetifytSelectItem {
  text: string | number | object;
  value: string | number | object;
  disabled: boolean;
  divider: boolean;
  header: string;
}

export const useVutifySelector = (
  target: Array<never>,
  textName: string,
  valueName: string
): Array<IVuetifytSelectItem> => {
  return target.map((item) => ({
    text: item[textName],
    value: item[valueName],
    disabled: false,
    divider: false,
    header: "",
  }));
};
