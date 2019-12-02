export default {
  STRIPE_KEY: "pk_test_ynNf2DI3PwokG4JmBnJmOAs70099PLbOmR",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-the-best"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://7le7gx9kje.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_sqqVgQmdp",
    APP_CLIENT_ID: "7png7j333hf0pq9d7ks6sbq05l",
    IDENTITY_POOL_ID: "us-east-2:2e463790-7155-4ad0-8d33-8a290fef19b5"
  }
};
