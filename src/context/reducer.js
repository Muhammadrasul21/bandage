export const initialState = JSON.parse(localStorage.getItem("store")) || {
  count: 0,
  wishlist: [],
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_LIKE":
      let index = state.wishlist.findIndex((item) => item.id === payload.id);
      let updatedWishlist;

      if (index < 0) {
        updatedWishlist = [...state.wishlist, payload];
      } else {
        updatedWishlist = state.wishlist.filter(({ id }) => id !== payload.id);
      }

      let result = { ...state, wishlist: updatedWishlist };
      localStorage.setItem("store", JSON.stringify(result));

      return result;

    default:
      return state;
  }
};
