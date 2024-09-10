import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, redirectIsLogin, redirectNotLogin}) => {
  const { token } = useContext(AuthContext);

  // 로그인된 상태에서 접근할 수 없는 페이지 처리
  if (token && redirectIsLogin) {    
    alert("이미 로그인되어 있습니다.");
    return <Navigate to={redirectIsLogin} />;
  }

  // 로그인된 상태에서 접근할 수 없는 페이지 처리
  if (!token && redirectNotLogin) {    
    alert("로그인이 필요한 페이지입니다.");
    return <Navigate to={redirectNotLogin} />;
  }

  // 로그인되지 않은 상태에서 접근할 수 없는 페이지 처리
  return children
};

export default ProtectedRoute;