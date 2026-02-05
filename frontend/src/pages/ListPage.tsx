// 게시글 목록을 보여줌
// 글쓰기 버튼

import { useNavigate } from "react-router-dom"; // 리액트 라우터에서 다른 페이지로 이동시키는 리액트 훅


// 타입스크립트 타입 정의
interface Post {
    id: number; 
    title: string;
    author: string;
    date: string;
}

// 더미 데이터
