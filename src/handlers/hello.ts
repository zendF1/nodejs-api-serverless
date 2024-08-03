"use strict";
export const handler = async (event: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, world!",
      databaseUrl: process.env.DB_URI,
    }),
  };
};
