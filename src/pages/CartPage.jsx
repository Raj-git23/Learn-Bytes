import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../features/cartSlice';
import { toast } from 'react-toastify';
import { ShoppingCart, Trash2, X, CreditCard, Package, Tag, ArrowRight } from 'lucide-react';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, total, totalItems } = useSelector((state) => state.cart);
  console.log(cart);

  const handleRemove = (courseId) => {
    dispatch(removeFromCart(courseId));
    toast.success('Course removed from cart');
  };

  const handleReset = () => {
    dispatch(resetCart());
    toast.success('Cart cleared successfully');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingCart className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          </div>
          <p className="text-gray-600">
            {totalItems > 0
              ? `You have ${totalItems} ${totalItems === 1 ? 'course' : 'courses'} in your cart`
              : 'Your learning journey starts here'}
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-12 h-12 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Start exploring our courses and add them to your cart to begin your learning journey!
            </p>
            <button onClick={()=>window.location.assign('/courses')} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center gap-2 mx-auto">
              Browse Courses
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100 overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Course Thumbnail */}
                    <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.courseName}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Course Details */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-xl font-bold text-gray-900 pr-4">
                          {item.courseName}
                        </h2>
                        <button
                          onClick={() => handleRemove(item._id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                          title="Remove from cart"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.courseDescription || 'No description available'}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Tag className="w-5 h-5 text-purple-600" />
                          <span className="text-2xl font-bold text-purple-600">
                            ₹{item.price}
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemove(item._id)}
                          className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-6 sticky top-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

                {/* Summary Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Package className="w-5 h-5 text-purple-600" />
                      <span>Total Items</span>
                    </div>
                    <span className="font-semibold text-gray-900">{totalItems}</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Subtotal</span>
                    <span className="font-semibold text-gray-900">₹{total}</span>
                  </div>

                  <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Discount</span>
                    <span className="font-semibold text-green-600">-₹0</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-purple-600">₹{total}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Proceed to Checkout
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full border-2 border-red-500 text-red-600 hover:bg-red-50 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    Clear Cart
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center mb-3">Secure Checkout</p>
                  <div className="flex justify-center gap-2">
                    <div className="bg-purple-50 px-3 py-1 rounded text-xs font-medium text-purple-700">
                      SSL Encrypted
                    </div>
                    <div className="bg-purple-50 px-3 py-1 rounded text-xs font-medium text-purple-700">
                      Money Back
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code Section */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 mt-4">
                <h3 className="font-bold text-gray-900 mb-3">Have a Promo Code?</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;