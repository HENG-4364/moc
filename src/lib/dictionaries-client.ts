import enUS from "../../locales/en-US.json";
import kh from "../../locales/kh.json";

const dictionaries: Record<string, any> = {
  "en-US": enUS,
  kh: kh,
};

export const getDictionaryClient = (locale: string = "kh") => {
  return dictionaries[locale] || {};
};

export const getDictionaryByFolderClient = (locale: string, folder: string) => {
  try {
    switch (locale) {
      case "en-US":
        return require(`../../locales/${folder}/en-US.json`);
      case "kh":
        return require(`../../locales/${folder}/kh.json`);
      default:
        return {};
    }
  } catch (error) {
    console.error("Error loading dictionary:", error);
    return {};
  }
};
