"use client"

import { X } from "lucide-react"
import { useRef, useEffect, RefObject } from "react"
import {
    Dialog,
    DialogContent,
  } from "~/components/ui/dialog"
import { FoodItem } from "~/types/FoodItem"

export default function EditFoodItemDialog({showDialog, setShowDialog, selectedItem, setSelectedItem }: {showDialog: boolean, setShowDialog: Function, selectedItem: FoodItem, setSelectedItem: Function}){
    const handleChange = (e: any) => {
        setSelectedItem({
            ...selectedItem, [e.target.name] : e.target.value
        })
    }
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedItem({
            ...selectedItem, image : e.target.files
        })
    }
    const ImageRef = useRef<HTMLInputElement>(null);

    // useEffect(() => {
    //     // Check if a selected item exists and it has an image
    //     if (ImageRef.current != null) {
    
    //         // Set the value of the input element to the object URL
    //         ImageRef.current.value = URL.createObjectURL(selectedItem.image);
    //     }
    //     console.log("I'm here", ImageRef)
    //     // ImageRef.current.files = URL.createObjectURL(selectedItem.image);
    // }, [ImageRef])

    useEffect(() => {
        console.log(ImageRef.current)
    })
    
    const handleSubmit = () =>{
        
    }
    
    return(
        <Dialog open={showDialog}>
            <DialogContent className='bg-white py-5 w-[92%] sm:w-[600px] md:w-[550px] rounded-md shadow-xl'>
                <div className=" flex justify-between items-center">
                    <p className='text-black font-semibold  text-lg flex flex-row justify-between items-center'>Edit Item</p>
                    <X onClick={()=>setShowDialog(false)} className="h-5 w-5 cursor-pointer hover:text-[#999999] active:text-custom-yellow " />
                </div>
                <hr />
                {/* onSubmit={handleSubmit}  {selectedHoldings >= 0 && selectedHoldings != null ? "Edit Holdings" : "New Holding"} */}
                <form onSubmit={handleSubmit} className=" py-4 pt-0 space-y-4 box-border">
                    <div className="space-y-4 box-border">
                        <div className=" w-full flex flex-col gap-2 box-border">
                            <label className="text-sm font-medium" htmlFor="name">Name</label>
                            <input type="text" name="name" className="box-border p-3 h-12 rounded-md outline-none border-2 focus:border-[#000] hover:border-[#152a3b] text-sm" required onChange={handleChange} value={selectedItem.name} />
                        </div>
                        <div className='flex flex-col gap-2 box-border'>
                            <label className='text-sm font-medium' htmlFor='image'>Image</label>
                            <input className='box-border p-2 h-12 rounded-md outline-none border-2 focus:border-[#000] hover:border-[#152a3b] bg-transparent cursor-pointer' accept="image/*" multiple={false} type='file' name='image' ref={ImageRef} id='image' required onChange={handleImageChange} />
                        </div>
                        <div className="flex justify-between flex-row w-full box-border gap-2 sm:gap-4">
                            <div className="w-1/2 flex flex-col gap-2 box-border">
                                <label className="text-sm font-medium">Category</label>
                                <select className='bg-transparent box-border p-3 h-12 rounded-md outline-none border-2  hover:border-[#152a3b] text-sm' name="category" id='category' required onChange={handleChange} value={selectedItem.category} >
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="">-Select Category-</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Meal">Meal</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Swallow">Swallow</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Snacks">Snacks</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Drinks">Drinks</option>
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2 box-border">
                                <label className="text-sm font-medium">Price</label>
                                <input type="number" name="price" className="box-border p-3 h-12 rounded-md outline-none border-2 focus:border-[#000] hover:border-[#152a3b] text-sm" required  onChange={handleChange} value={selectedItem.price}/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Description</label>
                            <textarea className="w-full rounded-md p-3 box-border outline-none border-2 focus:border-[#000] hover:border-[#152a3b] text-sm" name='description' rows={2} required onChange={handleChange} value={selectedItem.description} >

                            </textarea> 
                        </div>
                    </div>
                </form>
                <div className="flex flex-row justify-between w-full">
                    <button onClick={()=>setShowDialog(false)} className="py-3 px-4 w-fit text-black font-medium text-base rounded-md hover:bg-[#999999] active:bg-[#152a3b] hover:text-white cursor-pointer"> 
                        cancel
                    </button>
                    <button onClick={()=>setShowDialog(false)} type="submit" className="py-3 px-4 w-fit text-white font-medium text-base rounded-md bg-custom-yellow md:hover:bg-light-custom-yellow cursor-pointer"> 
                        Submit
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}