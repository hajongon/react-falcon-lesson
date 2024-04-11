```jsx
const [currentInputText, setCurrentInputText] = useState('')
const [name, setName] = useState('')

const handleChangeInputText = (e) => {
    setCurrentInputText(e.target.value)
}

useEffect(() => {
    setName(currentInputText)
}, [currentInputText])

//...

return (
    <input type="text" value={currentInputText} onChange={handleChangeInputText} />
    <input type="text" disabled value={name}/>
)
```