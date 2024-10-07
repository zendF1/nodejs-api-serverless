const {
  ChimeSDKMeetingsClient,
} = require("@aws-sdk/client-chime-sdk-meetings");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");

const ddb = new DynamoDBClient({
  region: process.env.AWS_REGION || "ap-southeast-1",
});
const { CloudWatchLogsClient } = require("@aws-sdk/client-cloudwatch-logs");

const chime = new ChimeSDKMeetingsClient({
  region: process.env.CHIME_AWS_REGION || "ap-southeast-1",
  endpoint:
    process.env.CHIME_ENDPOINT ||
    `https://meetings-chime.${
      process.env.CHIME_AWS_REGION || "ap-southeast-1"
    }.amazonaws.com`,
});
const cloudWatchClient = new CloudWatchLogsClient({
  region: process.env.AWS_REGION || "ap-southeast-1",
  apiVersion: "2014-03-28",
});

export const handler = async (event: any) => {
  ddb.
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, world!",
      chime: chime,
      ddb: ddb,
      cloudWatchClient: cloudWatchClient,
    }),
  };
};
