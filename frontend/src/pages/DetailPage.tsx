// /post/:id 경로에서 id url에서 추출 -> useParams
// 해당 id에 맞는 게시글 찾음
// 게시글 제목, 작성자, 내용, 작성일 출력
// 수정 삭제 목록 버튼 추가

import { useParams, useNavigate } from "react-router-dom";

// 타입스크립트의 타입 정의
interface Post {
    id: number;
    title: string;
    author: string;
    content: string;
    date: string;
}

// 더미 데이터 (ListPage와 동일)
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
        date: '2026-02-05'
    },
];


function DetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // 문자열 -> 숫자 변환해서 게시글 찾기
    const post = dummyPosts.find((p) => p.id === Number(id));

    if (!post) {
        return <div>게시글을 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>게시글 상세</h1>
            <h2>{ post.title }</h2>
            <p>작성자: { post.author }</p>
            <p>작성일: { post.date }</p>
            <hr/>
            <p>{ post.content }</p>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => navigate(`/edit/${post.id}`)}>수정</button>{' '}
                <button onClick={() => alert('삭제 기능은 나중에 구현할게요')}>삭제</button>{' '}
                <button onClick={() => navigate('/')}>목록으로</button>
            </div>
        </div>
    );
}

export default DetailPage;