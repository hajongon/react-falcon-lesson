#### React

```jsx
import { useState } from 'react'

function App() {
    // isDarkTheme 라는 상태를 정의한다.
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    // 상태를 변경하는 함수를 만든다.
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    // 스타일을 정의한다.
    const themeStyles = {
        // 삼항연산자를 사용해 테마 변환에 대응한다.
        backgroundColor: isDarkTheme ? 'black' : 'white',
        color: isDarkTheme ? 'white' : 'black',
    }

    return (
        // div 태그의 스타일을 변수로 지정
        <div style={themeStyles}>
            {/* 버튼 클릭 시 toggleTheme 실행 */}
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default App
```

🙃🙃🙃

[JSX와 Babel 바로 가기](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=MYewdgzgLgBAggmBeGAKAlMgfDA3gKBiJgCcBTKAVxLDUOIEgAeAEwEsA3Le44pgByz8AhiWEBzMfwAWTAPSCefOey5L0-AL5A&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.24.4&externalPlugins=&assumptions=%7B%7D)

`useState` 훅을 사용하여 테마의 현재 상태를 관리합니다.
상태가 변경될 때마다 리액트가 자동으로 관련된 컴포넌트를 적절하게 리렌더링합니다.  
이는 코드를 더 선언적으로 만들어, UI가 어떤 상태에 기반하여 렌더링되어야 하는지를 명확히 알 수 있게 해줍니다.

꼭 `style`을 상태로 관리할 필요는 없어요.  
jsx 요소의 `className`을 상태로 관리하면서 css 파일에서 두 가지 className에 대한 스타일링을 다르게 처리해주는 방법도 있습니다!

```jsx
const themeClassName = `${isDarkTheme ? 'dark-mode' : 'light-mode'}`
// ...
return (
    <div className={themeClassName}>
        {/* 버튼 클릭 시 toggleTheme 실행 */}
        <button onClick={toggleTheme}>Toggle Theme (React)</button>
    </div>
)
```

🙃🙃🙃

