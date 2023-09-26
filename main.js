const peopleArray = [
    {
     id: 9-65-4321,
      name: "Md. Al Arafat Sarker",
      nid: "4213279369",
      payment: "Bkash",
      credit: 0,
      debit: 0
    },
    {
      id: 9-65-4322,
      name: "Abdullah Rakib",
      nid: "01302171612",
      payment: "Nogod",
      credit: 0,
      debit: 0
    },
    {
      id: 9-65-4323,
      name: "Shuvo dash",
      nid: "7811836258",
      payment: "Bkash",
      credit: 0,
      debit: 0
    }
  ];
//   function tkcalcutta(){
//     document.getElementById('credit-amount').innerText=creditP
//     document.getElementById('debit-amount').innerText=debitP
//     const creditstring= document.getElementById('credit-amount').innerText
//     const creditInt=parseInt(creditstring)
//     const debitstring= document.getElementById('debit-amount').innerText
//     const debitInt=parseInt(debitstring)
//     document.getElementById('balance-amount').innerText=creditInt-debitInt
    
//   }
  document.getElementById('profile-01').addEventListener('click',function(){
    const nameP= peopleArray[0].name
    const nidP= peopleArray[0].nid
    const payP= peopleArray[0].payment
    const creditP= peopleArray[0].credit
    const debitP= peopleArray[0].debit
    document.getElementById('name-e').innerText=nameP
    document.getElementById('nid-e').innerText=nidP
    document.getElementById('pay-e').innerText=payP
    document.getElementById('credit-amount').innerText=creditP
    document.getElementById('debit-amount').innerText=debitP
    const creditstring= document.getElementById('credit-amount').innerText
    const creditInt=parseInt(creditstring)
    const debitstring= document.getElementById('debit-amount').innerText
    const debitInt=parseInt(debitstring)
    document.getElementById('balance-amount').innerText=creditInt-debitInt
  })
  document.getElementById('profile-02').addEventListener('click',function(){
    const nameP= peopleArray[1].name
    const nidP= peopleArray[1].nid
    const payP= peopleArray[1].payment
    const creditP= peopleArray[1].credit
    const debitP= peopleArray[1].debit
    document.getElementById('name-e').innerText=nameP
    document.getElementById('nid-e').innerText=nidP
    document.getElementById('pay-e').innerText=payP
    document.getElementById('credit-amount').innerText=creditP
    document.getElementById('debit-amount').innerText=debitP
    const creditstring= document.getElementById('credit-amount').innerText
    const creditInt=parseInt(creditstring)
    const debitstring= document.getElementById('debit-amount').innerText
    const debitInt=parseInt(debitstring)
    document.getElementById('balance-amount').innerText=creditInt-debitInt
  })
  document.getElementById('profile-03').addEventListener('click',function(){
    const nameP= peopleArray[2].name
    const nidP= peopleArray[2].nid
    const payP= peopleArray[2].payment
    const creditP= peopleArray[2].credit
    const debitP= peopleArray[2].debit
    document.getElementById('name-e').innerText=nameP
    document.getElementById('nid-e').innerText=nidP
    document.getElementById('pay-e').innerText=payP
    document.getElementById('credit-amount').innerText=creditP
    document.getElementById('debit-amount').innerText=debitP
    const creditstring= document.getElementById('credit-amount').innerText
    const creditInt=parseInt(creditstring)
    const debitstring= document.getElementById('debit-amount').innerText
    const debitInt=parseInt(debitstring)
    document.getElementById('balance-amount').innerText=creditInt-debitInt
  })