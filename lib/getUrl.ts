import { storage } from "@/appwrite";

const getUrl = async (image: Image) => {
  const url = storage.getFileView(image.bucketId, image.fileId);
  return url.toString(); 
};

export default getUrl;
