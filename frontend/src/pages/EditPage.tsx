// /edit/:id 경로로 접근
// URL에서 id 받아 기존 게시글을 더미 데이터에서 찾음
// 제목/작성자/내용을 수정할 수 있는 입력 폼 표시
// '저장' 누르면 콘솔에 수정된 결과 출력 후 /로 이동

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// 타입스크립트 타입 정의
interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    date: string;
}


// 기존 게시글 더미 데이터
const dummyPosts: Post[] = [
    {
        id: 1,
        title: '1st posting',
        author: 'Mond',
        content: 'Mond Hi',
        date: '2026-02-04',
    },
    {
        id: 2,
        title: '2nd posting',
        author: 'Tacho',
        content: 'Tacho Hi',
        date: '2026-02-05',
    },
];

function EditPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const post = dummyPosts.find((p) => p.id === Number(id));

    // 초기값 설정(없으면 기본값)
    const [title, setTitle] = useState(post?.title || '');
    const [author, setAuthor] = useState(post?.author || '');
    const [content, setContent] = useState(post?.content || '');

    // 수정 버튼 클릭 시
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        console.log('작성된 게시글:', {
            title,
            author,
            content,
            date: new Date().toISOString().slice(0, 10),
        });

        // (/) 목록으로 이동 -> 상세 페이지 생성 후 해당 게시글 상세 페이지 이동으로 수정
        navigate('/');
    };

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>게시글 수정</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                    <br/>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>

                <div>
                    <label>작성자</label>
                    <br />
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>

                <div>
                    <label>내용</label>
                    <br/>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={5}
                        required
                    />
                </div>

                <button type="submit" style={{ marginTop: '20px' }}>
                    저장
                </button>
            </form>
        </div>
    );
}


export default EditPage;