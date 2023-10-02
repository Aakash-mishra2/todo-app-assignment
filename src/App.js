import React from 'react';
import {Route, Navigate, Routes } from 'react-router-dom';
import MainNavigation from './shared/navigation/MainNavigation';
import Dashboard from './boards/dashboard';
import ToDoList from './todoList/todolist';

import './App.css';
function App() {
  return (
    <React.Fragment>    
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/boards/new" element={<ToDoList />} />
        </Routes>
        </main>
    </React.Fragment>
  );
}

export default App;
