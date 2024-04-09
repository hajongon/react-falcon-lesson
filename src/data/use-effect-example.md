```jsx
import { useState, useEffect } from 'react'

function ClickCounter() {
    const [count, setCount] = useState(0)

    // useEffect를 사용하여 사이드 이펙트 처리
    useEffect(() => {
        // 문서 제목을 업데이트하는 사이드 이펙트
        document.title = `You clicked ${count} times`
    })

    const resetTitle = () => {
        document.title = `React - Falcon 강의`
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={resetTitme}>Reset Title</button>
        </div>
    )
}

export default ClickCounter
```

🙃🙃🙃


  
    
**컴포넌트가 렌더링될 때마다 `useEffect`가 실행되면서 문서 제목도 새로운 클릭 횟수로 업데이트됩니다.**

`useEffect`는 실행할 함수와 의존성 배열을 parameter로 받습니다.

```jsx
// useEffect(함수, 의존성 배열)
useEffect(() => {}, [])
```

첫 번째 parameter인 함수 내에서 사이드 이펙트를 수행합니다.  
위 예제에서는 문서의 제목을 변경하는 사이드 이펙트를 수행합니다.

이러한 방식으로, `useEffect`를 사용하면 컴포넌트의 렌더링 결과가 DOM에 반영된 후에 원하는 코드를 실행할 수 있습니다.

.  
.

#### 의존성 배열

---

```jsx
// 리렌더링이 발생할 때마다 사이드이펙트 실행
useEffect(() => {})

// 최초 렌더링 시에만 사이드이펙트 실행
useEffect(() => {}, [])

// 최초 렌더링 시, 상태1과 상태2 업데이트 시 사이드이펙트 실행
useEffect(() => {}, [상태1, 상태2])
```
