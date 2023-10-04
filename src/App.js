import React from 'react';
import {Navigate, Route, Routes } from 'react-router-dom';
import MainNavigation from './shared/navigation/MainNavigation';
import Dashboard from './boards/dashboard';
import ToDoList from './todoList/todolist';
import { useSelector } from 'react-redux';
import LoginPage from './loginPage/loginPage';
import './App.css';
function App() {

  const isLoggedIn = useSelector((state) => state.userAccount.isLoggedIn);

  let routes;
  if(isLoggedIn ) {
    routes = (
      <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/boards/new" element={<ToDoList />} />
        </Routes>
    )
  }
  else {
    routes = (
      <Routes>
        <Route path="/boards/new" element={<Navigate to="/"/>} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    )
  }
  return (
    <React.Fragment>    
        <MainNavigation />
        <main>
          {routes}
        </main>
    </React.Fragment>
  );
}

export default App;
