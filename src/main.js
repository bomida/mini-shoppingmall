
// json 파일에 있는 items를 받아오게하는 함수
function loadItems() { 
  return fetch('./data/data.json')           // fetch를 통해 데이터를 받아옴
  .then(response => response.json())         // response body를 제이슨으로 변환
  // .then(response => console.log(response))
  .then(json => json.items);                 // json에 있는 items만 전달
}

// item들이 담겨진 innerHTML을 container에 업데이트 하는 함수
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// 받아온 데이터들을 html list item로 만들어주는 함수
function createHTMLString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.type}">
    <span>${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  // event에 클릭이 된 target의 요소의 dataset안의 key or value
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  // key가 null이거나 또는 value가 null이면 아무 처리도 하지 않고 나오겠다
  if(key == null || value == null) {
    return;
  }

  // filter를 통해서 item이라는 오브젝트 안에 key라는 값이 value와 같은 것만 displayItems에 전달
  displayItems(items.filter(item => item[key] === value));
}

// 이벤트 위임
function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main.js 파일이 실행되면 loadItems라는 함수를 실행
// data.json이라는 정보를 읽어와서 아이템을 전달해줄 것이다.
// 프로미스를 리턴하게 한다. 
loadItems()                         // 프로미스가 성공적으로 되면
  .then(items => {                  // items를 가져온다.
    // console.log(items);
    displayItems(items);            // 받아온 items들을 html에 보여지게한다.
    setEventListeners(items);       // 버튼을 눌렀을 때 필터링하게 한다.
  })
  .catch(console.log);              // items를 성공적으로 가져오지 못하면 catch메소드로 오류 메시지나 적절한 메시지들을 사용자에게 보여지게 한다.