import Loading from "./Loading";

const ImagePreview = (props) => {
    const downloadImage = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.download = "enhanced-image.png"; // You can change this dynamically if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Original Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                    Original Image
                </h2>

                {props.uploaded ? (
                    <img
                        src={props.uploaded}
                        alt="Original"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Image Selected
                    </div>
                )}
            </div>

            {/* Enhanced Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
                    Enhanced Image
                </h2>

                {props.enhanced && !props.loading ? (
                    <>
                        <img
                            src={props.enhanced}
                            alt="Enhanced"
                            className="w-full h-full object-cover"
                        />
                        <div className="flex justify-center py-4">
                            <button
                                onClick={() => downloadImage(props.enhanced)}
                                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
                            >
                                Download Enhanced Image
                            </button>
                        </div>
                    </>
                ) : props.loading ? (
                    <Loading />
                ) : (
                    <div className="flex items-center justify-center h-80 bg-gray-200">
                        No Enhanced Image
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImagePreview;
