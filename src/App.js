import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import MainNavigation from './shared/navigation/MainNavigation';
import Dashboard from './boards/dashboard';
import ToDoList from './todoList/todolist';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainNavigation />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/boards/new' element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
