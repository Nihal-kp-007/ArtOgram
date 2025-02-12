import { Link, useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartItemsQuery } from "../Slices/cartApiSlice";
import { useLogoutUserMutation } from "../Slices/userApiSlice";
import { logout } from "../Slices/authSlice";
import { useGetWishListItemsQuery } from "../Slices/WishListApiSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const userId = userInfo?._id;
  const { data: products, isLoading } = useGetCartItemsQuery(userId);
  const { data } = useGetWishListItemsQuery();

  const [logoutApiCall] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error.data.message);
    }
  };
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/"}>Homepage</Link>
              </li>
              <li>
                <Link to={""}>Notification</Link>
              </li>
              <li>
                <Link to={""}>About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to={"/"} className="text-xl">
            ArtOgram
          </Link>
        </div>
        <div className="navbar-end">
          <div className="hidden mr-1.5 sm:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-sm"
            />
          </div>
          <Link to={"/wishlist"}>
            <div role="button" className="btn ml-1.5 btn-ghost btn-circle">
              <div className="indicator">
                <IoHeartOutline size={20} />
                <span className="badge badge-sm indicator-item">
                  {userInfo ? data?.wishListItems?.length : 0}
                </span>
              </div>
            </div>
          </Link>
          <div className="flex-none">
            <Link to={"/cart"}>
              <div className="dropdown dropdown-end mr-1.5">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">
                      {userInfo ? products?.cartItems?.length : 0}
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {userInfo ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <span className="justify-between">Profile</span>
                  </li>
                  <li>
                    <span>Settings</span>
                  </li>
                  <li>
                    <span onClick={logoutHandler}>Logout</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <Link to={"/login"}>Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
