import AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  region: import.meta.env.VITE_AWS_REGION || "us-west-1",
});

const s3 = new AWS.S3();

export const uploadFileToS3 = async (file, name) => {
  const timestamp = Date.now().toString();
  const params = {
    Bucket: import.meta.env.VITE_AWS_S3_BUCKET_NAME,
    Key: encodeURIComponent(name) + timestamp + encodeURIComponent(file.name),
    Body: file,
  };

  try {
    await s3.upload(params).promise();
    const url = `https://${params.Bucket}.s3.${
      AWS.config.region
    }.amazonaws.com/${encodeURIComponent(params.Key)}`;
    return url;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error;
  }
};
