import { useState } from 'react'
import Topsection from './components/Topsection'
import Dropdown from '../../../components/Dropdown'
import FileUpload from '../../../components/FileUpload'
import { ADDPRODUCT, DELETEUPLOADS, UPLOADS } from '../../../services/operations/adminApi'
import axios from 'axios'
import { fileUploadEndpoints } from '../../../services/api'
import { toast } from 'sonner'
import EditorComponent from '../../../components/CKEEditor'
import { GET_PRODUCT_CATEGORY } from '../../../services/operations/productsApi'
import { useQuery } from '@tanstack/react-query'
import ErrorUi from '../../../components/ErrorUi'

function CreateProduct() {




  const [gallery, setGallery] = useState([]);
  const [attachments, setAttachment] = useState([]);
  const [progress, setProgress] = useState(0);
  const [productName, setProductName] = useState('')
  const [category, setCategory] = useState({ value: "", name: "" });
  const [description, setDescription] = useState('')




  const handleChange = (value) => {
    setCategory(value);
  }

  const handleGallary = async (files) => {
    if (!files || files.length === 0) return;
    try {
      const promises = Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => resolve({ fileName: file.name, url: reader.result });
          reader.onerror = error => reject(error);

          reader.readAsDataURL(file);
        });
      });
      const base64Results = await Promise.all(promises);
      setGallery(base64Results);
    } catch (error) {
      console.error('Error converting files to base64:', error);
      toast.error(error.message)
    }
  }

  const handleRemoveGallary = async (e, i) => {
    let list = [...gallery];
    // let res = await DELETEUPLOADS(list[i].filename);
    // if (res.status) {
    list.splice(i, 1);
    setGallery(list);
    toast.success('Image removed successfully')
    // }
  }

  const handleRemoveAttachments = async (e, i) => {
    let list = [...attachments];
    // let res = await DELETEUPLOADS(list[i].filename)
    // if (res.status) {
    list.splice(i, 1);
    setAttachment(list);
    toast.success('Attachments removed successfully')
    // }
  }

  const handleAttachments = async (files) => {
    if (!files || files.length === 0) return;
    try {
      const promises = Array.from(files).map(file => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = () => resolve({ fileName: file.name, url: reader.result });
          reader.onerror = error => reject(error);

          reader.readAsDataURL(file);
        });
      });
      const base64Results = await Promise.all(promises);
      setAttachment(base64Results);
    } catch (error) {
      console.error('Error converting files to base64:', error);
      toast.error(error.message)
    }
  }

  const handlePostProduct = async (e) => {
    e.preventDefault()
    if (productName === '') {
      toast.error('Please enter product name!');
      return
    }
    if (category.value === '') {
      toast.error('Please select category!')
      return;
    }
    if (description === '') {
      toast.error('Please enter description!')
      return;
    }
    if (gallery.length < 1) {
      toast.error('At least one product image is required!');
      return;
    }
    const images = [...gallery].map((item) => ({ path: item.path, name: item.name, url: item.url, type: "GALLARY" }));
    const _attachments = [...attachments].map((item) => ({ path: item.path, name: item.name, url: item.url, type: "ATTACHMENTS" }));

    const res = await ADDPRODUCT({ name: productName, description, category: category.value, images, _attachments });

    if (res.status) {
      setAttachment([]);
      setGallery([]);
      setCategory('');
      setDescription('');
      setProductName('');
      handleClearDropdown();
      toast.success('Product added successfully!')
    }
  }

  const handleEditorChange = (content) => {
    setDescription(content);
  }
  const handleClearDropdown = () => {
    setCategory({ value: '', name: "" })
  }



  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative'>
          <div className=''>
            <Topsection title={"Post Your Product"} />
            <div className='bg-[#FDFDFE]  p-10 '>
              <form>
                <div>
                  <h3 className='text-3xl text-[#374B5C] font-semibold'>General info</h3>
                  <div className='mt-8 flex flex-col'>
                    <label className='text-primary text-lg font-semibold mb-4 ml-4' htmlFor="productName">Product Name <span>*</span></label>
                    <input type="text" className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none' name='productName' value={productName} onChange={(e) => setProductName(e.target.value)} />
                  </div>
                  <div className='mt-8 flex flex-col max-w-72'>
                    <label className='text-primary text-lg font-semibold mb-4 ml-4'>Category <span>*</span></label>
                    <Dropdown defaultValue={"Category"} label={"Category"} onChange={handleChange} setCategory={setCategory} category={category} onClear={handleClearDropdown} />
                  </div>
                  <div className='mt-8 flex flex-col '>
                    <label className='text-primary text-lg font-semibold mb-4 ml-4'>Description <span>*</span></label>
                    {/* <TextEditor style={{ outerWidth: "100%" }} onEditorChange={handleTextEditor} defaultValue={''}/> */}
                    <EditorComponent data={description} onChange={handleEditorChange} style={{ outerWidth: "100%" }} id={'createProduct'} />
                  </div>
                  <div className='mt-8 flex flex-col '>
                    <label className='text-primary text-lg font-semibold mb-4 ml-4'>Gallery <span>*</span></label>
                    <FileUpload progress={progress} onUploadFile={handleGallary} handleRemove={handleRemoveGallary} type={"images"} name={"Gallery"} id={"Gallery"} files={gallery} setFiles={setGallery} />
                  </div>
                  <div className='mt-8 flex flex-col '>
                    <label className='text-primary text-lg font-semibold mb-4 ml-4'>Attachments </label>
                    <FileUpload progress={progress} onUploadFile={handleAttachments} handleRemove={handleRemoveAttachments} type={"files"} name={"Attachments"} id={"Attachments"} files={attachments} setFiles={setAttachment} />
                  </div>
                  <div className='mt-8 flex justify-end'>
                    <div>
                      <div className='post_product_button'>
                        <button onClick={handlePostProduct} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                          <span className='text-nowrap text-white font-medium mr-4'>Post Your Product</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
                            <path d="M5.00488 11.525V7.075H0.854883V5.125H5.00488V0.65H7.00488V5.125H11.1549V7.075H7.00488V11.525H5.00488Z" fill="#fff"></path></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateProduct