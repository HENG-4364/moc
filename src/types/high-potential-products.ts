export type HighPotentialProductsVerticalTabsOption = {
  id: number;
  label: string;
  value: string;
};

export type HorizontalTabPotentialProducts =
  HighPotentialProductsVerticalTabsOption & {
    tabContent: React.ReactNode;
  };
