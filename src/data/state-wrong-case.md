```jsx
const [currentInputText, setCurrentInputText] = useState('')
const [name, setName] = useState('')

const handleChangeInputText = (e) => {
    setCurrentInputText(e.target.value)
    // 아직 currentInputText에 e.target.value가 업데이트되지 않은 시점에
    // setName 실행
    setName(currentInputText)
}

//...

return (
    <input type="text" value={currentInputText} onChange={handleChangeInputText} />
    <input type="text" disabled value={name}/>
)
```

🙃🙃🙃

React는 모든 상태 업데이트를 배치(batch)로 처리하여,  
여러 상태 업데이트가 있을 경우 한 번의 렌더링 사이클에서 모두 처리하도록 합니다.    
따라서 setName에 전달되는 currentInputText는 업데이트 이전의 상태값을 참조하게 됩니다.

.

##### 이렇게 하는 이유?  

불필요한 렌더링을 줄이고 성능을 개선하기 위함!