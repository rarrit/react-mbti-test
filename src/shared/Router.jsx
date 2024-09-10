import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "@/components/Layout"
import Join from "@/pages/Join"
import Login from "@/pages/Login"
import Main from "@/pages/Main"
import Mypage from "@/pages/Mypage"
import ProtectedRoute from "@/components/ProtectedRoute"
import Test from "@/pages/TestPage"
import TestResultPage from "@/pages/TestResultPage"




const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>        
          <Route path="/" element={<Main/>}/>                    
          <Route 
            path="/join" 
            element={
              <ProtectedRoute redirectIsLogin="/">
                <Join/>
              </ProtectedRoute>
            }
          />
          <Route 
            path="/login" 
            element={
              <ProtectedRoute redirectIsLogin="/">
                <Login/>
              </ProtectedRoute>
            }
          />        
          <Route 
            path="/mypage" 
            element={
              <ProtectedRoute redirectNotLogin="/login">
                <Mypage/>
              </ProtectedRoute>
            }
          />   
          <Route 
            path="/mbti" 
            element={
              <ProtectedRoute redirectNotLogin="/login">
                <Test/>
              </ProtectedRoute>
            }
          />  
          <Route 
            path="/results" 
            element={
              <ProtectedRoute redirectNotLogin="/login">
                <TestResultPage/>
              </ProtectedRoute>
            }
          />  
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
