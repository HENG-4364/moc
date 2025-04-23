"use server";

import { PUBLIC_USER_ME_QUERY } from "@/screen/BusinessDirectory/graphql";
import { client } from "../graphql/apollo";

export const getMe = async () => {
  try {
    const { data, errors } = await client.query({
      query: PUBLIC_USER_ME_QUERY,
    });

    if (errors) {
      return {
        data: null,
        error: errors[0].message,
      };
    }

    return {
      data: data?.publicUserMe,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: "Something went wrong",
    };
  }
};
