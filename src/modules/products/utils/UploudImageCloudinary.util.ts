import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function UploadImageCloudinary(imagePath: string) {
  try {
    const upload = await cloudinary.v2.uploader.upload(imagePath);

    return upload;
  } catch (err) {
    console.log(err);
    throw new Error('Error to upload image to Cloudinary');
  }
}