/* eslint-disable react/prop-types */
function DeletePopUp({ onCancel, onDelete }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-gradient-to-b from-[#141517] to-[#232528] p-8 rounded-lg items-center flex flex-col shadow-lg border border-[#343A40]">
        <h2 className="text-3xl font-bold text-white mb-4">Are you sure?</h2>
        <p className="text-sm my-4 px-12 text-gray-300 text-center">
          Are you sure you want to delete this mail? This action cannot be
          undone.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={onCancel}
            className="bg-[#3A3B3E] hover:bg-[#4B4C4F] text-white px-8 py-3 rounded-md focus:outline-none transition duration-150 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="bg-gradient-to-r from-[#FA5252] to-[#A91919] hover:from-[#FF6B6B] hover:to-[#D93737] text-white px-8 py-3 rounded-md focus:outline-none transition duration-150 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
