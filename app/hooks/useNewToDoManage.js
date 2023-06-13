import React from "react";

import useAsyncStorageCRUD from "./useAsyncStorageCRUD";

export default function useNewToDoManage(){
    const [title,titleChange]=React.useState("");
    const [description,descriptionChange]=React.useState("");

    const {toDoCreate} = useAsyncStorageCRUD();

    const filedsTab = [
        {
        value:title,
        onChange : (e)=> titleChange(e), 
        placeholder : "Name of the task to do",
        },
        {
        value:description,
        onChange : (e)=> descriptionChange(e), 
        placeholder : "Description (optionnal)",
        },
    ];

    async function handleSubmit(){
    if (title.length === 0){
        return alert("the task require a title");
    }
    await toDoCreate({title, description, checked: false });
    titleChange("");
    descriptionChange("");

    }
    
    return {filedsTab, handleSubmit};
}