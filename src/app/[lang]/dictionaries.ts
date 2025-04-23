import "server-only";

const dictionaries: any = {
  "en-US": () =>
    import("../../../locales/en-US.json").then((module) => module.default),
  kh: () => import("../../../locales/kh.json").then((module) => module.default),
};

export const getDictionary: any = async (locale: any) =>
  dictionaries[locale || "kh"]();

export const getDictionaryByFolder: any = async (
  locale: string,
  folder: string
) => {
  const dictionariesByFolder: any = {
    "en-US": () =>
      import(`../../../locales/${folder}/en-US.json`).then(
        (module) => module.default
      ),
    kh: () =>
      import(`../../../locales/${folder}/kh.json`).then(
        (module) => module.default
      ),
  };

  if (typeof dictionariesByFolder[locale || "kh"] === "function") {
    return dictionariesByFolder[locale || "kh"]();
  }

  return {};
};
