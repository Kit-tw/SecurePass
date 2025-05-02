export default function DialogComponents(){
    return(
        <dialog open className="flex flex-col my-auto mx-auto rounded-lg w-full lg:w-[50%] text-deep bg-secondary">
        <label className="self-end mx-3 my-2 p-2 bg-deep text-light rounded-3xl" > &times;</label>
        <label className="self-center text-xl font-bold font-mono" > Add New Items</label>

       <div className="flex flex-row justify-center flex-wrap self-center gap-4 w-full my-5">
          <div className="flex flex-col">
       <p>Name</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="MyAccount01" />
      
          </div>
          <div className="flex flex-col">
       <p>URL</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="www.google.com" />
          </div>
          <div className="flex flex-col">
       <p>Email</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="Test@gmail.com" />
      
          </div>
          <div className="flex flex-col">
       <p>Password</p>
       <input type="text" className="p-2 w-xs rounded-2xl bg-light text-deep shadow-xl " placeholder="1234567" />
          </div>

       </div>
          <label className="self-center text-md rounded-lg font-bold font-mono bg-accent text-light  px-4 py-2 my-10" > Add</label>
      </dialog>
    )
}