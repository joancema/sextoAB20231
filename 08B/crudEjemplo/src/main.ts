import './style.css'
import { IProduct, IProducts } from './interfaces/IProduct';
import axios from 'axios';



const axiosHTTP =   axios.create({
  baseURL:'http://localhost:2500/v1/inventory/api/'
})




document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<label for='txtid'>ID</label>
<input id='txtid'>
<label for='txtname'>NOMBRE</label>
<input id='txtname'>
<label for='txtcost'>COSTO</label>
<input id='txtcost'>
<label for='txtprice'>PRECIO</label>
<input id='txtprice'>
<label for='txtminimum'>MINIMO</label>
<input id='txtminimum'>
<button id='btnnew' >NUEVO</button>
<button id='btnsave' >GUARDAR</button>
<button id='btnquery' >CONSULTAR</button>
<div id='query'></div>
`
//#region 
const txtid =  document.querySelector<HTMLInputElement>('#txtid')!;
const txtname =  document.querySelector<HTMLInputElement>('#txtname')!;
const txtcost =  document.querySelector<HTMLInputElement>('#txtcost')!;
const txtprice =  document.querySelector<HTMLInputElement>('#txtprice')!;
const txtminimum =  document.querySelector<HTMLInputElement>('#txtminimum')!;


const btnnew =  document.querySelector<HTMLButtonElement>('#btnnew')!;
const btnsave =  document.querySelector<HTMLButtonElement>('#btnsave')!;
const btnquery =  document.querySelector<HTMLButtonElement>('#btnquery')!;
const divquery = document.querySelector<HTMLDivElement>('#query')!;
//#endregion

btnnew.addEventListener('click',()=>{
  txtid.value=''
  txtname.value=''
  txtprice.value=''
  txtcost.value=''
  txtminimum.value=''
})

btnsave.addEventListener('click', async ()=>{
  const data:IProduct = {
    // _id:txtid.value,
    name: txtname.value,
    cost:  Number(txtid.value),
    price: Number( txtprice.value),
    minimum: Number( txtminimum.value)
  }

  if (txtid.value.trim().length==0)
  {
    try {
      const resp:IProduct = (await axiosHTTP.post<IProduct>(`products`, data)).data;
      console.log(`El producto fue almacenado correctamente`);
    } catch (error) {
      console.log(error);
    }
  }
  else
  {
    try {
      const resp:IProduct = (await axiosHTTP.put<IProduct>(`products/${txtid.value}`, data)).data;
      console.log(`El producto fue modificado correctamente`);
    } catch (error) {
      console.log(error);
    }


  }

})
btnquery.addEventListener('click',async ()=>{
       const data:IProducts  =  (await axiosHTTP.get<IProducts>(`products`)).data;

       divquery.innerHTML+='<table>'
       data.products.forEach((ele)=>{
          // console.log(ele)
          // divquery.innerHTML+= `${ele.name} ${ele.cost} ${ele.price}`
          divquery.innerHTML+='<tr>'
          divquery.innerHTML+=`<td>${ele.name}</td>`
          divquery.innerHTML+=`<td>${ele.cost}</td>`
          divquery.innerHTML+=`<td>${ele.price}</td>`
          divquery.innerHTML+='</tr>'
       })
       divquery.innerHTML+='</table>'
})






