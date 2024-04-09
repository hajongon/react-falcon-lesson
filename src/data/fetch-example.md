```jsx
// async, await 사용
// 비동기 작업을 동기적으로 처리하기 위함
export const getExampleData = async () => {
    // fetching이 완료되면 data에 할당
    const { data } = await axios.get('https://koreanjson.com/posts/1')
    if (data) return data
}
```

```jsx
const AxiosExample = () => {
    const [fetchedData, setFetchedData] = useState({})
    const [markdownContent, setMarkdownContent] = useState('')

    const fetchData = async () => {
        // res에 return 값 할당
        const res = await getExampleData()
        // 상태 최신화
        if (res) setFetchedData(res)
    }

    // 의존성 배열에 fetchedData가 들어있기 때문에,
    // fetchedData 라는 상태에 변화가 생길 경우
    // 사이드이펙트가 실행됩니다.
    useEffect(() => {
        if (data.id) setMarkdownContent(JSON.stringify(fetchedData))
    }, [fetchedData])

    return <div>{fetchedData}</div>
}
```

🙃🙃🙃

