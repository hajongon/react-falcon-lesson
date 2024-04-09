#### Vanilla JS

```html
<!-- html -->

<body>
    <button id="toggleButton">Toggle Theme (JS)</button>
    <div class="example-card">...</div>
</body>
```

```js
// JavaScript

const toggleButton = document.getElementById('toggleButton')
const exampleCard = document.querySelector('.example-card')
let isDarkTheme = false

toggleButton.addEventListener('click', function () {
    isDarkTheme = !isDarkTheme
    if (isDarkTheme) {
        // example-card의 스타일을 직접 변경한다.
        exampleCard.style.backgroundColor = 'black'
        exampleCard.style.color = 'white'
    } else {
        // example-card의 스타일을 직접 변경한다.
        exampleCard.style.backgroundColor = 'white'
        exampleCard.style.color = 'black'
    }
})
```

🙃🙃🙃

상태(테마) 관리와 UI 업데이트를 수동으로 처리해야 합니다.
상태 변경 시, 조건문을 사용하여 돔 요소의 텍스트와 스타일을 직접 수정해야 합니다.
