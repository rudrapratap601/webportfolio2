"use client";
import { Download, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";

export function ResumeOptions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="btn-secondary" type="button">
          <Download size={16} /> Resumes <ChevronDown size={14} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[240px] p-2">
        <DropdownMenuLabel>Choose a resume · PDF</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <a
            href="/Rudrapratap_Sarma_Data_Analytics_Resume.pdf"
            download
            className="cursor-pointer py-3"
          >
            Data Analytics
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href="/Rudrapratap_Sarma_AI_ML_Resume.pdf"
            download
            className="cursor-pointer py-3"
          >
            AI/ML
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
