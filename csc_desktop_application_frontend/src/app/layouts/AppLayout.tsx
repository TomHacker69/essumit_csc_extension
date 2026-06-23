import React from 'react';
import { Outlet } from 'react-router';
import { GovHeader } from '../components/GovHeader';
import { GovFooter } from '../components/GovFooter';
import { Sidebar } from '../components/Sidebar';

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#EEF1F7' }}>
      <GovHeader isLoggedIn={true} operatorName="राजेश कुमार साहू" />
      <div className="flex flex-1" style={{ minHeight: 0 }}>
        <Sidebar />
        <main className="flex-1 overflow-auto flex flex-col" style={{ minWidth: 0 }}>
          <div className="flex-1">
            <Outlet />
          </div>
          <GovFooter />
        </main>
      </div>
    </div>
  );
}