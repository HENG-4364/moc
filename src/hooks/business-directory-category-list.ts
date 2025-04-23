import { settings } from "@/lib/settings";
import { GET_PUBLIC_BUSINESS_DIRECTORY_CATEGORY_LIST_QUERY } from "@/screen/BusinessDirectory/graphql";
import { useQuery } from "@apollo/client";

export const usePublicBusinessDirectoryCategoryList = () => {
  const { data } = useQuery(GET_PUBLIC_BUSINESS_DIRECTORY_CATEGORY_LIST_QUERY, {
    variables: {
      websiteId: settings.websiteId,
    },
  });

  const getPublicBusinessDirectoryCategoryList = data;
  return { getPublicBusinessDirectoryCategoryList };
};
