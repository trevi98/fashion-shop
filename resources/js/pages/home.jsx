import '../axios/axios-common.js'

import React from 'react'



export default function Home() {

    const [response,setResponse] = React.useState("None")
    const url = '/test'

    // const fetchData = async () =>{
    //     try{
    //         let x = await axios.get(url,{
    //             headers:{
    //                 Accept: "application/json"
    //             }
    //         })
    //         console.log(x.data)
    //         setResponse(x.data[1])
    //         // response =
    //         console.log(response)
    //     }catch(error){

    //     }
    // }


    const testAxios = axios.create({
        headers : {
            'content-type' : 'application/json',
            'accept' : 'application/json',
            'Authorization' : ' Bearer 5|CefghC7S327ddHk13OWyvL3VnP9KpBJnLc4Fi0yw'
        }
    })

    const fetchData = async()=>{
        const url = "/api/test"
        try{
            let x =   await testAxios.get(url)
        console.log(x.data)
        setResponse(x.data)
        }catch(error){
            console.log(error)
        }
    }

    React.useEffect(()=>{
        fetchData()
    },[])



    const heading = "Laravel 9 Vite  with React JS";
    return <div className="text-[#f00]"> {response}</div>;
}
