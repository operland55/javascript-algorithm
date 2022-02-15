
let value = document.querySelector('.dice')
let btn = document.querySelector('.btn');
let ul = document.querySelector('.ul');
let li = document.createElement('li')
let currentIndex = 0;


let getDiceValue = () => Math.ceil(Math.random() * 6);
let peoNum = Number(prompt('몇명이서하실건가요?'));


// li 가 들어갈 변수를 만드는데, li 가 여러개니까 배열로된 변수를 지정
// 참가자 점수가 표시될 li 태그의 배열
const liList = []
const scoreList = [];

// 참가자 점수가 들어가는 배열
let tempScore = 0

//GO? STOP?
let Questions = () => {
  setTimeout(() => {
    const challenge = confirm('GO? STOP?') // 1초 뒤 실행

    if (challenge) {
      start()
    } else {
      alert('종료')
    }
  }, 1000)
}



// 주사위를 굴린 점수가 임시로 들어갈 변수
// 주사위를 굴려서 나온 숫자가 여기에 일단 들어간다(1 빼고)


btn.addEventListener('click', start)



function start() {
  console.log(liList[currentIndex].textContent);
  value.textContent = getDiceValue();
  const lastValue = getDiceValue()

  if (lastValue !== 1) {
    tempScore += getDiceValue()

    Questions(); // 이 코드는 즉시 실행
  }
}


for (let i = 1; i <= peoNum; i++) {
  // ul.appendChild(li);
  // liList 에 li 을 넣어줌
  let li = document.createElement('li')
  liList.push(li)
  ul.appendChild(li)
  li.textContent = i + '번째 점수 ='
  scoreList.push(0)
}
