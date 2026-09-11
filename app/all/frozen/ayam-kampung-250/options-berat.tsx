"use client"
import React, { useState } from 'react';
//function RadioButtonGroup() {

export default function OptionsBerat({ onValueChangeHarga: number }) {
  
  return (
                   <div className="flex items-center gap-6">
                            {/* Variant Label */}
                            <h4 className="text-lg font-semibold whitespace-nowrap">Link :</h4>                          
                            {/* Radio Group Wrapper */}
                            <div role="radiogroup" aria-label="Pilih Berat" className="flex items-center gap-4 w-full">                              
                              {/* Option 1: Green / 250 gr */}
                              <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex size-5 items-center justify-center rounded-full bg-green-600 shadow-xs transition-all ring-offset-2 group-hover:ring-2 group-hover:ring-green-600/50 peer-checked:ring-2 peer-checked:ring-green-600">
                                  <input 
                                    type="radio" 
                                    name="berat" 
                                    value="30000" 
                                    checked={selectedHarga === '30000'}
                                    onChange={(e) => onValueChangeHarga(e.target.value)} 
                                    className="peer sr-only" 
                                  />
                                  {/* Inner dot for active state */}
                                  <div className="hidden size-2 rounded-full bg-white peer-checked:block" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">250 gr</span>
                              </label>                          
                              {/* Option 2: Amber / 500 gr */}
                              <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex size-5 items-center justify-center rounded-full bg-amber-600 shadow-xs transition-all ring-offset-2 group-hover:ring-2 group-hover:ring-amber-600/50 peer-checked:ring-2 peer-checked:ring-amber-600">
                                  <input 
                                    type="radio" 
                                    name="berat" 
                                    value="55000" 
                                    checked={selectedHarga === '55000'}
                                    onChange={(e) => onValueChangeHarga(e.target.value)} 
                                    className="peer sr-only" 
                                    defaultChecked
                                  />
                                  {/* Inner dot for active state */}
                                  <div className="hidden size-2 rounded-full bg-white peer-checked:block" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">500 gr</span>
                              </label>
                              {/* Option 3: Yellow / 750 gr */}
                              <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex size-5 items-center justify-center rounded-full bg-yellow-600 shadow-xs transition-all ring-offset-2 group-hover:ring-2 group-hover:ring-yellow-600/50 peer-checked:ring-2 peer-checked:ring-yellow-600">
                                  <input 
                                    type="radio" 
                                    name="berat" 
                                    value="75000" 
                                    checked={selectedHarga === '75000'}
                                    onChange={(e) => onValueChangeHarga(e.target.value)} 
                                    className="peer sr-only" 
                                  />
                                  {/* Inner dot for active state */}
                                  <div className="hidden size-2 rounded-full bg-white peer-checked:block" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">750 gr</span>
                              </label>                          
                              {/* Option 4: lime / 1000 gr */}
                              <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex size-5 items-center justify-center rounded-full bg-lime-600 shadow-xs transition-all ring-offset-2 group-hover:ring-2 group-hover:ring-lime-600/50 peer-checked:ring-2 peer-checked:ring-lime-600">
                                  <input 
                                    type="radio" 
                                    name="berat" 
                                    value="90000"                                     
                                    checked={selectedHarga === '90000'}
                                    onChange={(e) => onValueChangeHarga(e.target.value)} 
                                    className="peer sr-only" 
                                  />
                                  {/* Inner dot for active state */}
                                  <div className="hidden size-2 rounded-full bg-white peer-checked:block" />
                                </div>
                                <span className="text-sm font-medium text-slate-700">1000 gr</span>
                              </label>                          
                            </div>
                        </div>  
  )
}
