import React,{useState} from 'react';
import Sidepanelnavbar from './Sidepanelnavbar';
import Footer from './Footer';
import axios from 'axios';
import { FaFileCsv } from 'react-icons/fa';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { MdOutlineViewInAr } from 'react-icons/md';
import { BsCardText, BsSlack } from 'react-icons/bs';


const DynamicProductCat = () => {
    const url = "http://localhost:8899/files";
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response);
            if(response.data.message === "file uploaded successfully"){
                alert(response.data.message)
            }
        });
    }

    return (
        <>
            <div className='bg'>
                <div className='row px-3 py-2'>
                    <div className='col col-lg-2 rounded-3 sidepanel'>
                        <div className=' my-3'>
                            <p className='line'> <IoIosArrowDropupCircle /> Ionio</p>
                        </div>
                        <hr className='line' />
                        <p className='line'> PAGES</p>
                        <div className='px-2'>
                            <p className='line px-3'> <MdOutlineViewInAr /> Overview</p>

                        </div>
                        <hr className='line' />
                        <p className='line'> DOCS</p>
                        <div>
                            <p className='line px-3'> <BsCardText /> Help & Support </p>
                            <p className='line px-3'> <BsSlack /> Join our Slack </p>
                        </div>
                    </div>

                    <div className='col' >
                        <Sidepanelnavbar />
                        <h4 className='txt text px-4 my-2'> Overview</h4>
                        <div className='px-4'>
                            <div className=' my-2'>
                                <div className='row bgr1 px-2 mx-2 rounded '>
                                    <h3 className='txt text mx-2 py-3'> Batch Run</h3>
                                    <p className=' text mx-2 txt2'> Generate product categories & tags for multiple items</p>
                                    <div className='my-4 rounded text-center  upload '>
                                        <div className=' my-4' > <FaFileCsv size='100px' /> </div>
                                        <h5 className=''> Drag & drop a CSV to generate a the product categories and tags</h5>
                                        <form onSubmit={(e)=>handleSubmit(e)}>
                                            <input className='btn btn-dark my-3 '   type="file" onChange={(e)=>handleChange(e)} />
                                            <button className='btn btn-light px-3 py-2 rounded' type="submit">Upload</button>
                                        </form>
                                    </div>

                                </div>
                                <div className='row bgr1 px-2 mx-2 my-3 rounded '>
                                    <h3 className='txt text mx-2 py-3'>  Previous Run</h3>
                                    <p className=' text mx-2 txt2'> History of all your previous product categorization runs</p>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default DynamicProductCat