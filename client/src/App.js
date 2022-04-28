import './App.css';
import { Routes, Route } from 'react-router-dom';

import GroupList from './pages/GroupList';
import GroupListt from './pages/GroupsByOwner';
import GroupDetails from './pages/GroupDetails';
import EditGroups from './pages/EditGroup';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';
import HomeView from './components/HomeView'
import SamplePageView from './components/SamplePageView';
import PricingView from './components/PricingView';



import SearchGroup from './components/SearchGroup';



import UserProfileEdit from './components/UserProfileEdit';
import LoggedUserInfo from './components/LoggedUserInfo';


function App() {
  return (
    <>
      <Navbar />
    <div className="App">

      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/pricing' element={<PricingView />} />
        <Route path='/xD' element={<SamplePageView />} />

        <Route
          path='/groups'
          element={
            <ProtectedRoute redirectTo='/login'>
              <GroupList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/groupex'
          element={<ProtectedRoute redirectTo='/login'>
              <GroupListt />
            </ProtectedRoute>
          }
        />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/groups/:id' element={<GroupDetails />} />
        <Route path='/groups/edit/:id' element={<EditGroups />} />
        <Route path='/searchgroup' element={<SearchGroup />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/userprofileedit/:id' element={<UserProfileEdit />} />

      </Routes>
       
        <LoggedUserInfo />
    </div>
    </>
  );
}

export default App;
