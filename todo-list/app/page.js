"use Client"
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Input from "@/Components/Input";
export default function Home() {
  return (
    <>
    <Navbar user={"Avinash"}/>
    <Input/>
    </>
  );
}
