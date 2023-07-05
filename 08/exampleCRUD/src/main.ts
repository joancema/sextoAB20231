import axios from 'axios';
import './style.css'
import { IProduct, IProducts } from './interfaces/IProducto';


const axiosRequest = axios.create({
  baseURL:'http://localhost:2500/v1/inventory/api/'
})


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <label for='txtid'>ID</label>
  <input id='txtid'>
  <label for='txtname'>Nombre</label>
  <input id='txtname'>
  <label for='txtcost'>COSTO</label>
  <input id='txtcost'>
  <label for='txtprice'>PRECIO</label>
  <input id='txtprice'>
  <label for='txtminimum'>MINIMO</label>
  <input id='txtminimum'>
  <button id='btnnew'>NUEVO</button>
  <button id='btnsave'>GUARDAR</button>
  <button id='btnquery'>CONSULTAR</button>
`
//#region mapa de elementos
const txtid = document.querySelector<HTMLInputElement>('#txtid')!;
const txtname = document.querySelector<HTMLInputElement>('#txtname')!;
const txtcost = document.querySelector<HTMLInputElement>('#txtcost')!;
const txtprice = document.querySelector<HTMLInputElement>('#txtprice')!;
const txtminimum = document.querySelector<HTMLInputElement>('#txtminimum')!;

const btnnew = document.querySelector<HTMLButtonElement>('#btnnew')!;
const btnsave = document.querySelector<HTMLButtonElement>('#btnsave')!;
const btnquery = document.querySelector<HTMLButtonElement>('#btnquery')!;
//#endregion



btnnew.addEventListener('click',()=>{
  txtid.value=''
  txtname.value=''
  txtcost.value=''
  txtprice.value=''
  txtminimum.value=''
})
btnsave.addEventListener('click',async ()=>{
  const data:IProduct= {
    name:txtname.value,
    cost: Number( txtcost.value),
    price: Number( txtprice.value),
    minimum: Number( txtminimum.value)
  }

  if (txtid.value.trim().length==0)
  {
    const responsex =   (await axiosRequest.post<IProduct>('products', data )).data;
   console.log(`Se creó correctamente`)

  }
  else
  {
    const responsex =   (await axiosRequest.put<IProduct>(`products/${ txtid.value}`, data )).data;
    console.log(`Se modificó correctamente`)
  }
   

   

})
btnquery.addEventListener('click', async ()=>{
    const data: IProducts = (await axiosRequest.get<IProducts>(`products`)).data
    console.log(data.sum) 
    data.products.forEach((ele)=>{
       console.log(ele.name) 
    })
})