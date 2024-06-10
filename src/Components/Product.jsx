import React, { useState } from 'react'

function Product() {

    const [state,setState] = useState({
        pname : "",
        category : "",
        price : "",
        img : ""
    })

    const [arr,setArray] = useState([])

    const [show,setShow] = useState(false);

    const getValue = (e)=>{
        let {name,value} = e.target;

        setState({
            ...state,
            [name] : value
        })
    }

    const setValue = ()=>{
        setArray([...arr,state]);

        setState({
            pname : "",
            category : "",
            price : "",
            img : ""
        })
    }

    console.log(arr);

    const hide = ()=>{
        setShow(!show);
    }
    

  return (
    <div id="main">
        <div id="input">
            <div id="subInput">
                <label htmlFor="">Add Product Name</label>
                <input className='form-control' type="text" name='pname' value={state.pname} onChange={getValue} />
                <label htmlFor="">Add Product Category</label>
                <input className='form-control' type="text" name='category' value={state.category} onChange={getValue} />
                <label htmlFor="">Add Product Price</label>
                <input className='form-control' type="text" name='price' value={state.price} onChange={getValue} />
                <label htmlFor="">Paste Image URL</label>
                <input className='form-control' type="text" name='img' value={state.img} onChange={getValue} />
                <button className='btn' onClick={setValue}>Added</button>
                <button id='hidebtn' className='btn' onClick={hide}><i class="bi bi-toggle2-off"></i></button>
            </div>
        </div>
        <div id="output">
            <div id="subOutput">
                {
                    show ? arr.map((item)=>{
                        return(<div id='fetch'>
                            <div id='fetchSub'>
                                <img src={item.img} alt=""/>
                                <h1>{item.pname} - {item.price}$</h1>
                                <h2>{item.category}</h2>
                            </div>
                        </div>)
                    }) : ""
                }
            </div>
        </div>
    </div>
  )
}

export default Product