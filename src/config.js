const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "	notes-app-serverless-aw",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ujjz66vz69.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_wbOwT6PjN",
      APP_CLIENT_ID: "6pndbrio5kjchgptp6qqbfu9sa",
      IDENTITY_POOL_ID: "us-east-1:65784331-e869-4dd6-b0ac-deb598a2be7d",
    },
  };
  
  export default config;