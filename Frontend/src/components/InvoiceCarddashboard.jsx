import React from "react";
import { Button } from "./ui/button";
import { BiLogoBlogger } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
import { AiOutlineCloudDownload } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import callAPI from "../http/axios";
import {useNavigate} from 'react-router-dom'
const InvoiceCarddashboard = ({invoice}) => {
  //console.log("invoice from card",invoice)
  const navigate=useNavigate()
  const navigateToInvoiceEditor=async(id)=>{
    try {
      navigate(`/InvoiceGenerator/editinvoice/${id}`)
  }catch(error){
    console.error('Error fetching invoice:',error);
  }
}
  

  return (
    <div className="p-6 border border-slate-100 dark:bg-[#1f2936] dark:border-none rounded-lg">
      <div className="flex justify-between">
        <BiLogoBlogger size={40} color="#2563eb" />
        <TooltipProvider>
          <Tooltip>
          <div className=' flex p-0 rounded-full font-semibold text-sm text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 border border-blue-600 px-4 items-center'>
          <TooltipTrigger>Business Invoice</TooltipTrigger>
          </div>
           
            <TooltipContent>
              <p>This is a business invoice</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="pt-10">
        <h1 className="text-base font-semibold">{invoice?.invoice_number}</h1>
      </div>
      <div className="gap-1">
        <p className="text-base font-normal text-slate-400">
          {invoice?.company_name}
        </p>
      </div>
      <div className="flex justify-between gap-4 pt-5">
        <Button className="w-1/2 gap-1 items-center" onClick={()=>navigateToInvoiceEditor(invoice.id)}>
          <FaRegEdit />
          Edit
        </Button>
        <Button
          variant="outline"
          className="w-1/2 border-none gap-1 items-center"
        >
          <AiOutlineCloudDownload />
          Download
        </Button>
      </div>
    </div>
  );
};

export default InvoiceCarddashboard;