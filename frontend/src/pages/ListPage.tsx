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
const dummyPosts: Post[] = [
    { id: 1, title: '1st posting', author: 'Mond', date: '2026-02-04'},
    { id: 2, title: '2nd posting', author: 'Tacho', date: '2026-02-05'},
];

// 파일 이름과 함수 이름 똑같이 하는게 권장되는 규칙
// 한 파일당 하나의 주요 컴포넌트 함수만 두는 게 일반적

function ListPage() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
            <h1>게시글 목록</h1>

            <button onClick={() => navigate('/create')} style={{ marginBottom: '20px' }}>
                글쓰기
            </button>

            <ul>
                {dummyPosts.map((post) => (
                    <li
                        key={post.id}
                        onClick={() => navigate(`/post/${post.id}`)}
                        style={{ cursor: 'pointer', marginBottom:'10px' }}
                    >
                        <strong>{post.title}</strong> - {post.author} ({post.date})    
                    </li>
                ))}
            </ul>
        </div>
        }
    )
}
