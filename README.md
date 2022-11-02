# Icon, UploadButton Component

## Icon

> 아이콘 type을 받아 해당 아이콘을 반환합니다.

### 사용법

**예시**

```jsx
import { Icon } from './components/Icon.js';

<Icon type="up-arrow" />;
```

| type            | icon                                                     |
| --------------- | -------------------------------------------------------- |
| up-arrow        | ![up-arrow](./public/assets/icons/type%3Dup-arrow.svg)   |
| spinner-animate | ![up-arrow](./public/assets/icons/type%3Dspinner.svg)    |
| check-mark      | ![up-arrow](./public/assets/icons/type%3Dcheck-mark.svg) |
| cross           | ![up-arrow](./public/assets/icons/type%3Dcross.svg)      |
| not-allowed     | ![up-arrow](./public/assets/icons/type%3Dcheck-mark.svg) |

## UploadButton Component

> 버튼 상태를 받아 해당 버튼을 반환합니다.

### 사용법

**예시**

```jsx
import { Button } from './components/Button.js';

<Button status="idle">
```

| status   | button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| idle     | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a3cc86cd-9af9-4b45-8ebb-6f0e0e7949d8/idle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T090034Z&X-Amz-Expires=86400&X-Amz-Signature=84d9fddb88d909b09c4e12871706e000dd11fe33c2f9846e6a26817facdc92b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22idle.png%22&x-id=GetObject" width="100">         |
| pending  | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ac9a7b49-5501-4e85-ab44-3325405ee555/pending.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T090304Z&X-Amz-Expires=86400&X-Amz-Signature=73b3acb2641914dd66641309645416a77a85370a59ed28fbaa7334a68850b02d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22pending.gif%22&x-id=GetObject" width="100">   |
| resolve  | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c1f22da1-dd4c-4d5a-b5cb-57a2d4bb0c4c/resolve.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T090318Z&X-Amz-Expires=86400&X-Amz-Signature=7c23b6b927573581f903eb5f567710d442a5a6a01eafa470a789f962047d3665&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22resolve.png%22&x-id=GetObject" width="100">   |
| rejected | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c5d9c75a-0bae-493e-b48f-910ceed5ccc3/rejected.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T090341Z&X-Amz-Expires=86400&X-Amz-Signature=a00b232f3fc622440284f91114e27743cbaece803cad6182eaa7dfd6cf67ebd8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22rejected.png%22&x-id=GetObject" width="100"> |
| disabled | <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0aca440c-e259-470e-ba87-4a8fd68be681/disabled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221102T090400Z&X-Amz-Expires=86400&X-Amz-Signature=e10acaca9e8add3033985d9b6b888917a37104962a0c102196012d3497fda127&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22disabled.png%22&x-id=GetObject" width="100"> |
