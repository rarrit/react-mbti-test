import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "@/context/AuthContext"
import { useContext, useState } from "react"
import Layout from "@/components/Layout"
import Join from "@/pages/Join"
import Login from "@/pages/Login"
import Main from "@/pages/Main"
import Mypage from "@/pages/Mypage"
import { useEffect } from "react"
import ProtectedRoute from "@/components/ProtectedRoute"




const Router = () => {
  const { isLogin } = useContext(AuthContext); // 로그인 상태 확인
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    setUser(isLogin); // isLogin 변경될 때 user 업데이트
  }, [isLogin]); 

  console.log("user =>", user);
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
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
