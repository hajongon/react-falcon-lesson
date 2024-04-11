```jsx
function GoodExample() {
  return (
    <div className="card">
      <div className="profile">
        <Avatar />
        <ProfileInfo />
      </div>
      <Bio />
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile-pic.png" alt="Profile" />;
}

function ProfileInfo() {
  return (
    <div className="profile-info">
      <div className="name">하종승</div>
      <div className="role">Frontend Developer</div>
    </div>
  );
}

function Bio() {
  return <div className="bio">신기술 2팀 하종승입니다. 반갑습니다</div>;
}

```
🙃🙃🙃

컴포넌트 단위 추상화의 장점

- 스타일이 CSS 파일로 분리되어 있어서 코드가 깔끔하고 유지보수하기 쉽습니다.
- 각 부분이 컴포넌트로 분리되어 있어 재사용성이 높고, 구조를 한눈에 이해하기 쉽습니다.
- 각 컴포넌트의 역할에 맞게 구조를 정의할 수 있습니다.