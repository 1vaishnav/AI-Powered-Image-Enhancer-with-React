import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../AuthContext';

const ImageUpload = (props) => {
    const { user } = useAuth();

    const ShowImageHandler = async (e) => {
        const file = e.target.files[0];
        if (!file || !user) return;

        // Pass to parent for preview or enhancement
        props.UploadImageHandler(file);

        // Optional: Convert image to base64 or use file.name
        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64Image = reader.result;

            // Save to Firestore
            await addDoc(collection(db, "images"), {
                userId: user.uid,
                imageName: file.name,
                imageData: base64Image,
                timestamp: new Date()
            });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-lg font-medium text-gray-600">
                    Click and drag to upload your image
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;
