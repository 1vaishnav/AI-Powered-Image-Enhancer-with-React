import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageAPI";

const Home = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadImage(URL.createObjectURL(file));
        setloading(true);
        try {
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error while enhancing the image. Please try again later.");
            setloading(false);
        }
    };

    const downloadImage = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "enhanced-image.png"; // Optional: make it dynamic
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <ImageUpload UploadImageHandler={UploadImageHandler} />

            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage?.image}
            />

            {/* Download Button */}
            {enhancedImage?.image && !loading && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => downloadImage(enhancedImage.image)}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                    >
                        Download Enhanced Image
                    </button>
                </div>
            )}
        </>
    );
};

export default Home;
