"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { toggleCart, removeItem, updateQuantity } from '@/features/cartSlice';
import { XMarkIcon, PlusIcon, MinusIcon, TrashIcon, SparklesIcon } from '@/lib/icons';
import { geminiService } from '@/lib/geminiService';

const CartDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);
  const [advice, setAdvice] = useState<string>('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);

  const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  useEffect(() => {
    if (isOpen && items.length > 0) {
      handleGetAdvice();
    }
  }, [isOpen]);

  const handleGetAdvice = async () => {
    setLoadingAdvice(true);
    const text = await geminiService.getShoppingAdvice(items);
    setAdvice(text);
    setLoadingAdvice(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={() => dispatch(toggleCart())} />
      
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-2xl">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold text-slate-900">Shopping Cart</h2>
                <button
                  onClick={() => dispatch(toggleCart())}
                  className="p-2 text-slate-400 hover:text-slate-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* AI Advice Section */}
              <div className="mt-6 bg-indigo-50 rounded-2xl p-4 border border-indigo-100">
                <div className="flex items-center space-x-2 text-indigo-700 font-semibold mb-2">
                  <SparklesIcon className="h-5 w-5" />
                  <span>AI Shopper Advice</span>
                </div>
                {loadingAdvice ? (
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce" />
                    <div className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  </div>
                ) : (
                  <p className="text-sm text-indigo-900 leading-relaxed italic">
                    "{advice || "Add some items for smart recommendations!"}"
                  </p>
                )}
                {items.length > 0 && !loadingAdvice && (
                   <button 
                    onClick={handleGetAdvice}
                    className="mt-2 text-xs font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                   >
                     Refresh Advice
                   </button>
                )}
              </div>

              <div className="mt-8">
                {items.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-slate-400">Your cart is empty</p>
                    <button 
                      onClick={() => dispatch(toggleCart())}
                      className="mt-4 text-indigo-600 font-medium"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  <ul className="divide-y divide-slate-100">
                    {items.map((item) => (
                      <li key={item.id} className="py-6 flex">
                        <div className="flex-shrink-0 w-24 h-24 border border-slate-200 rounded-xl overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-center object-cover" />
                        </div>
                        <div className="ml-4 flex-1 flex flex-col">
                          <div>
                            <div className="flex justify-between text-base font-semibold text-slate-900">
                              <h3>{item.name}</h3>
                              <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <p className="mt-1 text-sm text-slate-500 line-clamp-1">{item.category}</p>
                          </div>
                          <div className="flex-1 flex items-end justify-between text-sm">
                            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                              <button 
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                className="p-1 px-2 hover:bg-slate-50 text-slate-500 transition-colors"
                              >
                                <MinusIcon className="h-4 w-4" />
                              </button>
                              <span className="px-2 font-medium text-slate-900">{item.quantity}</span>
                              <button 
                                onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                className="p-1 px-2 hover:bg-slate-50 text-slate-500 transition-colors"
                              >
                                <PlusIcon className="h-4 w-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => dispatch(removeItem(item.id))}
                              className="font-medium text-red-500 hover:text-red-600 flex items-center space-x-1"
                            >
                              <TrashIcon className="h-4 w-4" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t border-slate-100 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-bold text-slate-900 mb-4">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-slate-500 mb-6">Shipping and taxes calculated at checkout.</p>
                <button className="w-full bg-indigo-600 text-white py-4 px-6 rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100 active:scale-95">
                  Checkout Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
