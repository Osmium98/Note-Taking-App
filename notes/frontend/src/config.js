const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: "ap-south-1",
    BUCKET: "subhammallik-notes-storages-uploadsbucketc4b27cc7-smz4msokn3bi",
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://3vfazev28c.execute-api.ap-south-1.amazonaws.com",
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_8FGaXZYMt",
    APP_CLIENT_ID: "1s0gnj8gad83n593k54m4is80k",
    IDENTITY_POOL_ID: "ap-south-1:9fd64bb8-2d83-4152-a0e7-54d26c18079c",
  },
};

export default config;