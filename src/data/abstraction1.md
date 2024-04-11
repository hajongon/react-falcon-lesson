```jsx
function BadExample() {
  return (
    <div>
      <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px' }}>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
          <div style={{ marginRight: '20px' }}>
            <img 
                src="profile-pic.png" 
                alt="Profile" 
                style={{ width: '50px', height: '50px', borderRadius: '50%' }} 
            />
          </div>
          <div>
            <div style={{ fontWeight: 'bold' }}>하종승</div>
            <div>Frontend Developer</div>
          </div>
        </div>
        <div>
            신기술 2팀 하종승입니다. 반갑습니다.
        </div>
      </div>
    </div>
  );
}
```