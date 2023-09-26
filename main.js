const peopleArray = [
    {
     id: 9-65-4321,
      name: "Arafat Sarker",
      nid: "123-45-6789",
      payment: "Bkash",
      credit: 8000,
      debit: 1000
    },
    {
      id: 9-65-4322,
      name: "Abdullah Rakib",
      nid: "987-65-4321",
      payment: "Nogod",
      credit: 7000,
      debit: 500
    },
    {
      id: 9-65-4323,
      name: "Bob Johnson",
      nid: "456-78-9012",
      payment: 1200.75,
      credit: 6000,
      debit: 200
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