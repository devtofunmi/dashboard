"use client";

import React from "react";

const AdminInfo = () => (
  <div className="flex items-center gap-4 mb-6">
    <img src="/avather.jpg" alt="Admin" className="w-14 h-14 rounded-full object-cover" />
    <div>
      <h2 className="text-xl font-semibold">codebreaker</h2>
      <p className="text-gray-400 text-sm">Administrator</p>
    </div>
  </div>
);

export default AdminInfo;