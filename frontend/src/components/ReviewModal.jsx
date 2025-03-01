import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { Link, useParams } from "react-router-dom";
import { useGetReviewMutation } from "../Slices/productsApiSlice";

const ReviewModal = () => {
  const { id } = useParams();
  const modalRef = useRef(null);
  const { userInfo } = useSelector((state) => state.auth);
  const [createReview, { isLoading: loadingProductReview }] =
    useGetReviewMutation(id);
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!rating || !comment) {
      toast.error("please fill the fields");
    } else {
      try {
        await createReview({ rating, comment, id }).unwrap();
        setRating("");
        setComment("");
        toast.success("Thank You for FeedBack");
        modalRef.current.close();
      } catch (error) {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <div>
      <button
        className="btn btn-soft"
        onClick={() => modalRef.current.showModal()}
      >
        ADD REVIEW +
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="review">
            <div className="">
              <div className="py-4">
                <h2 className="text-xl font-semibold mb-4">
                  Write a Customer Review
                </h2>

                {userInfo ? (
                  <form onSubmit={submitHandler} className="space-y-4">
                    <div className="my-2">
                      <label
                        htmlFor="rating"
                        className="block text-sm font-medium text-gray-100"
                      >
                        Rating
                      </label>
                      <select
                        id="rating"
                        required
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border text-gray-700  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </select>
                    </div>
                    <div className="my-2">
                      <label
                        htmlFor="comment"
                        className="block text-sm font-medium text-gray-100"
                      >
                        Comment
                      </label>
                      <textarea
                        id="comment"
                        rows="3"
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      ></textarea>
                    </div>
                    <button
                      disabled={loadingProductReview}
                      type="submit"
                      className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {loadingProductReview ? <Loader /> : "Submit"}
                    </button>
                  </form>
                ) : (
                  <Message className="text-sm text-center mt-4">
                    Please{" "}
                    <Link
                      to="/login"
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      sign in
                    </Link>{" "}
                    to write a review
                  </Message>
                )}
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ReviewModal;
