import { X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "~/components/ui/dialog"

export default function EditFoodItemDialog({showDialog, setShowDialog}: {showDialog: boolean, setShowDialog: Function}){

    return(
        <Dialog open={showDialog}>
            <DialogContent className='bg-white py-5 w-[92%] sm:w-[600px] md:w-[550px] rounded-md shadow-xl'>
                <div className=" flex justify-between items-center">
                    <p className='text-black font-semibold  text-lg flex flex-row justify-between items-center'>Edit Item</p>
                    <X onClick={()=>setShowDialog(false)} className="h-5 w-5 cursor-pointer hover:text-[#999999] active:text-custom-yellow " />
                </div>
                <hr />
                {/* onSubmit={handleSubmit}  {selectedHoldings >= 0 && selectedHoldings != null ? "Edit Holdings" : "New Holding"} */}
                <form  className=" py-4 pt-0 space-y-4 box-border">
                    <div className="space-y-4 box-border">
                        <div className=" w-full flex flex-col gap-2 box-border">
                            <label className="text-sm font-medium" htmlFor="name">Name</label>
                            <input type="text" name="name" className="box-border p-3 h-12 rounded-md outline-none border-2 focus:border-[#000] hover:border-[#152a3b] text-sm" required />
                        </div>
                        <div className='flex flex-col gap-2 box-border'>
                            <label className='text-sm font-medium' htmlFor='image'>Image</label>
                            <input className='box-border p-2 h-12 rounded-md outline-none border-2 focus:border-[#000] hover:border-[#152a3b] bg-transparent cursor-pointer' type='file' name='image' id='image' accept="image/png, image/jpeg, image/jpg" required/>
                        </div>
                        <div className="flex justify-between flex-row w-full box-border gap-2 sm:gap-4">
                            <div className="w-1/2 flex flex-col gap-2 box-border">
                                <label className="text-sm font-medium">Category</label>
                                <select className='bg-transparent box-border p-3 h-12 rounded-md outline-none border-2  hover:border-[#152a3b] text-sm' name="category" id='category' required>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="">-Select Category-</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Meal">Meal</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Swallow">Swallow</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Snacks">Snacks</option>
                                    <option className='hover:bg-custom-yellow bg-white hover:text-white cursor-pointer py-1' value="Drinks">Drinks</option>
                                </select>
                            </div>
                            <div className="w-1/2 flex flex-col gap-2 box-border">
                                <label className="text-sm font-medium">Price</label>
                                <input type="number" name="price" className="box-border p-3 h-12 rounded-md outline-none border-2 focus:border-[#000] hover:border-[#152a3b] text-sm" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="text-sm font-medium">Description</label>
                            <textarea className="w-full rounded-md p-3 box-border outline-none border-2 focus:border-[#000] hover:border-[#152a3b] text-sm" name='description' rows={2} required >

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