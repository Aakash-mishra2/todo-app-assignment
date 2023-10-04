import React, {Suspense} from 'react';
import { useSelector } from 'react-redux';
import {Navigate, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './shared/UIElements/LoadingSpinner';
import MainNavigation from './shared/navigation/MainNavigation';
import LoginPage from './loginPage/loginPage';
import Dashboard from './boards/dashboard';
import ToDoList from './todoList/todolist';
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
        <Suspense
          fallback={
            <div className='center'><LoadingSpinner asOverlay /></div>
          }
        >
          {routes}
        </Suspense>
        </main>
    </React.Fragment>
  );
}

export default App;
