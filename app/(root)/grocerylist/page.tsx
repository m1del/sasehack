"use client";
import { useState } from "react";
import ListForm from "../../components/ListForm";
import TopBar from "../../components/TopBar";
import TypeAnim from "../../components/TypeAnim";
import "../../globals.css";

export default async function FoodPage() {
  return (
    <>
      <TopBar page={"Grocery List"} />
      <div>
        <div className="food-list">
          <ListForm />
        </div>
      </div>
    </>
  );
}
